import React from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import PropTypes from "prop-types";
//local files
import {cardButtonStyles} from '../../styling/UXPortfolioStyling.js';

UXProject.propTypes = {
  headerText: PropTypes.string.isRequired,
  subText: PropTypes.array.isRequired,
};

export default function UXProject({ headerText, subText, image, wireframeLink, userflowLink, finalReportLink, prototypeLink }) {
  const classes = cardButtonStyles();

  return (
    <Paper className={classes.itemWrapper} elevation={4}>
      <div className={classes.item}>
        <div className={classes.cardHeader}>
          <div className={classes.cardHeaderText}>
            <img src={image} alt='altLabel' width='400px' style={{maxWidth:'100%'}}/>
          </div>
        </div>
        <h1 className={classes.invisibleHeader}>{headerText}</h1>
        <Typography color='textPrimary' variant='body1' className={classes.subTextContainer}>
          {subText.map((paragraph, value1) => (
            <React.Fragment>
              {value1 !== 0 && <br key={`${headerText}-linebreak-${value1}`} className={classes.lineBreak} />}
              {paragraph.map((textPiece, value2) =>
                <span key={value2} className={value2 % 2 === 1 ? classes.underlined : ""}>
                  {textPiece}
                </span>
              )}
            </React.Fragment>
          ))}
        </Typography>
        {wireframeLink &&
          <Button variant='outlined' target="_blank" href={wireframeLink}>
            Wireframes
          </Button>
        }
        {userflowLink && 
          <Button variant='outlined' target="_blank" href={userflowLink} style={{marginLeft:20, marginRight:20}}>
            User Flow
          </Button>
        }
        {prototypeLink && 
          <Button variant='outlined' target="_blank" href={finalReportLink} style={{marginRight:20}}>
            Prototype
          </Button>
        }
        {finalReportLink && 
          <Button variant='outlined' target="_blank" href={finalReportLink}>
            Final Report
          </Button>
        }
      </div>
    </Paper>
  );
}