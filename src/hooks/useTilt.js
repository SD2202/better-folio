import { useRef } from "react";

export default function useTilt(rotationFactor = 18) {

  const ref = useRef(null);

  const handleMouseMove = (e) => {

    const element = ref.current;

    if (!element) return;

    const rect = element.getBoundingClientRect();

    const x = e.clientX - rect.left;

    const y = e.clientY - rect.top;

    const rotateY =
      ((x / rect.width) - 0.5) * rotationFactor;

    const rotateX =
      ((y / rect.height) - 0.5) * -rotationFactor;

    element.style.transform = `
      perspective(1200px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale3d(1.02,1.02,1.02)
    `;
  };

  const handleMouseLeave = () => {

    const element = ref.current;

    if (!element) return;

    element.style.transform = `
      perspective(1200px)
      rotateX(0deg)
      rotateY(0deg)
      scale3d(1,1,1)
    `;
  };

  return {
    ref,
    handleMouseMove,
    handleMouseLeave,
  };
}