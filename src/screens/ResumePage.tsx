import React from 'react';
import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
//local files
import { SkillList } from '../components/resumePage/SkillList';
import { Education } from '../components/resumePage/Education';
import { InvolvementSecion } from '../components/resumePage/InvolvementSection';
import { Interests } from '../components/resumePage/Interests';
import { experienceData } from '../data/experienceData';
import { involvementData } from '../data/involvementData';
import { HomeMain, HomeInner } from '../styling/homePageStyling';

const useStyles = makeStyles((theme) => ({
  gridItem: {
    justifyContent: 'center',
    display: 'flex'
  },
}));

function ResumePage(): JSX.Element {
  React.useEffect(() => {
    document.title = 'Resume | Eric Navar';
    window.scrollTo({
      top: 0,
      left: 0,
    });
  }, []);

  const classes = useStyles();
  return (
    <HomeMain>
      <Grid container spacing={10} justifyContent='center'>
        <Grid id='skill-list-container' item sm={12} lg={6} className={classes.gridItem}>
          <SkillList />
        </Grid>
        <Grid id='education-container' item sm={12} lg={6} className={classes.gridItem}>
          <Education />
        </Grid>
      </Grid>
      <InvolvementSecion title="Internship Experience" data={experienceData} />
      <InvolvementSecion title="Involvement" data={involvementData} />
      <Interests />
      <HomeInner></HomeInner>
    </HomeMain>
  );
}

export { ResumePage };
