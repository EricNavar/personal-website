import React from 'react';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import WebsiteLinks from './WebsiteLinks';
import SkillList from './SkillList';
import ProfilePic from './ProfilePic';
import PersonalStatement from './PersonalStatement';
import ProjectList from './ProjectList';
import ContactInfo from './ContactInfo';
import InvolvementList from './InvolvementList';
import Education from './Education';

const useStyles = makeStyles(theme => ({
    root: {
      padding: theme.spacing(3, 2),
      backgroundColor: '#222222',
    },
}));

function FrontPage(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ProfilePic/>
      <Paper>
        <ContactInfo/>
        <WebsiteLinks/>
        <PersonalStatement/>
        <SkillList/>
        <InvolvementList/>
        <ProjectList/>
        <Education/>
      </Paper>
    </div>
  );
}

export default FrontPage;