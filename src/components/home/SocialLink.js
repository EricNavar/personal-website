import React from "react";
import ButtonBase from "@material-ui/core/ButtonBase";
import PropTypes from 'prop-types';

export default function SocialLink({ icon, circle, link, label }) {
    return (
      <ButtonBase
        href={link}
        variant="outlined"
        style={{ margin: 4, borderRadius: circle ? "50%" : 0 }}
      >
        <img alt={label} src={icon} />
      </ButtonBase>
    );
  };
  SocialLink.propTypes = {
    link: PropTypes.string.isRequired,
    circle: PropTypes.bool.isRequired,
    icon: PropTypes.string.isRequired
  };