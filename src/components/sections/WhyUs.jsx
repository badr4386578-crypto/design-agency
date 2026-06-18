import { motion } from "framer-motion";
import {
  Zap,
  Crown,
  Lightbulb,
  MessageSquare,
  ArrowRight,
} from "lucide-react";

import Container from "../layout/Container";

import { whyUs } from "../../content/content";

const icons = [
  Zap,
  Crown,
  Lightbulb,
  MessageSquare,
];

export default function WhyUs() {
  return (
    <section
      id="why-us"
      className="py-32"
    >
      <Container>
        <div
          className="
            grid
            lg:grid-cols-2
            gap-16
            items-center
          "
        >
          {/* Left Side */}

          <motion.div
            initial={{
              opacity: 0,
              x: -50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
            }}
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
              Why Us
            </span>

            <h2
              className="
                text-4xl
                md:text-5xl
                font-bold
                mb-6
              "
            >
              {whyUs.title}
            </h2>

            <p
              className="
                text-lg
                text-zinc-600
                dark:text-zinc-400
                mb-10
              "
            >
              {whyUs.description}
            </p>

            <div className="space-y-6">
              {whyUs.features.map(
                (
                  feature,
                  index
                ) => {
                  const Icon =
                    icons[index];

                  return (
                    <motion.div
                      key={
                        feature.title
                      }
                      initial={{
                        opacity: 0,
                        x: -20,
                      }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        delay:
                          index *
                          0.15,
                      }}
                      className="
                        flex
                        gap-4
                      "
                    >
                      <div
                        className="
                          w-12
                          h-12
                          rounded-xl
                          bg-blue-500/10
                          flex
                          items-center
                          justify-center
                          shrink-0
                        "
                      >
                        <Icon
                          size={22}
                          className="
                            text-blue-500
                          "
                        />
                      </div>

                      <div>
                        <h3
                          className="
                            font-semibold
                            text-lg
                            mb-1
                          "
                        >
                          {
                            feature.title
                          }
                        </h3>

                        <p
                          className="
                            text-zinc-600
                            dark:text-zinc-400
                          "
                        >
                          {
                            feature.description
                          }
                        </p>
                      </div>
                    </motion.div>
                  );
                }
              )}
            </div>
          </motion.div>

          {/* Right Side */}

          <motion.div
            initial={{
              opacity: 0,
              x: 50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
            }}
            className="relative"
          >
            <div
              className="
                rounded-3xl
                border
                border-zinc-200
                dark:border-zinc-800
                p-8
                bg-white
                dark:bg-zinc-900
              "
            >
              {/* Top Card */}

              <div
                className="
                  rounded-2xl
                  bg-gradient-to-br
                  from-blue-500/20
                  to-purple-500/20
                  p-8
                  mb-6
                "
              >
                <h3
                  className="
                    text-2xl
                    font-bold
                    mb-3
                  "
                >
                  Design That Performs
                </h3>

                <p
                  className="
                    text-zinc-600
                    dark:text-zinc-400
                  "
                >
                  We don't just make
                  things beautiful —
                  we create experiences
                  that help businesses
                  grow.
                </p>
              </div>

              {/* Stats */}

              <div
                className="
                  grid
                  grid-cols-2
                  gap-4
                "
              >
                <div
                  className="
                    rounded-2xl
                    border
                    border-zinc-200
                    dark:border-zinc-800
                    p-6
                  "
                >
                  <h4
                    className="
                      text-3xl
                      font-bold
                    "
                  >
                    120+
                  </h4>

                  <p
                    className="
                      text-zinc-500
                    "
                  >
                    Projects
                  </p>
                </div>

                <div
                  className="
                    rounded-2xl
                    border
                    border-zinc-200
                    dark:border-zinc-800
                    p-6
                  "
                >
                  <h4
                    className="
                      text-3xl
                      font-bold
                    "
                  >
                    98%
                  </h4>

                  <p
                    className="
                      text-zinc-500
                    "
                  >
                    Satisfaction
                  </p>
                </div>

                <div
                  className="
                    rounded-2xl
                    border
                    border-zinc-200
                    dark:border-zinc-800
                    p-6
                  "
                >
                  <h4
                    className="
                      text-3xl
                      font-bold
                    "
                  >
                    45+
                  </h4>

                  <p
                    className="
                      text-zinc-500
                    "
                  >
                    Clients
                  </p>
                </div>

                <div
                  className="
                    rounded-2xl
                    border
                    border-zinc-200
                    dark:border-zinc-800
                    p-6
                  "
                >
                  <h4
                    className="
                      text-3xl
                      font-bold
                    "
                  >
                    8+
                  </h4>

                  <p
                    className="
                      text-zinc-500
                    "
                  >
                    Years
                  </p>
                </div>
              </div>

              <button
                className="
                  mt-6
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
                />
              </button>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}