import React from 'react';
import { Grid, Typography, Hidden } from '@mui/material';
//local files
import GitHubIcon from './../assets/icons/github.svg';
import LinkedInIcon from './../assets/icons/linkedin.svg';
import { PersonalStatement } from '../components/resumePage/PersonalStatement';
import { CodingProjectMobile } from '../components/home/CodingProjectMobile';
import { CodingProjectDesktop } from '../components/home/CodingProjectDesktop';
import { projectData } from '../data/projectData';
import { homePageStyles, ScreenMain, ScreenBackground, CardButtonContainer } from '../styling/homePageStyling';
import { SocialLink } from '../components/home/SocialLink';

function Home(): JSX.Element {
  React.useEffect(() => {
    document.title = 'Eric Navar';
    window.scrollTo({
      top: 0,
      left: 0,
    });
  }, []);
  const classes = homePageStyles();
  return (
    <ScreenMain>
      <PersonalStatement />
      <section id="project-list" className={classes.section}>
        <Typography color='textPrimary' component="h2" variant="h4" className={classes.topicName}>
          Websites I&apos;ve Worked On
        </Typography>
        <Hidden smUp>
          <Grid container spacing={6}>
            {projectData.map(project => (
              <CardButtonContainer item key={project._id} xs={12}>
                <CodingProjectMobile project={project} />
              </CardButtonContainer>
            ))}
          </Grid>
        </Hidden>
        <Hidden only={'xs'}>
          <Grid container spacing={3}>
            {projectData.map(project => (
              <CardButtonContainer item key={project._id} xs={12} xl={6}>
                <CodingProjectDesktop project={project} />
              </CardButtonContainer>
            ))}
          </Grid>
        </Hidden>
      </section>
      <section id='connect' className={classes.homeSection}>
        <Typography
          color='textPrimary'
          component='h2'
          variant='h4'
          className={classes.topicName}
        >
          Connect
        </Typography>
        <Grid
          container
          direction="row"
          alignItems="stretch"
          spacing={2}
        >
          <SocialLink label="LinkedIn" link="https://www.linkedin.com/in/ericnavar/" icon={LinkedInIcon} circle={false} />
          <SocialLink label="Github" link="https://www.github.com/ericnavar" icon={GitHubIcon} circle={true} />
        </Grid>
      </section>
      <ScreenBackground></ScreenBackground>
    </ScreenMain>
  );
}

export { Home };
