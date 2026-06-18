import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import Container from "../layout/Container";

import {
  portfolioProjects,
} from "../../content/content";

export default function Portfolio() {
  return (
    <section
      id="work"
      className="py-32"
    >
      <Container>
        {/* Header */}

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
          transition={{
            duration: 0.6,
          }}
          className="
            text-center
            max-w-3xl
            mx-auto
            mb-16
          "
        >
          <span
            className="
              inline-flex
              px-4
              py-2
              rounded-full
              border
              border-zinc-200
              dark:border-zinc-800
              text-sm
              mb-5
            "
          >
            Portfolio
          </span>

          <h2
            className="
              text-4xl
              md:text-5xl
              font-bold
              mb-5
            "
          >
            Selected Projects
          </h2>

          <p
            className="
              text-lg
              text-zinc-600
              dark:text-zinc-400
            "
          >
            A collection of branding,
            web design and digital
            experiences we've crafted.
          </p>
        </motion.div>

        {/* Projects */}

        <div
          className="
            grid
            md:grid-cols-2
            xl:grid-cols-3
            gap-8
          "
        >
          {portfolioProjects.map(
            (project, index) => (
              <motion.a
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noreferrer"
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.5,
                  delay:
                    index * 0.1,
                }}
                whileHover={{
                  y: -8,
                }}
                className="
                  group
                  overflow-hidden
                  rounded-3xl
                  border
                  border-zinc-200
                  dark:border-zinc-800
                  bg-white
                  dark:bg-zinc-900
                "
              >
                {/* Image */}

                <div
                  className="
                    relative
                    h-64
                    overflow-hidden
                  "
                >
                  <img
                    src={
                      project.image
                    }
                    alt={
                      project.title
                    }
                    className="
                      w-full
                      h-full
                      object-cover
                      transition-transform
                      duration-500
                      group-hover:scale-110
                    "
                  />

                  <div
                    className="
                      absolute
                      inset-0
                      bg-black/0
                      group-hover:bg-black/30
                      transition-all
                      duration-300
                    "
                  />

                  <div
                    className="
                      absolute
                      top-5
                      right-5
                      w-12
                      h-12
                      rounded-full
                      bg-white
                      flex
                      items-center
                      justify-center
                      opacity-0
                      translate-y-4
                      group-hover:opacity-100
                      group-hover:translate-y-0
                      transition-all
                    "
                  >
                    <ArrowUpRight />
                  </div>
                </div>

                {/* Content */}

                <div className="p-6">
                  <span
                    className="
                      text-sm
                      text-blue-500
                    "
                  >
                    {
                      project.category
                    }
                  </span>

                  <h3
                    className="
                      text-xl
                      font-semibold
                      mt-2
                      mb-3
                    "
                  >
                    {
                      project.title
                    }
                  </h3>

                  <p
                    className="
                      text-zinc-600
                      dark:text-zinc-400
                    "
                  >
                    {
                      project.description
                    }
                  </p>
                </div>
              </motion.a>
            )
          )}
        </div>
      </Container>
    </section>
  );
}