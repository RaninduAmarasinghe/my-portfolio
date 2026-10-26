import type { Metadata } from "next";
import { client } from "../../sanity/lib/client";
import { allArticlesQuery } from "../../sanity/lib/queries";
import ArticlesList from "../components/ArticlesList";

export const metadata: Metadata = {
  title: "Writing | Ranindu Amarasinghe",
  description:
    "Notes, tutorials, experiments, and lessons from building backend systems and AI-powered applications.",
  alternates: { canonical: "/writing" },
};

export const revalidate = 60;

export default async function WritingPage() {
  const articles = await client.fetch(allArticlesQuery);

  return (
    <main className="min-h-screen bg-[#080909] text-white">
      <div className="mx-auto max-w-[1400px] px-5 py-24 sm:px-6 sm:py-28 md:px-12 lg:px-16">
        <div className="flex items-center gap-4">
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#9BE51D]">
            Writing
          </span>
          <div className="h-px flex-1 bg-white/[0.10]" />
        </div>

        <div className="mt-12 max-w-[700px]">
          <h1 className="text-5xl font-medium leading-[0.95] tracking-[-0.055em] sm:text-6xl md:text-7xl">
            Writing,
            <br />
            <span className="font-serif font-normal italic text-[#9BE51D]">
              ideas &amp; lessons.
            </span>
          </h1>
          <p className="mt-6 max-w-[600px] text-sm leading-7 text-gray-500">
            Notes, tutorials, experiments, and lessons from building backend
            systems and AI-powered applications.
          </p>
        </div>

        <ArticlesList articles={articles} />
      </div>
    </main>
  );
}
