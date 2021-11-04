import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Hidden from "@material-ui/core/Hidden";
import Link from "@material-ui/core/Link";
//local files
import PersonalStatement from '../components/resumePage/PersonalStatement';
import GitHubIcon from './../assets/icons/github.svg';
import LinkedInIcon from './../assets/icons/linkedin.svg';
import CardButtonMobile from '../components/home/CodingProjectMobile.js';
import CardButtonDesktop from '../components/home/CodingProjectDesktop.js';
import projectData from '../data/projectData.js';
import {homePageStyles} from '../styling/homePageStyling.js';
import SocialLink from '../components/home/SocialLink.js';

export default function Home() {
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
      <PersonalStatement/>
      <section id="project-list" className={classes.section}>
        <Typography color='textPrimary' component="h2" variant="h4" className={classes.topicName}>
          Software Projects I've Worked On
        </Typography>
        <Hidden mdUp>
          <Grid container spacing={6}>
            {projectData.map(project => (
              <Grid key={project._id} item xs={12} className={classes.cardButtonContainer}>
                <CardButtonMobile {...project}/>
              </Grid>
            ))}
          </Grid>
        </Hidden>
        <Hidden smDown>
          <Grid container spacing={6}>
            {projectData.map(project => (
              <Grid item key={project._id} xs={12} xl={6} className={classes.cardButtonContainer}>
                <CardButtonDesktop {...project}/>
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
          Other projects
        </Typography>
        <Link variant="body1" href="/worst-website">
          Worst website
        </Link>
        <Link variant="body1" href="https://simplifunction.ericnavar.com" style={{marginLeft: 20}}>
          SimpliFunction
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
          <SocialLink label="LinkedIn" link="https://www.linkedin.com/in/ericnavar/" icon={LinkedInIcon} circle={false}/>
          <SocialLink label="Github" link="https://www.github.com/ericnavar" icon={GitHubIcon} circle={true}/>
        </Grid>
      </section>
    </div>
  );
}
