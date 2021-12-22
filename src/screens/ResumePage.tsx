import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
//local files
import { SkillList } from '../components/resumePage/SkillList';
import { Education } from '../components/resumePage/Education';
import { InvolvementSecion } from '../components/resumePage/InvolvementSection';
import { Interests } from '../components/resumePage/Interests';
import { experienceData } from '../data/experienceData';
import { involvementData } from '../data/involvementData';
import { Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
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
    paddingBottom: 80
  },
  plead: {
    width: 'max-content',
    padding: 40,
    boxShadow: 'rgba(66,179,245, 0.4) 5px 5px, rgba(66,179,245, 0.3) 10px 10px, rgba(66,179,245, 0.2) 15px 15px, rgba(66,179,245, 0.1) 20px 20px, rgba(66,179,245, 0.05) 25px 25px',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderWidth: 4,
    borderRadius: 8,
    borderColor: 'rgba(66,179,245, 0.6)',
    borderStyle: 'solid'
  }
}));

function ResumePage():JSX.Element {
  React.useEffect(() => {
    document.title = 'Resume | Eric Navar';
    window.scrollTo({
      top: 0,
      left: 0,
    });
  }, []);

  const classes = useStyles();
  return (
    <div className={classes.background}>
      <div className={classes.sectionContainer}>
        <Grid container spacing={10} justify='center'>
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
      </div>
    </div>
  );
}

export { ResumePage };
