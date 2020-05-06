import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import SkillList from './../components/SkillList';
import Header from './../components/Header';
import PersonalStatement from './../components/PersonalStatement';
import ProjectList from './../components/ProjectList';
import ContactInfo from './../components/ContactInfo';
import InvolvementList from './../components/InvolvementList';
import Education from './../components/Education';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    background: 'linear-gradient(0deg, #203391 30%, #000000 90%)',
    display: "block",
    justify:"center",
  },
}));

export default function Home() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header/>
      <Paper square>
        <ContactInfo/>
        <PersonalStatement/>
      </Paper>
      <SkillList/>
      <InvolvementList/>
      <ProjectList/>
      <Education/>
    </div>
  );
}