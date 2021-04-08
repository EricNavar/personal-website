import React from 'react';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import { makeStyles } from '@material-ui/core/styles';
import Section from './Section.js';
import commonStyles from './../../commonStyles.js';

const useStyles = makeStyles((theme) => ({
  education: {
    '& *': {
      transition: ".5s ease-in-out"
    },
    marginTop: 30
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
    color: "white",
    border: 0,
    boxShadow: "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px"
  }
}));

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
    const commonClasses = commonStyles();
    return (
      coursework.map(course => 
        <Chip key={course} label={course} className={`${classes.courseworkItem} ${commonClasses.backgroundGradient}`}/>
      )
    )
  };

  return (
    <Section title="Education" className={classes.education}>
      <Typography component="p" variant='h5' color='textPrimary'>
        University of Florida
      </Typography>
      <Typography className={classes.gpa} component="span" variant='body1' color='textPrimary'>
        Computer Science Major
      </Typography>
      <Typography className={classes.gpa} component="span" variant='body1' color='textSecondary'>
        &nbsp; | Digital Arts Minor
      </Typography>
      <br/>
      <Typography component="span" variant='body1' color='primary'>
        <b>GPA:</b>
      </Typography>
      <Typography component="span" variant='body1' color='textPrimary'>
        &nbsp;3.95
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