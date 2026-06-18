import { motion } from "framer-motion";

import {
  PenTool,
  LayoutGrid,
  MonitorSmartphone,
  Sparkles,
  Share2,
  Layers3,
  ArrowRight,
} from "lucide-react";

import Container from "../layout/Container";

import { services } from "../../content/content";

const icons = {
  "pen-tool": PenTool,
  "layout-grid": LayoutGrid,
  "monitor-smartphone": MonitorSmartphone,
  sparkles: Sparkles,
  "share-2": Share2,
  "layers-3": Layers3,
};

export default function Services() {
  return (
    <section
      id="services"
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
            Services
          </span>

          <h2
            className="
              text-4xl
              md:text-5xl
              font-bold
              mb-5
            "
          >
            Design Services
            That Drive Results
          </h2>

          <p
            className="
              text-lg
              text-zinc-600
              dark:text-zinc-400
            "
          >
            We help ambitious brands
            create beautiful digital
            experiences that stand out
            and convert.
          </p>
        </motion.div>

        {/* Cards */}

        <div
          className="
            grid
            md:grid-cols-2
            xl:grid-cols-3
            gap-8
          "
        >
          {services.map(
            (service, index) => {
              const Icon =
                icons[
                  service.icon
                ];

              return (
                <motion.div
                  key={
                    service.title
                  }
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
                      index *
                      0.1,
                  }}
                  whileHover={{
                    y: -10,
                  }}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-3xl
                    border
                    border-zinc-200
                    dark:border-zinc-800
                    p-8
                    bg-white
                    dark:bg-zinc-900
                  "
                >
                  {/* Glow */}

                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-br
                      from-blue-500/0
                      to-purple-500/0
                      group-hover:from-blue-500/10
                      group-hover:to-purple-500/10
                      transition-all
                    "
                  />

                  {/* Icon */}

                  <div
                    className="
                      relative
                      w-14
                      h-14
                      rounded-2xl
                      bg-blue-500/10
                      flex
                      items-center
                      justify-center
                      mb-6
                    "
                  >
                    <Icon
                      size={28}
                      className="
                        text-blue-500
                      "
                    />
                  </div>

                  {/* Content */}

                  <h3
                    className="
                      relative
                      text-2xl
                      font-semibold
                      mb-4
                    "
                  >
                    {
                      service.title
                    }
                  </h3>

                  <p
                    className="
                      relative
                      text-zinc-600
                      dark:text-zinc-400
                      leading-relaxed
                    "
                  >
                    {
                      service.description
                    }
                  </p>

                  {/* Link */}

                  <div
                    className="
                      relative
                      mt-8
                      flex
                      items-center
                      gap-2
                      text-blue-500
                      font-medium
                    "
                  >
                    Learn More

                    <ArrowRight
                      size={18}
                      className="
                        transition-transform
                        group-hover:translate-x-1
                      "
                    />
                  </div>
                </motion.div>
              );
            }
          )}
        </div>
      </Container>
    </section>
  );
}