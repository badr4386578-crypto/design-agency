export default function Card({
  children,
  className = "",
}) {
  return (
    <div
      className={`
      rounded-3xl
      border
      border-zinc-200
      dark:border-zinc-800
      bg-white/80
      dark:bg-zinc-900/80
      backdrop-blur-lg
      shadow-lg
      p-6
      ${className}
    `}
    >
      {children}
    </div>
  );
}