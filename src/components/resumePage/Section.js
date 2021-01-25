import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  section: {
    marginTop: 30,
    marginBottom: 20,
    width: "100%"
  },
  divider: {
    background: '#32407b',
    marginTop: 8,
    marginBottom: 8,
    height: 4,
    width: '100%'
  }
});

export default function Section({children, title, ...props}) {
  const classes = useStyles();
  return (
    <div className={classes.section} {...props}>
      <div style={{width:'min-content'}}>
        <Typography component='h2' variant='h4' color='textPrimary'>{title}</Typography>
        <div className={classes.divider}></div>
      </div>
      {children}
    </div>
  );
}