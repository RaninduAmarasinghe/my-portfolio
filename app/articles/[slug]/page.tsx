import Link from "next/link";
import { notFound } from "next/navigation";
import { client } from "../../../sanity/lib/client";
import { articleBySlugQuery } from "../../../sanity/lib/queries";
import type { Article } from "../../types/article";

export const revalidate = 60;

type ArticleBlock = {
  _key?: string;
  _type?: string;
  style?: string;
  children?: { text?: string }[];
};

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article: Article | null = await client.fetch(articleBySlugQuery, { slug });

  if (!article) notFound();

  const blocks = (article.body ?? []) as ArticleBlock[];

  return (
    <main className="min-h-screen bg-[#080909] text-white">
      <article className="mx-auto max-w-[820px] px-5 py-20 sm:px-6 sm:py-28">
        <Link href="/writing" aria-label="Back to writing" className="text-xs text-gray-500 transition hover:text-[#9BE51D]">
          ← All writing
        </Link>
        <header className="mt-12 border-b border-white/[0.1] pb-10">
          {article.category && <p className="text-[10px] uppercase tracking-[0.2em] text-[#9BE51D]">{article.category}</p>}
          <h1 className="mt-5 text-4xl font-medium leading-tight tracking-[-0.05em] sm:text-6xl">{article.title}</h1>
          {article.excerpt && <p className="mt-6 text-base leading-7 text-gray-400">{article.excerpt}</p>}
          {article.publishedAt && <time className="mt-6 block text-xs text-gray-600" dateTime={article.publishedAt}>{new Date(article.publishedAt).toLocaleDateString("en-US", { dateStyle: "long" })}</time>}
        </header>
        <div className="space-y-6 py-10 text-sm leading-7 text-gray-300 sm:text-base">
          {blocks.map((block, index) => {
            if (block._type !== "block") return null;
            const text = block.children?.map((child) => child.text ?? "").join("");
            if (!text) return null;
            const key = block._key ?? index;
            if (block.style === "h2" || block.style === "h3") {
              return <h2 key={key} className="pt-5 text-2xl font-medium tracking-tight text-white">{text}</h2>;
            }
            return <p key={key}>{text}</p>;
          })}
        </div>
      </article>
    </main>
  );
}
