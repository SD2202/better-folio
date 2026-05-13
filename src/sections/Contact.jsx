import { motion } from "framer-motion";

export default function Contact() {

  return (

    <section
      id="contact"
      className="
      pt-64
      md:pt-80
      pb-32
      px-6
      md:px-10
      lg:px-16
      "
    >

      {/* BACKGROUND GLOW */}
      <div
        className="
        absolute
        top-0
        left-[-150px]
        w-[500px]
        h-[500px]
        rounded-full
        bg-purple-500/10
        blur-[140px]
        "
      />

      {/* BACKGROUND TEXT */}
      <div
        className="
        absolute
        inset-0
        flex
        items-center
        justify-center
        pointer-events-none
        overflow-hidden
        "
      >

        <h1
          className="
          heading-font
          text-[8vw]
          text-white/[0.02]
          whitespace-nowrap
          "
        >
          CONNECT
        </h1>

      </div>

      {/* MAIN CONTAINER */}
      <div className="relative z-10 max-w-[1400px] mx-auto">

        {/* TOP GRID */}
        <div
          className="
          grid
          lg:grid-cols-[0.9fr_1fr]
          gap-20
          items-center
          "
        >

          {/* LEFT SIDE */}
          <div>

            {/* LABEL */}
            <p
              className="
              uppercase
              tracking-[0.35em]
              text-xs
              text-neutral-400
              mb-6
              "
            >
              CONTACT
            </p>

            {/* HEADING */}
            <h2
              className="
              heading-font
              text-[3.5rem]
              sm:text-[5rem]
              md:text-[6rem]
              leading-[0.88]
              tracking-[-0.05em]
              "
            >
              Let’s build
              <br />
              something
              <br />
              unforgettable.
            </h2>

          </div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="
            liquid-glass
            rounded-[0.5rem]
            p-8
            md:p-10
            "
          >

            <div
              className="
              grid
              md:grid-cols-2
              gap-10
              "
            >

              {/* LEFT COLUMN */}
              <div>

                <p
                  className="
                  uppercase
                  tracking-[0.3em]
                  text-xs
                  text-neutral-400
                  mb-6
                  "
                >
                  SERVICES
                </p>

                <div className="space-y-4">

                  {[
                    "Full Stack Development",
                    "AI Automation Systems",
                    "Data Analytics Solutions",
                    "UI / UX Engineering",
                  ].map((item) => (

                    <div
                      key={item}
                      className="
                      border-b
                      border-white/10
                      pb-4
                      "
                    >

                      <h3
                        className="
                        text-lg
                        md:text-xl
                        text-neutral-100
                        "
                      >
                        {item}
                      </h3>

                    </div>

                  ))}

                </div>

              </div>

              {/* RIGHT COLUMN */}
              <div>

                <p
                  className="
                  uppercase
                  tracking-[0.3em]
                  text-xs
                  text-neutral-400
                  mb-6
                  "
                >
                  CONTACT INFO
                </p>

                <div className="space-y-4">

                  {/* PHONE */}
                  <a
                    href="tel:+919879272738"
                    className="
                    flex
                    items-center
                    justify-between
                    border-b
                    border-white/10
                    pb-4
                    hover:text-neutral-300
                    transition
                    duration-300
                    "
                  >
                    <span className="text-lg">
                      +91 98792 72738
                    </span>
                    <span className="text-xl">
                      ↗
                    </span>
                  </a>

                  {/* EMAIL */}
                  <a
                    href="mailto:sparsh0302@gmail.com"
                    className="
                    flex
                    items-center
                    justify-between
                    border-b
                    border-white/10
                    pb-4
                    hover:text-neutral-300
                    transition
                    duration-300
                    "
                  >

                    <span className="text-lg">
                      sparsh0302@gmail.com
                    </span>

                    <span className="text-xl">
                      ↗
                    </span>

                  </a>

                  {/* GITHUB */}
                  <a
                    href="https://github.com/SD2202"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                    flex
                    items-center
                    justify-between
                    border-b
                    border-white/10
                    pb-4
                    hover:text-neutral-300
                    transition
                    duration-300
                    "
                  >

                    <span className="text-lg">
                      GitHub
                    </span>

                    <span className="text-xl">
                      ↗
                    </span>

                  </a>

                  {/* LINKEDIN */}
                  <a
                    href="https://www.linkedin.com/in/sparsh-dwivedi/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                    flex
                    items-center
                    justify-between
                    pb-4
                    hover:text-neutral-300
                    transition
                    duration-300
                    "
                  >

                    <span className="text-lg">
                      LinkedIn
                    </span>

                    <span className="text-xl">
                      ↗
                    </span>

                  </a>

                </div>

              </div>

            </div>

          </motion.div>

        </div>

        {/* FOOTER */}
        <div
          className="
          mt-20
          pt-8
          border-t
          border-white/10
          flex
          flex-col
          md:flex-row
          items-center
          justify-between
          gap-5
          text-sm
          text-neutral-500
          "
        >

          <p>
            © 2026 Sparsh Dwivedi
          </p>

          <p>
            Designed & Engineered with cinematic precision.
          </p>

        </div>

      </div>

    </section>

  );
}