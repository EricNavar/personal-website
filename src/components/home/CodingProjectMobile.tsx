import React, { lazy, Suspense } from 'react';
import { Typography, Paper } from '@material-ui/core';
import PropTypes from 'prop-types';
//local files
import { CardButtonLink } from './CardButtonLink';
import { cardButtonStyles } from '../../styling/homePageStyling';
const CodingProjectThumbnail = lazy(() => import('./CodingProjectThumbnail').then((module) => ({
  default: module.CodingProjectThumbnail,
})));

CardButtonMobile.propTypes = {
  headerText: PropTypes.string.isRequired,
  tools: PropTypes.string.isRequired,
  subText: PropTypes.array.isRequired,
  image: PropTypes.string.isRequired,
  altLabel: PropTypes.string.isRequired,
  ariaLabel: PropTypes.string.isRequired
};

function CardButtonMobile(props: any) {
  const { headerText, tools, subText, image, altLabel, ariaLabel, links } = props;
  const classes = cardButtonStyles();

  return (
    <Paper className={classes.itemWrapper} elevation={4}>
      <div className={classes.item}>
        <Suspense fallback={<div className={classes.loadingImage} />}>
          <CodingProjectThumbnail image={image} altLabel={altLabel} />
        </Suspense>
        <Typography variant="overline" display="block" color='textSecondary'>
          {tools}
        </Typography>
        <Typography
          className={classes.title}
          component="span"
          variant="h5"
          aria-label={ariaLabel}
//          color='primary'
        >
          {headerText}
        </Typography>
        <Typography color='textPrimary' variant='body1' className={classes.subTextContainer}>
          {subText.map((paragraph:Array<string>, value1:number) => (
            <React.Fragment>
              {value1 !== 0 && <br key={`${headerText}-linebreak-${value1}`} className={classes.lineBreak} />}
              {paragraph.map((textPiece, value2) =>
                <span key={`${headerText}-subText-${value1}-${value2}`} className={value2 % 2 === 1 ? classes.underlined : ''}>
                  {textPiece}
                </span>
              )}
            </React.Fragment>
          ))}
        </Typography>
        {links.map((link:string, value:number) => <CardButtonLink key={`link-${value}`} {...link} />)}
      </div>
    </Paper>
  );
}

export { CardButtonMobile }
