import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import EricOutline from './../../assets/images/EricOutline.webp';

const useStyles = makeStyles(theme => ({
  profileBackground: {
    position: 'relative',
    top: 0,
    left: 0,
    padding: 0,
    height: 250,
    width: 250,
    marginRight: 12,
    borderRadius: "50%",
    background: '#151965',
    overflow: 'hidden',
    display: 'block',
    listStyleType: 'disc',
    paddingInlineStart: 40,
    unicodeBidi: 'isolate',
    textAlign: 'center',
    '& li': {
      position: 'absolute',
      top: '80vh',
      left: '45vw',
      width: 10,
      height: 10,
      border: 'solid 1px #46b5d1',
      color: 'transparent',
      transformOrigin: 'top left',
      transform: 'scale(0) rotate(0deg) translate(-50%, -50%)',
      animation: '$cube 7s ease-in forwards infinite',
    },

    '& li:nth-child(0)': {
      animationDelay: '0s',
      left: '63vw',
      top: '6vh',
    },

    '& li:nth-child(1)': {
      animationDelay: '2s',
      left: '36%',
      top: '23%',
    },

    '& li:nth-child(2)': {
      animationDelay: '4s',
      left: '77%',
      top: '63%',
    },

    '& li:nth-child(3)': {
      animationDelay: '6s',
      left: '87%',
      top: '44%',
    },

    '& li:nth-child(4)': {
      animationDelay: '8s',
      left: '27%',
      top: '72%',
    },

    '& li:nth-child(5)': {
      animationDelay: '10s',
      left: '12%',
      top: '85%',
    },
  },
  '@keyframes cube': {
    'from': {
      transform: 'scale(0) rotate(0deg) translate(-50%, -50%)',
      opacity: 1,
    },
    'to': {
      transform: 'scale(20) rotate(960deg) translate(-50%, -50%)',
      opacity: 0,
    }
  },
  button: {
    color: 'white',
    '&:hover': {
      '& svg': {
        color: "#00a8cc"
      }
    },
    '& *': {
      transition: ".5s ease-in-out"
    }
  },
  textContainer: {
    maxWidth: 550
  },
  imgContainer: {
    minWidth:200,
    [theme.breakpoints.up('sm')]: {
      textAlign: 'right'
    }
  },
  resume: {
    width: 'max-content',
    marginTop: 24,
    marginBottom: 32,
    background: 'linear-gradient(90deg, #515585 0%, #151965 100%)',
    border: 0,
    color: 'white',
    height: 48,
    paddingLeft:16,
    paddingRight:4,
    borderRadius: 4
  },
  animatedItem: {
    animation: `$myEffect 2000ms ${theme.transitions.easing.easeInOut}`,
    transform: "translateY(50%)",
    color: 'white',
    fontSize:60
  },
  profile: {
    maxWidth: 200,
    position: "absolute",
    right: 25,
    bottom: 0
  }
}));

export default function PersonalStatement() {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      spacing={4}
      style={{padding:32}}
    >
      <Grid item className={classes.profileBackground}>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <img src={EricOutline} alt="" className={classes.profile}/>
      </Grid>
      <Grid item xs={12} sm={8} className={classes.textContainer}>
        <Typography variant='body1' color='textPrimary' style={{fontSize:32}}>
          <b>Eric Navar</b>
        </Typography>
        <Typography variant='body1' color='textPrimary'  style={{fontSize:16}}>
          I am a Computer Science student looking for experience. I can write software and work with teams I'm always eager to learn new things.
        </Typography>
      </Grid>
    </Grid>
  );
}