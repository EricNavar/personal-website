import React from 'react';
import { Grid, Typography, Hidden, Link } from '@material-ui/core';
//local files
import GitHubIcon from './../assets/icons/github.svg';
import LinkedInIcon from './../assets/icons/linkedin.svg';
import { PersonalStatement } from '../components/resumePage/PersonalStatement';
import { CardButtonMobile } from '../components/home/CodingProjectMobile';
import { CardButtonDesktop } from '../components/home/CodingProjectDesktop';
import { projectData } from '../data/projectData';
import { homePageStyles } from '../styling/homePageStyling';
import { SocialLink } from '../components/home/SocialLink';

function Home() {
  React.useEffect(() => {
    document.title = 'Eric Navar';
    window.scrollTo({
      top: 0,
      left: 0,
    });
  }, []);
  const classes = homePageStyles();

  return (
    <div className={classes.home}>
      <PersonalStatement />
      <section id="project-list" className={classes.section}>
        <Typography color='textPrimary' component="h2" variant="h4" className={classes.topicName}>
          Software Projects I've Worked On
        </Typography>
        <Hidden mdUp>
          <Grid container spacing={6}>
            {projectData.map(project => (
              <Grid key={project._id} item xs={12} className={classes.cardButtonContainer}>
                <CardButtonMobile {...project} />
              </Grid>
            ))}
          </Grid>
        </Hidden>
        <Hidden smDown>
          <Grid container spacing={6}>
            {projectData.map(project => (
              <Grid item key={project._id} xs={12} xl={6} className={classes.cardButtonContainer}>
                <CardButtonDesktop {...project} />
              </Grid>
            ))}
          </Grid>
        </Hidden>
      </section>
      <section className={classes.homeSection}>
        <Typography
          color='textPrimary'
          component='h2'
          variant='h4'
          className={classes.topicName}
        >
          Joke projects
        </Typography>
        <Link variant="body1" target="_blank" href="/worst-website" className={classes.jokeProjectLink}>
          Worst website
        </Link>
        <Link variant="body1" target="_blank" href="https://knighthack.com" className={classes.jokeProjectLink}>
          How to win a hackathon
        </Link>
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
    </div>
  );
}

export { Home }
