import React from 'react';
import SkillList from './../components/SkillList';
import Header from './../components/Header';
import PersonalStatement from './../components/PersonalStatement';
import InvolvementList from './../components/InvolvementList';
import Education from './../components/Education';
import Footer from './../components/Footer';

export default function Home() {
  return (
    <React.Fragment>
      <Header/>
      <div style={{marginRight: 40, marginLeft: 40}}>
        <PersonalStatement/>
        <SkillList/>
        <InvolvementList/>
        <Education/>
      </div>
      <Footer/>
    </React.Fragment>
  );
}