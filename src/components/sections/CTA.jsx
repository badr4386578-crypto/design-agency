import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

import Container from "../layout/Container";
import Button from "../ui/Button";

import { ctaContent } from "../../content/content";

export default function CTA() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Blur */}

      <div className="blur-blue top-0 left-1/4" />
      <div className="blur-purple bottom-0 right-1/4" />

      <Container>
        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="
            relative
            overflow-hidden
            rounded-[32px]
            border
            border-zinc-200
            dark:border-zinc-800
            bg-gradient-to-br
            from-blue-500/10
            via-transparent
            to-purple-500/10
            backdrop-blur-xl
            p-8
            md:p-16
            text-center
          "
        >
          {/* Floating Icon */}

          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            className="
              mx-auto
              mb-6
              flex
              h-16
              w-16
              items-center
              justify-center
              rounded-2xl
              bg-blue-500/10
            "
          >
            <Sparkles
              size={30}
              className="text-blue-500"
            />
          </motion.div>

          {/* Title */}

          <h2
            className="
              text-4xl
              md:text-5xl
              font-bold
              max-w-4xl
              mx-auto
              leading-tight
            "
          >
            {ctaContent.title}
          </h2>

          {/* Description */}

          <p
            className="
              mt-6
              text-lg
              text-zinc-600
              dark:text-zinc-400
              max-w-2xl
              mx-auto
            "
          >
            {ctaContent.description}
          </p>

          {/* Buttons */}

          <div
            className="
              mt-10
              flex
              flex-col
              sm:flex-row
              justify-center
              gap-4
            "
          >
            <Button>
              <span className="flex items-center gap-2">
                {ctaContent.primaryButton}
                <ArrowRight size={18} />
              </span>
            </Button>

            <Button variant="outline">
              {ctaContent.secondaryButton}
            </Button>
          </div>

          {/* Bottom Stats */}

          <div
            className="
              mt-12
              flex
              flex-wrap
              justify-center
              gap-8
              text-sm
              text-zinc-500
            "
          >
            <span>✓ Free Consultation</span>
            <span>✓ Fast Delivery</span>
            <span>✓ Premium Design</span>
            <span>✓ Unlimited Creativity</span>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}