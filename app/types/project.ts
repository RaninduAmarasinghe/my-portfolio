export type Project = {
  _id: string;

  title: string;

  slug: {
    current: string;
  };

  description: string;

  number: string;

  link?: string;

  image?: {
    asset?: {
      _ref: string;
    };
  };

  technologies?: string[];

  github?: string;

  demo?: string;

  featured?: boolean;

  order?: number;
};
