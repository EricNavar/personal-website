import React from 'react';
import Link from '@material-ui/core/Link';
import GatoNochesLogo from './../assets/svg/GatoNochesLogo';
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import {Link as RouteLink} from "react-router-dom";

const useStyles = makeStyles({
  gatoNoches: {
    minHeight: "calc(100vh - 64px)",
    width: "calc(100% - 32px)",
    paddingTop: 32,
    paddingBottom: 32,
    paddingRight: 16,
    paddingLeft: 16,
    backgroundColor: "#F9E9EA",
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    textAlign: "center"
  }
});

export default function GatoNoches() {
  const classes = useStyles();
  React.useEffect(() => {
    document.title = 'Gato Noches';
  });
  return (
    <div className={classes.gatoNoches}>
      <div style={{maxWidth:350}}>
        <GatoNochesLogo/>
      </div>
      <Typography style={{marginTop: 12, marginBottom: 12}}>
        Due to the Covid-19 pandemic, no events for Gato Noches are planned right now
      </Typography>
      <Link component={RouteLink} to='/'>
        Return to home
      </Link>
    </div>
  );
}