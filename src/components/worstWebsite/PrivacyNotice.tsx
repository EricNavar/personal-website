import React from 'react';
import { Button, Dialog } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledButton = styled(Button)({
  minWidth: 200,
  backgroundColor: 'red',
  boxShadow: '12px 12px  black',
  '&:hover': {
    boxShadow: 'none',
    backgroundColor: 'red',
    transform: 'translate(12px, 12px)'
  },
  width: 200,
  transition: 'transform 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms '
});

function PrivacyNotice(): JSX.Element {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Dialog open={open}>
        Hello World
        <Button onClick={handleClose}>
          Close
        </Button>
      </Dialog>
      <StyledButton onClick={handleClickOpen}>
        Click here to give Eric Navar access to all your logins, cookies, and search history &lt;div/&gt;
      </StyledButton>
    </React.Fragment>
  );
}

export { PrivacyNotice };
