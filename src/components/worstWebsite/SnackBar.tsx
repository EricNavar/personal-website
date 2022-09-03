import React from 'react';
import { Button, Snackbar, IconButton } from '@mui/material';

function SimpleSnackBar(): JSX.Element {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
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
        message="I DONT USE COOKIES!!! 🍪🍪🍪🍪🍪🍪"
        style={{ fontSize: 20 }}
        action={
          <React.Fragment>
            <Button color="secondary" size="small">
              UNDO
            </Button>
            <IconButton size="small" aria-label="close" color="inherit">
              Close
            </IconButton>
          </React.Fragment>
        }
      />
    </div>
  );
}

export { SimpleSnackBar };
