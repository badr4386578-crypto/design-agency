import { X } from "lucide-react";
import { motion } from "framer-motion";

export default function MobileMenu({
  open,
  setOpen,
  links,
}) {
  if (!open) return null;

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 100,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      exit={{
        opacity: 0,
        x: 100,
      }}
      className="
      fixed
      inset-0
      z-50
      bg-white
      dark:bg-zinc-950
      p-8
    "
    >
      <button
        onClick={() => setOpen(false)}
      >
        <X />
      </button>

      <div className="mt-10 flex flex-col gap-6">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-lg"
          >
            {link.label}
          </a>
        ))}
      </div>
    </motion.div>
  );
}