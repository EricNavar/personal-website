import React from 'react';
import Button from '@material-ui/core/Button';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import './WebsiteLinks.css';

const useStyles = makeStyles(theme => ({
  Button: {
    size:"small",
    color:"primary",
    height:50,
    width: 50,
    outlined:true,
    fullWidth:true,
  }
}));

function WebsiteLinks() {
  return (
    <div>
      <Button 
        variant="outlined"
        className="Button"
        href="https://github.com/EricNavar">
        <GitHubIcon/>
      </Button>
      <Button 
        variant="outlined"
        className="Button"
        href="https://www.linkedin.com/in/ericnavar/">
        <LinkedInIcon/>
      </Button>
      <Button 
        variant="outlined"
        className="Button"
        href="https://www.facebook.com/EricNavar0">
        <FacebookIcon/>
      </Button>
    </div>
  );
}

export default WebsiteLinks;