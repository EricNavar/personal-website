import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  iconButton: {
    '& svg': {
      width: 32,
      height: 32,
      fill: theme.palette.text.primary
    },
    '& path': {
      fill: theme.palette.text.primary
    },
    marginRight: 10
  },
  popover: {
    pointerEvents: 'none',
  },
  paper: {
    padding: theme.spacing(1),
  },
}));

export default function CardButtonLink(props) {
  const classes = useStyles();

  return (
    <Button
      target="noopener"
      href={props.hyperlink}
      aria-label={props.ariaLabel}
      className={classes.iconButton}
      startIcon={<props.icon />}
      variant='outlined'
    >
      {props.label}
    </Button>
  );
}
