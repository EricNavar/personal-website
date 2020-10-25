import React from 'react';
import Grid from '@material-ui/core/Grid';
import SkillList from '../components/SkillList';
import Header from '../components/Header';
import PersonalStatement from '../components/PersonalStatement';
import InvolvementList from '../components/InvolvementList';
import Education from '../components/Education';
import Footer from '../components/Footer';
import Experience from '../components/Experience';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  background: {
    background: theme.palette.background.default
  },
  gridItem: {
    justifyContent: 'center',
    display: 'flex'
  },
  sectionContainer: {
    [theme.breakpoints.down('xs')]: {
      marginRight: 40,
      marginLeft: 40
    },
    [theme.breakpoints.up('sm')]: {
      marginRight: 80,
      marginLeft: 80
    },
  }
}));

export default function Portfolio({darkMode, handleDarkModeClick}) {
  React.useEffect(() => {
    document.title = 'Portfolio | Eric Navar';
    window.scrollTo({
      top: 0,
      left: 0,
    });
  },[]);
  const classes = useStyles();
  return (
    <div className={classes.background}>
      <Header darkMode={darkMode} handleDarkModeClick={handleDarkModeClick}/>
      <div className={classes.sectionContainer}>
        <PersonalStatement/>
        <Grid container spacing={4} justify='center'>
          <Grid id='skill-list-container' item sm={12} md={6} className={classes.gridItem}>
            <SkillList/>
          </Grid>
          <Grid id='education-container' item sm={12} md={6} className={classes.gridItem}>
            <Education/>
          </Grid>
        </Grid>
        <Experience/>
        <InvolvementList/>
        <div style={{height:40}}></div>
      </div>
      <Footer top={false}/>
    </div>
  );
}