// src/components/layout/Container.jsx

export default function Container({
  children,
  className = "",
  size = "default",
}) {
  const sizes = {
    sm: "max-w-5xl",
    default: "max-w-7xl",
    xl: "max-w-[1440px]",
  };

  return (
    <div
      className={`
        mx-auto
        w-full
        ${sizes[size]}
        px-4
        sm:px-6
        lg:px-8
        ${className}
      `}
    >
      {children}
    </div>
  );
}