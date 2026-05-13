import { motion } from "framer-motion";

import {
  ArrowUpRight,
} from "lucide-react";

import certificates from "../data/certificates";

export default function Certificates() {

  return (

    <section
      id="certificates"
      className="
      relative
      pt-32
      pb-56
      md:pb-72
      lg:mb-96
      px-6
      md:px-10
      lg:px-16
      overflow-visible
      "
    >

      {/* BACKGROUND GLOW */}
      <div
        className="
        absolute
        top-20
        left-[-200px]
        w-[500px]
        h-[500px]
        rounded-full
        bg-purple-500/10
        blur-[140px]
        pointer-events-none
        "
      />

      {/* CONTAINER */}
      <div className="relative z-10">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mb-24"
        >

          <p
            className="
            uppercase
            tracking-[0.3em]
            text-xs
            text-neutral-400
            mb-6
            "
          >
            CERTIFICATIONS
          </p>

          <h2
            className="
            heading-font
            text-5xl
            md:text-7xl
            leading-[0.92]
            tracking-[-0.04em]
            "
          >
            Verified
            <br />
            credentials.
          </h2>

        </motion.div>

        {/* GRID */}
        <div
          className="
          grid
          md:grid-cols-2
          lg:grid-cols-3
          gap-10
          "
        >

          {certificates.map((cert) => (

            <motion.a
              key={cert.id}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="
              liquid-glass
              rounded-[0.5rem]
              overflow-hidden
              group
              "
            >

              {/* IMAGE */}
              <div className="overflow-hidden">

                <img
                  src={cert.image}
                  alt={cert.title}
                  className="
                  w-full
                  h-[260px]
                  object-cover
                  group-hover:scale-[1.03]
                  transition
                  duration-700
                  "
                />

              </div>

              {/* CONTENT */}
              <div className="p-6">

                <p
                  className="
                  uppercase
                  tracking-[0.2em]
                  text-xs
                  text-neutral-400
                  mb-4
                  "
                >
                  {cert.issuer}
                </p>

                <div className="flex items-start justify-between gap-4">

                  <h3
                    className="
                    text-xl
                    leading-snug
                    text-neutral-100
                    "
                  >
                    {cert.title}
                  </h3>

                  <ArrowUpRight
                    size={20}
                    className="
                    opacity-60
                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                    transition
                    duration-300
                    "
                  />

                </div>

              </div>

            </motion.a>

          ))}

        </div>

      </div>

    </section>

  );
}