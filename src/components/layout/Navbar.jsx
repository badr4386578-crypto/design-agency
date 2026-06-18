import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

import Container from "./Container";

import Button from "../ui/Button";
import MobileMenu from "../ui/MobileMenu";

import {
  navLinks,
  siteConfig,
} from "../../content/content";

export default function Navbar() {
  const [open, setOpen] =
    useState(false);

  return (
    <motion.header
      initial={{
        y: -50,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.6,
      }}
      className="
      sticky
      top-0
      z-50
      backdrop-blur-xl
      bg-white/70
      dark:bg-zinc-950/70
      border-b
      border-zinc-200
      dark:border-zinc-800
    "
    >
      <Container>
        <div className="h-20 flex items-center justify-between">
          {/* Logo */}

          <motion.a
            href="#"
            whileHover={{
              scale: 1.05,
            }}
            className="
            text-xl
            font-bold
            tracking-tight
          "
          >
            {siteConfig.companyName}
          </motion.a>

          {/* Desktop Links */}

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                whileHover={{
                  y: -2,
                }}
                className="
                text-sm
                font-medium
                text-zinc-600
                dark:text-zinc-300
                hover:text-blue-600
              "
              >
                {link.label}
              </motion.a>
            ))}
          </nav>

          {/* Actions */}

          <div className="hidden md:flex items-center gap-3">
         
            <Button>
              Start Project
            </Button>
          </div>

          {/* Mobile */}

          <button
            className="md:hidden"
            onClick={() =>
              setOpen(!open)
            }
          >
            <Menu />
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {open && (
          <MobileMenu
            open={open}
            setOpen={setOpen}
            links={navLinks}
          />
        )}
      </AnimatePresence>
    </motion.header>
  );
}