import React from 'react';
import { Typography, Paper, Button } from '@material-ui/core';
import PropTypes from 'prop-types';
//local files
import {cardButtonStyles} from '../../styling/UXPortfolioStyling';

UXProject.propTypes = {
  headerText: PropTypes.string.isRequired,
  subText: PropTypes.array.isRequired,
};

function UXProject(props:any) {
  const { headerText, subText, image, wireframeLink, userflowLink, finalReportLink, prototypeLink } = props;
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
          {subText.map((paragraph:Array<string>, value1:number) => (
            <React.Fragment>
              {value1 !== 0 && <br key={`${headerText}-linebreak-${value1}`} className={classes.lineBreak} />}
              {paragraph.map((textPiece, value2) =>
                <span key={value2} className={value2 % 2 === 1 ? classes.underlined : ''}>
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

export { UXProject }
