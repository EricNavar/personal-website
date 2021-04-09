import React, { lazy, Suspense } from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import PropTypes from "prop-types";
//local files
import CardButtonLink from './CardButtonLink.js';
import {cardButtonStyles} from './../../styling/homePageStyling.js';
const CardButtonPhoto = lazy(() => import('./CardButtonPhoto'));

CardButtonMobile.propTypes = {
  headerText: PropTypes.string.isRequired,
  tools: PropTypes.string.isRequired,
  subText: PropTypes.array.isRequired,
  image: PropTypes.string.isRequired,
  altLabel: PropTypes.string.isRequired,
  ariaLabel: PropTypes.string.isRequired
};

export default function CardButtonMobile({ headerText, tools, subText, image, altLabel, ariaLabel, links }) {
  const classes = cardButtonStyles();

  return (
    <Paper className={classes.itemWrapper} elevation={4}>
      <div className={classes.item}>
        <Suspense fallback={<div className={classes.loadingImage} />}>
          <CardButtonPhoto image={image} altLabel={altLabel} />
        </Suspense>
        <Typography variant="overline" display="block" color='textSecondary'>
          {tools}
        </Typography>
        <Typography
          className={classes.title}
          variant="h5"
          aria-label={ariaLabel}
          color='primary'
        >
          {headerText}
        </Typography>
        <Typography color='textPrimary' variant='body1' className={classes.subTextContainer}>
          {subText.map((paragraph, value1) => (
            <React.Fragment>
              {value1 !== 0 && <br key={`${headerText}-linebreak-${value1}`} className={classes.lineBreak} />}
              {paragraph.map((textPiece, value2) =>
                <span key={`${headerText}-subText-${value1}-${value2}`} className={value2 % 2 === 1 ? classes.underlined : ""}>
                  {textPiece}
                </span>
              )}
            </React.Fragment>
          ))}
        </Typography>
        {links.map((link, value) => <CardButtonLink key={`link-${value}`} {...link} />)}
      </div>
    </Paper>
  );
}