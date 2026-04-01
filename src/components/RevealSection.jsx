import useScrollReveal from "../hooks/useScrollReveal";

export default function RevealSection({ children, className = "", style = {} }) {
  const [ref, visible] = useScrollReveal();

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transition: "opacity 0.7s ease, transform 0.7s ease",
        ...style,
      }}
    >
      {children}
    </div>
  );
}
