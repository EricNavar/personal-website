import React from 'react';
import {
  List,
  Slide,
  AppBar,
  Toolbar,
  ListItemButton,
  IconButton,
  ListItemIcon,
  ListItemText,
  SwipeableDrawer,
  useScrollTrigger,
  ToggleButton,
  ToggleButtonGroup,
} from '@mui/material';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { styled } from '@mui/material/styles';
//icons
import MenuIcon from '@mui/icons-material/Menu';
import YouTubeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import CloseIcon from '@mui/icons-material/Close';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SunIcon from '@mui/icons-material/Brightness5';
import MoonIcon from '@mui/icons-material/Brightness2';
import AcUnitIcon from '@mui/icons-material/AcUnit';

//citation: https://material-ui.com/components/app-bar/#back-to-top

const StyledList = styled(List)({
  '& button': {
    paddingRight: 32,
  },
});

type StyledListItemButtonProps = {
  activeTab: boolean;
};

const StyledListItemButton = styled(ListItemButton) <StyledListItemButtonProps>`
  background: ${props => props.activeTab ? 'rgba(81, 85, 133, 0.6)' : undefined};
`;

const StyledAppBar = styled(AppBar)(({theme}) => ({
  background: theme.palette.background.default,
  width: 'calc(100% - 16px)',
  margin: 8,
  borderRadius: 4,
  color: theme.palette.text.primary,
}));

const StyledToolbar = styled(Toolbar)`
  marginBottom: 24px;
`;

const StyledToggleButtonGroup = styled(ToggleButtonGroup)({
  '& use': {
    fill: 'black',
  },
  '& path': {
    fill: 'black',
  },
});

const TextRight = styled('div')({
  textAlign: 'right',
});

type HideOnScrollProps = {
  children: JSX.Element;
};

function HideOnScroll(props: HideOnScrollProps) {
  const { children } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

type SideBarItemProps = {
  text: string;
  link: string;
  icon: JSX.Element;
  setOpen: (open: boolean) => void;
};

function SideBarItem(props: SideBarItemProps) {
  const { text, link, icon } = props;
  const match = useRouteMatch({
    path: link,
    exact: true,
  });
  const history = useHistory();
  const redirect = (path: string) => {
    history.push(path);
    props.setOpen(false);
  };
  return (
    <StyledListItemButton
      activeTab={!!match}
      onClick={() => redirect(link)}
    >
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={text} />
    </StyledListItemButton>
  );
}

type MobileHeaderProps = {
  theme: string;
  setTheme: (newTheme: string) => void;
};

function MobileHeader(props: MobileHeaderProps): JSX.Element {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const handleChange = (
    event: React.MouseEvent<HTMLElement, MouseEvent>,
    newTheme: string
  ) => {
    if (newTheme) props.setTheme(newTheme);
  };

  return (
    <React.Fragment>
      <React.Fragment>
        <HideOnScroll>
          <StyledAppBar>
            <Toolbar style={{ justifyContent: 'space-between' }}>
              <IconButton
                color="inherit"
                onClick={toggleDrawer}
                aria-label="open menu icon"
              >
                <MenuIcon />
              </IconButton>

            </Toolbar>
          </StyledAppBar>
        </HideOnScroll>
        <StyledToolbar />
      </React.Fragment>
      <SwipeableDrawer
        open={open}
        onClose={toggleDrawer}
        onOpen={toggleDrawer}
        anchor="left"
        PaperProps={{
          style: {
            borderTopRightRadius: 8,
            borderBottomRightRadius: 8,
            height: 'calc(100% - 24px)',
            marginTop: 12,
          },
        }}
      >
        <TextRight>
          <IconButton onClick={toggleDrawer} style={{ color: '#32407b' }}>
            <CloseIcon />
          </IconButton>
        </TextRight>
        <StyledList>
          <div>
            <SideBarItem
              text="Coding Projects"
              link="/home"
              icon={<InfoIcon />}
              setOpen={setOpen}
            />
            <SideBarItem
              text="Resume"
              link="/resume"
              icon={<DashboardIcon />}
              setOpen={setOpen}
            />
            <SideBarItem
              text="Blog"
              link="/blog"
              icon={<YouTubeIcon />}
              setOpen={setOpen}
            />
          </div>
        </StyledList>
        <StyledToggleButtonGroup
          value={props.theme}
          exclusive
          onChange={handleChange}
          aria-label="website theme"
        >
          <ToggleButton value="Frost" aria-label="frost theme">
            <AcUnitIcon />
          </ToggleButton>
          <ToggleButton value="Light" aria-label="left aligned">
            <SunIcon />
          </ToggleButton>
          <ToggleButton value="Dark" aria-label="centered">
            <MoonIcon />
          </ToggleButton>
        </StyledToggleButtonGroup>
      </SwipeableDrawer>
    </React.Fragment>
  );
}

export { MobileHeader };
