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

const videos = [
  'https://www.youtube.com/embed/W3l8pTJ21fo',
  'https://www.youtube.com/embed/MMM3XNEUHeE',
  'https://www.youtube.com/embed/d1jhrYy2vFU',
  'https://www.youtube.com/embed/Dzx_IdOPGzc',
  'https://www.youtube.com/embed/rODUJI9M_LU',
  'https://www.youtube.com/embed/AYbmeSnx4jA',
  'https://www.youtube.com/embed/XXNCdJX5fnU',
  'https://www.youtube.com/embed/7GK-OpEr8kk',
  'https://www.youtube.com/embed/eTYXSHU3q6A',
];

function BlogPage(): JSX.Element {
  const [articles, setArticles] = React.useState<ArticleProps[]>([]);

  // React.useEffect(() => {
  //   client.getEntries()
  //     .then((response) => {
  //       const items = response.items as ContentfulArticle[];
  //       const articlesFromContentful = items.map((item: ContentfulArticle) => {
  //         return {
  //           description: item.fields.description,
  //           name: item.fields.name,
  //           featuredImage: item.fields.featuredImage.fields.url,
  //         };
  //       }) as ArticleProps[];
  //       setArticles(articlesFromContentful);
  //     })
  //     .catch(console.error);
  // }, []);

  return (
    <Container>
      Articles
      <ArticleSection articles={articles} />

      <p>Videos</p>
      {videos.map((video, index) => (
        <iframe
          width="882"
          height="496"
          src={video}
          title="Common Ground Final Presentation"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          data-modestbranding
          key={index}
        />
      ))}
    </Container>
  );
}

export {BlogPage};
