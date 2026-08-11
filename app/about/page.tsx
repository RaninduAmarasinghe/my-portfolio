"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import {
  FaJava,
  FaDocker,
  FaGitAlt,
  FaReact,
} from "react-icons/fa";

import {
  SiSpringboot,
  SiMongodb,
  SiNextdotjs,
  SiPostman,
  SiOllama,
  SiN8N,
} from "react-icons/si";

/* ============================================================
   PROJECTS
============================================================ */

const projects = [
  {
    number: "01",
    title: "Home Server Guardian",
    stack: "Spring Boot · n8n",
    description:
      "Smart system monitoring and automation platform using Spring Boot, n8n, and Telegram to manage CPU, storage, and background processes in real time.",
    link: "https://github.com/RaninduAmarasinghe/home-server-guardian",
  },

  {
    number: "02",
    title: "Sentinel Vault AI",
    stack: "Spring Boot · Ollama",
    description:
      "A local-first, privacy-focused RAG system for secure document analysis using Spring Boot, Ollama, and n8n.",
    link: "https://github.com/RaninduAmarasinghe/sentinel-vault-ai",
  },

  {
    number: "03",
    title: "Auradocs AI",
    stack: "Spring Boot · MongoDB",
    description:
      "An AI-powered API documentation and dynamic mocking engine using Spring Boot, MongoDB, and local LLMs.",
    link: "https://github.com/RaninduAmarasinghe/auradocs-ai-mock-engine",
  },

  {
    number: "04",
    title: "AI Resume Analyzer",
    stack: "Spring AI · Ollama",
    description:
      "AI-powered resume screening backend built with Spring Boot and Spring AI to analyze resume and job-description matches.",
    link: "https://github.com/RaninduAmarasinghe/ai-resume-screener",
  },

  {
    number: "05",
    title: "NPC Verse AI",
    stack: "Spring Boot · Ollama",
    description:
      "A backend framework for building context-aware and personality-driven NPC conversations using local large language models.",
    link: "https://github.com/RaninduAmarasinghe/npcverse-ai",
  },
];

/* ============================================================
   TECHNOLOGIES
============================================================ */

const technologies = [
  {
    name: "Java",
    icon: <FaJava />,
    featured: true,
  },
  {
    name: "Spring Boot",
    icon: <SiSpringboot />,
    featured: true,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb />,
  },
  {
    name: "REST APIs",
    icon: null,
  },
  {
    name: "WebSockets",
    icon: null,
  },
  {
    name: "JWT",
    icon: null,
  },
  {
    name: "SQL",
    icon: null,
  },
  {
    name: "Ollama",
    icon: <SiOllama />,
  },
  {
    name: "RAG",
    icon: null,
  },
  {
    name: "Spring AI",
    icon: null,
  },
  {
    name: "n8n",
    icon: <SiN8N />,
  },
  {
    name: "Docker",
    icon: <FaDocker />,
  },
  {
    name: "Git",
    icon: <FaGitAlt />,
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs />,
  },
  {
    name: "React",
    icon: <FaReact />,
  },
  {
    name: "Postman",
    icon: <SiPostman />,
  },
];

