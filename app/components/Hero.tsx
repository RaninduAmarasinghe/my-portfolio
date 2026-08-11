"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ProjectsCarousel from "./ProjectsCarousel";

const projects = [
  {
    number: "01",
    title: "Home Server Guardian",
    description:
      "Monitoring and automation for a healthier and more reliable home server.",
    link: "https://github.com/RaninduAmarasinghe/home-server-guardian",
  },
  {
    number: "02",
    title: "Sentinel Vault AI",
    description:
      "Private, local-first document analysis powered by Retrieval-Augmented Generation.",
    link: "https://github.com/RaninduAmarasinghe/sentinel-vault-ai",
  },
  {
    number: "03",
    title: "Auradocs AI",
    description:
      "AI-powered API documentation and dynamic mocking engine for developers.",
    link: "https://github.com/RaninduAmarasinghe/auradocs-ai-mock-engine",
  },
];

const technologies = [
  "Java",
  "Spring Boot",
  "MongoDB",
  "Docker",
  "Ollama",
  "n8n",
];

export default function Hero() {
  return (
    <div className="bg-[#080909] text-white">

      {/* ===================================================== */}
      {/* HERO */}
      {/* ===================================================== */}

      <section className="relative min-h-screen overflow-hidden border-b border-white/[0.08]">

        {/* Grid */}
        <div
          className="
            absolute inset-0
            opacity-[0.18]
            pointer-events-none
            bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)]
            bg-[size:76px_76px]
          "
        />

        {/* Large geometric circle */}
        <div
          className="
            absolute
            w-[600px]
            h-[600px]
            md:w-[750px]
            md:h-[750px]
            rounded-full
            border
            border-white/[0.10]
            bg-[#171b1d]
            -right-[300px]
            md:-right-[170px]
            top-[90px]
            pointer-events-none
          "
        />

        <div
          className="
            absolute
            w-[520px]
            h-[520px]
            rounded-full
            border
            border-white/[0.08]
            -right-[210px]
            md:-right-[100px]
            top-[130px]
            pointer-events-none
          "
        />

        {/* Content */}
        <div
          className="
            relative z-10
            max-w-[1400px]
            mx-auto
            px-6 md:px-12 lg:px-16
            pt-32 md:pt-40
            pb-24
            min-h-screen
            flex items-center
          "
        >
          <div className="w-full">

            {/* Available */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2 text-xs text-gray-400 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-[#9BE51D]" />
              Available for work
            </motion.div>

            <div className="grid lg:grid-cols-[1fr_420px] gap-14 lg:gap-20 items-center">

              {/* LEFT */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >

                <h1
                  className="
                    text-[56px]
                    sm:text-[72px]
                    md:text-[90px]
                    lg:text-[92px]
                    xl:text-[105px]
                    leading-[0.85]
                    tracking-[-0.055em]
                    font-semibold
                  "
                >
                  Ranindu
                  <br />

                  <span
                    className="
                      font-serif
                      italic
                      font-normal
                      text-[#9BE51D]
                    "
                  >
                    Amarasinghe
                  </span>
                </h1>

                <p
                  className="
                    mt-10
                    max-w-[650px]
                    text-sm
                    md:text-base
                    leading-7
                    text-gray-400
                  "
                >
                  I build backend systems using Java and Spring Boot,
                  with a focus on scalable applications, automation,
                  and real-world impact.
                </p>

                {/* Buttons */}
                <div className="flex flex-wrap gap-3 mt-8">

                  <a
                    href="/Ranindu_Amarasinghe_Trainee_Software_Engineer.pdf"
                    download
                    className="
                      px-5 py-3
                      bg-white
                      text-black
                      text-xs
                      font-semibold
                      hover:bg-[#9BE51D]
                      transition-colors
                    "
                  >
                    Download CV ↓
                  </a>

                  <Link
                    href="/about"
                    className="
                      px-5 py-3
                      border
                      border-white/20
                      text-xs
                      text-gray-300
                      hover:border-white/40
                      hover:text-white
                      transition
                    "
                  >
                    About me
                  </Link>
                </div>

              </motion.div>

              {/* RIGHT CARD */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15 }}
                className="
                  relative
                  lg:mt-20
                  border
                  border-white/[0.18]
                  bg-[#181c1e]/80
                  backdrop-blur-md
                  p-6
                  md:p-7
                "
              >

                <h2 className="text-xl md:text-2xl font-medium">
                  Backend Developer
                </h2>

                <p className="mt-4 text-xs md:text-sm text-gray-400 leading-6">
                  Building dependable backend services and practical
                  AI-powered tools while continuously learning through
                  real projects.
                </p>

                <div className="flex flex-wrap gap-2 mt-6">
                  {technologies.map((technology) => (
                    <span
                      key={technology}
                      className="
                        px-3 py-2
                        rounded-full
                        bg-white/[0.10]
                        text-[10px]
                        text-gray-300
                      "
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="h-px bg-white/[0.10] my-6" />

                <a
                  href="https://github.com/RaninduAmarasinghe?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    text-xs
                    text-gray-400
                    hover:text-[#9BE51D]
                    transition
                  "
                >
                  View my work →
                </a>

              </motion.div>

            </div>

          </div>
        </div>

        {/* Scroll */}
        <div
          className="
            absolute
            bottom-7
            left-1/2
            -translate-x-1/2
            text-[10px]
            uppercase
            tracking-[0.25em]
            text-gray-600
          "
        >
          Scroll ↓
        </div>

      </section>


      {/* ===================================================== */}
      {/* PROJECTS */}
      {/* ===================================================== */}

      <section
        id="projects"
        className="
          relative
          bg-[#0d1011]
          border-b
          border-white/[0.06]
        "
      >

        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-20 md:py-24">

          <p
            className="
              text-[10px]
              uppercase
              tracking-[0.22em]
              text-gray-500
              mb-8
            "
          >
            Selected Projects
          </p>
          <ProjectsCarousel />

          {/* More projects */}
          <div className="mt-8 text-right">

            <a
              href="https://github.com/RaninduAmarasinghe?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="
                text-xs
                text-gray-500
                hover:text-white
                transition
              "
            >
              View all projects →
            </a>

          </div>

        </div>

      </section>


      {/* ===================================================== */}
      {/* CONTACT */}
      {/* ===================================================== */}

      <section
        id="contact"
        className="
          relative
          bg-[#080909]
          px-6
          md:px-12
          lg:px-16
          py-28
          md:py-32
        "
      >

        <div className="max-w-[900px] mx-auto text-center">

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="
              text-4xl
              md:text-6xl
              lg:text-7xl
              tracking-[-0.04em]
              font-medium
            "
          >
            Let's build systems
            <br />
            that matter.
          </motion.h2>

          <p className="mt-7 text-sm text-gray-500">
            Have a project or opportunity in mind?
          </p>

          <a
            href="mailto:hello@ranindu.dev"
            className="
              inline-flex
              items-center
              gap-2
              mt-8
              pb-2
              border-b
              border-white/40
              text-sm
              md:text-base
              font-medium
              hover:text-[#9BE51D]
              hover:border-[#9BE51D]
              transition
            "
          >
            hello@ranindu.dev
            <span>↗</span>
          </a>

        </div>

        <footer
          className="
            max-w-[1400px]
            mx-auto
            mt-24
            pt-6
            border-t
            border-white/[0.08]
            flex
            flex-col
            md:flex-row
            justify-between
            gap-3
            text-[10px]
            text-gray-600
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

    </div>
  );
}