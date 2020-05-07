import React from 'react';
import Link from '@material-ui/core/Link';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(1, 2),
  },
}));

export default function Project({link, title, description}) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Link variant="h5" href={link}>
        {title}
      </Link>
      <List>
        <ListItem>
          {description}
        </ListItem>
      </List>
    </div>
  );
}