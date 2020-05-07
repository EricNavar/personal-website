import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  personalStatement: {
  },
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
    }
  }
});

export default function PersonalStatement() {
  const classes = useStyles();
  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      direction="row"
      className={classes.personalStatement}
      spacing={4}
    >
      <Grid item>
        <img
          className={classes.profile}
          src={require("./../images/ProfilePic.jpg")}
          alt=""
        />
      </Grid>
      <Grid item>
        <Typography variant='body1' style={{fontSize:16}}>
          I am a Computer Science student looking for experience. I can write software and work with teams I'm always eager to learn new things.
        </Typography>
        <Button
          href="https://drive.google.com/uc?authuser=0&id=1LNjRMXFBT13MNAg1AuNCuHdbCBlRjsld&export=download"
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