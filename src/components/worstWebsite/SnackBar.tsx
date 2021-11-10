import React from 'react';
import { Button, Snackbar, IconButton } from '@material-ui/core';

function SimpleSnackBar() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event: React.SyntheticEvent | React.MouseEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(true);
  };

  return (
    <div>
      <Button onClick={handleClick}>Open very important message</Button>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="I DONT USE COOKIES!!! 🍪🍪🍪🍪🍪🍪"
        style={{ fontSize: 20 }}
        action={
          <React.Fragment>
            <Button color="secondary" size="small" onClick={handleClose}>
              UNDO
            </Button>
            <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
              Close
            </IconButton>
          </React.Fragment>
        }
      />
    </div>
  );
}

export { SimpleSnackBar }
