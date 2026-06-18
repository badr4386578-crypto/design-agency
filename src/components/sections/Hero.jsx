import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

import Container from "../layout/Container";
import Button from "../ui/Button";

import {
  heroContent,
  stats,
} from "../../content/content";

export default function Hero() {
  return (
    <section
      id="home"
      className="
      relative
      overflow-hidden
      min-h-screen
      flex
      items-center
      section-padding
    "
    >
      {/* Background Effects */}

      <div className="blur-blue top-0 left-0" />

      <div className="blur-purple bottom-0 right-0" />

      <Container>
        <div
          className="
          grid
          lg:grid-cols-2
          gap-16
          items-center
        "
        >
          {/* Left */}

          <motion.div
            initial={{
              opacity: 0,
              y: 50,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
            }}
          >
            {/* Badge */}

            <div
              className="
              inline-flex
              items-center
              rounded-full
              border
              border-zinc-200
              dark:border-zinc-800
              px-4
              py-2
              mb-6
              text-sm
            "
            >
              {heroContent.badge}
            </div>

            {/* Title */}

            <h1
              className="
              text-5xl
              md:text-6xl
              xl:text-7xl
              font-bold
              leading-tight
            "
            >
              We Design Brands That

              <span
                className="
                block
                gradient-text
              "
              >
                Convert Better
              </span>
            </h1>

            {/* Description */}

            <p
              className="
              mt-6
              text-lg
              text-zinc-600
              dark:text-zinc-400
              max-w-xl
            "
            >
              {heroContent.description}
            </p>

            {/* Buttons */}

            <div
              className="
              mt-10
              flex
              flex-wrap
              gap-4
            "
            >
              <Button>
                <span className="flex items-center gap-2">
                  {heroContent.primaryButton}
                  <ArrowRight size={18} />
                </span>
              </Button>

              <Button variant="outline">
                <span className="flex items-center gap-2">
                  <Play size={18} />
                  Watch Demo
                </span>
              </Button>
            </div>

            {/* Stats */}

            <div
              className="
              mt-14
              grid
              grid-cols-2
              md:grid-cols-4
              gap-6
            "
            >
              {stats.map((item) => (
                <div key={item.label}>
                  <h3
                    className="
                    text-2xl
                    font-bold
                  "
                  >
                    {item.value}
                  </h3>

                  <p
                    className="
                    text-sm
                    text-zinc-500
                  "
                  >
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.8,
            }}
            className="relative"
          >
            {/* Floating Card */}

            <motion.div
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="
              absolute
              -top-8
              -left-8
              glass
              p-4
              rounded-2xl
              z-20
            "
            >
              <p className="text-sm">
                +245% Growth
              </p>
            </motion.div>

            {/* Main Dashboard */}

            <div
              className="
              glass
              rounded-3xl
              p-6
              border
              border-zinc-200
              dark:border-zinc-800
              shadow-2xl
            "
            >
              {/* Header */}

              <div
                className="
                flex
                gap-2
                mb-6
              "
              >
                <div className="w-3 h-3 rounded-full bg-red-500" />

                <div className="w-3 h-3 rounded-full bg-yellow-500" />

                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>

              {/* Mock Chart */}

              <div
                className="
                h-64
                rounded-2xl
                bg-gradient-to-br
                from-blue-500/20
                to-purple-500/20
                flex
                items-center
                justify-center
              "
              >
                <div
                  className="
                  w-full
                  px-8
                  flex
                  items-end
                  justify-between
                  h-40
                "
                >
                  <div className="w-10 h-16 bg-blue-500 rounded-t-xl" />

                  <div className="w-10 h-24 bg-blue-500 rounded-t-xl" />

                  <div className="w-10 h-20 bg-blue-500 rounded-t-xl" />

                  <div className="w-10 h-32 bg-blue-500 rounded-t-xl" />

                  <div className="w-10 h-28 bg-blue-500 rounded-t-xl" />
                </div>
              </div>

              {/* Bottom Cards */}

              <div
                className="
                mt-6
                grid
                grid-cols-2
                gap-4
              "
              >
                <div
                  className="
                  bg-white/5
                  rounded-2xl
                  p-4
                "
                >
                  <p className="text-sm text-zinc-500">
                    Revenue
                  </p>

                  <h3 className="text-2xl font-bold">
                    $48K
                  </h3>
                </div>

                <div
                  className="
                  bg-white/5
                  rounded-2xl
                  p-4
                "
                >
                  <p className="text-sm text-zinc-500">
                    Clients
                  </p>

                  <h3 className="text-2xl font-bold">
                    120+
                  </h3>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}