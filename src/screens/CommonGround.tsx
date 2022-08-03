import React from 'react';
import { Grid, Typography, Hidden } from '@mui/material';
//local files
import { UXProject } from '../components/uxportfolio/UXProject';
// import { Mockup } from '../components/uxportfolio/Mockup';
import { UXProjectData } from '../data/UXProjectData';
import { homePageStyles, HomeMain, CardButtonContainer } from '../styling/homePageStyling';

function CommonGround(): JSX.Element {
  React.useEffect(() => {
    document.title = 'Eric Navar | UX Portfolio';
    window.scrollTo({
      top: 0,
      left: 0,
    });
  }, []);
  const classes = homePageStyles();

  return (
    <HomeMain>
      <Grid container spacing={10} style={{ marginTop: 40, marginBottom: 40 }}>
        <Grid item style={{ maxWidth: 800 }}>
          <Typography color='textPrimary' component="h2" variant="h4" className={classes.topicName}>
            <b>UX Projects I&apos;ve Worked On</b>
          </Typography>
          <Hidden smUp>
            <Grid container spacing={4}>
              {UXProjectData.map(project => (
                <CardButtonContainer key={project._id} item xs={12}>
                  <UXProject {...project} />
                </CardButtonContainer>
              ))}
            </Grid>
          </Hidden>
          <Hidden only="xs">
            <Grid id='ux-projects' container spacing={4}>
              {UXProjectData.map(project => (
                <CardButtonContainer item key={project._id} xs={12}>
                  <UXProject {...project} />
                </CardButtonContainer>
              ))}
            </Grid>
          </Hidden>
        </Grid>
        <Grid item style={{ display: 'flex', justifyContent: 'center' }}>
          {/* <Mockup /> */}
        </Grid>
      </Grid >
    </HomeMain >
  );
}

export { CommonGround };
