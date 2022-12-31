import React from 'react';
import { styled } from '@mui/material/styles';
import {marked} from 'marked';
import { ArticleProps } from '../commonTypes';

const StyledArticle = styled('div')`
    border-radius: 8px;
    background-color: rgba(255,255,255,.85);
    padding: 30px;
    margin: 20px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
`;

const StyledImage = styled('img')`
    border-radius: 6px;
    width: 400px;
    max-width: 100%;
    margin-bottom: 16px;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
`;

const ArticleTitle = styled('h1')`
    font-size: 2rem;
    margin-top: 0;
`;

export function Article(props: ArticleProps) {
  if (!props.description) {
    console.log('post description is undefined');
    return null;
  }
  const postDescription = marked.parse(props.description);

  return (
    <StyledArticle>
      <ArticleTitle>{props.name}</ArticleTitle>
      <div style={{textAlign: 'center'}}>
        <StyledImage src={props.featuredImage} />
      </div>
      <div dangerouslySetInnerHTML={{ __html: postDescription }}></div>
    </StyledArticle>
  );
}