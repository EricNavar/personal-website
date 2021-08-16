import React, { lazy, Suspense } from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import PropTypes from "prop-types";
//local files
import {cardButtonStyles} from '../../styling/homePageStyling.js';
import CardButtonLink from './CardButtonLink.js';
const CodingProjectThumbnail = lazy(() => import('./CodingProjectThumbnail'));

CardButtonDesktop.propTypes = {
  headerText: PropTypes.string.isRequired,
  tools: PropTypes.string.isRequired,
  subText: PropTypes.array.isRequired,
  altLabel: PropTypes.string.isRequired,
  ariaLabel: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default function CardButtonDesktop({ headerText, tools, subText, image, altLabel, ariaLabel, links }) {
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
          {links.map((link, value) => <CardButtonLink key={`link-${value}`} {...link} />)}
        </div>
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
      </div>
    </Paper>
  );
}