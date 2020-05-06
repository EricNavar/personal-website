import React from 'react';
import Chip from '@material-ui/core/Chip';

export default function ContactInfo({icon, label, href}) {
  return (
    <Chip
      icon={icon}
      label={label}
      component="a"
      href={href}
      clickable
      variant="outlined"
    />
  );
}