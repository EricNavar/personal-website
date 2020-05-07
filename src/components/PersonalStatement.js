import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Resume from './../assets/EricNResume.pdf';
import ProfilePic from './../assets/images/ProfilePic.jpg';

const useStyles = makeStyles(theme => ({
  profile: {
    height: 200,
    width: 200,
    borderRadius: '50%'
  },
  button: {
    marginTop: 24,
    marginBottom: 32,
    background: 'linear-gradient(90deg, #515585 0%, #151965 100%)',
    border: 0,
    boxShadow: '0 3px 5px 2px rgba(50, 64, 123, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
    width: 200,
    '&:hover': {
      opacity: .8
    },
    '&:active': {
      boxShadow: 'none'
    },
    textContainer: {
      maxWidth: 550,
    }
  },
  imgContainer: {
    [theme.breakpoints.up('sm')]: {
      textAlign: 'right'
    }
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
        <Typography variant='body1' style={{fontSize:16}}>
          I am a Computer Science student looking for experience. I can write software and work with teams I'm always eager to learn new things.
        </Typography>
        <Button
          href={Resume}
          target="_blank"
          download
          fullWidth
          variant="outlined"
          className={classes.button}
          disableRipple
        >
          Resume
        </Button>
      </Grid>
    </Grid>
  );
}