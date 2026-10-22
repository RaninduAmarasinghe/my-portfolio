import groq from "groq";

export const allArticlesQuery = groq`
  *[_type == "article"]
    | order(publishedAt desc) {
      _id,
      title,
      "slug": slug.current,
      excerpt,
      publishedAt,
      category,
      tags,
      coverImage,
      body
    }
`;

export const allProjectsQuery = groq`
  *[_type == "project"]
    | order(_createdAt desc) {
      _id,
      "number": select(defined(order) => string(order), "--"),
      title,
      description,
      github,
      technologies,
      "link": coalesce(github, demo)
    }
`;

export const articleBySlugQuery = groq`
  *[_type == "article" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    publishedAt,
    category,
    tags,
    body
  }
`;
