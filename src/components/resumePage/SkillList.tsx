import React from 'react';
import { Typography, Paper, PaperProps, Grid } from '@mui/material';
//local files
import { Section } from './Section';
import { styled } from '@mui/material/styles';
import useTheme from '@mui/material/styles/useTheme';
import { Skill } from '../../commonTypes';

const StyledPaper = styled(Paper)<PaperProps>(({ theme }) => ({
  textTransform: 'none',
  textAlign: 'center',
  border: '5px solid white',
  borderRadius: 8,
  transition: '.5s ease-in-out',
  height: '100%',
  '& svg': {
    marginLeft: 'auto',
    marginRight: 'auto',
    fill: theme.gradientPaper ? theme.gradientPaper.color : '',
  },
  alignContent: 'center',
  ...theme.gradientPaper
}));

const StyledGridItem = styled(Grid)({
  marginBottom: 12,
});

type SkillItemProps = {
  children: JSX.Element,
  skill: string
}

function SkillItem(props: SkillItemProps) {
  const { children, skill } = props;
  const theme = useTheme();
  return (
    <StyledGridItem item xs={4}>
      <StyledPaper elevation={3} sx={theme.paper}>
        {children}
        <Typography
          variant='body1'
          align='center'
        >
          {skill}
        </Typography>
      </StyledPaper>
    </StyledGridItem >
  );
}

type SkillListProps = {
  skills: Skill[];
}

function SkillList(props: SkillListProps): JSX.Element {
  const {skills} = props;
  return (
    <Section title="Skills">
      <Grid
        container
        direction='row'
        justifyContent='center'
        alignItems='stretch'
        spacing={1}
      >
        {skills.map(skill => 
          <SkillItem skill={skill.title} key={`skill-${skill.title}`}>
            <img src={skill.icon}/>
          </SkillItem>
        )}
      </Grid>
    </Section>
  );
}
// <SkillItem skill="MongoDB"><Suspense fallback={<div/>}><MongoDbIcon/></Suspense></SkillItem>

export { SkillList };
