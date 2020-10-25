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
import CodeIcon from '@material-ui/icons/Code';
import PersonIcon from '@material-ui/icons/Person';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';

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
  },
  buttonSectionTitles: {
    paddingTop: 8,
    fontSize: '14px !important'
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
      style={{margin:4}}
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
  React.useEffect(() => {
    document.title = 'Eric Navar';
    window.scrollTo({
      top: 0,
      left: 0,
    });
  },[]);
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
        style={{marginBottom: 14,fontSize:32}}
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
      </Grid>
      <div style={{textAlign:'center'}}>
        <Typography variant='overline' className={classes.buttonSectionTitles}>
          Connect
        </Typography>
      </div>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={2}
        style={{marginBottom:8}}
      >
        <HomePageButton label="LinkedIn" link="https://www.linkedin.com/in/ericnavar/" icon={<LinkedInIcon style={{ color:'black' }}/>}/>
        <HomePageButton label="Github" link="https://www.github.com/ericnavar" icon={<GitHubIcon style={{ color:'black' }}/>}/>
      </Grid>
      <div style={{textAlign:'center'}}>
        <Typography variant='overline' className={classes.buttonSectionTitles}>
          Other cool things
        </Typography>
      </div>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={2}
      >
        <HomePageButton label="Inspiration Generator" link="/inspire" icon={<SunIcon style={{ color:'black' }}/>}/>
        <HomePageButton label="How to win a hackathon" link="http://knighthack.com" icon={<CodeIcon style={{ color:'black' }}/>}/>
        <HomePageButton label="Someone else's portfolio" link="http://hectorrizo.com" icon={<PersonIcon style={{ color:'black' }}/>}/>
        <HomePageButton label="A cool (but not currently functional) website I helped make" link="https://dcrockfitness.com" icon={<FitnessCenterIcon style={{ color:'black' }}/>}/>
      </Grid>
    </div>
  );
}
