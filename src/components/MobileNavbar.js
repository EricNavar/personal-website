import React from "react";
import PropTypes from "prop-types";
import List from "@material-ui/core/List";
import Slide from "@material-ui/core/Slide";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import ListItem from "@material-ui/core/ListItem";
import IconButton from "@material-ui/core/IconButton";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { useHistory, useRouteMatch } from "react-router-dom";

//icons
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";
import CloseIcon from "@material-ui/icons/Close";
import DashboardIcon from '@material-ui/icons/Dashboard';
import SunIcon from '@material-ui/icons/Brightness5';
import MoonIcon from '@material-ui/icons/Brightness2';

//citation: https://material-ui.com/components/app-bar/#back-to-top

const useStyles = makeStyles({
  list: {
    '& button': {
      paddingRight: 32
    }
  },
  MobileAppBar: {
    background: "#09203f",
    width: "calc(100% - 16px)",
    margin: 8,
    borderRadius: 4,
    '& use': {
      fill: 'white'
    }
  },
  activeLink: {
    background: 'rgba(81, 85, 133, 0.6)',
  },
});

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func
};


export default function MobileNavbar(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const history = useHistory();

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const redirect = path => {
    history.push(path);
    setOpen(false);
  };

  function SideBarItem({text, link, icon}){
    let match = useRouteMatch({
      path: link,
      exact: true
    });
    return (
      <ListItem className={match ? classes.activeLink : ''} button onClick={() => redirect(link)}>
        <ListItemIcon>
          {icon}
        </ListItemIcon>
        <ListItemText primary={text} />
      </ListItem>
    );
  }

  return (
    <React.Fragment>
      <React.Fragment>
        <HideOnScroll>
          <AppBar className={classes.MobileAppBar}>
            <Toolbar style={{justifyContent:'space-between'}}>
              <IconButton
                color="inherit"
                onClick={toggleDrawer}
                aria-label="open menu icon"
              >
                <MenuIcon />
              </IconButton>
              <IconButton
                color="inherit"
                onClick={props.toggleDarkMode}
                aria-label="toggle dark mode"
              >
                {props.darkMode ? <SunIcon /> : <MoonIcon />}
              </IconButton>
            </Toolbar>
          </AppBar>
        </HideOnScroll>
        <Toolbar style={{marginBottom:24}}/>
      </React.Fragment>
      <SwipeableDrawer
        open={open}
        onClose={toggleDrawer}
        onOpen={toggleDrawer}
        anchor="left"
        PaperProps= {{
          style:{
            borderTopRightRadius:8,
            borderBottomRightRadius:8,
            height: "calc(100% - 24px)",
            marginTop: 12
          }
        }}
      >
        <div style={{textAlign:'right'}}>
          <IconButton onClick={toggleDrawer} style={{color:'#32407b'}}>
            <CloseIcon/>
          </IconButton>
        </div>
        <List className={classes.list}>
          <div>
            <SideBarItem text="Resume" link="/resume" icon={<DashboardIcon/>} />
            <SideBarItem text="Projects" link="/home" icon={<InfoIcon/>} />
            <SideBarItem text="Connect" link="/home/#connect" icon={<HomeIcon/>} />
          </div>
        </List>
      </SwipeableDrawer>
    </React.Fragment>
  );
};
