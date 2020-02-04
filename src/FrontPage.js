import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import SkillList from './SkillList';
import Header from './Header';
import PersonalStatement from './PersonalStatement';
import ProjectList from './ProjectList';
import ContactInfo from './ContactInfo';
import InvolvementList from './InvolvementList';
import Education from './Education';

const useStyles = makeStyles(theme => ({
    root: {
      padding: theme.spacing(3, 2),
      background: 'linear-gradient(0deg, #203391 30%, #000000 90%)',
      display: "block",
      justify:"center",
    },
}));

function FrontPage(props) {
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

export default FrontPage;