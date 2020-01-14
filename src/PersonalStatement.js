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
        I am a Computer Science student looking for experience. I can write software and work with teams I'm always eager to learn new things.
      </Typography>
      <Typography component="h3">
        <a download>Resume</a>
      </Typography>
    </div>
  );
}