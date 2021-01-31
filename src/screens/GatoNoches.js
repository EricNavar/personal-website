import React from 'react';
import Link from '@material-ui/core/Link';
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import {Link as RouteLink} from "react-router-dom";
//local files
import GatoNochesLogo from '../assets/gatoNoches/GatoNochesLogo';

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
    textAlign: "center",
    cursor: "url(\"https://lh3.googleusercontent.com/pw/ACtC-3d-YhK0Cdb66QP67wA8ZzKDOpDV9m3sG88DdcwXq5ubNX6xePR7Ai0F7UMr1rHOw5Z9wRovbDJDdSi-4Bpzk7GA8EKZS2-rxsn1CBuVAOEcAHksdTjRE3LU20RujF9tKARurzRELIbtHlMjAOzd5H9o=w64-h57-no\"), auto"
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