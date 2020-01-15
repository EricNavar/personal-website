import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
  box: {
    background: 'linear-gradient(45deg, #00aeff 30%, #00aeff 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    padding: '0 30px',
    margin: "auto",
    textAlign: "center",
  }
}));

export default function PersonalStatement(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography component="h3">
        I am a Computer Science student looking for experience. I can write software and work with teams I'm always eager to learn new things.
      </Typography>
      <Box className={classes.box}>
        <Typography component="h3">
          <a href="https://drive.google.com/uc?authuser=0&id=1LNjRMXFBT13MNAg1AuNCuHdbCBlRjsld&export=download" download>
            Resume
          </a>
        </Typography>
      </Box>
    </div>
  );
}