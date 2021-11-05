import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Fade from '@material-ui/core/Grow';
import NoSsr from '@material-ui/core/NoSsr';
import { createStyles, Theme, makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
//local files
import HandshakePhoto from './../assets/other/handshake.jpg';
import EricEmoji from './../assets/other/EricEmoji.png';
import PrivacyNotice from '../components/worstWebsite/PrivacyNotice';
import Footer from './../components/worstWebsite/Footer';
import AppBar from './../components/worstWebsite/AppBar';
import SnackBar from './../components/worstWebsite/SnackBar';
import GangnamStyle from './../components/worstWebsite/GangnamStyle.js';
import '../styling/worstWebsite.css';

const myTheme = createMuiTheme({
  palette: {
    type: 'dark'
  },
  typography: {
    fontFamily: [
      'Comic Sans MS',
      '"Segoe UI"',
      '-apple-system',
      'BlinkMacSystemFont',
      'Roboto',
      'Oxyegn',
      'Ubuntu',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    h1: {
      fontSize: "2.5rem",
      margin: "0 1.5rem",
      maxWidth: "100vw",
      fontWeight: "bold",
      letterSpacing: 1,
      lineHeight: 1.3
    },
    h2: {
      fontSize: "2.5rem",
      marginBottom: ".25em",
      marginTop: ".5em",
      fontWeight: 600
    }
  }
});

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      borderImage: "url(" + EricEmoji + ") 30 fill / 30px / 30px space",
      padding: 50
    },
    nyanCat: {
      backgroundImage: 'url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/cat.gif")',
      position: "fixed",
      bottom: 0,
      left: 0,
      width: 200,
      height: 400
    },
    box: {
      background: "#f00",
      fontSize: 30,
      letterSpacing: 12,
      width: 75,
      display: "flex"
    },
    gangnamStyleWrapper: {
      position: "fixed",
      top: "50%",
      right: 0
    },
    plead: {
      width: 'max-content',
      padding: 40,
      boxShadow: "rgba(66,179,245, 0.4) 5px 5px, rgba(66,179,245, 0.3) 10px 10px, rgba(66,179,245, 0.2) 15px 15px, rgba(66,179,245, 0.1) 20px 20px, rgba(66,179,245, 0.05) 25px 25px",
      marginLeft: 'auto',
      marginRight: 'auto',
      borderWidth: 4,
      borderRadius: 8,
      borderColor: 'rgba(66,179,245, 0.6)',
      borderStyle: 'solid',
      fontFamily: "Poppins",
      fontWeight: "bold",
    },
  },
));

export default function WorstWebsite() {
  const classes = useStyles();

  function JavaScriptIsPoison() {
    return (
      <Typography component="h1" variant="h1" style={{backgroundImage: "linear-gradient(to left, violet, indigo, blue, green, yellow, orange, red)"}}>
        JavaScript is poison.<br/><br/>Node JS is bloatware.
      </Typography>
    )
  }

  return (
    <ThemeProvider theme={myTheme}>
      <NoSsr>
        <Fade in={true}>
          <div className={classes.root}>
            <Paper elevation={24}>
              <AppBar/>
            </Paper>
            <div style={{background:"white"}}>
              <h1>&lt;div/&gt;Hello World!&lt;div/&gt;</h1>
            </div>
            <Box my={4} className={classes.box}>
              <Typography component="h1" variant="h1" style={{color: "white", zIndex: 10}}>
                Hello welcome to Erics' cool and awesome websit
              </Typography>
              <PrivacyNotice/>
            </Box>
            <JavaScriptIsPoison/>
            <JavaScriptIsPoison/>
            <JavaScriptIsPoison/>
            <img alt="handshake" style={{width:"100vw"}} src={HandshakePhoto}/>
            <SnackBar/>
            <div className={classes.nyanCat}/>
            <div className={classes.gangnamStyleWrapper}>
              <GangnamStyle/>
            </div>
            <Footer/>
            <div className="wrapper">
              <Typography color='textPrimary' variant="h3" component='span' align='center' className={classes.plead}>
                I'M WATCHING YOU WITH FULLSTORY <span role='img' aria-label="pleading face">😈🥵😳</span>
              </Typography>
              <Typography color='textPrimary' variant="h3" component='span' align='center' className={classes.plead}>
                I'M WATCHING YOU WITH FULLSTORY <span role='img' aria-label="pleading face">😈🥵😳</span>
              </Typography>
              <Typography color='textPrimary' variant="h3" component='span' align='center' className={classes.plead}>
                I'M WATCHING YOU WITH FULLSTORY <span role='img' aria-label="pleading face">😈🥵😳</span>
              </Typography>
            </div>
          </div>
        </Fade>
      </NoSsr>
    </ThemeProvider>
  );
}
