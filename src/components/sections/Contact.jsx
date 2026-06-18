import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

import Container from "../layout/Container";
import Button from "../ui/Button";

import { contactContent } from "../../content/content";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-32 overflow-hidden"
    >
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-start">
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
              Contact Us
            </span>

            <h2
              className="
              text-4xl
              md:text-5xl
              font-bold
              mb-6
            "
            >
              {contactContent.title}
            </h2>

            <p
              className="
              text-lg
              text-zinc-600
              dark:text-zinc-400
              max-w-lg
            "
            >
              {contactContent.description}
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex items-center gap-4">
                <Mail className="text-blue-500" />
                <span>hello@novastudio.com</span>
              </div>

              <div className="flex items-center gap-4">
                <Phone className="text-blue-500" />
                <span>+20 100 000 0000</span>
              </div>

              <div className="flex items-center gap-4">
                <MapPin className="text-blue-500" />
                <span>Alexandria, Egypt</span>
              </div>
            </div>
          </motion.div>

          {/* Form */}

          <motion.form
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
            className="
              glass
              rounded-3xl
              border
              border-zinc-200
              dark:border-zinc-800
              p-8
            "
          >
            <div className="grid gap-5">
              <input
                type="text"
                placeholder={
                  contactContent.fields.name
                }
                className="
                  w-full
                  rounded-xl
                  border
                  border-zinc-200
                  dark:border-zinc-800
                  bg-transparent
                  p-4
                  outline-none
                  focus:border-blue-500
                "
              />

              <input
                type="email"
                placeholder={
                  contactContent.fields.email
                }
                className="
                  w-full
                  rounded-xl
                  border
                  border-zinc-200
                  dark:border-zinc-800
                  bg-transparent
                  p-4
                  outline-none
                  focus:border-blue-500
                "
              />

              <input
                type="text"
                placeholder={
                  contactContent.fields.company
                }
                className="
                  w-full
                  rounded-xl
                  border
                  border-zinc-200
                  dark:border-zinc-800
                  bg-transparent
                  p-4
                  outline-none
                  focus:border-blue-500
                "
              />

              <textarea
                rows="6"
                placeholder={
                  contactContent.fields.message
                }
                className="
                  w-full
                  rounded-xl
                  border
                  border-zinc-200
                  dark:border-zinc-800
                  bg-transparent
                  p-4
                  outline-none
                  resize-none
                  focus:border-blue-500
                "
              />

              <Button className="w-full">
                <span className="flex items-center justify-center gap-2">
                  {contactContent.submitButton}
                  <Send size={18} />
                </span>
              </Button>
            </div>
          </motion.form>
        </div>
      </Container>
    </section>
  );
}