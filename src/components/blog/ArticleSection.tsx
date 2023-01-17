import React from 'react';
import { Article } from './Article';
import { styled } from '@mui/material/styles';
import { ArticleProps } from '../../commonTypes';

const ArticleContainer = styled('div')`
  margin-left: 20%;
  margin-right: 20%;
  @media (max-width: 1080px) {
    margin-left: 10%;
    margin-right: 10%;
  }
  @media (max-width: 600px) {
    margin-left: 4%;
    margin-right: 4%;
  }
`;

type ArticleSectionProps = {
  articles: ArticleProps[];
};

export function ArticleSection(props: ArticleSectionProps) {
  return (
    <ArticleContainer>
      {props.articles.map((article, index) => (
        <Article {...article} key={index} />
      ))}
    </ArticleContainer>
  );
}
