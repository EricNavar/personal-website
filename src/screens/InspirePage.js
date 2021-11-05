import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import loremPicsum from 'lorem-picsum';
import Quote from 'inspirational-quotes';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  visibleOnLoad: {
    height: window.innerHeight,
    textAlign: 'center',
    display: 'grid',
    alignItems: 'center'
  },
  rhovas: {
    position: 'absolute',
    zIndex: 1,
    bottom:1,
    right:1
  },
  rhovasText: {
    position: 'relative',
    backgroundImage: 'inherit',
    '-webkit-background-clip': 'text',
    '-webkit-filter': 'invert() sepia()'
  },
  quoteText: {
    position: 'relative',
    backgroundImage: 'inherit',
    '-webkit-background-clip': 'text',
    '-webkit-filter': 'invert() sepia()',
    color: 'black',
    maxWidth: '80vw',
    fontWeight: 800,
    textShadow: '4px 4px 0px rgba(255, 255, 255, 1)',
    display: 'inline-block',
    lineHeight: '1.2em'
  },
  margin: {
    margin: 12
  }
}));

export default function InspirePage() {
  React.useEffect(() => {
    document.title = 'Inspiration 😌';
    window.scrollTo({
      top: 0,
      left: 0,
    });
  },[]);
  const classes = useStyles();
  const inspirationalImage = loremPicsum({
    width: window.innerWidth,
    height: window.innerHeight,
    random: true
  });
  const quote = Quote.getRandomQuote();
  const quoteFontSize = Math.min(Math.sqrt(quote.length / 4), 6.5);
  return (
    <main>
      <div className={classes.visibleOnLoad} style={{backgroundImage:'url('+inspirationalImage+')'}}>
        <div>
          <Typography variant='overline' className={classes.quoteText} style={{fontSize:`${quoteFontSize}vh`}}>
            {quote}
          </Typography>
        </div>
        <div className={classes.rhovas}>
          <Typography variant='overline' className={classes.rhovasText}>
            Powered by Rhovas
          </Typography>
        </div>
      </div>
      <Button
        variant='contained'
        component={Link}
        to='/'
        className={classes.margin}
      >
        Return to home
      </Button>
      <Button
        variant='contained'
        component={Link}
        to='/inspire'
        className={classes.margin}
      >
        reload
      </Button>
    </main>
  );
}