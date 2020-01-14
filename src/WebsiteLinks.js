import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import Chip from '@material-ui/core/Chip';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      color: "#000000",
      background: "#ffffff"
    },
  },
}));

export default function TextButtons() {
  const classes = useStyles();

  return (
    <Grid 
      className={classes.root}
      container
      justify="center"
      alignItems="center"
    >
      <Chip 
        icon = {<GitHubIcon style={{ color:'black' }}/>}
        label="Github"
        component="a"
        href="https://github.com/EricNavar"
        clickable
        variant="outlined" 
      />
      <Chip 
        icon = {<LinkedInIcon style={{ color:'black' }}/>}
        label="LinkedIn"
        component="a"
        href="https://www.linkedin.com/in/ericnavar/"
        clickable
        variant="outlined" 
      />
    </Grid>
  );
}