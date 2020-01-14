import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: "center",
    padding: theme.spacing(3, 2),
    color: 'white',
    margin: "auto",
    display: "flex",
  },
  flex: {
    
  },
  media: {
    height: 200,
    width: 200,
  }
}));

export default function FrontPage(props) {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Typography gutterBottom variant="h3" component="h2">
        Eric Navar
      </Typography>
      <CardMedia
        className={classes.media}
        image={require ("./images/ProfilePic.jpg")}
        title="Eric Navar"
      />
    </Box>
  );
}