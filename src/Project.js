import React from 'react';
import Link from '@material-ui/core/Link';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
}));

export default function Project(props) {
  const classes = useStyles();
  let link = null;
  if (props.link != null)
  {
    link = (
      <ListItem>
        <Link href={props.link}>
          Link to repository
        </Link>
      </ListItem>
    );
  }
  return (
    <div className={classes.root}>
      <Typography variant="h5">
        {props.title}
      </Typography>
      <List>
        <ListItem>
          {props.description}
        </ListItem>
        {link}
      </List>
    </div>
  );
}