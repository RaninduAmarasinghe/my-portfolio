"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

import ProjectsCarousel from "./ProjectsCarousel";

const technologies = [
  "Java",
  "Spring Boot",
  "MongoDB",
  "Docker",
  "Ollama",
  "n8n",
];

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const fadeUp = {
    initial: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 24,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
    transition: {
      duration: shouldReduceMotion ? 0.2 : 0.7,
      ease: "easeOut",
    },
  };

  return (
    <main className="w-full overflow-x-hidden bg-[#080909] text-white">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        className="
          relative
          min-h-[calc(100svh-68px)]
          overflow-hidden
          border-b
          border-white/[0.08]
          sm:min-h-[calc(100svh-80px)]
        "
      >

        {/* =================================================
            BACKGROUND GRID
        ================================================= */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-0
            opacity-[0.12]
            sm:opacity-[0.16]
            bg-[linear-gradient(to_right,rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.07)_1px,transparent_1px)]
            bg-[size:56px_56px]
            sm:bg-[size:76px_76px]
          "
        />


        {/* =================================================
            RADIAL LIGHT
        ================================================= */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-0
            bg-[radial-gradient(circle_at_75%_35%,rgba(155,229,29,0.07),transparent_28%)]
          "
        />


        {/* =================================================
            LARGE DECORATIVE CIRCLE
        ================================================= */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            w-[420px]
            h-[420px]
            rounded-full
            border
            border-white/[0.08]
            bg-[#15191a]
            -right-[230px]
            top-[150px]
            sm:w-[560px]
            sm:h-[560px]
            sm:-right-[280px]
            sm:top-[120px]
            md:w-[700px]
            md:h-[700px]
            md:-right-[300px]
            md:top-[100px]
            lg:w-[760px]
            lg:h-[760px]
            lg:-right-[190px]
          "
        />

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            w-[330px]
            h-[330px]
            rounded-full
            border
            border-white/[0.07]
            -right-[175px]
            top-[195px]
            sm:w-[470px]
            sm:h-[470px]
            sm:-right-[230px]
            sm:top-[165px]
            md:w-[560px]
            md:h-[560px]
            md:-right-[230px]
            md:top-[170px]
            lg:w-[620px]
            lg:h-[620px]
            lg:-right-[120px]
          "
        />


        {/* =================================================
            HERO CONTENT
        ================================================= */}

        <div
          className="
            relative
            z-10
            mx-auto
            flex
            min-h-[calc(100svh-68px)]
            w-full
            max-w-[1400px]
            items-center
            px-5
            py-20
            sm:min-h-[calc(100svh-80px)]
            sm:px-6
            sm:py-24
            md:px-12
            md:py-28
            lg:px-16
            lg:py-32
          "
        >

          <div className="w-full">

            {/* =================================================
                STATUS
            ================================================= */}

            <motion.div
              {...fadeUp}
              className="
                mb-7
                flex
                items-center
                gap-2
                text-[11px]
                text-gray-400
                sm:mb-8
                sm:text-xs
              "
            >

              <span
                className="
                  h-2
                  w-2
                  shrink-0
                  rounded-full
                  bg-[#9BE51D]
                  shadow-[0_0_12px_rgba(155,229,29,0.45)]
                "
              />

              <span>
                Available for work
              </span>

            </motion.div>


            {/* =================================================
                HERO GRID
            ================================================= */}

            <div
              className="
                grid
                items-center
                gap-12
                lg:grid-cols-[minmax(0,1fr)_420px]
                lg:gap-16
                xl:grid-cols-[minmax(0,1fr)_450px]
                xl:gap-20
              "
            >

              {/* =================================================
                  LEFT CONTENT
              ================================================= */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: shouldReduceMotion ? 0 : 30,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: shouldReduceMotion ? 0.2 : 0.8,
                  ease: "easeOut",
                }}
                className="min-w-0"
              >

                {/* Name */}

                <h1
                  className="
                    max-w-[1000px]
                    text-[52px]
                    font-semibold
                    leading-[0.86]
                    tracking-[-0.065em]
                    sm:text-[68px]
                    md:text-[86px]
                    lg:text-[88px]
                    xl:text-[104px]
                  "
                >

                  Ranindu

                  <br />

                  <span
                    className="
                      font-serif
                      font-normal
                      italic
                      text-[#9BE51D]
                    "
                  >
                    Amarasinghe
                  </span>

                </h1>


                {/* Description */}

                <p
                  className="
                    mt-8
                    max-w-[650px]
                    text-[14px]
                    leading-7
                    text-gray-400
                    sm:mt-9
                    sm:text-[15px]
                    md:mt-10
                    md:text-base
                    md:leading-7
                  "
                >
                  I build backend systems using Java and Spring
                  Boot, with a focus on scalable applications,
                  automation, and real-world impact.
                </p>


                {/* =================================================
                    ACTIONS
                ================================================= */}

                <div
                  className="
                    mt-7
                    flex
                    flex-wrap
                    gap-3
                    sm:mt-8
                  "
                >

                  <a
                    href="/Ranindu_Amarasinghe_Trainee_Software_Engineer.pdf"
                    download
                    className="
                      inline-flex
                      min-h-[44px]
                      items-center
                      justify-center
                      bg-white
                      px-5
                      py-3
                      text-xs
                      font-semibold
                      text-black
                      transition
                      hover:bg-[#9BE51D]
                      active:scale-[0.98]
                      sm:px-6
                    "
                  >
                    Download CV
                    <span className="ml-2">
                      ↓
                    </span>
                  </a>


                  <Link
                    href="/about"
                    className="
                      inline-flex
                      min-h-[44px]
                      items-center
                      justify-center
                      border
                      border-white/20
                      px-5
                      py-3
                      text-xs
                      text-gray-300
                      transition
                      hover:border-white/40
                      hover:text-white
                      active:scale-[0.98]
                      sm:px-6
                    "
                  >
                    About me
                  </Link>

                </div>

              </motion.div>


              {/* =================================================
                  RIGHT CARD
              ================================================= */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: shouldReduceMotion ? 0 : 30,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: shouldReduceMotion ? 0.2 : 0.8,
                  delay: shouldReduceMotion ? 0 : 0.12,
                  ease: "easeOut",
                }}
                className="
                  relative
                  w-full
                  max-w-[450px]
                  lg:ml-auto
                  lg:mt-16
                "
              >

                <div
                  className="
                    relative
                    border
                    border-white/[0.14]
                    bg-[#181c1e]/85
                    p-5
                    shadow-2xl
                    shadow-black/20
                    backdrop-blur-md
                    sm:p-6
                    md:p-7
                  "
                >

                  {/* Small accent */}

                  <div
                    className="
                      absolute
                      left-0
                      top-0
                      h-px
                      w-20
                      bg-[#9BE51D]
                    "
                  />


                  {/* Card heading */}

                  <div
                    className="
                      flex
                      items-start
                      justify-between
                      gap-4
                    "
                  >

                    <div>

                      <p
                        className="
                          text-[9px]
                          uppercase
                          tracking-[0.2em]
                          text-[#9BE51D]
                        "
                      >
                        Focus
                      </p>

                      <h2
                        className="
                          mt-2
                          text-xl
                          font-medium
                          sm:text-2xl
                        "
                      >
                        Backend Developer
                      </h2>

                    </div>


                    <span
                      className="
                        hidden
                        text-[9px]
                        text-gray-600
                        sm:block
                      "
                    >
                      01
                    </span>

                  </div>


                  {/* Card description */}

                  <p
                    className="
                      mt-4
                      text-xs
                      leading-6
                      text-gray-400
                      sm:text-sm
                    "
                  >
                    Building dependable backend services and
                    practical AI-powered tools while continuously
                    learning through real projects.
                  </p>


                  {/* =================================================
                      TECHNOLOGIES
                  ================================================= */}

                  <div
                    className="
                      mt-5
                      flex
                      flex-wrap
                      gap-2
                    "
                  >

                    {technologies.map(
                      (technology) => (

                        <span
                          key={technology}
                          className="
                            rounded-full
                            border
                            border-white/[0.08]
                            bg-white/[0.06]
                            px-3
                            py-2
                            text-[10px]
                            text-gray-300
                            transition
                            hover:border-[#9BE51D]/30
                            hover:text-white
                          "
                        >
                          {technology}
                        </span>

                      )
                    )}

                  </div>


                  {/* Divider */}

                  <div
                    className="
                      my-5
                      h-px
                      bg-white/[0.08]
                      sm:my-6
                    "
                  />


                  {/* GitHub */}

                  <a
                    href="https://github.com/RaninduAmarasinghe?tab=repositories"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex
                      min-h-[40px]
                      items-center
                      text-xs
                      text-gray-400
                      transition
                      hover:text-[#9BE51D]
                    "
                  >
                    View my work
                    <span className="ml-2">
                      →
                    </span>
                  </a>

                </div>

              </motion.div>

            </div>

          </div>

        </div>


        {/* =================================================
            SCROLL INDICATOR
        ================================================= */}

        <div
          className="
            absolute
            bottom-5
            left-1/2
            hidden
            -translate-x-1/2
            items-center
            gap-3
            text-[9px]
            uppercase
            tracking-[0.25em]
            text-gray-600
            sm:flex
          "
        >

          <span>
            Scroll
          </span>

          <span className="text-[#9BE51D]">
            ↓
          </span>

        </div>

      </section>


      {/* =====================================================
          PROJECTS
      ===================================================== */}

      <section
        id="projects"
        className="
          relative
          scroll-mt-20
          border-b
          border-white/[0.06]
          bg-[#0d1011]
        "
      >

        <div
          className="
            mx-auto
            max-w-[1400px]
            px-5
            py-16
            sm:px-6
            sm:py-20
            md:px-12
            md:py-24
            lg:px-16
          "
        >

          {/* Section header */}

          <div
            className="
              mb-8
              flex
              items-center
              gap-3
              sm:mb-10
              sm:gap-4
            "
          >

            <span
              className="
                shrink-0
                text-[9px]
                uppercase
                tracking-[0.18em]
                text-gray-500
                sm:text-[10px]
                sm:tracking-[0.22em]
              "
            >
              Selected Projects
            </span>

            <div
              className="
                h-px
                flex-1
                bg-white/[0.10]
              "
            />

          </div>


          {/* Carousel */}

          <div className="w-full">
            <ProjectsCarousel />
          </div>


          {/* More projects */}

          <div
            className="
              mt-8
              flex
              justify-end
              sm:mt-10
            "
          >

            <a
              href="https://github.com/RaninduAmarasinghe?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                min-h-[40px]
                items-center
                text-xs
                text-gray-500
                transition
                hover:text-white
              "
            >
              View all projects
              <span className="ml-2">
                →
              </span>
            </a>

          </div>

        </div>

      </section>


      {/* =====================================================
          CONTACT
      ===================================================== */}

      <section
        id="contact"
        className="
          relative
          scroll-mt-20
          bg-[#080909]
          px-5
          py-24
          sm:px-6
          sm:py-28
          md:px-12
          md:py-32
          lg:px-16
        "
      >

        {/* Background glow */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            left-1/2
            top-0
            h-[350px]
            w-[350px]
            -translate-x-1/2
            rounded-full
            bg-[#9BE51D]/[0.035]
            blur-3xl
          "
        />


        <div
          className="
            relative
            mx-auto
            max-w-[900px]
            text-center
          "
        >

          <motion.p
            initial={{
              opacity: 0,
              y: shouldReduceMotion ? 0 : 10,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
            }}
            viewport={{
              once: true,
            }}
            className="
              text-[9px]
              uppercase
              tracking-[0.25em]
              text-gray-600
              sm:text-[10px]
            "
          >
            Contact / 04
          </motion.p>


          <motion.h2
            initial={{
              opacity: 0,
              y: shouldReduceMotion ? 0 : 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: shouldReduceMotion ? 0.2 : 0.6,
            }}
            viewport={{
              once: true,
            }}
            className="
              mt-5
              text-[40px]
              font-medium
              leading-[0.95]
              tracking-[-0.05em]
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
            "
          >

            Let's build systems

            <br />

            <span className="text-[#9BE51D]">
              that matter.
            </span>

          </motion.h2>


          <p
            className="
              mx-auto
              mt-6
              max-w-[500px]
              text-xs
              leading-6
              text-gray-500
              sm:mt-7
              sm:text-sm
            "
          >
            Have a project, opportunity, or idea in mind?
            Let's talk about it.
          </p>


          <a
            href="mailto:hello@ranindu.dev"
            className="
              mt-7
              inline-flex
              min-h-[44px]
              items-center
              gap-2
              rounded-full
              border
              border-white/20
              px-5
              py-3
              text-xs
              font-medium
              text-gray-300
              transition
              hover:border-[#9BE51D]
              hover:text-[#9BE51D]
              active:scale-[0.98]
              sm:mt-8
              sm:text-sm
            "
          >
            hello@ranindu.dev

            <span>
              ↗
            </span>

          </a>

        </div>


        {/* =================================================
            FOOTER
        ================================================= */}

        <footer
          className="
            mx-auto
            mt-20
            flex
            max-w-[1400px]
            flex-col
            gap-3
            border-t
            border-white/[0.08]
            pt-6
            text-[9px]
            text-gray-600
            sm:mt-24
            sm:flex-row
            sm:items-center
            sm:justify-between
            sm:text-[10px]
          "
        >

          <span>
            © 2026 Ranindu Amarasinghe
          </span>

          <span>
            Software Engineer · Sri Lanka
          </span>

        </footer>

      </section>

    </main>
  );
}