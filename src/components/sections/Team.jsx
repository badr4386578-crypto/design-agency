import { motion } from "framer-motion";

import Container from "../layout/Container";

import { team } from "../../content/content";

export default function Team() {
  return (
    <section
      id="team"
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
            Our Team
          </span>

          <h2
            className="
              text-4xl
              md:text-5xl
              font-bold
              mb-5
            "
          >
            Meet The Creative Minds
          </h2>

          <p
            className="
              text-lg
              text-zinc-600
              dark:text-zinc-400
            "
          >
            Designers, strategists and
            creative thinkers working
            together to build remarkable
            digital experiences.
          </p>
        </motion.div>

        {/* Team Grid */}

        <div
          className="
            grid
            md:grid-cols-2
            xl:grid-cols-4
            gap-8
          "
        >
          {team.map(
            (member, index) => (
              <motion.div
                key={member.name}
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
                    index * 0.1,
                }}
                whileHover={{
                  y: -10,
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
                    h-80
                    overflow-hidden
                  "
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="
                      w-full
                      h-full
                      object-cover
                      transition-transform
                      duration-500
                      group-hover:scale-110
                    "
                  />

                  {/* Overlay */}

                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-black/80
                      via-black/20
                      to-transparent
                    "
                  />

                </div>

                {/* Content */}

                <div className="p-6 text-center">
                  <h3
                    className="
                      text-xl
                      font-semibold
                    "
                  >
                    {member.name}
                  </h3>

                  <p
                    className="
                      mt-2
                      text-zinc-500
                    "
                  >
                    {member.role}
                  </p>
                </div>
              </motion.div>
            )
          )}
        </div>
      </Container>
    </section>
  );
}