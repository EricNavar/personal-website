import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import PropTypes from 'prop-types';
import {useHistory} from "react-router-dom";
import GitHubIcon from './../assets/svg/github.svg';
import LinkedInIcon from './../assets/svg/linkedin.svg';
import CardButton from './../components/CardButton.js';
import ProfilePic from './../assets/images/ProfilePic.png';
import SSDLogo from './../assets/images/SSD.png';
import KnightHackLogo from './../assets/images/knighthack.png';
import InspirationPic from './../assets/images/inspiration.jpg';
import HectorPic from './../assets/images/hector.png';
import DCRFLogo from './../assets/images/dcrf.png';
import GatoNochesLogo from './../assets/images/GatoNochesLogo.png';
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
    maxWidth: 500,
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

function HomePageButton({icon, circle, link, label}) {
  return (
    <ButtonBase
      href={link}
      variant="outlined"
      style={{margin:4, borderRadius: circle ? "50%" : 0}}
    >
      <img alt={label} src={icon}/>
    </ButtonBase>
  );
};
HomePageButton.propTypes = {
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
        component='section'
      >
        <Grid item xs={12} component={Paper} id='portfolio-card' className={classes.paper} elevation={3}>
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
          <HomePageButton label="LinkedIn" link="https://www.linkedin.com/in/ericnavar/" icon={LinkedInIcon} circle={false}/>
          <HomePageButton label="Github" link="https://www.github.com/ericnavar" icon={GitHubIcon} circle={true}/>
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
            headerText="Inspiration Generator"
            subText="New inspiration with each refresh!"
            link="/inspire"
            image={InspirationPic}
          />
          <CardButton
            headerText="How to win a hackathon"
            subText="This is guaranteed to work"
            link="http://knighthack.com" 
            image={KnightHackLogo}
          />
          <CardButton
            headerText="Someone else's portfolio"
            link="http://hectorrizo.com"
            image={HectorPic}
          />
          <CardButton
            headerText="A cool website I helped make"
            subText="No longer functional"
            link="https://dcrockfitness.com"
            image={DCRFLogo}
          />
          <CardButton
            headerText="SQL injection playground"
            link="https://sql-ssd.herokuapp.com/login"
            image={DatabasePic}
          />
          <CardButton
            headerText="Society of Software Developers"
            link="https://ssd.ericnavar.com"
            image={SSDLogo}
          />
          <CardButton
            headerText="Gato Noches"
            subText="Look at schedule, leave feedback"
            link="https://ssd.ericnavar.com"
            image={GatoNochesLogo}
          />
        </Grid>
      </section>
    </div>
  );
}
