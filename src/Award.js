import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
      padding: theme.spacing(3, 2),
    },
}));

export default function Award(props) {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Typography variant="h5" component="h3">
        {props.name}
      </Typography>
      <Typography component="p">
        {props.description}
      </Typography>
    </Paper>
  );
}