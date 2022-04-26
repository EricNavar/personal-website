import React from 'react';
import { Typography, TypographyProps, Chip } from '@mui/material';
import { Section } from './Section';
import { backgroundGradient } from '../../styling/commonStyles';
import { styled } from '@mui/material/styles';

const EducationSection = styled(Section)({
  '& *': {
    transition: '.5s ease-in-out'
  },
  marginTop: 30,
});

const CourseworkItemsWrapper = styled('div')({
  marginTop: 16,
  display: 'flex',
  justifyContent: 'left',
  flexWrap: 'wrap',
  '& > *': {
    margin: 4
  },
  position: 'relative'
});

const CourseworkItem = styled(Chip)({
  color: 'white',
  border: 0,
  boxShadow: 'rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px'
});

const RelevantCousework = styled(Typography)<TypographyProps>(({ theme }) => ({
  marginTop: 24
}));

const University = styled(Typography)({
  flexGrow: 1
});

const GPA = styled('span')({
  marginRight: '4rem'
});

const FirstLine = styled('div')({
  display: 'flex'
});

function CourseworkItems(): JSX.Element {
  const coursework = [
    'Intro Software Engineering',
    'Project Methodologies',
    'Information & Database Systems',
    'Data Structures & Algorithms',
    'Interaction & Usability',
    'Human-Computer Interaction',
    'UX Design'
  ];
  return (
    <React.Fragment>
      {coursework.map((course: string) =>
        <CourseworkItem key={course} label={course} sx={backgroundGradient} />
      )}
    </React.Fragment>
  );
}

function Education(): JSX.Element {
  return (
    <EducationSection title='Education'>
      <FirstLine>
        <University variant='h5' color='textPrimary'>
          University of Florida
        </University>
        <GPA>
          <Typography component='span' variant='body1' color='primary'>
            <b>GPA:</b>
          </Typography>
          <Typography component='span' variant='body1' color='textPrimary'>
            &nbsp;3.89
          </Typography>
        </GPA>
      </FirstLine>
      <Typography component='span' variant='body1' color='textPrimary'>
        B.S. Computer Science
      </Typography>
      <Typography component='span' variant='body1' color='textSecondary'>
        &nbsp;| Digital Arts Minor
      </Typography>
      <br />
      <RelevantCousework
        component='p'
        variant='h6'
        color='textPrimary'
      >
        Relevant Coursework:
      </RelevantCousework>
      <CourseworkItemsWrapper>
        <CourseworkItems />
      </CourseworkItemsWrapper>
    </EducationSection >
  );
}

export { Education };
