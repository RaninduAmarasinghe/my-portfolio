import { client } from "../sanity/lib/client";
import {
  allArticlesQuery,
  allProjectsQuery,
} from "../sanity/lib/queries";

import Hero from "./components/Hero";

export const revalidate = 60;

export default async function HomePage() {
  const [articles, projects] = await Promise.all([
    client.fetch(allArticlesQuery),
    client.fetch(allProjectsQuery),
  ]);

  return (
    <Hero
      articles={articles}
      projects={projects}
    />
  );
}
