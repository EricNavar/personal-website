import React, { useState } from 'react';

import emailjs from '@emailjs/browser';
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
  border: 0,
  height: 48,
  padding: '0 30px',
  width: 200,
  textTransform: 'initial',
  '&:hover': {
    opacity: 0.85,
    boxShadow: '0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)',
  },
  '&:active': {
    boxShadow: 'none',
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

const Email = styled(Typography)(({theme}) => ({
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
    background: theme.palette.secondary.main,
  },
  '&:hover::after': {
    width: '100%',
    left: 0,
  },
  '&:active::after': {
    width: '100%',
    left: 0,
  },
}));

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
  const [details, setDetails] = React.useState(''); //what the user puts in the field for "Reason for contact"

  const [nameError, setNameError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const handleEmailChange = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setEmail(event.target.value);
  };
  const handleNameChange = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setName(event.target.value);
  };
  const handleDetailChange = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setDetails(event.target.value);
  };
  const isValidInput = async () => {
    setNameError(name === '' || name.trim().split(' ').length < 2);
    setDetailsError(details === '');
    setEmailError(email === '');
    const valid =
      (await !(name === '' || name.trim().split(' ').length < 2)) &&
      !(details === '') &&
      email !== '';
    return valid;
  };

  const handleSubmit = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    isValidInput().then((value) => {
      if (value === true) {
        sendEmail();
        setOpen(true);
        setName('');
        setEmail('');
        setDetails('');
      } else {
        console.log('invalid');
      }
    });
  };

  const sendEmail = () => {
    const templateParams = {
      message: details,
      user_name: name,
      user_email: email,
    };

    emailjs
      .send(
        'contact_service',
        'contact_form',
        templateParams,
        process.env.REACT_APP_MAILJS_PUBLIC_KEY
      )
      .then(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (response: any) => {
          console.log('Sent email! 🥰', response.status, response.text);
        },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (err: any) => {
          console.log('FAILED...', err);
        }
      );
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
                    error={emailError}
                    helperText={emailError ? 'Please enter email' : ''}
                  />
                </Grid>
                <Grid item xs={false} md={4}></Grid>
              </Grid>
              <BigTextField
                label="Reason for contact?"
                helperText={detailsError ? 'Please enter a message' : ''}
                value={details}
                margin="dense"
                onChange={handleDetailChange}
                error={detailsError}
                rows="6"
                fullWidth
                multiline
                variant="outlined"
              />
            </Form>
            <CenterText>
              <SubmitButton
                fullWidth
                variant="contained"
                onClick={handleSubmit}
                disableRipple
                color="primary"
              >
                Send
              </SubmitButton>
            </CenterText>
          </FormWrapper>
        </div>
        <ContactInfo color="textPrimary" variant="h5" align="center">
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
            ericn2413@gmail.com
          </Email>
        </div>
      </Main>
    </React.Fragment>
  );
}

export { ContactPage };
