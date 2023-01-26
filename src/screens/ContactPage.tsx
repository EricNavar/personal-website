import React, { useState } from 'react';

import {
  Alert,
  Button,
  Grid,
  Snackbar,
  styled,
  TextField,
  Typography,
} from '@mui/material';

import GitHubIcon from './../assets/icons/github.svg';
import LinkedInIcon from './../assets/icons/linkedin.svg';
import { SocialLink } from '../components/home/SocialLink';
import { sendEmail } from '../util/sendgrid';

const Main = styled(Grid)(({ theme }) => ({
  paddingLeft: '5%',
  paddingRight: '5%',
  paddingTop: 20,
  background: theme.palette.background.default,
  minHeight: '100vh',
  padding: 'auto',
}));

const Form = styled('form')({
  marginTop: 12,
  width: '100%',
});

const SubmitButton = styled(Button)({
  marginTop: 24,
  marginBottom: 32,
  background: 'linear-gradient(90deg, #537895 0%, #09203f 100%)',
  border: 0,
  boxShadow: '0 3px 5px 2px rgba(50, 64, 123, .3)',
  color: 'white',
  height: 48,
  padding: '0 30px',
  width: 200,
  '&:hover': {
    opacity: 0.85,
  },
  '&:active': {
    boxShadow:
      'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset',
  },
});

// const Link = styled('div')({
//   marginTop: 32,
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center'
// });

const ContactInfo = styled(Typography)({
  marginTop: 16,
});

const BigTextField = styled(TextField)({
  width: '100%',
  marginTop: 16,
});

const FormWrapper = styled(Grid)({
  maxWidth: 800,
  marginTop: 32,
});

const Email = styled(Typography)({
  marginBottom: 12,
  position: 'relative',
  fontSize: 18,
  textDecoration: 'none',
  '&::after': {
    position: 'absolute',
    transition: '.3s',
    content: '""',
    width: 0,
    right: 0,
    left: 0,
    bottom: '-2px',
    borderRadius: 1,
    height: '2px',
    background: '#00c4cc',
  },
  '&:hover::after': {
    width: '100%',
    left: 0,
  },
  '&:active::after': {
    width: '100%',
    left: 0,
  },
});

const CenterText = styled(Grid)({
  textAlign: 'center',
});

function ContactPage() {
  React.useEffect(() => {
    document.title = 'Contact | Eric Navar';
    window.scrollTo({
      top: 0,
      left: 0,
    });
  }, []);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [open, setOpen] = React.useState(false);
  //what the user puts in the field for "Tell me about yourself"
  const [details, setDetails] = React.useState('');

  //if the user submits without entering their name
  const [nameError, setNameError] = useState(false);
  //if the user submits without entering either a email or phone number
  const [detailsError, setDetailsError] = useState(false);

  const handleEmailChange = (event: any) => {
    setEmail(event.target.value);
  };
  const handleNameChange = (event: any) => {
    setName(event.target.value);
  };
  const handleDetailChange = (event: any) => {
    setDetails(event.target.value);
  };
  const isValidInput = async () => {
    setNameError(name === '' || name.trim().split(' ').length < 2);
    setDetailsError(details === '');
    const valid =
      (await !(name === '' || name.trim().split(' ').length < 2)) &&
      !(details === '');
    return valid;
  };
  const handleSubmit = (ev: any) => {
    ev.preventDefault();
    isValidInput().then((value) => {
      if (value === true) {
        sendEmail(name, details, email);
        setOpen(true);
        setName('');
        setEmail('');
        setDetails('');
      } else {
        console.log('invalid');
      }
    });
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Thanks! I will get back in touch with you soon.
        </Alert>
      </Snackbar>
      <Main container direction="column" alignItems="center">
        <div>
          <FormWrapper>
            <Typography
              color="textPrimary"
              component="h2"
              variant="h5"
              align="center"
            >
              <b>Send me a message</b>
            </Typography>
            <Form>
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="stretch"
                spacing={0}
              >
                <Grid item xs={12} sm={5}>
                  <TextField
                    autoFocus
                    autoComplete="name"
                    label="Name"
                    required
                    onChange={handleNameChange}
                    variant="outlined"
                    margin="dense"
                    value={name}
                    error={nameError}
                    helperText={nameError ? 'Enter first and last name' : ''}
                  />
                </Grid>
                <Grid item xs={false} sm={2}></Grid>
                <Grid item xs={12} sm={5}>
                  <TextField
                    id="email"
                    label="Email"
                    value={email}
                    onChange={handleEmailChange}
                    autoComplete="on"
                    variant="outlined"
                    margin="dense"
                  />
                </Grid>
                <Grid item xs={false} md={4}></Grid>
              </Grid>
              <BigTextField
                label="Reason for contact?"
                helperText={detailsError ? 'Required field' : ''}
                value={details}
                margin="dense"
                onChange={handleDetailChange}
                error={detailsError}
                rows="4"
                required
                fullWidth
                multiline
                variant="outlined"
              />
            </Form>
            <CenterText>
              <SubmitButton
                fullWidth
                variant="outlined"
                onClick={handleSubmit}
                disableRipple
              >
                SEND
              </SubmitButton>
            </CenterText>
          </FormWrapper>
        </div>
        <ContactInfo color="textPrimary" as="h4" variant="h5" align="center">
          <b>Contact Information</b>
        </ContactInfo>
        <CenterText>
          <SocialLink
            label="Github"
            link="https://www.github.com/ericnavar"
            icon={GitHubIcon}
            circle={true}
          />
          <SocialLink
            label="LinkedIn"
            link="https://www.linkedin.com/in/ericnavar/"
            icon={LinkedInIcon}
            circle={false}
          />
        </CenterText>
        <div>
          <Email color="primary" variant="body1" align="center">
            ericnavar@ufl.edu
          </Email>
        </div>
      </Main>
    </React.Fragment>
  );
}

export { ContactPage };
