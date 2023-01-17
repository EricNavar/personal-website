import React, { lazy, Suspense } from 'react';
import { Typography } from '@mui/material';
//local files
import {
  ItemWrapper,
  HeaderText,
  Item,
  CardHeaderText,
  CardHeader,
  SubTextContainer,
  PhotoWrapper,
  LoadingImage
} from '../../styling/homePageStyling';
import { CardButtonLink } from './CardButtonLink';
import { Project, ProjectLink } from '../../commonTypes';
const CodingProjectThumbnail = lazy(() =>
  import('./CodingProjectThumbnail').then((module) => ({
    default: module.CodingProjectThumbnail,
  }))
);

type CodingProjectDesktopProps = {
  project: Project;
};

function CodingProjectDesktop(props: CodingProjectDesktopProps): JSX.Element {
  const { headerText, tools, subText, image, altLabel, links } = props.project;

  return (
    <ItemWrapper elevation={4}>
      <PhotoWrapper id='fuck'>
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

export { CodingProjectDesktop };
