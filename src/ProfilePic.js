import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardContent';

const useStyles = makeStyles(theme => ({
  card: {
    height: 300,
    width: 300,
  },
  media: {
    height: 200,
    width: 200,
  }
}));

export default function FrontPage(props) {
  const classes = useStyles();
  return (
    <div className={classes.card}>
      <CardMedia
        className={classes.media}
        image={require ("./images/ProfilePic.jpg")}
        title="Eric Navar"
      />
      <Typography gutterBottom variant="h3" component="h2">
        Eric Navar
      </Typography>
      <Typography variant="body2" color="textSecondary" component="p">
        Computer Science Major at UF
      </Typography>
    </div>
  );
}