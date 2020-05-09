import React from 'react';
import { makeStyles, Grid, IconButton, Typography } from '@material-ui/core';
import GitlabIcon from './../assets/svg/Gitlab';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PhoneIcon from '@material-ui/icons/Phone';
import FileCopyIcon from '@material-ui/icons/FileCopy';

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: '#19202D',
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
    }
  },
  popover: {
    pointerEvents: 'none'
  },
  paper: {
    padding: theme.spacing(1)
  },
  open: {
    color:'white',
    width: '100%',
    paddingRight:12,
    borderRadius:24,
    background: '#364561',
  },
  closed: {
    width: 48,
  }
}));

//top is true if the footer is being rendered at the top of the screen
export default function Footer() {
  const classes = useStyles();
  const [emailOpen, setEmailOpen] = React.useState(false);
  const toggleEmailOpen = (event) => {
    setEmailOpen(!emailOpen);
  };

  const [phoneOpen, setPhoneOpen] = React.useState(false);
  const togglePhoneOpen = (event) => {
    setPhoneOpen(!phoneOpen);
  };

  return (
    <Grid
      container
      direction="row"
      alignItems="center"
      className={classes.footer}
    >
      <Grid item style={{display:'flex', alignItems:'center'}}>
        <IconButton href="https://github.com/EricNavar">
          <GitHubIcon />
        </IconButton>
        <IconButton href="https://gitlab.com/EricNavar">
          <GitlabIcon />
        </IconButton>
        <IconButton href="https://www.linkedin.com/in/ericnavar/">
          <LinkedInIcon />
        </IconButton>

        <Grid
          container
          wrap="nowrap"
          onMouseEnter={toggleEmailOpen}
          onMouseLeave={toggleEmailOpen}
          className={emailOpen ? classes.open : classes.closed}
          alignItems='center'
        >
          <Grid item>
            <IconButton href="mailto:ericnavar@ufl.edu">
              <EmailIcon/>
            </IconButton>
          </Grid>
          <Grid item style={{overflow:'hidden'}}>
            <IconButton>
              <FileCopyIcon/>
            </IconButton>
          </Grid>
          <Grid item xs zeroMinWidth>
            <Typography noWrap>ericnavar@ufl.edu</Typography>
          </Grid>
        </Grid>

        <Grid
          container
          wrap="nowrap"
          onMouseEnter={togglePhoneOpen}
          onMouseLeave={togglePhoneOpen}
          className={emailOpen ? classes.open : classes.closed}
          alignItems='center'
        >
          <Grid item>
            <IconButton href='tel:8135060973'>
              <PhoneIcon/>
            </IconButton>
          </Grid>
          <Grid item style={{overflow:'hidden'}}>
            <IconButton>
              <FileCopyIcon/>
            </IconButton>
          </Grid>
          <Grid item xs zeroMinWidth>
            <Typography noWrap>(813) 506 0973</Typography>
          </Grid>
        </Grid>

      </Grid>
    </Grid>
  );
}