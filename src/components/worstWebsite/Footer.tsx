import React from 'react';
import { ButtonBase, Grid, GridProps, IconButton } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { styled } from '@mui/material/styles';

const ContactMain = styled(Grid)<GridProps>(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    justifyContent: 'right',
  },
  [theme.breakpoints.down('sm')]: {
    justifyContent: 'center',
    marginTop: 18,
  },
  display: 'flex',
  '& div:not(:first-child)': {
    marginTop: 8,
  },
}));

const Buffer = styled(Grid)<GridProps>(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'none',
  },
  [theme.breakpoints.down('xs')]: {
    display: 'none',
  },
}));

const useStyles = makeStyles({
  footer: {
    backgroundColor: '#19202D',
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: '8%',
    paddingRight: '8%',
  },
  logoButton: {
    height: 48,
    textAlign: 'left',
    color: 'white',
    //svg logo
    '& use': {
      fill: 'white',
    },
    '&:hover': {
      opacity: 0.8,
    },
    '&:active': {
      opacity: 0.8,
    },
  },
  contactItem: {
    display: 'flex',
    alignItems: 'center',
    '& a': {
      color: 'white',
    },
  },
  contactLink: {
    height: 'min-content',
    marginLeft: 8,
    textDecoration: 'none',
  },
  address: {
    justifyContent: 'center',
    display: 'flex',
  },
});

function Footer(): JSX.Element {
  const classes = useStyles();

  const LogoButton = () => {
    return (
      <Grid item xs={4} sm={6} md={4} className={classes.logoButton}>
        <ButtonBase
          className={classes.logoButton}
          TouchRippleProps={{
            style: { color: 'white' },
          }}
        >
          help
        </ButtonBase>
      </Grid>
    );
  };

  const Contact = () => {
    return (
      <ContactMain item xs={12} sm={6} md={4}>
        <div style={{ width: 'min-content' }}>
          <div className={classes.contactItem}>
            <IconButton href="https://www.google.com" size="small"></IconButton>
            <a href="https://www.google.com" className={classes.contactLink}>
              google.com
            </a>
          </div>
        </div>
      </ContactMain>
    );
  };

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={0}
      className={classes.footer}
      component="footer"
    >
      <LogoButton />
      <Buffer item sm={6}></Buffer>
      <Contact />
    </Grid>
  );
}

export { Footer };
