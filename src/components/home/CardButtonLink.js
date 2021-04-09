import React from 'react';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Popover from '@material-ui/core/Popover';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  iconButton: {
    width: 32,
    height: 32,
    '& svg': {
      width: 32,
      height: 32,
      fill: theme.palette.text.primary
    },
    "& path": {
      fill: theme.palette.text.primary
    }
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
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <React.Fragment>
      <IconButton
        target="_blank"
        href={props.hyperlink}
        aria-label={props.ariaLabel}
        className={classes.iconButton}
        aria-owns={open ? 'mouse-over-popover' : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
      >
        <props.icon />
      </IconButton>
      <Popover
        id="mouse-over-popover"
        className={classes.popover}
        classes={{
          paper: classes.paper,
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Typography>{props.label}</Typography>
      </Popover>
    </React.Fragment>
  )
}
