import Link from "next/link";
import type { Article } from "../types/article";

type ArticlesListProps = {
  articles: Article[];
};

export default function ArticlesList({
  articles,
}: ArticlesListProps) {
  return (
    <div className="mt-20 divide-y divide-white/[0.09]">
     {articles.map((article, index) => (
        <Link
          key={article._id}
          href={`/articles/${article.slug}`}
          className="
            group
            grid
            gap-5
            py-8
            transition
            hover:bg-white/[0.015]
            sm:grid-cols-[60px_minmax(0,1fr)_120px_30px]
            sm:items-start
          "
        >
          {/* NUMBER */}

        <span className="text-[11px] text-[#9BE51D]">
  {String(index + 1).padStart(2, "0")}
</span>

          {/* ARTICLE */}

          <div>
            <h2
              className="
                text-xl
                font-medium
                tracking-tight
                transition
                group-hover:text-[#9BE51D]
                sm:text-2xl
              "
            >
              {article.title}
            </h2>

            {article.excerpt && (
              <p
                className="
                  mt-3
                  max-w-[700px]
                  text-sm
                  leading-6
                  text-gray-500
                "
              >
                {article.excerpt}
              </p>
            )}

            {article.tags && article.tags.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="
                      rounded-full
                      border
                      border-white/[0.08]
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
            {article.publishedAt
              ? new Date(article.publishedAt).toLocaleDateString(
                  "en-US",
                  {
                    month: "short",
                    day: "2-digit",
                    year: "numeric",
                  }
                )
              : ""}
          </span>

          {/* ARROW */}

          <span
            className="
              text-gray-600
              transition
              group-hover:translate-x-1
              group-hover:text-[#9BE51D]
            "
          >
            ↗
          </span>
        </Link>
      ))}
    </div>
  );
}