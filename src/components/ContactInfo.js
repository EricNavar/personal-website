import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import ContactInfoItem from './ContactInfoItem';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles(theme => ({
  root: {
    margin: "auto",
    flexGrow: 1,
    height: "100%",
    color: "black"
  },
  contacts: {
    '& > *': {
      margin: theme.spacing(1),
      color: "#000000",
      background: "#ffffff",
      display: "flex",
    },
  },
  profile: {
    height: 200,
    width: 200,
    borderRadius: '50%'
  },
}));

export default function ContactInfo() {
  const classes = useStyles();
  return (
    <Grid 
      container
      justify="center"
      alignItems="center"
      direction="row"
      spacing={0}
      className={classes.root}
    >
      <Grid item>
        <img
          className={classes.profile}
          src={require ("./../assets/images/ProfilePic.jpg")}
          alt=""
        />
      </Grid>
      <Grid className={classes.contacts} item>
        <ContactInfoItem label="(813) 506 0973" icon={<PhoneIcon style={{ color:'black' }}/>}/>
        <ContactInfoItem label="ericnavar@ufl.edu" icon={<EmailIcon style={{ color:'black' }}/>}/>
        <ContactInfoItem label="Github" href="https://github.com/EricNavar" icon={<GitHubIcon style={{ color:'black' }}/>}/>
        <ContactInfoItem label="LinkedIn" href="https://www.linkedin.com/in/ericnavar/" icon={<LinkedInIcon style={{ color:'black' }}/>}/>
      </Grid>
    </Grid>
  );
}