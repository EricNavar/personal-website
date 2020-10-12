import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MoonIcon from '@material-ui/icons/Brightness2';
import SunIcon from '@material-ui/icons/Brightness5';
import {useHistory} from "react-router-dom";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const useStyles = makeStyles(theme => ({
  button: {
    position: 'absolute',
    backgroundColor: "#515585",
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    top: 0,
    '& hover': {
      backgroundColor: "rgba(81, 85, 133, .85)"
    },
    color: "white"
  },
  darkModeButton: {
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 0,
    right: 0
  },
  homeButton: {
    borderBottomRightRadius: 12,
    borderBottomLeftRadius: 0,
    left: 0
  }
}))

export default function Header({darkMode, handleDarkModeClick}) {
  React.useEffect(() => {
    document.title="Portfolio | Eric Navar"
  }, [])
  const classes = useStyles();
  const history = useHistory();
  const redirect = path => {
    history.push(path);
  };
  return (
    <div>
      <Button
        variant="contained"
        className={`${classes.button} ${classes.homeButton}`}
        startIcon={<ArrowBackIosIcon/>}
        onClick={e=>redirect("/")}
      >
        Home
      </Button>
      <IconButton
        onClick={handleDarkModeClick}
        className={`${classes.button} ${classes.darkModeButton}`}
      >
        {darkMode ? <SunIcon/> : <MoonIcon/>}
      </IconButton>
    </div>
  )
}