export type Article = {
  _id: string;
  title: string;
  slug: string;
  excerpt?: string;
  publishedAt?: string;
  category?: string;
  tags?: string[];
  coverImage?: {
    asset?: {
      _ref: string;
    };
  };
  body?: unknown[];
  number?: string;
};