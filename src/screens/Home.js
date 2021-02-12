import React from "react";
import Grid from "@material-ui/core/Grid";
import PropTypes from 'prop-types';
import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";
//local files
import GitHubIcon from './../assets/homePage/github.svg';
import LinkedInIcon from './../assets/homePage/linkedin.svg';
import CardButton from './../components/home/CardButton.js';
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
  icon: PropTypes.object
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
        <Typography component="h2" variant="h4" className={classes.topicName}>
          <b>Web Projects I've Worked On</b>
        </Typography>
        <Grid container spacing={4}>
          {projectData.map(project => (
            <Grid key={project._id} item className={classes.cardButtonContainer}>
              <CardButton {...project}/>
            </Grid>
          ))}
        </Grid>
      </section>
      <section>
        <Typography component='h2' variant='h4' className={classes.sectionTitle} align='center'>
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
