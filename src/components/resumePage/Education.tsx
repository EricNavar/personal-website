import React from 'react';
import { Typography, Chip } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Section } from './Section';
import { commonStyles } from '../../styling/commonStyles';

const useStyles = makeStyles({
  education: {
    '& *': {
      transition: '.5s ease-in-out'
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
    position: 'relative'
  },
  courseworkItem: {
    color: 'white',
    border: 0,
    boxShadow: 'rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px'
  },
  relevantCoursework: {
    marginTop: 24
  },
  university: {
    flexGrow: 1
  },
  gpa: {
    marginRight: '4rem'
  },
  firstLine: {
    display: 'flex'
  }
});

function CourseworkItems():JSX.Element {
  const coursework = [
    'Data Structures and Algorithms',
    'Information and Database Systems',
    'Programming Language Concepts',
    'Professional Communication for Engineers',
    'Intro to Software Engineering',
    'Project Methodologies',
    'Principles of Interaction and Usability',
    'Human-Computer Interaction',
    'Computer Network Fundamentals',
  ];
  const classes = useStyles();
  const commonClasses = commonStyles();
  return (
    <React.Fragment>
      {coursework.map((course: string) =>
        <Chip key={course} label={course} className={`${classes.courseworkItem} ${commonClasses.backgroundGradient}`} />
      )}
    </React.Fragment>
  );
}

function Education():JSX.Element {
  const classes = useStyles();

  return (
    <Section title='Education' className={classes.education}>
      <>
        <div className={classes.firstLine}>
          <Typography component='span' variant='h5' color='textPrimary' className={classes.university}>
            University of Florida
          </Typography>
          <span className={classes.gpa}>
            <Typography component='span' variant='body1' color='primary'>
              <b>GPA:</b>
            </Typography>
            <Typography component='span' variant='body1' color='textPrimary'>
              &nbsp;3.9
            </Typography>
          </span>
        </div>
        <Typography component='span' variant='body1' color='textPrimary'>
          B.S. Computer Science
        </Typography>
        <Typography component='span' variant='body1' color='textSecondary'>
          &nbsp;| Digital Arts Minor
        </Typography>
        <br />
        <Typography
          component='p'
          variant='h6'
          color='textPrimary'
          className={classes.relevantCoursework}
        >
          Relevant Coursework:
        </Typography>
        <div className={classes.courseworkItemsWrapper}>
          <CourseworkItems />
        </div>
      </>
    </Section>
  );
}

export { Education };
