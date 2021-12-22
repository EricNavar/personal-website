import React from 'react';
import { Typography, Paper, Button } from '@material-ui/core';
//local files
import { cardButtonStyles } from '../../styling/UXPortfolioStyling';

type UXProjectProps = {
  headerText: string,
  subText: Array<Array<string>>,
  image: string,
  wireframeLink: string,
  userflowLink: string,
  finalReportLink: string,
  prototypeLink: string
}

function UXProject(props: UXProjectProps):JSX.Element {
  const { headerText, subText, image, wireframeLink, userflowLink, finalReportLink, prototypeLink } = props;
  const classes = cardButtonStyles();

  return (
    <Paper className={classes.itemWrapper} elevation={4}>
      <div className={classes.item}>
        <div className={classes.cardHeader}>
          <div className={classes.cardHeaderText}>
            <img src={image} alt='altLabel' width='400px' style={{ maxWidth: '100%' }} />
          </div>
        </div>
        <h1 className={classes.invisibleHeader}>{headerText}</h1>
        <Typography color='textPrimary' variant='body1' className={classes.subTextContainer}>
          {subText.map((paragraph: Array<string>, value1: number) => (
            <React.Fragment key={value1}>
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
          <Button variant='outlined' target='_blank' href={wireframeLink}>
            Wireframes
          </Button>
        }
        {userflowLink &&
          <Button variant='outlined' target='_blank' href={userflowLink} style={{ marginLeft: 20, marginRight: 20 }}>
            User Flow
          </Button>
        }
        {prototypeLink &&
          <Button variant='outlined' target='_blank' href={finalReportLink} style={{ marginRight: 20 }}>
            Prototype
          </Button>
        }
        {finalReportLink &&
          <Button variant='outlined' target='_blank' href={finalReportLink}>
            Final Report
          </Button>
        }
      </div>
    </Paper>
  );
}

export { UXProject };
