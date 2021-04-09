import React from "react";
import Grid from "@material-ui/core/Grid";
import PropTypes from 'prop-types';
import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";
import Hidden from "@material-ui/core/Hidden";
//local files
import GitHubIcon from './../assets/homePage/github.svg';
import LinkedInIcon from './../assets/homePage/linkedin.svg';
import CardButtonMobile from '../components/home/CardButtonMobile.js';
import CardButtonDesktop from '../components/home/CardButtonDesktop.js';
import projectData from './../components/home/projectData'
import {homePageStyles} from './../styling/homePageStyling.js';

function SocialLink({ icon, circle, link, label }) {
  return (
    <ButtonBase
      href={link}
      variant="outlined"
      style={{ margin: 4, borderRadius: circle ? "50%" : 0 }}
    >
      <img alt={label} src={icon} />
    </ButtonBase>
  );
};
SocialLink.propTypes = {
  link: PropTypes.string.isRequired,
  circle: PropTypes.bool.isRequired,
  icon: PropTypes.string.isRequired
};

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
      <section id="project-list" className={classes.section}>
        <Typography color='textPrimary' component="h2" variant="h4" className={classes.topicName}>
          <b>Web Projects I've Worked On</b>
        </Typography>
        <Hidden smUp>
          <Grid container spacing={4}>
            {projectData.map(project => (
              <Grid key={project._id} item xs={12} className={classes.cardButtonContainer}>
                <CardButtonMobile {...project}/>
              </Grid>
            ))}
          </Grid>
        </Hidden>
        <Hidden only="xs">
          <Grid container spacing={4}>
            {projectData.map(project => (
              <Grid item key={project._id} xs={12} xl={6} className={classes.cardButtonContainer}>
                <CardButtonDesktop {...project}/>
              </Grid>
            ))}
          </Grid>
        </Hidden>
      </section>
      <section id='connect'>
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
    </div>
  );
}
