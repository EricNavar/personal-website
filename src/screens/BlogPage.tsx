import React from 'react';
import { ArticleSection } from '../components/ArticleSection';
import { styled } from '@mui/material/styles';
import { client } from '../data/client';
import { ArticleProps } from '../components/Article';

const Container = styled('div')`
  background-color: #FDD5D2;
  padding-bottom: 30px;
`;

type ContentfulArticle = {
  fields: ContentfulArticleFields;
}

type ContentfulArticleFields = {
  description: string;
  name: string;
  featuredImage: FeaturedImage;
};

type FeaturedImage = {
  fields: FeaturedImageFields;
};

type FeaturedImageFields = {
  url: string;
};

function BlogPage(): JSX.Element {
  const [articles, setArticles] = React.useState<ArticleProps[]>([]);

  React.useEffect(() => {
    client.getEntries()
      .then((response) => {
        const items = response.items as ContentfulArticle[];
        const articlesFromContentful = items.map((item: ContentfulArticle) => {
          return {
            description: item.fields.description,
            name: item.fields.name,
            featuredImage: item.fields.featuredImage.fields.url,
          };
        }) as ArticleProps[];
        setArticles(articlesFromContentful);
      })
      .catch(console.error);
  }, []);

  return (
    <Container>
      <ArticleSection articles={articles} />
    </Container>
  );
}

export {BlogPage};
