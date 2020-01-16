import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
  button: {
    background: 'linear-gradient(30deg, #9a0bba 30%, #b309d9 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    padding: '0 30px',
    textColor:"white"
  }
}));

export default function PersonalStatement(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography component="h3">
        I am a Computer Science student looking for experience. I can write software and work with teams I'm always eager to learn new things.
      </Typography>
        <Button className={classes.button}
          href="https://drive.google.com/uc?authuser=0&id=1LNjRMXFBT13MNAg1AuNCuHdbCBlRjsld&export=download" 
          download
        >
          Resume
        </Button>
    </div>
  );
}