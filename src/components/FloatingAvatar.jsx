import { Suspense, useEffect, useMemo, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Center, ContactShadows, Float, Html, OrbitControls, useGLTF } from '@react-three/drei'

const modelPath = `${import.meta.env.BASE_URL}models/avatar.glb`

function AvatarModel({ direction, isBoosting }) {
  const { scene } = useGLTF(modelPath)
  const avatarScene = useMemo(() => scene.clone(), [scene])

  const rotationY = direction === 'down' ? -0.18 : direction === 'up' ? 0.18 : 0

  return (
    <Float
      speed={isBoosting ? 2.8 : 1.5}
      rotationIntensity={isBoosting ? 0.18 : 0.08}
      floatIntensity={isBoosting ? 0.5 : 0.22}
    >
      <Center>
        <primitive
          object={avatarScene}
          scale={1.9}
          rotation={[0.03, rotationY, 0]}
          position={[0, isBoosting ? 0.18 : 0, 0]}
        />
      </Center>
    </Float>
  )
}

function FloatingAvatar({ activeIndex, localProgress, direction, isAutoMode }) {
  const [isBoosting, setIsBoosting] = useState(false)

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
        <Canvas camera={{ position: [0, 0.9, 4.2], fov: 28 }} dpr={[1, 1.6]}>
          <ambientLight intensity={1.45} />
          <directionalLight position={[3, 4, 5]} intensity={2.2} color="#ffffff" />
          <directionalLight position={[-4, 2, 2]} intensity={0.75} color="#d8dde3" />
          <spotLight position={[0, 5, 6]} angle={0.35} penumbra={1} intensity={2.6} color="#f4f6f8" />
          <Suspense
            fallback={
              <Html center>
                <span className="avatar-loading" />
              </Html>
            }
          >
            <AvatarModel direction={direction} isBoosting={isBoosting} />
            <ContactShadows
              position={[0, -1.5, 0]}
              opacity={0.28}
              scale={3.6}
              blur={2.6}
              far={3.4}
            />
          </Suspense>
          <OrbitControls enablePan={false} enableZoom={false} autoRotate={false} enableDamping={false} />
        </Canvas>
      </div>
    </button>
  )
}

useGLTF.preload(modelPath)

export default FloatingAvatar
