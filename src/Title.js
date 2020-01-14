import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  title: {
    background: 'linear-gradient(45deg, #00aeff 30%, #00aeff 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
    margin: "auto",
    textAlign: "center",
  }
}));

export default function Title(props) {
  const classes = useStyles();
  return (
    <Box>
      <Typography variant="h3" className={classes.title}>
        {props.title}
      </Typography>
    </Box>
  );
}