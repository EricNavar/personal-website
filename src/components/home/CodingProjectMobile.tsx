import React, { lazy, Suspense } from 'react';
import { Typography } from '@mui/material';
//local files
import { CardButtonLink } from './CardButtonLink';
import { cardButtonStyles, ItemWrapper } from '../../styling/homePageStyling';
import { Project, ProjectLink } from '../../commonTypes';
import useTheme from '@mui/material/styles/useTheme';
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
  const classes = cardButtonStyles(useTheme());

  return (
    <ItemWrapper elevation={4}>
      <div className={classes.item}>
        <Suspense fallback={<div className={classes.loadingImage} />}>
          <CodingProjectThumbnail image={image} altLabel={altLabel} />
        </Suspense>
        <Typography variant="overline" display="block" color="textSecondary">
          {tools}
        </Typography>
        <Typography component="span" variant="h5">
          {headerText}
        </Typography>
        <Typography
          color="textPrimary"
          variant="body1"
          className={classes.subTextContainer}
          dangerouslySetInnerHTML={{ __html: subText }}
        />
        {links.map((link: ProjectLink, value: number) => (
          <CardButtonLink key={`link-${value}`} {...link} />
        ))}
      </div>
    </ItemWrapper>
  );
}

export { CodingProjectMobile };
