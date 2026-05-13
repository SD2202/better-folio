import { motion } from "framer-motion";



import MagneticButton from "../components/ui/MagneticButton";
import AbstractCore from "../components/ui/AbstractCore";

export default function Hero() {

  return (

    <section
      className="
      relative
      min-h-screen
      overflow-hidden
      flex
      items-center
      "
    >

      {/* 3D CORE CENTERPIECE */}
      <AbstractCore />

      {/* CONTENT */}
      <div
        className="
        relative
        z-20
        w-full
        px-6
        md:px-10
        lg:px-16
        "
      >

        {/* CONTAINER */}
        <div className="max-w-[1400px] mx-auto">

          {/* GRID */}
          <div
            className="
            grid
            lg:grid-cols-2
            gap-16
            items-center
            min-h-screen
            pt-32 pb-44 md:pb-56
            "
          >

            {/* LEFT SIDE */}
            <div className="max-w-[760px]">

              {/* MINI LABEL */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="
                uppercase
                tracking-[0.35em]
                text-xs
                md:text-sm
                text-neutral-400
                mb-8
                "
              >
                SPARSH // SYSTEMS
              </motion.p>

              {/* HEADING */}
              <motion.h1
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1.2,
                  ease: "easeOut",
                }}
                className="
                heading-font
                text-[4rem]
                sm:text-[5rem]
                md:text-[6.5rem]
                lg:text-[7.5rem]
                xl:text-[8rem]
                leading-[1.1]
                tracking-[-0.06em]
                "
              >
                Building intelligent
                <br />

                experiences.
              </motion.h1>

              {/* SUBTEXT */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  delay: 0.4,
                  duration: 1,
                }}
                className="
                mt-24
                text-neutral-300
                text-lg
                md:text-xl
                leading-relaxed
                max-w-2xl
                "
              >
                Full-stack developer crafting cinematic
                interfaces, AI-powered systems, scalable
                architectures, and futuristic digital
                experiences that blend engineering with emotion.
              </motion.p>

              {/* BUTTONS */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  delay: 0.7,
                  duration: 1,
                }}
                className="
                flex
                flex-wrap
                gap-5
                mt-12
                "
              >

                {/* PRIMARY */}
                <MagneticButton
                  href="#projects"
                  className="
                  bg-white
                  text-black
                  px-14
                  py-5
                  rounded-lg
                  whitespace-nowrap
                  text-base
                  font-medium
                  min-w-[200px]
                  hover:bg-neutral-200
                  transition
                  duration-300
                  "
                >
                  Explore Projects
                </MagneticButton>

                {/* SECONDARY */}
                <MagneticButton
                  href="/resume.pdf"
                  target="_blank"
                  className="
                  liquid-glass
                  px-14
                  py-5
                  rounded-lg
                  whitespace-nowrap
                  text-base
                  font-medium
                  min-w-[180px]
                  hover:bg-white
                  hover:text-black
                  transition
                  duration-500
                  "
                >
                  Resume ↗
                </MagneticButton>

              </motion.div>

            </div>

            {/* RIGHT SIDE */}
            <div
              className="
              hidden
              lg:flex
              justify-end
              "
            >

              <motion.div
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.8,
                  duration: 1.2,
                }}
                className="
                liquid-glass
                rounded-lg
                border
                border-white/10
                p-10
                md:p-14
                w-full
                max-w-[420px]
                "
              >

                <p
                  className="
                  uppercase
                  tracking-[0.3em]
                  text-xs
                  text-neutral-400
                  mb-8
                  "
                >
                  Current Focus
                </p>

                <div className="space-y-6">

                  {[
                    "AI Systems",
                    "Full Stack",
                    "Automation",
                    "Data Intelligence",
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
                        text-3xl
                        font-light
                        "
                      >
                        {item}.
                      </h3>

                    </div>

                  ))}

                </div>

              </motion.div>

            </div>

          </div>

        </div>

      </div>

    </section>

  );
}