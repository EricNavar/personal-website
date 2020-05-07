import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  title: {
    background: 'linear-gradient(30deg, #203391 30%, #132cab 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    padding: '0 30px',
    margin: "auto",
    textAlign: "center",
  }
}));

export default function Title({title}) {
  const classes = useStyles();
  let title_no_whitespace = title.replace(/ /g,'');
  return (
    <Box>
      <Typography id={title_no_whitespace} variant="h3" className={classes.title}>
        {title}
      </Typography>
    </Box>
  );
}