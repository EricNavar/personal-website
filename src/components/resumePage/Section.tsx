import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  section: {
    marginTop: 50,
    marginBottom: 30,
    width: '100%'
  },
  divider: {
    background: '#32407b',
    marginTop: 2,
    height: 4,
    width: '100%',
    borderRadius: 2,
    marginBottom: 24
  },
  title: {
    fontWeight: 'bold',
    fontSize: '2rem'
  },
  maxContent: {
    width: 'max-content'
  }
});

type SectionProps = {
  children: JSX.Element,
  title: string,
  className?: string
}
function Section({ children, title, className }: SectionProps): JSX.Element {
  const classes = useStyles();
  return (
    <section className={`${classes.section} ${className}`}>
      <div className={classes.maxContent}>
        <Typography className={classes.title} component='h2' variant='h4' color='textPrimary'>
          {title}
        </Typography>
        <div className={classes.divider}></div>
      </div>
      {children}
    </section>
  );
}

export { Section };
