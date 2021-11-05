import React from "react";
import ButtonBase from "@material-ui/core/ButtonBase";
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  socialLink: {
    margin: 4
  }
});

export default function SocialLink({ icon, circle, link, label }) {
  const classes = useStyles();

  return (
    <ButtonBase
      href={link}
      variant="outlined"
      className={classes.socialLink}
      style={{ borderRadius: circle ? "50%" : 0 }}
    >
      <img height="48px" width="48px" alt={label} src={icon} />
    </ButtonBase>
  );
};
SocialLink.propTypes = {
  link: PropTypes.string.isRequired,
  circle: PropTypes.bool.isRequired,
  icon: PropTypes.string.isRequired
};