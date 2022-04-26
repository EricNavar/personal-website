import React from 'react';
import { AppBar, Button, Toolbar, useMediaQuery, useScrollTrigger, IconButton } from '@mui/material';
import { makeStyles } from '@mui/styles';
import SunIcon from '@material-ui/icons/Brightness5';
import MoonIcon from '@material-ui/icons/Brightness2';
import { useTheme } from '@material-ui/core/styles';
import { Link, useRouteMatch } from 'react-router-dom';
import { styled, Theme } from '@mui/material/styles';

//citation: https://material-ui.com/components/app-bar/#hide-app-bar

const scrolled = (theme: Theme) => ({
  background: '#09203f',
  '& a': {
    color: 'white'
  },
  '& use': {
    fill: 'white'
  }
});

//when the navbar is at the top of the screen and is navy blue
const top = (theme: Theme) => ({
  background: theme.palette.background.default,
  color: theme.palette.text.primary
});

const useStyles = makeStyles({
  navbar: {
    height: 64,
  },
  toolbar: {
    paddingLeft: 12,
    paddingRight: 12,
    justifyContent: 'center'
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
    backgroundColor: '#d5e4ff !important',
    color: 'black !important'
  },
});

const MyIconButton = styled(IconButton)(
  {
    position: 'absolute',
    top: 8,
    right: 0,
    color: 'white',
    '&:hover': {
      opacity: .85,
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none'
    },
  }
);

type ElevatorScrollProps = {
  children: JSX.Element,
}
function ElevationScroll(props: ElevatorScrollProps): JSX.Element {
  const classes = useStyles();
  console.log(useTheme().palette.background.default);

  const { children } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window : undefined
  });

  return React.cloneElement(children, {
    className: classes.navbar,
    sx: trigger ? scrolled : top,
    elevation: trigger ? 2 : 0
  });
}

type NavBarItemProps = {
  text: string,
  to: string
}

function NavBarItem(props: NavBarItemProps): JSX.Element {
  const classes = useStyles();
  const { text, to } = props;
  const isSm = useMediaQuery(useTheme().breakpoints.down('sm'));
  const match = useRouteMatch({
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

type DesktopNavbarProps = {
  darkMode: boolean,
  toggleDarkMode: (darkMode: boolean) => void
}
function DesktopNavbar(props: DesktopNavbarProps): JSX.Element {
  const classes = useStyles();

  //returns either the login/register button or the logout button

  return (
    <React.Fragment>
      <ElevationScroll {...props} >
        <AppBar id='AppBar' className={classes.navbar} >
          <Toolbar className={classes.toolbar}>
            <NavBarItem to='/' text='Coding Projects' />
            <div style={{ marginRight: 16, marginLeft: 16 }}>
              <NavBarItem to='/resume' text='Resume' />
            </div>
            < NavBarItem to='/minecraft' text='Minecraft' />
            <MyIconButton onClick={props.toggleDarkMode}>
              {props.darkMode ? <SunIcon /> : <MoonIcon />}
            </MyIconButton>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      < Toolbar />
    </React.Fragment >
  );
}

export { DesktopNavbar };
