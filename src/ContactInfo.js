import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(1),
    color: "#000000",
    background: "#ffffff"
  },
}));

export default function PersonalStatement(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Chip
        icon={<PhoneIcon/>}
        label="(813) 506 0973"
        variant="outlined" 
      />
      <Chip
        icon={<EmailIcon/>}
        label="ericnavar@ufl.edu"
        variant="outlined"
        component="a"
      />
    </div>
  );
}