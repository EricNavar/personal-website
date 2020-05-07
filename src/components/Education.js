import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import Section from './Section';

export default function Education() {
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
      <Typography variant="h5">
        University of Florida
      </Typography>
      <Typography>
        GPA: 3.93
      </Typography>
      <Typography>
        May 2022
      </Typography>
      <Typography variant="h6">
        Relevant coursework
      </Typography>
      <List style={{width:'max-content'}}>
        <CourseworkListItems/>
      </List>
    </Section>
  );
}