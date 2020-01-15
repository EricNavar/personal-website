import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Title from './Title';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
}));

export default function Education(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      <Title title="Education"/>
      <Typography variant="h4">
        University of Florida
      </Typography>
      <Typography>
        GPA: 3.92
      </Typography>
      <Typography>
        May 2022
      </Typography>
      <Typography variant="h6">
        Relevant coursework
      </Typography>
      <List>
        <ListItem>
          Programming 1
        </ListItem>
        <ListItem>
          Programming 2
        </ListItem>
        <ListItem>
          Discrete Structures
        </ListItem>
        <ListItem>
          Data Structures
        </ListItem>
        <ListItem>
          Into to Computer Organization
        </ListItem>
        <ListItem>
          Software Engineering (In progress)
        </ListItem>
        <ListItem>
          Information and Databases (In progress)
        </ListItem>
      </List>
    </div>
  );
}