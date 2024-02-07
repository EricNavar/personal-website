import React from 'react';

import { Grid, Paper, PaperProps, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import useTheme from '@mui/material/styles/useTheme';

import { Skill } from '../../commonTypes';
import { Section } from '../Section';

const StyledPaper = styled(Paper)<PaperProps>(({ theme }) => ({
  textTransform: 'none',
  textAlign: 'center',
  padding: 5,
  borderRadius: 6,
  transition: '.5s ease-in-out',
  height: '100%',
  '& svg': {
    marginLeft: 'auto',
    marginRight: 'auto',
    fill: theme.gradientPaper ? theme.gradientPaper.color : '',
  },
  alignContent: 'center',
  ...theme.gradientPaper,
}));

const StyledGridItem = styled(Grid)({
  marginBottom: 12,
});

type SkillItemProps = {
  icon: JSX.Element;
  skill: string;
};

function SkillItem(props: SkillItemProps) {
  const { icon, skill } = props;
  const theme = useTheme();
  return (
    <StyledGridItem item xs={6} sm={4} xl={3}>
      <StyledPaper elevation={1} sx={theme.paper}>
        {icon}
        <Typography variant="body1" align="center">
          {skill}
        </Typography>
      </StyledPaper>
    </StyledGridItem>
  );
}

type SkillListProps = {
  skills: Skill[];
};

function SkillList(props: SkillListProps): JSX.Element {
  const { skills } = props;
  return (
    <Section title="Skills">
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="stretch"
        spacing={1}
      >
        {skills.map((skill) => (
          <SkillItem
            skill={skill.title}
            key={`skill-${skill.title}`}
            icon={<img height="48px" width="48px" src={skill.icon} />}
          />
        ))}
      </Grid>
    </Section>
  );
}

export { SkillList };
