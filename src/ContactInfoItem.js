import React from 'react';
import Chip from '@material-ui/core/Chip';

export default function ContactInfo(props) {
  return (
    <Chip
      icon={props.icon}
      label={props.label}
      component="a"
      href={props.href}
      clickable
      variant="outlined"
    />
  );
}