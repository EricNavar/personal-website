import React from 'react';
import Paper from '@material-ui/core/Paper';
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
      <Paper>
        <Typography component="h3">
          Trash Tracker
        </Typography>
        <Typography>
          Description
        </Typography>
      </Paper>
      <Paper>
        <Typography component="h3">
          ARM Assembly Simulator
        </Typography>
        <Typography>
          Description
        </Typography>
      </Paper>
    </div>
  );
}