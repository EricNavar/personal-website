import React from 'react';
import { Typography, Button } from '@mui/material';
import { makeStyles } from '@mui/material/styles';
/* @ts-expect-error tslint:disable-next-line */
import loremPicsum from 'lorem-picsum';
/* @ts-expect-error tslint:disable-next-line */
import Quote from 'inspirational-quotes';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';

const QuoteText = styled(Typography)({
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
});

const VisibleOnLoad = styled('div')({
  height: window.innerHeight,
  textAlign: 'center',
  display: 'grid',
  alignItems: 'center'
});

const Rhovas = styled('div')({
  position: 'absolute',
  zIndex: 1,
  bottom: 1,
  right: 1
});

const useStyles = makeStyles(() => ({
  rhovasText: {
    position: 'relative',
    backgroundImage: 'inherit',
    '-webkit-background-clip': 'text',
    '-webkit-filter': 'invert() sepia()'
  },
  margin: {
    margin: 12
  }
}));

function InspirePage(): JSX.Element {
  React.useEffect(() => {
    document.title = 'Inspiration 😌';
    window.scrollTo({
      top: 0,
      left: 0,
    });
  }, []);
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
      <VisibleOnLoad style={{ backgroundImage: 'url(' + inspirationalImage + ')' }}>
        <div>
          <QuoteText variant='overline' style={{ fontSize: `${quoteFontSize}vh` }}>
            {quote}
          </QuoteText>
        </div>
        <Rhovas>
          <Typography variant='overline' className={classes.rhovasText}>
            Powered by Rhovas
          </Typography>
        </Rhovas>
      </VisibleOnLoad>
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

export { InspirePage };
