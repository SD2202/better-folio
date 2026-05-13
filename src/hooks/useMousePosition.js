import { useEffect, useState } from "react";

export default function useMousePosition() {

  const [mouse, setMouse] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {

    const move = (e) => {

      setMouse({
        x: e.clientX,
        y: e.clientY,
      });

    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
    };

  }, []);

  return mouse;
}