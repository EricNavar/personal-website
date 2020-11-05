import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import GitHubIcon from '@material-ui/icons/GitHub';
import {makeStyles} from "@material-ui/core/styles";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PropTypes from 'prop-types';
import {useHistory,Link} from "react-router-dom";
import CardButton from './../components/CardButton.js';
import ProfilePic from './../assets/images/ProfilePic.png';
import SSDLogo from './../assets/images/SSD.png';
import KnightHackLogo from './../assets/images/knighthack.png';
import InspirationPic from './../assets/images/inspiration.jpg';
import HectorPic from './../assets/images/hector.png';
import DCRFLogo from './../assets/images/dcrf.png';
import GitLabIcon from './../assets/svg/Gitlab.js';
import GatoNochesLogo from './../assets/svg/GatoNochesLogo';
import TechNoleLogo from './../assets/images/technole.png';
import DatabasePic from './../assets/images/database.png';

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
    padding: 24,
    justifyContent: 'center',
    display: 'grid'
  },
  gatoNochesLogo: {
    //so that the height is the same as the profile pic's
    maxWidth: 335,
    marginBottom: 24,
    marginTop: 24
  },
  profilePic: {
    borderRadius: "50%",
    maxWidth: 260
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
  sectionTitle: {
    paddingTop: 8,
    fontSize: '14px !important'
  },
  cardButton: {
    maxWidth: 1600
  }
});

function HomePageButton({icon, label, link}) {
  return (
    <Button
      startIcon={icon}
      component={Link}
      to={link}
      variant="outlined"
      style={{margin:4}}
    >
      {label}
    </Button>
  );
};
HomePageButton.propTypes = {
  link: PropTypes.string.isRequired,
  icon: PropTypes.object
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
        component='section'
      >
        <Grid item xs={12} sm={6}>
          <Paper id='portfolio-card' className={classes.paper} elevation={3}>
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
          <Paper id='gato-noches-card' className={classes.paper} elevation={3}>
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
      <section>
        <Typography component='p' variant='overline' className={classes.sectionTitle} align='center'>
          Connect
        </Typography>
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
          <HomePageButton label="Gitlab" link="https://www.gitlab.com/ericnavar" icon={<GitLabIcon style={{ color:'black' }}/>}/>
        </Grid>
      </section>
      <section>
        <Typography component='p' variant='overline' className={classes.sectionTitle} align='center'>
          Other cool things
        </Typography>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={2}
          className={classes.cardButton}
        >
          <CardButton
            text="Inspiration Generator"
            link="/inspire"
            image={InspirationPic}
          />
          <CardButton
            text="How to win a hackathon"
            link="http://knighthack.com" 
            image={KnightHackLogo}
          />
          <CardButton
            text="Someone else's portfolio"
            link="http://hectorrizo.com"
            image={HectorPic}
          />
          <CardButton
            text="A cool website I helped make (no longer functional)"
            link="https://dcrockfitness.com"
            image={DCRFLogo}
          />
          <CardButton
            text="SQL injection playground"
            link="https://sql-ssd.herokuapp.com/login"
            image={DatabasePic}
          />
          <CardButton
            text="Society of Software Developers"
            link="https://ssd.ericnavar.com"
            image={SSDLogo}
          />
          <CardButton
            text="TechNole"
            link="https://technole.org/"
            image={TechNoleLogo}
          />
        </Grid>
      </section>
    </div>
  );
}
