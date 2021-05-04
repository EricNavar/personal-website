import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import SunIcon from '@material-ui/icons/Brightness5';
import MoonIcon from '@material-ui/icons/Brightness2';
import IconButton from '@material-ui/core/IconButton';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles } from "@material-ui/core";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { Link, useRouteMatch } from "react-router-dom";


//citation: https://material-ui.com/components/app-bar/#hide-app-bar

const useStyles = makeStyles(theme => ({
  navbar: {
    height: 64,
  },
  toolbar: {
    paddingLeft: 12,
    paddingRight: 12,
    justifyContent: 'center'
  },
  scrolled: {
    background: "#09203f",
    "& span": {
      color: "white"
    },
    "& use": {
      fill: "white"
    }
  },
  //when the navbar is at the top of the screen and is navy blue
  top: {
    background: theme.palette.background.default,
    "& span": {
      color: theme.palette.text.primary
    }
  },
  logoContainer: {
    flexGrow: 0
  },
  logo: {
    width: 75
  },
  accountSection: {
    display: 'flex',
    justifyContent: 'right',
    alignItems: 'center'
  },
  buttonWrapper: {
    position: 'relative',
    '& svg': {
      color: '#4fcff0'
    }
  },
  buttonProgress: {
    color: '#4fcff0',
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
  buttonContainer: {
    textAlign: 'center',
    maxWidth: 'calc(100% - 290px)'
  },
  activeTab: {
    backgroundColor: '#d5e4ff',
    '& span': {
      color: 'black'
    }
  },
  iconButton: {
    position: 'absolute',
    top: 8,
    right: 0,
    color: "white",
    '&:hover': {
      opacity: .85,
      boxShadow: "none",
    },
    '&:active': {
      boxShadow: "none"
    },
  },
}));

function ElevationScroll(props) {
  const classes = useStyles();

  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined
  });

  return React.cloneElement(children, {
    className: `${classes.navbar} ${trigger ? classes.scrolled : classes.top}`,
    elevation: trigger ? 2 : 0
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func
};

export default function NavBar(props) {
  const isSm = useMediaQuery(useTheme().breakpoints.down('sm'));
  const classes = useStyles();

  //returns either the login/register button or the logout button

  function NavBarItem({ text, to }) {
    let match = useRouteMatch({
      path: to,
      exact: true
    });
    return (
      <Button
        component={Link}
        to={to}
        className={match ? classes.activeTab : ''}
        size={isSm ? 'small' : 'medium'}
        color='primary'
      >
        {text}
      </Button>
    );
  }

  return (
    <React.Fragment>
      <ElevationScroll {...props}>
        <AppBar id="AppBar" className={classes.navbar}>
          <Toolbar className={classes.toolbar}>
            <NavBarItem to="/" text='Coding Projects' />
            <div style={{marginRight: 16, marginLeft: 16}}>
              <NavBarItem to="/ux" text='UX Portolio' />
            </div>
            <div style={{marginRight: 16}}>
              <NavBarItem to="/resume" text='Resume' />
            </div>
            <NavBarItem to="/contact" text='Contact' />
            <IconButton
              onClick={props.toggleDarkMode}
              className={classes.iconButton}
              aria-label="toggle dark mode"
            >
              {props.darkMode ? <SunIcon /> : <MoonIcon />}
            </IconButton>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </React.Fragment>
  );
}
