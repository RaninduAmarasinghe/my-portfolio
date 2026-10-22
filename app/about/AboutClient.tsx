"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Project } from "../types/project";

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

type AboutClientProps = {
  projects: Project[];
};

export default function AboutClient({
  projects,
}: AboutClientProps) {
  return (
    <main
      className="
        min-h-screen
        w-full
        pt-[68px]
        sm:pt-20
        overflow-x-hidden
        bg-[#070808]
        text-white
      "
    >

      {/* ======================================================
          BACKGROUND GRID
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          fixed
          inset-0
          pointer-events-none
          opacity-[0.055]
          bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)]
          bg-[size:64px_64px]
          sm:bg-[size:80px_80px]
        "
      />

      {/* ======================================================
          PROFILE
      ====================================================== */}

      <section className="relative z-10">
        <div
          className="
            max-w-[1400px]
            mx-auto
            px-5
            sm:px-6
            md:px-12
            lg:px-16
            py-14
            sm:py-16
            md:py-24
            lg:py-28
          "
        >

          {/* Section heading */}

          <div
            className="
              flex
              items-center
              gap-3
              sm:gap-4
              mb-10
              sm:mb-12
            "
          >
            <span
              className="
                shrink-0
                text-[9px]
                sm:text-[10px]
                text-[#9BE51D]
                tracking-[0.16em]
                sm:tracking-[0.2em]
              "
            >
              PROFILE / 01
            </span>

            <div
              className="
                h-px
                bg-white/[0.12]
                flex-1
              "
            />
          </div>

          {/* Profile */}

          <div
            className="
              grid
              lg:grid-cols-[1fr_430px]
              gap-12
              md:gap-16
              lg:gap-20
              items-center
            "
          >

            {/* TEXT */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.65,
              }}
            >
              <p
                className="
                  text-[10px]
                  sm:text-xs
                  text-gray-600
                  mb-5
                  sm:mb-6
                  tracking-[0.15em]
                "
              >
                SOFTWARE ENGINEER
              </p>

              <h1
                className="
                  text-[52px]
                  xs:text-[56px]
                  sm:text-7xl
                  md:text-8xl
                  lg:text-[100px]
                  font-semibold
                  leading-[0.84]
                  tracking-[-0.065em]
                  break-words
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
                  mt-8
                  sm:mt-10
                  max-w-[650px]
                  text-[15px]
                  sm:text-base
                  md:text-lg
                  leading-7
                  sm:leading-8
                  text-gray-400
                "
              >
                I design and build backend systems with Java,
                Spring Boot and modern AI technologies.
              </p>

              <p
                className="
                  mt-4
                  sm:mt-5
                  max-w-[600px]
                  text-[13px]
                  sm:text-sm
                  leading-6
                  sm:leading-7
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
                scale: 0.98,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.75,
              }}
              className="
                relative
                w-full
                max-w-[430px]
                mx-auto
                lg:mx-0
              "
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
                  priority
                  sizes="
                    (max-width: 640px) 90vw,
                    (max-width: 1024px) 70vw,
                    430px
                  "
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
                  text-[8px]
                  sm:text-[9px]
                  uppercase
                  tracking-[0.16em]
                  sm:tracking-[0.2em]
                  text-gray-400
                "
              >
                <span>Ranindu</span>
                <span>2026</span>
              </div>
            </motion.div>
          </div>

          {/* INFO STRIP */}

          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-3
              mt-10
              sm:mt-16
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
            px-5
            sm:px-6
            md:px-12
            lg:px-16
            py-14
            sm:py-16
            md:py-24
          "
        >

          {/* Heading */}

          <div
            className="
              flex
              items-center
              gap-3
              sm:gap-4
              mb-10
              sm:mb-14
            "
          >
            <span
              className="
                shrink-0
                text-[9px]
                sm:text-[10px]
                text-[#9BE51D]
                tracking-[0.16em]
                sm:tracking-[0.2em]
              "
            >
              TECH STACK / 02
            </span>

            <div
              className="
                h-px
                bg-white/[0.12]
                flex-1
              "
            />
          </div>

          {/* Intro */}

          <div className="max-w-[700px]">
            <h2
              className="
                text-3xl
                sm:text-4xl
                md:text-5xl
                font-medium
                tracking-[-0.04em]
                leading-tight
              "
            >
              Tools I use to{" "}

              <span className="text-[#9BE51D]">
                build things.
              </span>
            </h2>

            <p
              className="
                mt-4
                sm:mt-5
                text-[13px]
                sm:text-sm
                leading-6
                sm:leading-7
                text-gray-600
              "
            >
              A collection of technologies I work with while
              building backend systems, AI applications,
              automation workflows and web interfaces.
            </p>
          </div>

          {/* TECHNOLOGY CLOUD */}

          <div
            className="
              mt-10
              sm:mt-14
              flex
              flex-wrap
              items-center
              gap-2
              sm:gap-3
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
                    y: 10,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.35,
                    delay: index * 0.025,
                  }}
                  viewport={{
                    once: true,
                    margin: "-30px",
                  }}
                  className={`
                    group
                    flex
                    items-center
                    gap-2
                    sm:gap-3
                    rounded-full
                    border
                    transition-all
                    duration-300
                    cursor-default

                    ${
                      technology.featured
                        ? `
                          px-4
                          py-2.5
                          sm:px-6
                          sm:py-3.5
                          border-[#9BE51D]/40
                          bg-[#9BE51D]/[0.06]
                          text-gray-200
                          text-xs
                          sm:text-sm
                        `
                        : `
                          px-3
                          py-2
                          sm:px-4
                          sm:py-2.5
                          border-white/[0.10]
                          bg-white/[0.025]
                          text-gray-500
                          text-[11px]
                          sm:text-xs
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
                        text-sm
                        sm:text-base
                        group-hover:scale-110
                        transition
                      "
                    >
                      {technology.icon}
                    </span>
                  ) : (
                    <span
                      className="
                        w-1
                        h-1
                        sm:w-1.5
                        sm:h-1.5
                        shrink-0
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

          {/* Bottom status */}

          <div
            className="
              mt-10
              sm:mt-14
              flex
              items-center
              gap-3
              text-[9px]
              sm:text-[10px]
              text-gray-600
            "
          >
            <span
              className="
                text-[#9BE51D]
                text-[8px]
              "
            >
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

      <section
        id="projects"
        className="
          relative
          z-10
          scroll-mt-20
        "
      >
        <div
          className="
            max-w-[1400px]
            mx-auto
            px-5
            sm:px-6
            md:px-12
            lg:px-16
            py-14
            sm:py-16
            md:py-24
          "
        >

          {/* Heading */}

          <div
            className="
              flex
              items-center
              gap-3
              sm:gap-4
              mb-10
              sm:mb-12
            "
          >
            <span
              className="
                shrink-0
                text-[9px]
                sm:text-[10px]
                text-[#9BE51D]
                tracking-[0.16em]
                sm:tracking-[0.2em]
              "
            >
              PROJECT LOG / 03
            </span>

            <div
              className="
                h-px
                bg-white/[0.12]
                flex-1
              "
            />

            <span
              className="
                shrink-0
                text-[9px]
                sm:text-[10px]
                text-gray-600
              "
            >
              {projects.length} PROJECTS
            </span>
          </div>

          {/* Project list */}

          <div
            className="
              border-t
              border-white/[0.12]
            "
          >
            {projects.map(
              (project, index) => (
                <motion.a
                  key={project._id}
                  href={project.github || undefined}
                  target={
                    project.github
                      ? "_blank"
                      : undefined
                  }
                  rel={
                    project.github
                      ? "noopener noreferrer"
                      : undefined
                  }
                  initial={{
                    opacity: 0,
                    y: 12,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.04,
                  }}
                  viewport={{
                    once: true,
                    margin: "-30px",
                  }}
                  className="
                    group
                    grid
                    grid-cols-[36px_1fr]
                    md:grid-cols-[70px_1fr_180px_25px]
                    gap-3
                    sm:gap-4
                    md:gap-5
                    items-start
                    py-6
                    sm:py-7
                    px-2
                    sm:px-3
                    border-b
                    border-white/[0.08]
                    hover:bg-white/[0.025]
                    transition
                  "
                >

                  {/* Number */}

                  <span
                    className="
                      pt-1
                      text-[9px]
                      sm:text-[10px]
                      text-[#9BE51D]
                    "
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* Main content */}

                  <div className="min-w-0">
                    <div
                      className="
                        flex
                        items-start
                        justify-between
                        gap-3
                      "
                    >
                      <h3
                        className="
                          text-[15px]
                          sm:text-base
                          md:text-lg
                          font-medium
                          leading-6
                          group-hover:text-[#9BE51D]
                          transition
                        "
                      >
                        {project.title}
                      </h3>

                      {/* Mobile arrow */}

                      <span
                        className="
                          md:hidden
                          shrink-0
                          text-gray-600
                          group-hover:text-[#9BE51D]
                          transition
                        "
                      >
                        ↗
                      </span>
                    </div>

                    <p
                      className="
                        mt-2
                        text-[11px]
                        sm:text-xs
                        leading-5
                        text-gray-600
                        max-w-[700px]
                      "
                    >
                      {project.description}
                    </p>

                    {/* Mobile stack */}

                    <div
                      className="
                        mt-3
                        md:hidden
                        flex
                        items-center
                        gap-2
                      "
                    >
                      <span
                        className="
                          text-[8px]
                          tracking-[0.15em]
                          text-gray-700
                        "
                      >
                        STACK
                      </span>

                      <span
                        className="
                          text-[10px]
                          text-gray-500
                        "
                      >
                        {project.technologies?.join(" · ") || "—"}
                      </span>
                    </div>
                  </div>

                  {/* Desktop stack */}

                  <div className="hidden md:block">
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
                      {project.technologies?.join(" · ") || "—"}
                    </p>
                  </div>

                  {/* Desktop arrow */}

                  <span
                    className="
                      hidden
                      md:block
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
            px-5
            sm:px-6
            md:px-12
            lg:px-16
            py-14
            sm:py-16
            md:py-20
          "
        >
          <div
            className="
              grid
              md:grid-cols-[250px_1fr]
              gap-8
              md:gap-10
            "
          >
            <div>
              <p
                className="
                  text-[9px]
                  sm:text-[10px]
                  text-[#9BE51D]
                  tracking-[0.16em]
                  sm:tracking-[0.2em]
                "
              >
                CURRENTLY EXPLORING
              </p>

              <p
                className="
                  mt-2
                  sm:mt-3
                  text-[9px]
                  sm:text-[10px]
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
                  sm:text-3xl
                  md:text-4xl
                  font-medium
                  tracking-[-0.035em]
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
                  mt-5
                  text-[13px]
                  sm:text-sm
                  leading-6
                  sm:leading-7
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
        id="contact"
        className="
          relative
          z-10
          scroll-mt-20
          py-24
          sm:py-28
          md:py-36
          px-5
          sm:px-6
          text-center
        "
      >
        <p
          className="
            text-[9px]
            sm:text-[10px]
            uppercase
            tracking-[0.25em]
            sm:tracking-[0.3em]
            text-gray-600
          "
        >
          Contact / 04
        </p>

        <h2
          className="
            mt-5
            sm:mt-6
            text-4xl
            sm:text-5xl
            md:text-6xl
            lg:text-7xl
            font-medium
            tracking-[-0.055em]
            leading-[0.95]
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
            mt-8
            sm:mt-10
            items-center
            gap-2
            px-5
            py-3
            rounded-full
            border
            border-white/20
            text-xs
            sm:text-sm
            text-gray-300
            hover:border-[#9BE51D]
            hover:text-[#9BE51D]
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
          px-5
          sm:px-6
          md:px-12
          lg:px-16
          py-6
          border-t
          border-white/[0.08]
          flex
          flex-col
          sm:flex-row
          sm:items-center
          justify-between
          gap-4
          text-[9px]
          sm:text-[10px]
          text-gray-600
        "
      >
        <span>
          © 2026 Ranindu Amarasinghe
        </span>

        <div
          className="
            flex
            gap-5
            sm:gap-6
          "
        >
          <a
            href="https://github.com/RaninduAmarasinghe"
            target="_blank"
            rel="noopener noreferrer"
            className="
              hover:text-white
              transition
            "
          >
            GitHub ↗
          </a>

          <a
            href="https://www.linkedin.com/in/ranindu-amarasinghe/"
            target="_blank"
            rel="noopener noreferrer"
            className="
              hover:text-white
              transition
            "
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
        px-5
        sm:px-6
        py-5
        sm:py-6
        border-b
        sm:border-b-0
        sm:border-r
        last:border-r-0
        border-white/[0.10]
      "
    >
      <p
        className="
          text-[8px]
          sm:text-[9px]
          tracking-[0.18em]
          sm:tracking-[0.2em]
          text-gray-600
        "
      >
        {label}
      </p>

      <p
        className={`
          mt-2
          sm:mt-3
          text-xs
          sm:text-sm
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
