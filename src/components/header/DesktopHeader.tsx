import React from 'react';
import {
  AppBar,
  Toolbar,
  useScrollTrigger,
  ToggleButton,
  ToggleButtonGroup,
} from '@mui/material';
import SunIcon from '@mui/icons-material//Brightness5';
import MoonIcon from '@mui/icons-material/Brightness2';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import useTheme from '@mui/material/styles/useTheme';
import { styled } from '@mui/material/styles';
import { Theme } from '@mui/material/styles';
import { NavItem } from './NavItem';

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

const StyledToggleButtonGroup = styled(ToggleButtonGroup)({
  position: 'absolute',
  right: 8,
  '& button': {
    borderColor: 'rgba(122,122,122,.5)',
  },
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
              <ToggleButton value="Light" aria-label="light theme">
                <SunIcon />
              </ToggleButton>
              <ToggleButton value="Dark" aria-label="dark theme">
                <MoonIcon />
              </ToggleButton>
              <ToggleButton value="Pink" aria-label="frost theme">
                <AcUnitIcon />
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
