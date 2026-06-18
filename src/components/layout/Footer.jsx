import { motion } from "framer-motion";

import Container from "./Container";

import {
  footerContent,
  siteConfig,
} from "../../content/content";

export default function Footer() {
  return (
    <footer
      className="
      border-t
      border-zinc-200
      dark:border-zinc-800
      py-20
    "
    >
      <Container>
        <div
          className="
          grid
          md:grid-cols-2
          gap-12
        "
        >
          {/* Left */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
          >
            <h2
              className="
              text-2xl
              font-bold
              mb-4
            "
            >
              {siteConfig.companyName}
            </h2>

            <p
              className="
              text-zinc-600
              dark:text-zinc-400
              max-w-md
            "
            >
              {
                footerContent.text
              }
            </p>
          </motion.div>

          {/* Right */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            className="
            flex
            md:justify-end
            gap-6
          "
          >
            {footerContent.socialLinks.map(
              (item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="
                  text-zinc-600
                  dark:text-zinc-400
                  hover:text-blue-600
                "
                >
                  {item.label}
                </a>
              )
            )}
          </motion.div>
        </div>

        <div
          className="
          mt-12
          pt-8
          border-t
          border-zinc-200
          dark:border-zinc-800
          text-center
          text-sm
          text-zinc-500
        "
        >
          {
            footerContent.copyright
          }
        </div>
      </Container>
    </footer>
  );
}