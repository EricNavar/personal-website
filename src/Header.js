import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    color: 'white',
    textAlign: "center",
    margin: "auto",
    display: "flex",
  },
  profile: {
    height: 200,
    width: 200,
  },
  banner: {
    //height: 200,
    //width: 200,
    margin: "auto",
  }
}));

export default function Header(props) {
  const classes = useStyles();
  return (
    <Box
      className={classes.root}
    >
      <CardMedia
          className={classes.media}
          image={require ("./images/Banner.jpg")}
          title="Banner"
      />
      <Grid 
        className={classes.root}
        container
        justify="center"
        alignItems="center"
      >
        <Typography gutterBottom variant="h3" component="h2">
          Eric Navar
        </Typography>
        <CardMedia
          className={classes.profile}
          image={require ("./images/ProfilePic.jpg")}
          title="Eric Navar"
        />
      </Grid>
    </Box>
  );
}