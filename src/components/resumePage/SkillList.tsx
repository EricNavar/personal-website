import React, { Suspense, lazy } from 'react';
import { Typography, Paper, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
//local files
import { Section } from './Section';
import { commonStyles } from '../../styling/commonStyles';

const GitIcon = lazy(() => import('../../assets/skills/git-white'));
const AwsIcon = lazy(() => import('../../assets/skills/aws-white'));
const HtmlIcon = lazy(() => import('../../assets/skills/html5-css3-white'));
const JavaIcon = lazy(() => import('../../assets/skills/java-white'));
const ReactIcon = lazy(() => import('../../assets/skills/react-white'));
const MySqlIcon = lazy(() => import('../../assets/skills/mysql-white'));
const PythonIcon = lazy(() => import('../../assets/skills/python-white'));
const JavascriptIcon = lazy(() => import('../../assets/skills/javascript-white'));
const CppIcon = lazy(() => import('../../assets/skills/cpp-white'));

const useStyles = makeStyles({
  paper: {
    textTransform: 'none',
    textAlign: 'center',
    border: '5px solid white',
    borderRadius: 8,
    color: 'white',
    transition: '.5s ease-in-out',
    height: '100%',
    '& svg': {
      marginLeft: 'auto',
      marginRight: 'auto'
    },
    alignContent: 'center',
    display: 'grid'
  },
  image: {
    height: 40
  },
  gridItem: {
    marginBottom: 12
  }
});

type SkillItemProps = {
  children: JSX.Element,
  skill: string
}

function SkillItem(props: SkillItemProps) {
  const { children, skill } = props;
  const classes = useStyles();
  const commonClasses = commonStyles();
  return (
    <Grid item xs={4} className={classes.gridItem}>
      <Paper className={`${classes.paper} ${commonClasses.backgroundGradient}`} elevation={3} >
        {children}
        <Typography
          variant='body1'
          align='center'
        >
          {skill}
        </Typography>
      </Paper>
    </Grid>
  );
}

function SkillList():JSX.Element {
  return (
    <Section title="Skills">
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="stretch"
        spacing={1}
      >
        <SkillItem skill="Git"><Suspense fallback={<div />}><GitIcon /></Suspense></SkillItem>
        <SkillItem skill="HTML/CSS"><Suspense fallback={<div />}><HtmlIcon /></Suspense></SkillItem>
        <SkillItem skill="JavaScript/ TypeScript"><Suspense fallback={<div />}><JavascriptIcon /></Suspense></SkillItem>
        <SkillItem skill="React / React Native"><Suspense fallback={<div />}><ReactIcon /></Suspense></SkillItem>
        <SkillItem skill="Java"><Suspense fallback={<div />}><JavaIcon /></Suspense></SkillItem>
        <SkillItem skill="Python"><Suspense fallback={<div />}><PythonIcon /></Suspense></SkillItem>
        <SkillItem skill="C++"><Suspense fallback={<div />}><CppIcon /></Suspense></SkillItem>
        <SkillItem skill="AWS"><Suspense fallback={<div />}><AwsIcon /></Suspense></SkillItem>
        <SkillItem skill="MySQL"><Suspense fallback={<div />}><MySqlIcon /></Suspense></SkillItem>
      </Grid>
    </Section>
  );
}
// <SkillItem skill="MongoDB"><Suspense fallback={<div/>}><MongoDbIcon/></Suspense></SkillItem>

export { SkillList };
