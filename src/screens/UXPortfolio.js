import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Hidden from "@material-ui/core/Hidden";
//local files
import CardButtonDesktop from '../components/uxportfolio/UXProject.js';
import UXProjectData from '../data/UXProjectData.js';
import {homePageStyles} from '../styling/homePageStyling.js';

export default function Home() {
  React.useEffect(() => {
    document.title = 'Eric Navar | UX Portfolio';
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
          <b>UX Projects I've Worked On</b>
        </Typography>
        <Hidden smUp>
          <Grid container spacing={4}>
            {UXProjectData.map(project => (
              <Grid key={project._id} item xs={12} className={classes.cardButtonContainer}>
                <CardButtonDesktop {...project}/>
              </Grid>
            ))}
          </Grid>
        </Hidden>
        <Hidden only="xs">
          <Grid container spacing={4}>
            {UXProjectData.map(project => (
              <Grid item key={project._id} xs={12} xl={6} className={classes.cardButtonContainer}>
                <CardButtonDesktop {...project}/>
              </Grid>
            ))}
          </Grid>
        </Hidden>
      </section>
    </div>
  );
}
