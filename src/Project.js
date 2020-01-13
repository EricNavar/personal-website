import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
}));

export default function Project(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography component="h3">
        {props.title}
      </Typography>
      <Typography component="h3">
        {props.description}
      </Typography>
    </div>
  );
}