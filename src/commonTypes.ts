export type ContentfulProjectLink = {
  fields: {
    label: string,
    ariaLabel: string,
    hyperlink: string,
    icon: ContentfulImage,
  };
}

export type ProjectLink = {
  label: string,
  ariaLabel: string,
  hyperlink: string,
  icon: string,
}

type ContentfulImage = {
  fields: {
    file: {
      url: string;
    };
  };
}

export type ContentfulProject = {
  fields: {
    id: string,
    tools: string,
    headerText: string,
    subText: string,
    image: ContentfulImage,
    altLabel: string,
    links: Array<ContentfulProjectLink>
  }
}

export type Project = {
  _id: string,
  tools: string,
  headerText: string,
  subText: string,
  image: string,
  altLabel: string,
  links: Array<ProjectLink>
}

export type InvolvementItem = {
  title: string,
  positions: Record<string, string>,
  description: Array<string>,
  linkDescription?: string | undefined,
  link?: string | undefined
  icon: string,
  thumbnail?: string | undefined
}

export type ArticleProps = {
  description: string;
  name: string;
  featuredImage: string;
};

export type ContentfulArticleFields = {
  description: string;
  name: string;
  featuredImage: FeaturedImage;
};

export type FeaturedImage = {
  fields: FeaturedImageFields;
};

export type FeaturedImageFields = {
  url: string;
};

export type ContentfulArticle = {
  fields: ContentfulArticleFields;
}
