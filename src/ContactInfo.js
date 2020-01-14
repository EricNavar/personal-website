import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import Chip from '@material-ui/core/Chip';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      color: "#000000",
      background: "#ffffff",
    },
  },
}));

export default function PersonalStatement(props) {
  const classes = useStyles();
  return (
    <Grid 
      className={classes.root}
      container
      justify="center"
      alignItems="center"
    >
      <Chip
        icon={<PhoneIcon style={{ color:'black' }}/>}
        label="(813) 506 0973"
        variant="outlined" 
      />
      <Chip
        icon={<EmailIcon style={{ color:'black' }}/>}
        label="ericnavar@ufl.edu"
        variant="outlined"
      />
    </Grid>
  );
}