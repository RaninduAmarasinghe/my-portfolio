"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

import type { Article } from "../types/article";

type ArticlesProps = {
  articles: Article[];
};

export default function Articles({ articles }: ArticlesProps) {
  const shouldReduceMotion = useReducedMotion();

  const latestArticles = articles.slice(0, 3);

  return (
    <section
      id="articles"
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
          py-20
          sm:px-6
          sm:py-24
          md:px-12
          md:py-28
          lg:px-16
        "
      >

        {/* HEADER */}

        <div className="flex items-center gap-4">

          <span
            className="
              shrink-0
              text-[9px]
              uppercase
              tracking-[0.22em]
              text-[#9BE51D]
              sm:text-[10px]
            "
          >
            Articles / 04
          </span>

          <div className="h-px flex-1 bg-white/[0.10]" />

          <Link
            href="/articles"
            className="
              hidden
              text-[10px]
              uppercase
              tracking-[0.15em]
              text-gray-500
              transition
              hover:text-[#9BE51D]
              sm:block
            "
          >
            View all articles →
          </Link>

        </div>

        {/* CONTENT */}

        <div
          className="
            mt-12
            grid
            gap-12
            lg:grid-cols-[280px_minmax(0,1fr)]
            lg:gap-20
          "
        >

          {/* LEFT */}

          <motion.div
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
            viewport={{ once: true }}
          >

            <h2
              className="
                text-[42px]
                font-medium
                leading-[0.95]
                tracking-[-0.055em]
                text-white
                sm:text-5xl
              "
            >
              Thoughts,
              <br />
              Tutorials &
              <br />

              <span
                className="
                  font-serif
                  font-normal
                  italic
                  text-[#9BE51D]
                "
              >
                Things I Learn.
              </span>
            </h2>

            <p
              className="
                mt-6
                max-w-[270px]
                text-sm
                leading-6
                text-gray-500
              "
            >
              I write about backend development, AI,
              developer tools, and lessons from building
              real projects.
            </p>

          </motion.div>

          {/* LATEST 3 */}

          <div className="divide-y divide-white/[0.09]">

            {latestArticles.map((article, index) => (

              <motion.div
                key={article._id}
                initial={{
                  opacity: 0,
                  y: shouldReduceMotion ? 0 : 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: shouldReduceMotion ? 0.2 : 0.5,
                  delay: shouldReduceMotion ? 0 : index * 0.08,
                }}
                viewport={{ once: true }}
              >

                <Link
                  href={`/articles/${article.slug}`}
                  className="
                    group
                    grid
                    gap-4
                    py-7
                    sm:grid-cols-[48px_minmax(0,1fr)_120px_24px]
                    sm:items-start
                    sm:gap-5
                  "
                >

                  {/* NUMBER */}

                  <span className="text-[11px] text-[#9BE51D]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* ARTICLE */}

                  <div>

                    <h3
                      className="
                        text-lg
                        font-medium
                        tracking-tight
                        text-white
                        transition
                        group-hover:text-[#9BE51D]
                        sm:text-xl
                      "
                    >
                      {article.title}
                    </h3>

                    {article.excerpt && (
                      <p
                        className="
                          mt-2
                          max-w-[620px]
                          text-xs
                          leading-6
                          text-gray-500
                          sm:text-sm
                        "
                      >
                        {article.excerpt}
                      </p>
                    )}

                    {/* TAGS */}

                    {article.tags && article.tags.length > 0 && (
                      <div
                        className="
                          mt-4
                          flex
                          flex-wrap
                          gap-2
                        "
                      >
                        {article.tags.map((tag) => (
                          <span
                            key={tag}
                            className="
                              rounded-full
                              border
                              border-white/[0.08]
                              bg-white/[0.025]
                              px-3
                              py-1.5
                              text-[9px]
                              text-gray-500
                            "
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                  </div>

                  {/* DATE */}

                  <span
                    className="
                      text-[9px]
                      uppercase
                      tracking-[0.12em]
                      text-gray-600
                    "
                  >
                    {new Date(article.publishedAt).toLocaleDateString(
                      "en-US",
                      {
                        month: "short",
                        day: "2-digit",
                        year: "numeric",
                      }
                    )}
                  </span>

                  {/* ARROW */}

                  <span
                    className="
                      text-sm
                      text-gray-600
                      transition
                      group-hover:translate-x-1
                      group-hover:text-[#9BE51D]
                    "
                  >
                    ↗
                  </span>

                </Link>

              </motion.div>

            ))}

          </div>

        </div>

        {/* MOBILE */}

        <div className="mt-8 sm:hidden">

          <Link
            href="/articles"
            className="
              text-xs
              text-gray-500
              transition
              hover:text-[#9BE51D]
            "
          >
            View all articles →
          </Link>

        </div>

      </div>
    </section>
  );
}
