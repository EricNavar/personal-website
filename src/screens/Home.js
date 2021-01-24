import React from "react";
import Grid from "@material-ui/core/Grid";
import PropTypes from 'prop-types';
import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import SSDLogo from './../assets/images/SSD.webp';
import DCRFLogo from './../assets/images/dcrf.webp';
import HectorPic from './../assets/images/hector.webp';
import ProfilePic from './../assets/images/ProfilePic.webp';
import CardButton from './../components/home/CardButton.js';
import GitHubIcon from './../assets/svg/github.svg';
import DatabasePic from './../assets/images/database.webp';
import LinkedInIcon from './../assets/svg/linkedin.svg';
import KnightHackLogo from './../assets/images/knighthack.jpg';
import InspirationPic from './../assets/images/inspiration.jpg';
import GatoNochesLogo from './../assets/images/GatoNochesLogo.webp';

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
    marginBottom: 8,
    fontSize: '18px !important',
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
      <section>
        <Typography component='h2' variant='h4' className={classes.sectionTitle} align='center'>
          Cool things I have worked on
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
            headerText="My Resume"
            subText="but made with React"
            link="/portfolio"
            image={ProfilePic}
          />
        </Grid>
      </section>
      <section>
        <Typography component='h2' variant='h4' className={classes.sectionTitle} align='center'>
          Not cool things I have worked on
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
            subText="It's not very good so I don't know why I linked it"
            link="http://hectorrizo.com"
            image={HectorPic}
          />
          <CardButton
            headerText="Gato Noches"
            subText="Look at schedule, leave feedback"
            link="https://ssd.ericnavar.com"
            image={GatoNochesLogo}
          />
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
          alignItems="center"
          spacing={2}
          style={{marginBottom:8}}
        >
          <HomePageButton label="LinkedIn" link="https://www.linkedin.com/in/ericnavar/" icon={LinkedInIcon} circle={false}/>
          <HomePageButton label="Github" link="https://www.github.com/ericnavar" icon={GitHubIcon} circle={true}/>
        </Grid>
      </section>
    </div>
  );
}
