import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Accordion({
  title,
  content,
}) {
  const [open, setOpen] =
    useState(false);

  return (
    <div className="border-b border-zinc-200 dark:border-zinc-800 py-4">
      <button
        onClick={() => setOpen(!open)}
        className="
          w-full
          flex
          items-center
          justify-between
          text-left
          font-medium
        "
      >
        <span>{title}</span>

        <ChevronDown
          className={`transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: "auto",
              opacity: 1,
            }}
            exit={{
              height: 0,
              opacity: 0,
            }}
            transition={{
              duration: 0.25,
            }}
            className="overflow-hidden"
          >
            <p
              className="
                pt-4
                text-zinc-600
                dark:text-zinc-400
              "
            >
              {content}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}