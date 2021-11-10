import React from 'react';
import { IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  socialLink: {
    margin: 4
  }
});

function SocialLink(props:any) {
  const { icon, circle, link, label } = props;
  const classes = useStyles();

  return (
    <IconButton
      className={classes.socialLink}
      style={{ borderRadius: circle ? '50%' : 0 }}
      href={link}
    >
      <img height="48px" width="48px" alt={label} src={icon} />
    </IconButton>
  );
}

export { SocialLink }