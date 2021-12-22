import React from 'react';
import { IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  socialLink: {
    margin: 4
  }
});

type SocialLinkProps = {
  icon: string,
  circle: boolean,
  link: string,
  label: string
}

function SocialLink(props: SocialLinkProps): JSX.Element {
  const { icon, circle, link, label } = props;
  const classes = useStyles();

  return (
    <IconButton
      className={classes.socialLink}
      style={{ borderRadius: circle ? '50%' : 0 }}
      href={link}
      target="_blank"
    >
      <img height="48px" width="48px" alt={label} src={icon} />
    </IconButton>
  );
}

export { SocialLink };