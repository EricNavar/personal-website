import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import Section from './Section';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  gpa: {
    '& b': {
      color: '#151965'
    }
  }
});

export default function Education() {
  const classes = useStyles();
  const coursework = [
    "Programming 1 & 2",
    "Discrete Structures",
    "Data Structures",
    "Computer Organization",
    "Software Engineering",
    "Intro to Databases"
  ];
  function CourseworkListItems() {
    return (
      coursework.map(course => 
        <ListItem key={course} divider dense>
          {course}
        </ListItem>
      )
    )
  };

  return (
    <Section title="Education">
      <Typography variant="h5" component='span'>
        University of Florida
      </Typography>
      <Typography component='span' variant='overline' color='textSecondary' style={{marginLeft: 16, fontSize:14}}>
        May 2022
      </Typography>
      <Typography className={classes.gpa} variant='body1'>
        <b>GPA:</b> 3.93
      </Typography>
      <Typography component='p' variant="h6">
        Relevant Coursework
      </Typography>
      <List style={{width:'max-content'}}>
        <CourseworkListItems/>
      </List>
    </Section>
  );
}