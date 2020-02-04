import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import BackgroundHeader from "./images/Banner.png"

const useStyles = makeStyles(theme => ({
  root: {
    color: 'white',
    margin: "auto",
    display: "flex",
    flexGrow: 2,
    backgroundImage: 'url('+ BackgroundHeader+')',
    height: "100%",
    padding: theme.spacing(7, 2),
  },
  profile: {
    height: 200,
    width: 200,
  },
}));

export default function Header(props) {
  const classes = useStyles();
  return (
    <Grid 
      className={classes.root}
      justify="center"
      spacing={6}
    >
      <Typography gutterBottom variant="h1">
        Eric Navar
      </Typography>
    </Grid>
  );
}