/* ============================================================
   ABOUT PAGE
============================================================ */

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#070808] text-white">

      {/* ======================================================
          BACKGROUND
      ====================================================== */}

      <div
        className="
          fixed
          inset-0
          pointer-events-none
          opacity-[0.08]
          bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)]
          bg-[size:80px_80px]
        "
      />


      {/* ======================================================
          NAVBAR
      ====================================================== */}

      <header
        className="
          relative
          z-50
          border-b
          border-white/[0.08]
        "
      >

        <div
          className="
            max-w-[1400px]
            mx-auto
            px-6
            md:px-12
            lg:px-16
            h-20
            flex
            items-center
            justify-between
          "
        >

          <Link
            href="/"
            className="
              text-xl
              font-semibold
              tracking-tight
            "
          >
            RA<span className="text-[#9BE51D]">.</span>
          </Link>


          <nav
            className="
              hidden
              md:flex
              items-center
              gap-10
              text-xs
              text-gray-500
            "
          >

            <Link
              href="/about"
              className="text-white"
            >
              About
            </Link>

            <Link
              href="/#projects"
              className="hover:text-white transition"
            >
              Projects
            </Link>

            <Link
              href="/#contact"
              className="hover:text-white transition"
            >
              Contact
            </Link>

          </nav>


          <a
            href="mailto:hello@ranindu.dev"
            className="
              px-4
              py-2
              border
              border-white/20
              rounded-full
              text-xs
              text-gray-300
              hover:border-[#9BE51D]
              hover:text-[#9BE51D]
              transition
            "
          >
            Let's talk ↗
          </a>

        </div>

      </header>


      {/* ======================================================
          PROFILE
      ====================================================== */}

      <section className="relative z-10">

        <div
          className="
            max-w-[1400px]
            mx-auto
            px-6
            md:px-12
            lg:px-16
            py-16
            md:py-24
          "
        >

          <div className="flex items-center gap-4 mb-12">

            <span
              className="
                text-[10px]
                text-[#9BE51D]
                tracking-[0.2em]
              "
            >
              PROFILE / 01
            </span>

            <div className="h-px bg-white/[0.12] flex-1" />

          </div>


          <div
            className="
              grid
              lg:grid-cols-[1fr_430px]
              gap-16
              items-center
            "
          >

            {/* TEXT */}

            <motion.div
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
              }}
            >

              <p
                className="
                  text-xs
                  text-gray-600
                  mb-6
                  tracking-[0.15em]
                "
              >
                SOFTWARE ENGINEER
              </p>


              <h1
                className="
                  text-6xl
                  md:text-8xl
                  lg:text-[100px]
                  font-semibold
                  leading-[0.82]
                  tracking-[-0.06em]
                "
              >
                RANINDU

                <br />

                <span
                  className="
                    font-serif
                    italic
                    font-normal
                    text-[#9BE51D]
                  "
                >
                  AMARASINGHE
                </span>
              </h1>


              <p
                className="
                  mt-10
                  max-w-[650px]
                  text-base
                  md:text-lg
                  leading-8
                  text-gray-400
                "
              >
                I design and build backend systems with Java,
                Spring Boot and modern AI technologies.
              </p>


              <p
                className="
                  mt-5
                  max-w-[600px]
                  text-sm
                  leading-7
                  text-gray-600
                "
              >
                I enjoy turning ideas into practical software,
                solving engineering problems, and continuously
                improving through real-world projects.
              </p>

            </motion.div>


            {/* PHOTO */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.96,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.8,
              }}
              className="relative"
            >

              <div
                className="
                  relative
                  aspect-[4/5]
                  overflow-hidden
                  border
                  border-white/[0.15]
                  bg-[#111313]
                "
              >

                <Image
                  src="/hero.webp"
                  alt="Ranindu Amarasinghe"
                  fill
                  sizes="430px"
                  className="
                    object-cover
                    grayscale
                    opacity-90
                  "
                />

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-[#070808]/80
                    via-transparent
                    to-transparent
                  "
                />

              </div>


              <div
                className="
                  absolute
                  bottom-4
                  left-4
                  right-4
                  flex
                  justify-between
                  text-[9px]
                  uppercase
                  tracking-[0.2em]
                  text-gray-400
                "
              >

                <span>Ranindu</span>

                <span>2026</span>

              </div>

            </motion.div>

          </div>


          {/* INFO */}

          <div
            className="
              grid
              md:grid-cols-3
              mt-16
              border
              border-white/[0.12]
            "
          >

            <InfoBox
              label="LOCATION"
              value="Sri Lanka"
            />

            <InfoBox
              label="SPECIALITY"
              value="Backend Development"
            />

            <InfoBox
              label="STATUS"
              value="Available for work"
              accent
            />

          </div>

        </div>

      </section>


      {/* ======================================================
          TECH STACK
      ====================================================== */}

      <section
        className="
          relative
          z-10
          bg-[#0c0f10]
          border-y
          border-white/[0.08]
        "
      >

        <div
          className="
            max-w-[1400px]
            mx-auto
            px-6
            md:px-12
            lg:px-16
            py-16
            md:py-24
          "
        >

          {/* Heading */}

          <div
            className="
              flex
              items-center
              gap-4
              mb-14
            "
          >

            <span
              className="
                text-[10px]
                text-[#9BE51D]
                tracking-[0.2em]
              "
            >
              TECH STACK / 02
            </span>

            <div className="h-px bg-white/[0.12] flex-1" />

          </div>


          {/* Intro */}

          <div className="max-w-[650px]">

            <h2
              className="
                text-3xl
                md:text-5xl
                font-medium
                tracking-tight
              "
            >
              Tools I use to
              <span className="text-[#9BE51D]">
                {" "}build things.
              </span>
            </h2>

            <p
              className="
                mt-5
                text-sm
                leading-7
                text-gray-600
              "
            >
              A collection of technologies I work with while
              building backend systems, AI applications,
              automation workflows and web interfaces.
            </p>

          </div>


          {/* Technology cloud */}

          <div
            className="
              mt-14
              flex
              flex-wrap
              items-center
              gap-3
              md:gap-4
              max-w-[1100px]
            "
          >

            {technologies.map(
              (technology, index) => (

                <motion.div
                  key={technology.name}
                  initial={{
                    opacity: 0,
                    y: 15,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.035,
                  }}
                  viewport={{
                    once: true,
                  }}
                  className={`
                    group
                    flex
                    items-center
                    gap-3
                    rounded-full
                    border
                    transition-all
                    duration-300
                    cursor-default

                    ${
                      technology.featured
                        ? `
                          px-6
                          py-3.5
                          border-[#9BE51D]/40
                          bg-[#9BE51D]/[0.06]
                          text-gray-200
                          text-sm
                        `
                        : `
                          px-4
                          py-2.5
                          border-white/[0.10]
                          bg-white/[0.025]
                          text-gray-500
                          text-xs
                        `
                    }

                    hover:border-[#9BE51D]/50
                    hover:bg-[#9BE51D]/[0.06]
                    hover:text-white
                  `}
                >

                  {technology.icon ? (
                    <span
                      className="
                        text-[#9BE51D]
                        group-hover:scale-110
                        transition
                      "
                    >
                      {technology.icon}
                    </span>
                  ) : (
                    <span
                      className="
                        w-1.5
                        h-1.5
                        rounded-full
                        bg-[#9BE51D]
                      "
                    />
                  )}

                  <span>
                    {technology.name}
                  </span>

                </motion.div>

              )
            )}

          </div>


          {/* Bottom line */}

          <div
            className="
              mt-14
              flex
              items-center
              gap-4
              text-[10px]
              text-gray-600
            "
          >

            <span className="text-[#9BE51D]">
              ●
            </span>

            <span>
              Always learning · Always building
            </span>

          </div>

        </div>

      </section>


      {/* ======================================================
          PROJECTS
      ====================================================== */}

      <section className="relative z-10">

        <div
          className="
            max-w-[1400px]
            mx-auto
            px-6
            md:px-12
            lg:px-16
            py-16
            md:py-24
          "
        >

          <div
            className="
              flex
              items-center
              gap-4
              mb-12
            "
          >

            <span
              className="
                text-[10px]
                text-[#9BE51D]
                tracking-[0.2em]
              "
            >
              PROJECT LOG / 03
            </span>

            <div className="h-px bg-white/[0.12] flex-1" />

            <span className="text-[10px] text-gray-600">
              {projects.length} PROJECTS
            </span>

          </div>


          <div
            className="
              border-t
              border-white/[0.12]
            "
          >

            {projects.map(
              (project, index) => (

                <motion.a
                  key={project.number}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{
                    opacity: 0,
                    y: 15,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.05,
                  }}
                  viewport={{
                    once: true,
                  }}
                  className="
                    group
                    grid
                    md:grid-cols-[70px_1fr_180px_25px]
                    gap-5
                    items-center
                    py-7
                    px-3
                    border-b
                    border-white/[0.08]
                    hover:bg-white/[0.025]
                    transition
                  "
                >

                  <span
                    className="
                      text-[10px]
                      text-[#9BE51D]
                    "
                  >
                    {project.number}
                  </span>


                  <div>

                    <h3
                      className="
                        text-base
                        md:text-lg
                        font-medium
                        group-hover:text-[#9BE51D]
                        transition
                      "
                    >
                      {project.title}
                    </h3>


                    <p
                      className="
                        mt-2
                        text-xs
                        leading-5
                        text-gray-600
                      "
                    >
                      {project.description}
                    </p>

                  </div>


                  <div>

                    <p
                      className="
                        text-[9px]
                        text-gray-600
                        mb-1
                        tracking-[0.15em]
                      "
                    >
                      STACK
                    </p>

                    <p
                      className="
                        text-xs
                        text-gray-400
                      "
                    >
                      {project.stack}
                    </p>

                  </div>


                  <span
                    className="
                      text-gray-600
                      group-hover:text-[#9BE51D]
                      transition
                    "
                  >
                    ↗
                  </span>

                </motion.a>

              )
            )}

          </div>

        </div>

      </section>


      {/* ======================================================
          CURRENTLY EXPLORING
      ====================================================== */}

      <section
        className="
          relative
          z-10
          bg-[#0c0f10]
          border-y
          border-white/[0.08]
        "
      >

        <div
          className="
            max-w-[1400px]
            mx-auto
            px-6
            md:px-12
            lg:px-16
            py-16
            md:py-20
          "
        >

          <div
            className="
              grid
              md:grid-cols-[250px_1fr]
              gap-10
            "
          >

            <div>

              <p
                className="
                  text-[10px]
                  text-[#9BE51D]
                  tracking-[0.2em]
                "
              >
                CURRENTLY EXPLORING
              </p>

              <p
                className="
                  mt-3
                  text-[10px]
                  text-gray-600
                "
              >
                2026
              </p>

            </div>


            <div>

              <h2
                className="
                  text-2xl
                  md:text-4xl
                  font-medium
                  tracking-tight
                  leading-tight
                "
              >
                System Design

                <span className="text-gray-700">
                  {" · "}
                </span>

                Distributed Systems

                <span className="text-gray-700">
                  {" · "}
                </span>

                Cloud

                <span className="text-gray-700">
                  {" · "}
                </span>

                AI
              </h2>


              <p
                className="
                  mt-6
                  text-sm
                  leading-7
                  text-gray-600
                  max-w-[650px]
                "
              >
                Expanding my understanding of how reliable,
                scalable systems are designed, deployed and
                maintained.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ======================================================
          CONTACT
      ====================================================== */}

      <section
        className="
          relative
          z-10
          py-28
          md:py-36
          px-6
          text-center
        "
      >

        <p
          className="
            text-[10px]
            uppercase
            tracking-[0.3em]
            text-gray-600
          "
        >
          Contact / 04
        </p>


        <h2
          className="
            mt-6
            text-4xl
            md:text-6xl
            lg:text-7xl
            font-medium
            tracking-[-0.05em]
          "
        >
          Have an idea?

          <br />

          <span className="text-[#9BE51D]">
            Let&apos;s build it.
          </span>
        </h2>


        <a
          href="mailto:hello@ranindu.dev"
          className="
            inline-flex
            mt-10
            items-center
            gap-2
            text-sm
            border-b
            border-white/30
            pb-2
            hover:text-[#9BE51D]
            hover:border-[#9BE51D]
            transition
          "
        >
          hello@ranindu.dev ↗
        </a>

      </section>


      {/* ======================================================
          FOOTER
      ====================================================== */}

      <footer
        className="
          max-w-[1400px]
          mx-auto
          px-6
          md:px-12
          lg:px-16
          py-6
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


        <div className="flex gap-6">

          <a
            href="https://github.com/RaninduAmarasinghe"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            GitHub ↗
          </a>


          <a
            href="https://www.linkedin.com/in/ranindu-amarasinghe/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            LinkedIn ↗
          </a>

        </div>

      </footer>

    </main>
  );
}


/* ============================================================
   INFO BOX
============================================================ */

function InfoBox({
  label,
  value,
  accent = false,
}: {
  label: string;
  value: string;
  accent?: boolean;
}) {
  return (
    <div
      className="
        px-6
        py-6
        border-b
        md:border-b-0
        md:border-r
        last:border-r-0
        border-white/[0.10]
      "
    >

      <p
        className="
          text-[9px]
          tracking-[0.2em]
          text-gray-600
        "
      >
        {label}
      </p>


      <p
        className={`
          mt-3
          text-sm
          ${
            accent
              ? "text-[#9BE51D]"
              : "text-gray-300"
          }
        `}
      >
        {value}
      </p>

    </div>
  );
}