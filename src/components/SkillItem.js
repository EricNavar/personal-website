import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';
import { makeStyles } from '@material-ui/core/styles';
import LensIcon from '@material-ui/icons/Lens';

//icons must be PNGs
const useStyles = makeStyles(theme => ({
  root: {
    margin: "auto",
    display: "flex",
    iconFilled: "#ff3d47"
  },
  iconFilled: {
    color: '#4940ff',
  },
  flex:{
    display:"flex"
  }
}));

export default function SkillItem({skill, icon, value}) {
  const classes = useStyles();
  return (
    <Box 
      className={classes.root}
      component="fieldset" 
      borderColor="transparent"
    >
      <div className={classes.flex}>
        <Typography component="legend">
          {skill}
        </Typography>
        <img alt='' style={{width:32}} variant="square" src={icon}/>
      </div>
      <Rating className={classes.iconFilled}
        name="read-only"
        value={value}
        readOnly
        icon = {<LensIcon/>}
      />
    </Box>
  );
}