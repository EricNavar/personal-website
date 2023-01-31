import React, { lazy, Suspense } from 'react';

import { Typography } from '@mui/material';

import { CardButtonLink } from './CardButtonLink';
import { Project, ProjectLink } from '../../commonTypes';
import {
  CardHeader,
  CardHeaderText,
  HeaderText,
  Item,
  ItemWrapper,
  LoadingImage,
  PhotoWrapper,
  SubTextContainer,
} from '../../styling/homePageStyling';
const CodingProjectThumbnail = lazy(() =>
  import('./CodingProjectThumbnail').then((module) => ({
    default: module.CodingProjectThumbnail,
  }))
);

type CodingProjectDesktopProps = {
  project: Project;
};

function CodingProject(props: CodingProjectDesktopProps): JSX.Element {
  const { headerText, tools, subText, image, altLabel, links } = props.project;

  return (
    <ItemWrapper elevation={4}>
      <PhotoWrapper>
        <Suspense fallback={<LoadingImage />}>
          <CodingProjectThumbnail image={image} altLabel={altLabel} />
        </Suspense>
      </PhotoWrapper>
      <Item>
        <CardHeader>
          <CardHeaderText>
            <Typography
              variant="overline"
              display="block"
              color="textSecondary"
            >
              {tools}
            </Typography>
            <HeaderText variant="h5">{headerText}</HeaderText>
          </CardHeaderText>
        </CardHeader>
        <SubTextContainer
          color="textPrimary"
          variant="body1"
          dangerouslySetInnerHTML={{ __html: subText }}
        />
        {links.map((link: ProjectLink, value: number) => (
          <CardButtonLink key={`link-${value}`} {...link} />
        ))}
      </Item>
    </ItemWrapper>
  );
}

export { CodingProject };