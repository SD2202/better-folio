import useMagnetic from "../../hooks/useMagnetic";

export default function MagneticButton({
  children,
  className = "",
  href,
  target,
}) {

  const {
    ref,
    handleMouseMove,
    handleMouseLeave,
  } = useMagnetic(18);

  return (
    <a
      ref={ref}
      href={href}
      target={target}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`
        transition-transform
        duration-300
        ease-out
        inline-flex
        items-center
        justify-center
        ${className}
      `}
    >
      {children}
    </a>
  );
}