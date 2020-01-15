import React from 'react';
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
        title = "ARM simulator"
        description = "A simulator that takes in binary instructions and can output and execute the equivalent ARM assembly instructions"
      />
      <Project 
        title = "Adventures of Flavio"
        description = "AOF description"
      />
    </div>
  );
}