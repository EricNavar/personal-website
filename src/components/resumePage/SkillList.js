import React from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Section from './Section';
import GitIcon from './../../assets/svg/git-white.svg';
import CppIcon from './../../assets/svg/cpp-white.svg';
import JavaIcon from './../../assets/svg/java-white.svg';
import ReactIcon from './../../assets/svg/react-white.svg';
import MatlabIcon from './../../assets/svg/matlab-white.svg';
import JavascriptIcon from './../../assets/svg/javascript-white.svg';
import HtmlIcon from './../../assets/svg/html5-white.svg';
import CssIcon from './../../assets/svg/css3-white.svg';
import TypescriptIcon from './../../assets/svg/typescript-white.svg';
import MySqlIcon from './../../assets/svg/mysql-white.svg';
import PythonIcon from './../../assets/svg/python-white.svg';
import AwsIcon from './../../assets/svg/aws-white.svg';
import MongoDbIcon from './../../assets/svg/mongodb-white.svg';
import commonStyles from './../../commonStyles.js';

const useStyles = makeStyles((theme) => ({
  paper: {
    textTransform: "none",
    textAlign: "center",
    border: "5px solid white",
    borderRadius: 8,
    color: "white",
    transition: ".5s ease-in-out"
  },
  image: {
    height: 40
  },
  gridItem: {

  }
}));

function SkillItem({ skill, icon }) {
  const classes = useStyles();
  const commonClasses = commonStyles();
  return (
    <Grid item xs={4} sm={3} md={4} lg={2} className={classes.gridItem}>
      <Paper className={`${classes.paper} ${commonClasses.backgroundGradient}`} elevation={3} >
        <img className={classes.image} src={icon} alt={skill + "icon"}/>
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

export default function SkillList() {
  return (
    <Section title="Skills">
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="stretch"
        spacing={1}
      >
        <SkillItem skill="C++" icon={CppIcon} />
        <SkillItem skill="Java" icon={JavaIcon} />
        <SkillItem skill="Git" icon={GitIcon} />
        <SkillItem skill="HTML" icon={HtmlIcon} />
        <SkillItem skill="CSS" icon={CssIcon} />
        <SkillItem skill="Javascript" icon={JavascriptIcon} />
        <SkillItem skill="TypeScript" icon={TypescriptIcon} />
        <SkillItem skill="React" icon={ReactIcon} />
        <SkillItem skill="AWS" icon={AwsIcon} />
        <SkillItem skill="MATLAB" icon={MatlabIcon} />
        <SkillItem skill="MySQL" icon={MySqlIcon} />
        <SkillItem skill="Python" icon={PythonIcon} />
        <SkillItem skill="MongoDB" icon={MongoDbIcon} />
      </Grid>
    </Section>
  );
}