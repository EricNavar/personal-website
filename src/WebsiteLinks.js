import React from 'react';
import Button from '@material-ui/core/Button';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import './WebsiteLinks.css';

function WebsiteLinks() {
  return (
    <div>
      <Button  className="Button">
        <GitHubIcon/>
      </Button>
      <Button  className="Button">
        <LinkedInIcon/>
      </Button>
      <Button  className="Button">
        <FacebookIcon/>
      </Button>
    </div>
  );
}

export default WebsiteLinks;