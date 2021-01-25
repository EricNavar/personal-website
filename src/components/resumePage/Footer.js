import React from 'react';
import { makeStyles, Grid, IconButton, Typography } from '@material-ui/core';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PhoneIcon from '@material-ui/icons/Phone';

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundImage: "linear-gradient(rgba(66,179,245,1) 0%, rgba(95,44,130,1) 100%)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    position: "relative",
    padding: 10,
    '& svg': {
      padding: '2%',
      color: 'white',
      '&:hover': {
        opacity: .8
      }
    },
    '& *': {
      transition: ".5s ease-in-out"
    },
    '& div': {
      marginRight: 8
    }
  },
  popover: {
    pointerEvents: 'none'
  },
  paper: {
    padding: theme.spacing(1)
  },
  item: {
    color:'white',
    borderRadius:24,
    background: 'rgba(255,255,255,.2)',
    alignItems: 'center'
  },
  snake: {
    position: "absolute",
    bottom: 8,
    right: 8
  }
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="row"
      alignItems="center"
      className={classes.footer}
    >
      <Grid item className={classes.item}>
        <IconButton href="https://github.com/EricNavar">
          <GitHubIcon />
        </IconButton>
      </Grid>
      <Grid item className={classes.item}>
        <IconButton href="https://www.linkedin.com/in/ericnavar/">
          <LinkedInIcon />
        </IconButton>
      </Grid>
      <Grid item className={classes.item} style={{display:"flex"}}>
        <IconButton href='mailto:ericnavar@ufl.edu'>
          <EmailIcon/>
        </IconButton>
        <Typography noWrap style={{paddingRight:12}}>
          ericnavar@ufl.edu
        </Typography>
      </Grid>
      <Grid item className={classes.item} style={{display:"flex"}}>
        <IconButton href='tel:8135060973'>
          <PhoneIcon/>
        </IconButton>
        <Typography noWrap style={{paddingRight:12}}>
          (813) 506 0973
        </Typography>
      </Grid>
      <span role="img" aria-label='snake emoji' className={classes.snake}>
        🐍
      </span>
    </Grid>
  );
}

