import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { makeStyles } from '@material-ui/core/styles';
import Title from './Title';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(0, 2),
  },
}));

export default function SimpleList() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <List>
        <Title title="Skills"/>
        <ListItem>
          C++
        </ListItem>
        <ListItem>
          Java
        </ListItem>
        <ListItem>
          React
        </ListItem>
        <ListItem>
          Git
        </ListItem>
      </List>
    </div>
  );
}