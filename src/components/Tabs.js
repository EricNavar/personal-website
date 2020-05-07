import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Grid from '@material-ui/core/Grid';
import SchoolIcon from '@material-ui/icons/School';
import LaptopWindowsIcon from '@material-ui/icons/LaptopWindows';
import SkillIcon from './assets/images/brain.svg';
import InvolvementIcon from './assets/images/group.svg';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      color: "#000000",
      background: "#ffffff"
    },
  },
}));

export default function Tabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <Grid 
      className={classes.root}
      container
      justify="center"
      alignItems="center"
    >
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction
          label="Skills"
          href="#Skills"
          icon={<SkillIcon/>}
        />
        <BottomNavigationAction className={classes.icon}
          label="Involvement"
          href="#Involvement"
          icon={<InvolvementIcon/>}
        />
        />
        <BottomNavigationAction
          label="Projects"
          href="#Projects"
          icon={<LaptopWindowsIcon/>}
        />
        <BottomNavigationAction
          label="Education"
          href="#Education"
          icon={<SchoolIcon/>}
        />
      </BottomNavigation>
    </Grid>
  );
}