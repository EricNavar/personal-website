import React from 'react';
import Grid from '@material-ui/core/Grid';
import SkillList from './../components/SkillList';
import Header from './../components/Header';
import PersonalStatement from './../components/PersonalStatement';
import InvolvementList from './../components/InvolvementList';
import Education from './../components/Education';
import Footer from './../components/Footer';
import Experience from './../components/Experience';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  background: {
    background: theme.palette.background.default
  }
}));

export default function Home({darkMode, handleDarkModeClick}) {
  const classes = useStyles();
  return (
    <div className={classes.background}>
      <Header darkMode={darkMode} handleDarkModeClick={handleDarkModeClick}/>
      <div style={{marginRight: 40, marginLeft: 40}}>
        <PersonalStatement/>
        <Grid container spacing={4} justify='center'>
          <Grid item sm={12} md={6}>
            <SkillList/>
          </Grid>
          <Grid item sm={12} md={6}>
            <Education/>
          </Grid>
        </Grid>
        <Experience/>
        <InvolvementList/>
      </div>
      <Footer top={false}/>
    </div>
  );
}