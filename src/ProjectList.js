import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Project from './Project';
import Title from './Title';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
}));

export default function ProjectList(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Title title="Projects"/>
      <Project 
        title = "Trash Tracker"
        description = "Hack FSU"
      />
      <Project 
        title = "ARM simulator"
        description = "sample description"
      />
    </div>
  );
}