import React, { Suspense, lazy } from 'react';
import { Typography, Paper, PaperProps, Grid } from '@mui/material';
//local files
import { Section } from './Section';
import { styled } from '@mui/material/styles';
import useTheme from '@mui/material/styles/useTheme';
const GitIcon = lazy(() => import('../../assets/skills/git-white'));
const HtmlIcon = lazy(() => import('../../assets/skills/html5-css3-white'));
const JavaIcon = lazy(() => import('../../assets/skills/java-white'));
const ReactIcon = lazy(() => import('../../assets/skills/react-white'));
const PythonIcon = lazy(() => import('../../assets/skills/python-white'));
const JavascriptIcon = lazy(() => import('../../assets/skills/javascript-white'));
const CppIcon = lazy(() => import('../../assets/skills/cpp-white'));

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
    fill: theme.gradientPaper.color,
  },
  alignContent: 'center',
  display: 'grid',
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

function SkillList(): JSX.Element {
  return (
    <Section title="Skills">
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="stretch"
        spacing={1}
      >
        <SkillItem skill="Git">
          <Suspense fallback={<div />}><GitIcon /></Suspense>
        </SkillItem>
        <SkillItem skill="HTML/CSS">
          <Suspense fallback={<div />}><HtmlIcon /></Suspense>
        </SkillItem>
        <SkillItem skill="JavaScript/ TypeScript">
          <Suspense fallback={<div />}><JavascriptIcon /></Suspense>
        </SkillItem>
        <SkillItem skill="React / React Native">
          <Suspense fallback={<div />}><ReactIcon /></Suspense>
        </SkillItem>
        <SkillItem skill="Java">
          <Suspense fallback={<div />}><JavaIcon /></Suspense>
        </SkillItem>
        <SkillItem skill="Python">
          <Suspense fallback={<div />}><PythonIcon /></Suspense>
        </SkillItem>
        <SkillItem skill="C++">
          <Suspense fallback={<div />}><CppIcon /></Suspense>
        </SkillItem>
      </Grid>
    </Section>
  );
}
// <SkillItem skill="MongoDB"><Suspense fallback={<div/>}><MongoDbIcon/></Suspense></SkillItem>

export { SkillList };
