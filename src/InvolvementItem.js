import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
  position: {
    left: "100%",
  },
  time_period: {
    flex: 1
  }
}));

export default function InvolvementItem(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h5">
        {props.title}
      </Typography>
      <Typography className={classes.position}>
        {props.position}
      </Typography>
      <Typography className={classes.time_period}>
        {props.time_period}
      </Typography>
      <Typography>
        {props.description}
      </Typography>
    </div>
  );
}