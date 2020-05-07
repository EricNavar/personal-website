import React from 'react';
import SkillList from './../components/SkillList';
import Header from './../components/Header';
import PersonalStatement from './../components/PersonalStatement';
import InvolvementList from './../components/InvolvementList';
import Education from './../components/Education';
import Footer from './../components/Footer';
import Grid from '@material-ui/core/Grid';

export default function Home() {
  return (
    <React.Fragment>
      <Header/>
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
        <InvolvementList/>
      </div>
      <Footer/>
    </React.Fragment>
  );
}