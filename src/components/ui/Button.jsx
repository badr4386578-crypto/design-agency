import { cn } from "../../lib/ulits";

export default function Button({
  children,
  className,
  variant = "primary",
  ...props
}) {
  const variants = {
    primary:
      "bg-blue-600 hover:bg-blue-700 text-white",

    secondary:
      "bg-zinc-900 dark:bg-zinc-100 dark:text-black text-white",

    outline:
      "border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800",
  };

  return (
    <button
      className={cn(
        "px-6 py-3 rounded-xl cursor-pointer font-medium transition-all duration-300",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}