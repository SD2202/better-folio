import useTilt from "../../hooks/useTilt";

export default function TiltCard({
  children,
  className = "",
}) {

  const {
    ref,
    handleMouseMove,
    handleMouseLeave,
  } = useTilt();

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`
        transition-transform
        duration-300
        ease-out
        transform-gpu
        will-change-transform
        ${className}
      `}
    >
      {children}
    </div>
  );
}