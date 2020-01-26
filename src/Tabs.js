import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import SchoolIcon from '@material-ui/icons/School';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import LaptopWindowsIcon from '@material-ui/icons/LaptopWindows';

const useStyles = makeStyles({
  root: {
    width: 500,
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
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
        icon={<ImportContactsIcon/>}
      />
      <BottomNavigationAction
        label="Involvement"
        href="#Involvement"
        icon={<BusinessCenterIcon/>}
      />
      <BottomNavigationAction
        label="Projects"
        href="#Projects"
        icon={<LaptopWindowsIcon/>}
      />
      <BottomNavigationAction
        label="Education"
        href="#Education"
        icon={<SchoolIcon />}
        />
    </BottomNavigation>
  );
}