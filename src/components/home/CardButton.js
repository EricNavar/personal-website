import React, {lazy, Suspense} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Grid from "@material-ui/core/Grid";
const CardButtonPhoto = lazy(() => import('./CardButtonPhoto'));

const useStyles = makeStyles({
  cardButton: {
    display: 'flex',
    height: "100%",
    borderRadius: 8
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    width: '55%'
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
  }
});

export default function HomePageButton({headerText, subText, image, link, alt}) {
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={6} lg={3}>
      <Card className={classes.cardButton} elevation={4}>
        <ButtonBase aria-label={alt} href={link} style={{width:'100%'}}>
          <Suspense fallback={<div/>}>
            <CardButtonPhoto image={image} alt={alt}/>
          </Suspense>          
          <div className={classes.details}>
            <div className={classes.content}>
              <Typography color="textPrimary" component="p" variant="h6">
                {headerText}
              </Typography>
              <Typography color="textSecondary" variant="subtitle2">
                {subText}
              </Typography>
            </div>
          </div>
        </ButtonBase>
      </Card>
    </Grid>
  );
}
