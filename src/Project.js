import React from 'react';
import Link from '@material-ui/core/Link';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(1, 2),
  },
}));

export default function Project(props) {
  const classes = useStyles();
  let title = null;
  if (props.link == null)
    title = (
      <Typography variant="h5">
        {props.title}
      </Typography>
    );
  else
    title = (
      <Link variant="h5" href={props.link}>
        {props.title}
      </Link>
    );
  return (
    <div className={classes.root}>
      {title}
      <List>
        <ListItem>
          {props.description}
        </ListItem>
      </List>
    </div>
  );
}