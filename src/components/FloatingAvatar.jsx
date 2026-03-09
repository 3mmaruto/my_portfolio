import { Suspense, useEffect, useMemo, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Center, ContactShadows, Environment, Float, Html, useGLTF } from '@react-three/drei'
import { MathUtils } from 'three'

const modelPath = `${import.meta.env.BASE_URL}models/avatar.glb`

function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches)

    updatePreference()
    mediaQuery.addEventListener('change', updatePreference)

    return () => mediaQuery.removeEventListener('change', updatePreference)
  }, [])

  return prefersReducedMotion
}

function AvatarModel({ direction, isBoosting, localProgress, prefersReducedMotion }) {
  const { scene } = useGLTF(modelPath)
  const groupRef = useRef(null)
  const avatarScene = useMemo(() => {
    const clone = scene.clone()

    clone.traverse((node) => {
      if (!node.isMesh) {
        return
      }

      node.castShadow = true
      node.receiveShadow = true

      if (node.material && 'envMapIntensity' in node.material) {
        node.material.envMapIntensity = 0.9
      }
    })

    return clone
  }, [scene])

  const rotationY = direction === 'down' ? -0.18 : direction === 'up' ? 0.18 : 0
  const floatIntensity = prefersReducedMotion ? 0 : isBoosting ? 0.34 : 0.16
  const rotationIntensity = prefersReducedMotion ? 0 : isBoosting ? 0.12 : 0.05
  const speed = prefersReducedMotion ? 0 : isBoosting ? 2.2 : 1.25

  useFrame((state, delta) => {
    if (!groupRef.current || prefersReducedMotion) {
      return
    }

    const elapsed = state.clock.getElapsedTime()
    const easing = 1 - Math.exp(-delta * 5)
    const idleYaw = Math.sin(elapsed * 0.8) * 0.08
    const idlePitch = Math.cos(elapsed * 0.55) * 0.03
    const progressLift = (localProgress - 0.5) * 0.16
    const targetY = rotationY + idleYaw
    const targetX = idlePitch - progressLift * 0.2
    const targetPosY = progressLift + Math.sin(elapsed * 1.35) * 0.04

    groupRef.current.rotation.y = MathUtils.lerp(groupRef.current.rotation.y, targetY, easing)
    groupRef.current.rotation.x = MathUtils.lerp(groupRef.current.rotation.x, targetX, easing)
    groupRef.current.position.y = MathUtils.lerp(groupRef.current.position.y, targetPosY, easing)
  })

  return (
    <Float
      speed={speed}
      rotationIntensity={rotationIntensity}
      floatIntensity={floatIntensity}
    >
      <Center>
        <group ref={groupRef}>
          <primitive
            object={avatarScene}
            scale={1.9}
            rotation={[0.03, 0, 0]}
            position={[0, isBoosting ? 0.18 : 0, 0]}
          />
        </group>
      </Center>
    </Float>
  )
}

function FloatingAvatar({ activeIndex, localProgress, direction, isAutoMode }) {
  const [isBoosting, setIsBoosting] = useState(false)
  const prefersReducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    if (!isBoosting) {
      return undefined
    }

    const timeoutId = window.setTimeout(() => {
      setIsBoosting(false)
    }, 900)

    return () => window.clearTimeout(timeoutId)
  }, [isBoosting])

  const xOffsets = [0, -34, 46, -28, 38]
  const yOffset = activeIndex * 118 + localProgress * 68
  const tilt = direction === 'down' ? 4 : direction === 'up' ? -4 : 0

  return (
    <button
      type="button"
      className={`avatar-shell avatar-shell-3d${isBoosting ? ' is-boosting' : ''}`}
      style={{
        transform: `translate3d(${xOffsets[activeIndex] ?? 0}px, ${yOffset}px, 0) rotate(${tilt}deg)`,
      }}
      onClick={() => setIsBoosting(true)}
      aria-label="Interactive 3D portfolio avatar"
    >
      <span className="avatar-aura" />
      <span className="avatar-status">{isAutoMode ? 'Autopilot' : 'Scroll sync'}</span>
      <div className="avatar-canvas-wrap">
        <Canvas
          shadows
          camera={{ position: [0, 0.82, 4.15], fov: 27 }}
          dpr={[1, 1.5]}
          gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        >
          <ambientLight intensity={1.1} />
          <hemisphereLight intensity={0.75} groundColor="#d3d9df" color="#ffffff" />
          <directionalLight
            castShadow
            position={[3, 4, 5]}
            intensity={2}
            color="#ffffff"
            shadow-mapSize-height={1024}
            shadow-mapSize-width={1024}
          />
          <directionalLight position={[-4, 2, 2]} intensity={0.7} color="#d8dde3" />
          <spotLight position={[0, 5, 6]} angle={0.35} penumbra={1} intensity={2.2} color="#f4f6f8" />
          <Environment preset="studio" />
          <Suspense
            fallback={
              <Html center>
                <span className="avatar-loading" />
              </Html>
            }
          >
            <AvatarModel
              direction={direction}
              isBoosting={isBoosting}
              localProgress={localProgress}
              prefersReducedMotion={prefersReducedMotion}
            />
            <ContactShadows
              position={[0, -1.5, 0]}
              opacity={0.32}
              scale={3.6}
              blur={2.9}
              far={3.4}
            />
          </Suspense>
        </Canvas>
      </div>
    </button>
  )
}

useGLTF.preload(modelPath)

export default FloatingAvatar
