import React, { lazy, Suspense } from 'react';
import { Typography } from '@mui/material';
//local files
import { CardButtonLink } from './CardButtonLink';
import { Item, ItemWrapper, LoadingImage, SubTextContainer } from '../../styling/homePageStyling';
import { Project, ProjectLink } from '../../commonTypes';
const CodingProjectThumbnail = lazy(() =>
  import('./CodingProjectThumbnail').then((module) => ({
    default: module.CodingProjectThumbnail,
  }))
);

type CodingProjectMobileProps = {
  project: Project;
};

function CodingProjectMobile(props: CodingProjectMobileProps): JSX.Element {
  const { headerText, tools, subText, image, altLabel, links } = props.project;

  return (
    <ItemWrapper elevation={4}>
      <Item>
        <Suspense fallback={<LoadingImage />}>
          <CodingProjectThumbnail image={image} altLabel={altLabel} />
        </Suspense>
        <Typography variant="overline" display="block" color="textSecondary">
          {tools}
        </Typography>
        <Typography component="span" variant="h5">
          {headerText}
        </Typography>
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

export { CodingProjectMobile };
