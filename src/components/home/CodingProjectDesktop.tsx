import React, { lazy, Suspense } from 'react';
import { Typography, Paper } from '@material-ui/core';
//local files
import { cardButtonStyles } from '../../styling/homePageStyling';
import { CardButtonLink } from './CardButtonLink';
import { Project, LinkProps } from '../../commonTypes';
const CodingProjectThumbnail = lazy(() => import('./CodingProjectThumbnail').then((module) => ({
  default: module.CodingProjectThumbnail,
})));

type CodingProjectDesktopProps = {
  project: Project
};

function CodingProjectDesktop(props: CodingProjectDesktopProps): JSX.Element {
  const { headerText, tools, subText, image, altLabel, ariaLabel, links } = props.project;
  const classes = cardButtonStyles();

  return (
    <Paper className={classes.itemWrapper} elevation={4}>
      <div className={classes.photoWrapper}>
        <Suspense fallback={<div className={classes.loadingImage} />}>
          <CodingProjectThumbnail image={image} altLabel={altLabel} />
        </Suspense>
      </div>
      <div className={classes.item}>
        <div className={classes.cardHeader}>
          <div className={classes.cardHeaderText}>
            <Typography variant="overline" display="block" color='textSecondary'>
              {tools}
            </Typography>
            <Typography
              className={classes.title}
              component="span"
              variant="h5"
              aria-label={ariaLabel}
              color='primary'
            >
              {headerText}
            </Typography>
          </div>
        </div>
        <Typography color='textPrimary' variant='body1' className={classes.subTextContainer}>
          {subText.map((paragraph: Array<string>, value1: number) => (
            <React.Fragment key={value1}>
              {value1 !== 0 && <br key={`${headerText}-linebreak-${value1}`} className={classes.lineBreak} />}
              {paragraph.map((textPiece, value2) =>
                <span key={`${headerText}-subText-${value1}-${value2}`} className={value2 % 2 === 1 ? classes.underlined : ''}>
                  {textPiece}
                </span>
              )}
            </React.Fragment>
          ))}
        </Typography>
        {links.map((link: LinkProps, value: number) => <CardButtonLink key={`link-${value}`} {...link} />)}
      </div>
    </Paper>
  );
}

export { CodingProjectDesktop };
