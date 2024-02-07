import React from 'react';

import { Chip, Typography, TypographyProps } from '@mui/material';
import { styled } from '@mui/material/styles';

import { Section } from '../Section';

const EducationSection = styled(Section)({
  '& *': {
    transition: '.5s ease-in-out',
  },
  marginTop: 30,
});

const CourseworkItemsWrapper = styled('div')({
  marginTop: 16,
  display: 'flex',
  justifyContent: 'left',
  flexWrap: 'wrap',
  '& > *': {
    margin: 4,
  },
  position: 'relative',
});

const CourseworkItem = styled(Chip)(({ theme }) => ({
  border: 0,
  background:
    theme.palette.mode === 'light'
      ? theme.palette.grey['800']
      : `linear-gradient(${theme.palette.info.light} 0%, ${theme.palette.info.dark} 100%)`,
}));

const RelevantCousework = styled(Typography)<TypographyProps>({
  marginTop: 24,
});

const University = styled(Typography)`
  flex-grow: 1;
  font-size: 1.25rem;
`;

const Line = styled('div')`
  display: flex;
  flex-wrap: wrap;
  ${(props) => props.theme.breakpoints.down('xs')} {
    display: block;
  }
`;

const MinorText = styled(Typography)`
  flex-grow: 1;
`;

function CourseworkItems(props: EducationProps): JSX.Element {
  return (
    <React.Fragment>
      {props.relevantCoursework.map((course: string) => (
        <CourseworkItem key={course} label={course} size='small'/>
      ))}
    </React.Fragment>
  );
}

type EducationProps = {
  relevantCoursework: string[];
};

function Education(props: EducationProps): JSX.Element {
  const gpa = 3.9;
  return (
    <EducationSection title="Education">
      <Line>
        <University color="textPrimary">University of Florida</University>
        <Typography component="span" variant="body1" color="textPrimary">
          Fall Class of 2022
        </Typography>
      </Line>
      <Line>
        <Typography component="span" variant="body1" color="textPrimary">
          B.S. Computer Science
        </Typography>
        <MinorText variant="body1" color="textSecondary">
          &nbsp;| Digital Arts Minor
        </MinorText>
        <div>
          <Typography component="span" variant="body1" color="primary">
            <b>GPA:</b>
          </Typography>
          <Typography component="span" variant="body1" color="textPrimary">
            &nbsp;{gpa}
          </Typography>
        </div>
      </Line>
      <RelevantCousework variant="h6" color="textPrimary">
        Relevant Coursework:
      </RelevantCousework>
      <CourseworkItemsWrapper>
        <CourseworkItems relevantCoursework={props.relevantCoursework} />
      </CourseworkItemsWrapper>
    </EducationSection>
  );
}

export { Education };
