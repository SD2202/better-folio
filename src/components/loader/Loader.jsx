import { motion } from "framer-motion";

export default function Loader() {

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        transition: {
          duration: 1,
        },
      }}
      className="
        fixed
        inset-0
        z-[9999]
        bg-black
        flex
        items-center
        justify-center
        overflow-hidden
      "
    >

      {/* GLOW */}
      <div className="
        absolute
        w-[500px]
        h-[500px]
        rounded-full
        blur-[140px]
        bg-purple-500/20
      " />

      {/* CONTENT */}
      <div className="relative text-center">

        {/* SMALL LABEL */}
        <motion.p
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
          className="
            uppercase
            tracking-[0.4em]
            text-xs
            text-neutral-500
            mb-6
          "
        >
          INITIALIZING SYSTEM
        </motion.p>

        {/* MAIN TEXT */}
        <motion.h1
          initial={{
            opacity: 0,
            y: 50,
            filter: "blur(12px)",
          }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          transition={{
            duration: 1.4,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            heading-font
            text-6xl
            md:text-8xl
            leading-none
          "
        >
          Sparsh
          <br />
          Dwivedi
        </motion.h1>

        {/* LOADING BAR */}
        <div className="
          mt-10
          w-[220px]
          h-[2px]
          bg-white/10
          mx-auto
          overflow-hidden
          rounded-full
        ">

          <motion.div
            initial={{
              x: "-100%",
            }}
            animate={{
              x: "100%",
            }}
            transition={{
              repeat: Infinity,
              duration: 1.2,
              ease: "linear",
            }}
            className="
              w-[50%]
              h-full
              bg-white
            "
          />

        </div>

      </div>

    </motion.div>
  );
}