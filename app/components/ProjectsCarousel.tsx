"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import type { Project } from "../types/project";

type ProjectsCarouselProps = {
  projects: Project[];
};

export default function ProjectsCarousel({
  projects,
}: ProjectsCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  /*
   * Keep the current index safe when Sanity data changes.
   */
  const safeCurrent =
    projects.length > 0
      ? Math.min(current, projects.length - 1)
      : 0;

  /*
   * Automatically move to the next project.
   */
  useEffect(() => {
    if (isPaused || projects.length <= 1) {
      return;
    }

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % projects.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [isPaused, projects.length]);

  /*
   * No projects yet.
   */
  if (projects.length === 0) {
    return null;
  }

  /*
   * Show 3 projects at a time.
   */
  const visibleProjects = Array.from(
    { length: Math.min(3, projects.length) },
    (_, index) =>
      projects[(safeCurrent + index) % projects.length]
  );

  return (
    <div
      className="w-full"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* PROJECTS */}

      <div className="grid gap-4 md:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visibleProjects.map((project) => (
            <motion.a
              key={project._id}
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
                flex
                min-h-[290px]
                flex-col
                justify-between
                border
                border-white/[0.14]
                p-8
                transition-colors
                hover:border-white/[0.28]
                hover:bg-white/[0.025]
                md:p-9
              "
            >
              <div>
                {/* NUMBER */}

                <span
                  className="
                    text-[11px]
                    tracking-wide
                    text-[#9BE51D]
                  "
                >
                  {project.number.padStart(2, "0")}
                </span>

                {/* TITLE */}

                <h3
                  className="
                    mt-8
                    text-xl
                    font-medium
                    tracking-tight
                    text-white
                    md:text-[22px]
                  "
                >
                  {project.title}
                </h3>

                {/* DESCRIPTION */}

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

              {/* LINK */}

              <div
                className="
                  text-xs
                  text-gray-500
                  transition-colors
                  group-hover:text-[#9BE51D]
                "
              >
                View project ↗
              </div>
            </motion.a>
          ))}
        </AnimatePresence>
      </div>

      {/* INDICATORS */}

      {projects.length > 1 && (
        <div className="mt-8 flex items-center justify-between">
          <div className="flex gap-2">
            {projects.map((project, index) => (
              <button
                key={project._id}
                type="button"
                onClick={() => setCurrent(index)}
                aria-label={`Show project ${index + 1}`}
                className={`
                  h-[2px]
                  transition-all
                  duration-300
                  ${
                    safeCurrent === index
                      ? "w-8 bg-[#9BE51D]"
                      : "w-3 bg-white/20 hover:bg-white/40"
                  }
                `}
              />
            ))}
          </div>

          <span className="text-[10px] text-gray-600">
            {String(safeCurrent + 1).padStart(2, "0")} /{" "}
            {String(projects.length).padStart(2, "0")}
          </span>
        </div>
      )}
    </div>
  );
}
