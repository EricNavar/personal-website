import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

export default function SimpleList() {
  return (
    <List component="nav" aria-label="secondary mailbox folders">
      <ListItem>
        <ListItemText primary="C++" />
      </ListItem>
      <ListItem>
        <ListItemText primary="Java" />
      </ListItem>
      <ListItem>
        <ListItemText primary="React" />
      </ListItem>
      <ListItem>
        <ListItemText primary="Git" />
      </ListItem>
    </List>
  );
}