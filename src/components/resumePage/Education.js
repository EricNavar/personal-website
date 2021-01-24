import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import Section from './Section.js';

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
    "Discrete Structures",
    "Intro to Computer Organization",
    "Data Structures and Algorithms",
    "Information and Database Systems",
    "Intro to Software Engineering",
    "Programming Language Concepts",
    "Professional Communication for Engineers"
  ];
  function CourseworkListItems() {
    return (
      coursework.map(course => 
        <ListItem key={course} divider dense color='textPrimary' style={{paddingTop: 0}}>
          <Typography variant='body1' color='textPrimary'>
            {course}
          </Typography>
        </ListItem>
      )
    )
  };

  return (
    <Section title="Education">
      <Typography component='span' variant='h5' color='textPrimary'>
        University of Florida
      </Typography>
      <Typography component='span' variant='overline' color='textSecondary' style={{marginLeft: 16, fontSize:14}}>
        May 2022
      </Typography>
      <Typography className={classes.gpa} variant='body1' color='textPrimary'>
        <b>GPA:</b> 3.93
      </Typography>
      <Typography component='p' variant='h6' color='textPrimary'>
        Relevant Coursework:
      </Typography>
      <List style={{width:'max-content'}}>
        <CourseworkListItems/>
      </List>
    </Section>
  );
}