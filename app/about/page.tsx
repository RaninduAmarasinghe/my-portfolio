import AboutClient from "./AboutClient";
import { client } from "../../sanity/lib/client";
import { allProjectsQuery } from "../../sanity/lib/queries";
import type { Project } from "../types/project";

export const revalidate = 60;

export default async function AboutPage() {
  const projects: Project[] = await client.fetch(
    allProjectsQuery
  );

  return <AboutClient projects={projects} />;
}
