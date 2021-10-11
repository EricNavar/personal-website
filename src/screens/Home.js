import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Hidden from "@material-ui/core/Hidden";
import Link from "@material-ui/core/Link";
//local files
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
      <section>
        <Typography component="p" variant="h5" color="primary">
          This website is under construction because it's bad
        </Typography>
      </section>
      <section id="project-list" className={classes.section}>
        <Typography color='textPrimary' component="h2" variant="h4" className={classes.topicName}>
          <b>Software Projects I've Worked On</b>
        </Typography>
        <Hidden smUp>
          <Grid container spacing={6}>
            {projectData.map(project => (
              <Grid key={project._id} item xs={12} className={classes.cardButtonContainer}>
                <CardButtonMobile {...project}/>
              </Grid>
            ))}
          </Grid>
        </Hidden>
        <Hidden only="xs">
          <Grid container spacing={6}>
            {projectData.map(project => (
              <Grid item key={project._id} xs={12} xl={6} className={classes.cardButtonContainer}>
                <CardButtonDesktop {...project}/>
              </Grid>
            ))}
          </Grid>
        </Hidden>
      </section>
      <section id='connect' style={{marginTop: 40}}>
        <Typography color='textPrimary' component='h2' variant='h4' className={classes.sectionTitle} align='center'>
          Connect
        </Typography>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="stretch"
          spacing={2}
          style={{marginBottom:8}}
        >
          <SocialLink label="Github" link="https://www.github.com/ericnavar" icon={GitHubIcon} circle={true}/>
          <SocialLink label="LinkedIn" link="https://www.linkedin.com/in/ericnavar/" icon={LinkedInIcon} circle={false}/>
        </Grid>
      </section>
      <section style={{marginBottom: 40}}>
        <Typography color='textPrimary' component='h2' variant='h4' className={classes.sectionTitle} align='center'>
          Other projects
        </Typography>
        <Link variant="body1" href="/worst-website">
          Worst website
        </Link>
        <Link variant="body1" href="https://simplifunction.ericnavar.com" style={{marginLeft: 20}}>
          SimpliFunction
        </Link>
      </section>
    </div>
  );
}
