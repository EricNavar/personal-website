import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  section: {
    marginTop: 20,
    marginBottom: 20
  },
  divider: {
    background: '#46b5d1',
    margin: 8,
    height: 4,
    width: '100%'
  }
});

export default function Section({children, title}) {
  const classes = useStyles();
  console.log(children)
  return (
    <div className={classes.section}>
      <div style={{width:'min-content'}}>
        <Typography variant="h3">{title}</Typography>
        <div className={classes.divider}></div>
      </div>
      {children}
    </div>
  );
}