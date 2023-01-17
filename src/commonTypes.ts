export type ContentfulProjectLink = {
  fields: {
    label: string;
    ariaLabel: string;
    hyperlink: string;
    icon: ContentfulImage;
  };
};

export type ProjectLink = {
  label: string;
  ariaLabel: string;
  hyperlink: string;
  icon: string;
};

type ContentfulImage = {
  fields: {
    file: {
      url: string;
    };
  };
};

export type ContentfulHomePage = {
  projects: ContentfulProject[];
  personalStatement: string;
};

export type ContentfulProject = {
  fields: {
    id: string;
    tools: string;
    headerText: string;
    subText: string;
    image: ContentfulImage;
    altLabel: string;
    links: Array<ContentfulProjectLink>;
  };
};

export type Project = {
  _id: string;
  tools: string;
  headerText: string;
  subText: string;
  image: string;
  altLabel: string;
  // projectLink: ProjectLink;
  links: Array<ProjectLink>;
};

export type ContentfulExperienceItem = {
  fields: {
    organization: string;
    organizationIcon: ContentfulImage;
    position: string;
    time: string;
    description: string;
    link?: string | undefined;
    linkAriaLabel?: string | undefined;
  };
};

export type ExperienceItem = {
  organization: string;
  organizationIcon: string;
  position: string;
  time: string;
  description: string;
  linkDescription?: string | undefined;
  link?: string | undefined;
};

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
};

export type ContentfulSkill = {
  fields: {
    title: string;
    icon: ContentfulImage;
  };
};

export type Skill = {
  title: string;
  icon: string;
};

export type ContentfulResumePage = {
  id: string;
  skills: ContentfulSkill[];
  internshipExperience: ContentfulExperienceItem[];
  studentOrgInvolvement: ContentfulExperienceItem[];
};
