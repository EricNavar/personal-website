import React from 'react';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
  parent: {
    display: "flex",
    color:'textSecondary',
    variant: 'body2'
  },
  position: {
    flex: 1,
    textAlign: "left",
  },
  time_period: {
    flex: 1,
    textAlign: "right",
  }
}));

export default function InvolvementItem(props) {
  const classes = useStyles();
  const bool = Array.isArray(props.description);
  if (bool)
  {
    const listItems = props.description.map((x) =>
      <Typography>
        {x}
      </Typography>
    );
    return(
      <div>
        {listItems}
      </div>
    );
  }
  return (
    <div className={classes.root}>
      <Typography variant="h5">
        {bool}
      </Typography>
      <Typography variant="h5">
        {props.title}
      </Typography>
      <div className={classes.parent}>
        <Typography className={classes.position}>
          {props.position}
        </Typography>
        <Typography className={classes.time_period}>
          {props.time_period}
        </Typography>
      </div>
      <Typography>
      </Typography>
    </div>
  );
}