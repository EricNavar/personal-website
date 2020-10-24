import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import GatoNochesLogo from './../assets/svg/GatoNochesLogo';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import ProfilePic from './../assets/images/ProfilePic.png';
import SunIcon from '@material-ui/icons/WbSunny';
import {useHistory,Link} from "react-router-dom";
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  grid: {
    minHeight: "100vh",
    width: "100%"
  },
  bigButton: {
    width: "100%",
    height: "100%",
    textTransform: "none",
    border: "6px solid white"
  },
  portfolioButton: {
    backgroundColor: "rgb(19, 39, 67)",
    "&:hover": {
      backgroundColor: "rgba(19, 39, 67, .80)",
    }
  },
  gatoNochesButton: {
    backgroundColor: "#F9E9EA",
    "&:hover": {
      backgroundColor: "rgba(249, 233, 234, .80)",
    }
  },
  bigButtonText: {
    fontSize: 18
  },
  home: {
    padding: 24
  },
  gatoNochesLogo: {
    maxWidth: 400,
    marginBottom: 24,
    marginTop: 24
  },
  profilePic: {
    borderRadius: "50%",
    maxWidth: 300
  },
  portfolioText: {
    fontWeight: 400,
    letterSpacing: 3,
    color: 'white'
  },
  smallButton: {
    backgroundColor: 'lightgrey',
    color: 'black'
  },
  paper: {
    width: "100%",
    height: "100%"
  },
  divider: {
    width:"80%"
  }
});

function HomePageButton({icon, label, link}) {
  return (
    <Button
      startIcon={icon}
      component={Link}
      to={link}
      clickable
      variant="outlined"
    >
      {label}
    </Button>
  );
};
HomePageButton.propTypes = {
  link: PropTypes.string.isRequired,
  icon: PropTypes.object,
  children: PropTypes.element.isRequired
};

export default function Home() {
  const classes = useStyles();
  const history = useHistory();
  const redirect = path => {
    history.push(path);
  };

  return (
    <div className={classes.home}>
      <Typography
        component='h1'
        variant='h3'
        align='center'
        style={{marginBottom: 14}}
      >
        Welcome to my cool personal website!
      </Typography>
      <hr className={classes.divider}/>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="stretch"
        spacing={2}
      >
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper} elevation={3}>
            <Button
              onClick={e=>redirect("/portfolio")}
              className={`${classes.bigButton} ${classes.portfolioButton}`}
              disableElevation
            >
              <div>
                <img alt="profile pic" className={classes.profilePic} src={ProfilePic}/>
                <Typography
                  component='h2'
                  variant='h3'
                  align='center'
                  className={classes.portfolioText}
                >
                  Portfolio
                </Typography>
              </div>
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper} elevation={3}>
            <Button
              onClick={e=>redirect("/gatonoches")}
              className={`${classes.bigButton} ${classes.gatoNochesButton}`}
              disableElevation
            >
              <div>
                <div className={classes.gatoNochesLogo}>
                  <GatoNochesLogo/>
                </div>
                <Typography variant="subtitle1" align="center" style={{color:"##464748"}} className={classes.bigButtonText}>
                  View Gato Noches gatherings, leave feedback
                </Typography>
              </div>
            </Button>
          </Paper>
        </Grid>
        <HomePageButton label="LinkedIn" link="https://www.linkedin.com/in/ericnavar/" icon={<LinkedInIcon style={{ color:'black' }}/>}/>
        <HomePageButton label="Github" link="https://www.github.com/ericnavar" icon={<GitHubIcon style={{ color:'black' }}/>}/>
        <HomePageButton label="Inspiration Generator" link="/inspire" icon={<SunIcon style={{ color:'black' }}/>}/>

      </Grid>
    </div>
  );
}
