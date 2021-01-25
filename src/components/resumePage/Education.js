import React from 'react';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import Section from './Section.js';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  gpa: {
    '& b': {
      color: '#151965'
    }
  },
  courseworkItemsWrapper: {
    display: 'flex',
    justifyContent: 'left',
    flexWrap: 'wrap',
    '& > *': {
      margin: 4
    },
    position: "relative"
  },
  courseworkItem: {
    backgroundImage: "linear-gradient(rgba(66,179,245,1) 0%, rgba(95,44,130,1) 100%)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    color: "white",
    border: 0
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
    "Professional Communication for Engineers",
    "Operating Systems",
    "Project Methodologies",
    "Principles of Interaction and Usability",
    "Natural Language Processing"
  ];
  function CourseworkItems() {
    return (
      coursework.map(course => 
        <Chip key={course} label={course} className={classes.courseworkItem}/>
      )
    )
  };

  return (
    <Section title="Education">
      <Typography component="p" variant='h5' color='textPrimary'>
        University of Florida
      </Typography>
      <Typography className={classes.gpa} component="span" variant='body1' color='textPrimary'>
        Computer Science Major
      </Typography>
      <Typography className={classes.gpa} component="span" variant='body1' color='textSecondary'>
        &nbsp; | Digital Arts Minor
      </Typography>
      <Typography className={classes.gpa} variant='body1' color='textPrimary'>
        <b>GPA:</b> 3.95
      </Typography>
      <Typography component='p' variant='h6' color='textPrimary'>
        Relevant Coursework:
      </Typography>
      <div className={classes.courseworkItemsWrapper}>
        <CourseworkItems/>
      </div>
    </Section>
  );
}