import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
}));

export default function PersonalStatement(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography component="h3">
        Hello my name is Eric Navar
      </Typography>
      <Typography component="h3">
        <a href="./images/ProfilePic.jpg" download>Resume</a>
      </Typography>
    </div>
  );
}