import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';
import { makeStyles } from '@material-ui/core/styles';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

const useStyles = makeStyles(theme => ({
  root: {
    margin: "auto",
    display: "flex",
    iconFilled: "#ff3d47"
  },
  iconFilled: {
    color: '#4940ff',
  },
}));

export default function SimpleList(props) {
  const classes = useStyles();
  return (
    <Box 
      className={classes.root}
      component="fieldset" 
      borderColor="transparent"
    >
      <Typography component="legend">{props.skill}</Typography>
      <Rating className={classes.iconFilled}
        name="read-only"
        value={props.value}
        readOnly
        icon = {<FiberManualRecordIcon/>}/>
    </Box>
  );
}