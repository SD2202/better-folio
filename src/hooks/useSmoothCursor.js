import { useEffect, useState } from "react";

export default function useSmoothCursor(target) {

  const [smooth, setSmooth] = useState(target);

  useEffect(() => {

    let animationFrame;

    const animate = () => {

      setSmooth((prev) => ({
        x: prev.x + (target.x - prev.x) * 0.12,
        y: prev.y + (target.y - prev.y) * 0.12,
      }));

      animationFrame = requestAnimationFrame(animate);

    };

    animate();

    return () => cancelAnimationFrame(animationFrame);

  }, [target]);

  return smooth;
}