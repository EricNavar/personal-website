import React from 'react';
import { makeStyles, Grid, IconButton, Popover, Typography } from '@material-ui/core'
import GitlabIcon from './../assets/svg//Gitlab';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PhoneIcon from '@material-ui/icons/Phone';

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
    }
  },
  popover: {
    pointerEvents: 'none'
  },
  paper: {
    padding: theme.spacing(1)
  },
  phoneContainer: {
    display:'inline-flex',
    verticalAlign:'middle',
    padding:12
  }
}));

//top is true if the footer is being rendered at the top of the screen
export default function Footer({top}) {
  const classes = useStyles();
  const [phoneAnchorEl, setPhoneAnchorEl] = React.useState(null);
  const [emailAnchorEl, setEmailAnchorEl] = React.useState(null);

  const handlePhonePopoverOpen = (event) => {
    setPhoneAnchorEl(event.currentTarget);
  };
  const handlePhonePopoverClose = () => {
    setPhoneAnchorEl(null);
  };

  const handleEmailPopoverOpen = (event) => {
    setEmailAnchorEl(event.currentTarget);
  };
  const handleEmailPopoverClose = () => {
    setEmailAnchorEl(null);
  };

  const phoneOpen = Boolean(phoneAnchorEl);
  const emailOpen = Boolean(emailAnchorEl);
  return (
    <Grid
      container
      direction="row"
      alignItems="center"
      className={classes.footer}
      component='footer'
    >
      <Grid item>
        <IconButton href="https://github.com/EricNavar">
          <GitHubIcon />
        </IconButton>
        <IconButton href="https://gitlab.com/EricNavar">
          <GitlabIcon />
        </IconButton>
        <IconButton href="https://www.linkedin.com/in/ericnavar/">
          <LinkedInIcon />
        </IconButton>
        <IconButton
          aria-owns={emailOpen ? 'email-popover' : undefined}
          aria-haspopup="true"
          onMouseEnter={handleEmailPopoverOpen}
          onMouseLeave={handleEmailPopoverClose}
          href="mailto:ericnavar@ufl.edu"
        >
          <EmailIcon />
        </IconButton>
        <div
          aria-owns={phoneOpen ? 'phone-popover' : undefined}
          aria-haspopup="true"
          onMouseEnter={handlePhonePopoverOpen}
          onMouseLeave={handlePhonePopoverClose}
          className={classes.phoneContainer}
        >
          <PhoneIcon />
        </div>
        <Popover
          id="email-popover"
          className={classes.popover}
          classes={{
            paper: classes.paper,
          }}
          open={emailOpen}
          anchorEl={emailAnchorEl}
          anchorOrigin={{
            vertical: (top ? 'bottom' : 'top'),
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: (top ? 'top' : 'bottom'),
            horizontal: 'center',
          }}
          onClose={handleEmailPopoverClose}
          disableRestoreFocus
        >
          <Typography>
            ericnavar@ufl.edu
          </Typography>
        </Popover>
        <Popover
          id="phone-popover"
          className={classes.popover}
          classes={{
            paper: classes.paper,
          }}
          open={phoneOpen}
          anchorEl={phoneAnchorEl}
          anchorOrigin={{
            vertical: (top ? 'bottom' : 'top'),
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: (top ? 'top' : 'bottom'),
            horizontal: 'center',
          }}
          onClose={handlePhonePopoverClose}
          disableRestoreFocus
        >
          <Typography>(813) 506 0973</Typography>
        </Popover>
      </Grid>
    </Grid>
  );
}
