import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import BackgroundHeader from "./images/Banner.png"

const useStyles = makeStyles(theme => ({
  root: {
    color: 'white',
    textAlign: "center",
    margin: "auto",
    display: "flex",
    flexGrow: 1,
    backgroundImage: 'url('+ BackgroundHeader+')',
  },
  profile: {
    height: 200,
    width: 200,
  },
}));

export default function Header(props) {
  const classes = useStyles();
  return (
    <div
      className={classes.root}
    >
      <Grid 
        container
        justify="center"
        alignItems="center"
        spacing={2}
      >
        <Grid item>
          <Typography gutterBottom variant="h3" component="h2">
            Eric Navar
          </Typography>
        </Grid>
        <Grid item>
        <CardMedia
          className={classes.profile}
          image={require ("./images/ProfilePic.jpg")}
          title="Eric Navar"
          />
        </Grid>
      </Grid>
    </div>
  );
}