import React from 'react';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import { makeStyles } from '@material-ui/core/styles';
import Section from './Section.js';
import commonStyles from './../../styling/commonStyles.js';

const useStyles = makeStyles({
  education: {
    '& *': {
      transition: ".5s ease-in-out"
    },
    marginTop: 30,
  },
  courseworkItemsWrapper: {
    marginTop: 16,
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
});

export default function Education() {
  const classes = useStyles();
  const coursework = [
    "Data Structures and Algorithms",
    "Information and Database Systems",
    "Programming Language Concepts",
    "Professional Communication for Engineers",
    "Intro to Software Engineering",
    "Project Methodologies",
    "Principles of Interaction and Usability",
    "Human-Computer Interaction",
    "Computer Architecture",
    "Computer Network Fundamentals",
    "Operating Systems"
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
      <div style={{display:'flex'}}>
        <Typography component="span" variant='h5' color='textPrimary' style={{flexGrow:1}}>
          University of Florida
        </Typography>
        <span style={{marginRight:'4rem'}}>
          <Typography component="span" variant='body1' color='primary'>
            <b>GPA:</b>
          </Typography>
          <Typography component="span" variant='body1' color='textPrimary'>
            &nbsp;3.94
          </Typography>
        </span>
      </div>
      <Typography className={classes.gpa} component="span" variant='body1' color='textPrimary'>
        Computer Science Major
      </Typography>
      <Typography className={classes.gpa} component="span" variant='body1' color='textSecondary'>
        &nbsp; | Digital Arts Minor
      </Typography>
      <br/>
      <Typography component='p' variant='h6' color='textPrimary' style={{marginTop: 24}}>
        Relevant Coursework:
      </Typography>
      <div className={classes.courseworkItemsWrapper}>
        <CourseworkItems/>
      </div>
    </Section>
  );
}