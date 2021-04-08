import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
//local files
import SkillList from '../components/resumePage/SkillList';
import Education from '../components/resumePage/Education';
import Experience from '../components/resumePage/Experience';
import InvolvementList from '../components/resumePage/InvolvementList';
import PersonalStatement from '../components/resumePage/PersonalStatement';

const useStyles = makeStyles((theme) => ({
  background: {
    background: theme.palette.background.default,
    marginTop: 8
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
      marginRight: '10%',
      marginLeft: '10%'
    },
  },
  plead: {
    paddingTop: 40,
    paddingBottom: 40
  }
}));

export default function ResumePage({darkMode, toggleDarkMode}) {
  React.useEffect(() => {
    document.title = 'Resume | Eric Navar';
    window.scrollTo({
      top: 0,
      left: 0,
    });
  },[]);

  const classes = useStyles();
  return (
    <div className={classes.background}>
      <div className={classes.sectionContainer}>
        <PersonalStatement/>
        <Grid container spacing={10} justify='center'>
          <Grid id='skill-list-container' item sm={12} md={6} className={classes.gridItem}>
            <SkillList/>
          </Grid>
          <Grid id='education-container' item sm={12} md={6} className={classes.gridItem}>
            <Education/>
          </Grid>
        </Grid>
        <Experience/>
        <InvolvementList/>
        <Typography color='textPrimary' variant="h3" conponent='span' align='center' className={classes.plead}>
          PLEASE HIRE ME <span role='img' aria-label="pleading face">🥺</span>
        </Typography>
      </div>
    </div>
  );
}