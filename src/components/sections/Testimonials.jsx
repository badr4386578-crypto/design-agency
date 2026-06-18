import { motion } from "framer-motion";
import { Star } from "lucide-react";

import Container from "../layout/Container";

import {
  testimonials,
} from "../../content/content";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
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
            Testimonials
          </span>

          <h2
            className="
              text-4xl
              md:text-5xl
              font-bold
              mb-5
            "
          >
            Loved By Clients
          </h2>

          <p
            className="
              text-lg
              text-zinc-600
              dark:text-zinc-400
            "
          >
            Real feedback from brands
            and companies we've worked
            with.
          </p>
        </motion.div>

        {/* Testimonials Grid */}

        <div
          className="
            grid
            lg:grid-cols-3
            gap-8
          "
        >
          {testimonials.map(
            (
              testimonial,
              index
            ) => (
              <motion.div
                key={
                  testimonial.name
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
                    index * 0.15,
                }}
                whileHover={{
                  y: -8,
                }}
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
                {/* Stars */}

                <div
                  className="
                    flex
                    gap-1
                    mb-6
                  "
                >
                  {[...Array(5)].map(
                    (_, i) => (
                      <Star
                        key={i}
                        size={18}
                        fill="currentColor"
                        className="
                          text-yellow-500
                        "
                      />
                    )
                  )}
                </div>

                {/* Message */}

                <p
                  className="
                    text-zinc-600
                    dark:text-zinc-400
                    leading-relaxed
                    mb-8
                  "
                >
                  "
                  {
                    testimonial.message
                  }
                  "
                </p>

                {/* User */}

                <div
                  className="
                    flex
                    items-center
                    gap-4
                  "
                >
                  <div
                    className="
                      w-14
                      h-14
                      rounded-full
                      bg-gradient-to-br
                      from-blue-500
                      to-purple-500
                      flex
                      items-center
                      justify-center
                      text-white
                      font-bold
                    "
                  >
                    {testimonial.name
                      .charAt(0)}
                  </div>

                  <div>
                    <h4
                      className="
                        font-semibold
                      "
                    >
                      {
                        testimonial.name
                      }
                    </h4>

                    <p
                      className="
                        text-sm
                        text-zinc-500
                      "
                    >
                      {
                        testimonial.role
                      }
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          )}
        </div>

        {/* Bottom Stats */}

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
            mt-20
            grid
            grid-cols-2
            md:grid-cols-4
            gap-8
            text-center
          "
        >
          <div>
            <h3 className="text-4xl font-bold">
              120+
            </h3>

            <p className="text-zinc-500">
              Projects
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-bold">
              45+
            </h3>

            <p className="text-zinc-500">
              Clients
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-bold">
              98%
            </h3>

            <p className="text-zinc-500">
              Satisfaction
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-bold">
              8+
            </h3>

            <p className="text-zinc-500">
              Years
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}