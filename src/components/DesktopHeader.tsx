import React from 'react';
import {
  AppBar,
  Button,
  Toolbar,
  useMediaQuery,
  useScrollTrigger,
  ToggleButton,
  ToggleButtonGroup,
} from '@mui/material';
import SunIcon from '@mui/icons-material//Brightness5';
import MoonIcon from '@mui/icons-material/Brightness2';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import useTheme from '@mui/material/styles/useTheme';
import { Link, useRouteMatch } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { Theme } from '@mui/material/styles';

//citation: https://material-ui.com/components/app-bar/#hide-app-bar

const scrolled = {
  '& a': {
    color: 'white',
  },
  '& use': {
    fill: 'white',
  },
  '& path': {
    fill: 'white',
  },
};

//when the navbar is at the top of the screen and is navy blue
const top = (theme: Theme) => ({
  background: theme.palette.background.default,
  '& a': {
    color: theme.palette.text.primary,
  },
});

const StyledAppBar = styled(AppBar)`
  height: 64px;
`;

const StyledToolbar = styled(Toolbar)`
  padding-left: 12px;
  padding-right: 12px;
  justify-content: center;
`;

type NavbarItemButtonProps = {
  activeTab: boolean;
  component: any;
  to: string;
};

const NavbarItemButton = styled(Button)<NavbarItemButtonProps>(({theme, activeTab}) => ({
  marginLeft: 8,
  marginRight: 8,
  backgroundColor: activeTab ? theme.background!.headerButtonColor : undefined,
  color: activeTab ?  `${theme.palette.text.primary} !important` : undefined,
}));

const StyledToggleButtonGroup = styled(ToggleButtonGroup)({
  position: 'absolute',
  right: 8,
});

type ElevatorScrollProps = {
  children: JSX.Element;
};

function ElevationScroll(props: ElevatorScrollProps): JSX.Element {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window : undefined,
  });

  const theme = useTheme();

  console.log(theme.background!.headerColor);

  return React.cloneElement(children, {
    sx: trigger ? {...scrolled, background: theme.background!.headerColor} : top,
    elevation: trigger ? 2 : 0,
  });
}

type NavbarItemProps = {
  text: string;
  to: string;
};

function NavItem(props: NavbarItemProps): JSX.Element {
  const { text, to } = props;
  const isSm = useMediaQuery(useTheme().breakpoints.down('sm'));
  const match = useRouteMatch({
    path: to,
    exact: true,
  });

  return (
    <NavbarItemButton
      component={Link}
      to={to}
      activeTab={!!match}
      size={isSm ? 'small' : 'medium'}
      color="primary"
    >
      {text}
    </NavbarItemButton>
  );
}

type DesktopHeaderProps = {
  theme: string;
  setTheme: (newTheme: string) => void;
};
function DesktopHeader(props: DesktopHeaderProps): JSX.Element {

  const handleChange = (
    event: React.MouseEvent<HTMLElement, MouseEvent>,
    newTheme: string
  ) => {
    if (newTheme) props.setTheme(newTheme);
  };

  return (
    <React.Fragment>
      <ElevationScroll {...props}>
        <StyledAppBar id="AppBar">
          <StyledToolbar>
            <div style={{ position: 'absolute' }}>
              <NavItem to="/" text="Coding Projects" />
              <NavItem to="/resume" text="Resume" />
              <NavItem to="/blog" text="Blog" />
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
            </StyledToggleButtonGroup>
          </StyledToolbar>
        </StyledAppBar>
      </ElevationScroll>
      <Toolbar />
    </React.Fragment>
  );
}

export { DesktopHeader };
