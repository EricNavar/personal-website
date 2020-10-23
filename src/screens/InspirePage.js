import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import loremPicsum from "lorem-picsum";
import RhovasLogo from "./../assets/images/rhovas.png";
import Quote from 'inspirational-quotes';
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  visibleOnLoad: {
    height: window.innerHeight,
    textAlign: 'center',
    display: 'grid',
    alignItems: 'center'
  },
  rhovas: {
    position: "absolute",
    zIndex: 1,
    bottom:1,
    right:1
  },
  rhovasText: {
    position: "relative",
    backgroundImage: 'inherit',
    "-webkit-background-clip": "text",
    "-webkit-filter": "invert() sepia()"
  },
  quoteText: {
    position: "relative",
    backgroundImage: 'inherit',
    "-webkit-background-clip": "text",
    "-webkit-filter": "invert() sepia()",
    color: "black",
    fontSize: "4em",
    lineHeight: "1.5em",
    maxWidth: '80vw',
    fontWeight:800,
    textShadow: "4px 4px 0px rgba(255, 255, 255, 1)",
    display: 'inline-block'
  }
}));

export default function Portfolio() {
  const classes = useStyles();
  const inspirationalImage = loremPicsum({
    width: window.innerWidth,
    height: window.innerHeight,
    random: true
  });
  const quote = Quote.getRandomQuote();
  console.log(loremPicsum);
  //<img src={inspirationalImage} alt="inspirationa l-image"/>
  return (
    <main>
      <div className={classes.visibleOnLoad} style={{backgroundImage:"url("+inspirationalImage+")"}}>
        <div>
          <Typography variant='overline' className={classes.quoteText}>
            {quote}
          </Typography>
        </div>
        <div className={classes.rhovas}>
          <img alt="" src={RhovasLogo} style={{width:32}}/>
          <Typography variant='overline' className={classes.rhovasText}>
            Powered by Rhovas
          </Typography>
        </div>
      </div>
      <Button
        variant='contained'
        component={Link}
        to='/'
      >
        Retun to home
      </Button>
      <Button
        variant='contained'
        component={Link}
        to='/inspire'
      >
        reload
      </Button>
    </main>
  );
}