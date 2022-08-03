import React from 'react';
import { AppBar, Button, Toolbar, useMediaQuery, useScrollTrigger, ToggleButton, ToggleButtonGroup } from '@mui/material';
import { makeStyles } from '@mui/styles';
import SunIcon from '@mui/icons-material//Brightness5';
import MoonIcon from '@mui/icons-material/Brightness2';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import useTheme from '@mui/material/styles/useTheme';
import { Link, useRouteMatch } from 'react-router-dom';
import MinecraftIcon from '../assets/icons/minecraft-icon';
import { styled } from '@mui/material/styles';

//citation: https://material-ui.com/components/app-bar/#hide-app-bar

const scrolled = ({
  background: '#09203f',
  '& a': {
    color: 'white'
  },
  '& use': {
    fill: 'white'
  },
  '& path': {
    fill: 'white'
  }
});

//when the navbar is at the top of the screen and is navy blue
const top = (theme) => ({
  background: theme.palette.background.default,
  '& a': {
    color: theme.palette.text.primary
  },
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
  activeTab: {
    backgroundColor: '#d5e4ff !important',
    color: 'black !important'
  },
  navbarItemButton: {
    marginLeft: 8,
    marginRight: 8
  },
});
const StyledToggleButtonGroup = styled(ToggleButtonGroup)({
  position: 'absolute',
  right: 8
});

type ElevatorScrollProps = {
  children: JSX.Element,
}
function ElevationScroll(props: ElevatorScrollProps): JSX.Element {
  const classes = useStyles();

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
      className={`${classes.navbarItemButton} ${match ? classes.activeTab : ''}`}
      size={isSm ? 'small' : 'medium'}
      color='primary'
    >
      {text}
    </Button>
  );
}

type DesktopNavbarProps = {
  theme: string,
  setTheme: (newTheme: string) => void
}
function DesktopNavbar(props: DesktopNavbarProps): JSX.Element {
  const classes = useStyles();

  const handleChange = (event: React.MouseEvent<HTMLElement, MouseEvent>, newTheme: string) => {
    if (newTheme)
      props.setTheme(newTheme);
  };

  return (
    <React.Fragment>
      <ElevationScroll {...props} >
        <AppBar id='AppBar' className={classes.navbar} >
          <Toolbar className={classes.toolbar}>
            <div style={{ position: 'absolute' }}>
              <NavBarItem to='/' text='Coding Projects' />
              <NavBarItem to='/resume' text='Resume' />
              <NavBarItem to='/minecraft' text='Minecraft' />
            </div>
            <StyledToggleButtonGroup
              value={props.theme}
              exclusive
              onChange={handleChange}
              aria-label="website theme"
            >
              <ToggleButton value="Frost" aria-label="frost theme">
                <AcUnitIcon />
              </ToggleButton>
              <ToggleButton value="Light" aria-label="light theme">
                <SunIcon />
              </ToggleButton>
              <ToggleButton value="Dark" aria-label="dark theme">
                <MoonIcon />
              </ToggleButton>
              <ToggleButton value="Minecraft" aria-label="minecraft theme">
                <MinecraftIcon />
              </ToggleButton>
            </StyledToggleButtonGroup>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      < Toolbar />
    </React.Fragment >
  );
}

export { DesktopNavbar };
