import React from 'react';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Resume from './../assets/Eric Navar Resume.pdf';
import ProfilePic from './../assets/images/ProfilePic.jpg';
import DownloadIcon from './../assets/svg/DownloadRounded.js';
import VisibilityIcon from '@material-ui/icons/Visibility';

const useStyles = makeStyles(theme => ({
  profile: {
    height: 200,
    width: 200,
    borderRadius: '50%'
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
    maxWidth: 550,
    fontSize: 16
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
      style={{marginTop:32}}
    >
      <Grid item xs={12} sm={4} className={classes.imgContainer}>
        <img
          className={classes.profile}
          src={ProfilePic}
          alt=""
        />
      </Grid>
      <Grid item xs={12} sm={8} className={classes.textContainer}>
        <Typography variant='body1' color='textPrimary'>
          I am a Computer Science student looking for experience. I can write software and work with teams I'm always eager to learn new things.
        </Typography>
        <div className={classes.resume}>
          <Typography variant='button'>
            Resume:
          </Typography>
          <IconButton
            href={Resume}
            target="_blank"
            download
            className={classes.button}
            disableRipple
          >
            <DownloadIcon/>
          </IconButton>
          <IconButton
            href="/resume"
            className={classes.button}
            disableRipple
          >
            <VisibilityIcon/>
          </IconButton>
        </div>
      </Grid>
    </Grid>
  );
}