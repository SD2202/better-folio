export default function CursorGlow({ x, y }) {

  return (
    <div
      className="pointer-events-none fixed top-0 left-0 z-[999] hidden md:block"
      style={{
        transform: `translate3d(${x - 300}px, ${y - 300}px, 0)`,
      }}
    >

      <div
        className="
          w-[600px]
          h-[600px]
          rounded-full
          blur-[100px]
          opacity-70
        "
        style={{
          background:
            "radial-gradient(circle, rgba(139,92,246,0.35) 0%, rgba(59,130,246,0.20) 40%, transparent 75%)",
        }}
      />

    </div>
  );
}