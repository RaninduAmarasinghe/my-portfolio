"use client";

import { motion } from "framer-motion";

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: "-100%" }}
      transition={{
        delay: 2.1,
        duration: 0.8,
      }}
      className="
        fixed
        inset-0
        z-[9999]
        flex
        min-h-[100dvh]
        items-center
        justify-center
        overflow-hidden
        bg-[#080909]
        px-6
      "
    >
      {/* Background grid */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.12]
          bg-[linear-gradient(to_right,rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.07)_1px,transparent_1px)]
          bg-[size:60px_60px]
        "
      />

      {/* Center */}

      <div className="relative z-10 w-full max-w-md text-center">

        {/* Logo */}

        <div
          className="
            overflow-hidden
            text-5xl
            font-semibold
            tracking-[-0.07em]
            sm:text-6xl
            md:text-8xl
          "
        >
          <motion.span
            initial={{
              y: "100%",
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.7,
            }}
            className="inline-block"
          >
            RA
          </motion.span>

          <motion.span
            initial={{
              opacity: 0,
              scale: 0,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              delay: 0.65,
              duration: 0.35,
            }}
            className="inline-block text-[#9BE51D]"
          >
            .
          </motion.span>
        </div>

        {/* Name */}

        <motion.p
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.9,
            duration: 0.5,
          }}
          className="
            mt-4
            text-[8px]
            uppercase
            tracking-[0.25em]
            text-gray-600
            sm:text-[9px]
            sm:tracking-[0.35em]
          "
        >
          Ranindu Amarasinghe
        </motion.p>

        {/* Animated line */}

        <div
          className="
            mx-auto
            mt-8
            h-px
            w-full
            max-w-[180px]
            overflow-hidden
            bg-white/[0.08]
            sm:max-w-[240px]
          "
        >
          <motion.div
            initial={{
              x: "-100%",
            }}
            animate={{
              x: "0%",
            }}
            transition={{
              delay: 1,
              duration: 0.9,
            }}
            className="
              h-full
              w-full
              bg-[#9BE51D]
            "
          />
        </div>

        {/* Loading text */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 1.2,
            duration: 0.4,
          }}
          className="
            mt-4
            flex
            items-center
            justify-center
            gap-2
            text-[8px]
            uppercase
            tracking-[0.2em]
            text-gray-600
            sm:text-[9px]
            sm:tracking-[0.25em]
          "
        >
          <span>Initializing</span>

          <motion.span
            animate={{
              opacity: [0.2, 1, 0.2],
            }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
            }}
            className="text-[#9BE51D]"
          >
            ●
          </motion.span>
        </motion.div>
      </div>

      {/* Bottom information */}

      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 1.3,
        }}
        className="
          absolute
          bottom-5
          left-6
          right-6
          flex
          items-center
          justify-between
          gap-4
          text-[7px]
          uppercase
          tracking-[0.15em]
          text-gray-700
          sm:bottom-6
          sm:left-10
          sm:right-10
          sm:text-[8px]
          sm:tracking-[0.2em]
        "
      >
        <span>Software Engineer</span>

        <span>2026</span>
      </motion.div>
    </motion.div>
  );
}