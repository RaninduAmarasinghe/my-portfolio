"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const projects = [
  {
    number: "01",
    title: "Home Server Guardian",
    description:
      "Smart system monitoring and automation platform using Spring Boot, n8n, and Telegram to manage CPU, storage, and background processes in real time.",
    link: "https://github.com/RaninduAmarasinghe/home-server-guardian",
  },
  {
    number: "02",
    title: "Sentinel Vault AI",
    description:
      "A local-first, privacy-focused RAG system for secure document analysis using Spring Boot, Ollama, and n8n.",
    link: "https://github.com/RaninduAmarasinghe/sentinel-vault-ai",
  },
  {
    number: "03",
    title: "Auradocs AI",
    description:
      "An AI-powered API documentation and dynamic mocking engine using Spring Boot, MongoDB, and local LLMs.",
    link: "https://github.com/RaninduAmarasinghe/auradocs-ai-mock-engine",
  },
  {
    number: "04",
    title: "AI Resume Analyzer",
    description:
      "AI-powered resume screening backend built with Spring Boot and Spring AI, using local LLMs to analyze resume and job description matches.",
    link: "https://github.com/RaninduAmarasinghe/ai-resume-screener",
  },
  {
    number: "05",
    title: "NPC Verse AI",
    description:
      "A Spring Boot framework for building context-aware and personality-driven NPC conversations using local LLMs.",
    link: "https://github.com/RaninduAmarasinghe/npcverse-ai",
  },
];

export default function ProjectsCarousel() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  /*
   * Automatically move to the next project set
   */
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % projects.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [isPaused]);

  /*
   * Get 3 projects starting from current position.
   * This creates the infinite carousel effect.
   */
  const visibleProjects = Array.from({ length: 3 }, (_, index) => {
    return projects[(current + index) % projects.length];
  });

  return (
    <section
      id="projects"
      className="bg-[#0d1011] border-b border-white/[0.06]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-20 md:py-24">

        {/* Section title */}
        <p
          className="
            text-[10px]
            uppercase
            tracking-[0.25em]
            text-gray-500
            mb-10
          "
        >
          Selected Projects
        </p>

        {/* PROJECTS */}
        <div className="grid md:grid-cols-3 gap-4">

          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project) => (
              <motion.a
                key={project.number}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                layout
                initial={{
                  opacity: 0,
                  x: 30,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                exit={{
                  opacity: 0,
                  x: -30,
                }}
                transition={{
                  duration: 0.6,
                  ease: "easeInOut",
                }}
                className="
                  group
                  min-h-[290px]
                  border
                  border-white/[0.14]
                  p-8
                  md:p-9
                  flex
                  flex-col
                  justify-between
                  hover:bg-white/[0.025]
                  hover:border-white/[0.28]
                  transition-colors
                "
              >

                <div>

                  {/* Number */}
                  <span
                    className="
                      text-[11px]
                      text-[#9BE51D]
                      tracking-wide
                    "
                  >
                    {project.number}
                  </span>

                  {/* Title */}
                  <h3
                    className="
                      mt-8
                      text-xl
                      md:text-[22px]
                      font-medium
                      tracking-tight
                      text-white
                    "
                  >
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="
                      mt-4
                      max-w-[360px]
                      text-sm
                      leading-6
                      text-gray-500
                    "
                  >
                    {project.description}
                  </p>

                </div>

                {/* Link */}
                <div
                  className="
                    text-xs
                    text-gray-500
                    group-hover:text-[#9BE51D]
                    transition-colors
                  "
                >
                  View project ↗
                </div>

              </motion.a>
            ))}
          </AnimatePresence>

        </div>

        {/* INDICATORS */}
        <div className="flex items-center justify-between mt-8">

          <div className="flex gap-2">

            {projects.map((project, index) => (
              <button
                key={project.number}
                onClick={() => setCurrent(index)}
                aria-label={`Show project ${index + 1}`}
                className={`
                  h-[2px]
                  transition-all
                  duration-300
                  ${
                    current === index
                      ? "w-8 bg-[#9BE51D]"
                      : "w-3 bg-white/20 hover:bg-white/40"
                  }
                `}
              />
            ))}

          </div>

          <span className="text-[10px] text-gray-600">
            {String(current + 1).padStart(2, "0")} /{" "}
            {String(projects.length).padStart(2, "0")}
          </span>

        </div>

      </div>
    </section>
  );
}