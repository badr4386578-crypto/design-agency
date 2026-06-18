import { motion } from "framer-motion";
import { Check } from "lucide-react";

import Container from "../layout/Container";
import Button from "../ui/Button";

import {
  pricingPlans,
} from "../../content/content";

export default function Pricing() {
  return (
    <section
      id="pricing"
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
            Pricing
          </span>

          <h2
            className="
            text-4xl
            md:text-5xl
            font-bold
            mb-5
          "
          >
            Simple Pricing
          </h2>

          <p
            className="
            text-lg
            text-zinc-600
            dark:text-zinc-400
          "
          >
            Flexible plans for startups,
            agencies, and growing brands.
          </p>
        </motion.div>

        {/* Cards */}

        <div
          className="
          grid
          lg:grid-cols-3
          gap-8
        "
        >
          {pricingPlans.map(
            (plan, index) => (
              <motion.div
                key={plan.name}
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
                  delay:
                    index * 0.15,
                }}
                whileHover={{
                  y: -10,
                }}
                className={`
                  relative
                  rounded-3xl
                  border
                  p-8
                  ${
                    plan.popular
                      ? `
                    border-blue-500
                    shadow-xl
                    shadow-blue-500/10
                  `
                      : `
                    border-zinc-200
                    dark:border-zinc-800
                  `
                  }
                `}
              >
                {plan.popular && (
                  <div
                    className="
                    absolute
                    top-5
                    right-5
                    rounded-full
                    bg-blue-500
                    px-3
                    py-1
                    text-xs
                    text-white
                  "
                  >
                    Popular
                  </div>
                )}

                <h3
                  className="
                  text-2xl
                  font-bold
                "
                >
                  {plan.name}
                </h3>

                <p
                  className="
                  mt-2
                  text-zinc-500
                "
                >
                  {plan.description}
                </p>

                <div
                  className="
                  mt-8
                  mb-8
                "
                >
                  <span
                    className="
                    text-5xl
                    font-bold
                  "
                  >
                    {plan.price}
                  </span>
                </div>

                <div
                  className="
                  space-y-4
                  mb-8
                "
                >
                  {plan.features.map(
                    (
                      feature
                    ) => (
                      <div
                        key={
                          feature
                        }
                        className="
                        flex
                        items-center
                        gap-3
                      "
                      >
                        <Check
                          size={18}
                          className="
                          text-green-500
                        "
                        />

                        <span>
                          {feature}
                        </span>
                      </div>
                    )
                  )}
                </div>

                <Button
                  className="
                  w-full
                "
                >
                  Get Started
                </Button>
              </motion.div>
            )
          )}
        </div>
      </Container>
    </section>
  );
}