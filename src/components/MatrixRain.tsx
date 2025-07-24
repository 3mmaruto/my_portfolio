import { useEffect, useRef } from "react";

interface MatrixRainProps {
  side?: "left" | "right";
}

const MatrixRain: React.FC<MatrixRainProps> = ({ side = "left" }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const fontSize = 14;
    const columns = Math.floor(width / fontSize);
    const drops: number[] = new Array(columns).fill(1);
    const chars = "アァイィウエオカキクケコサシスセソタチツテト0123456789";

    const draw = () => {
      if (!ctx) return;

      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, width, height);
      ctx.fillStyle = "#0f0";
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        ctx.fillText(char, x, y);

        if (y > height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    };

    const interval = setInterval(draw, 50);

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const sideStyle =
    side === "left"
      ? "left-0"
      : side === "right"
      ? "right-0"
      : "left-0";

  return (
    <canvas
      ref={canvasRef}
      className={`absolute top-0 ${sideStyle} h-full w-full z-0 pointer-events-none`}
    />
  );
};

export default MatrixRain;
