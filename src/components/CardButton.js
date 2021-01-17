import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex'
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    width: '65%'
  },
  content: {
    flex: '1 0 auto',
    maxWidth: 'calc(100% - 16px)',
    width: 'max-content',
    padding:8
  },
  image: {
    width: '35%',
  },
  playIcon: {
    height: 38,
    width: 38
  },
}));

export default function HomePageButton({headerText, subText, image, link, alt}) {
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card className={classes.root} elevation={3}>
        <ButtonBase href={link} style={{maxWidth:'100%'}}>
          <img
            className={classes.image}
            src={image}
            alt={alt}
          />
          <div className={classes.details}>
            <div className={classes.content}>
              <Typography color="textPrimary" component="p" variant="h6">
                {headerText}
              </Typography>
              <Typography color="textSecondary" variant="subtitle1">
                {subText}
              </Typography>
            </div>
          </div>
        </ButtonBase>
      </Card>
    </Grid>
  );
}
