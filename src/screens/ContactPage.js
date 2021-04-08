import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MaskedInput from 'react-text-mask';
import Alert from '@material-ui/lab/Alert';
import addSeconds from 'date-fns/addSeconds';
import endOfHour from 'date-fns/endOfHour';
import { makeStyles } from '@material-ui/core/styles';
import { DateTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import { Button, Typography, TextField, Grid, Snackbar, Link } from '@material-ui/core';
//local files
import MeetIcon from '../assets/homePage/linkedin.svg';

const useStyles = makeStyles({
  main: {
    width: 'auto',
    marginLeft: 24,
    marginRight: 24,
    paddingTop: 20,
    textAlign: 'center'
  },
  form: {
    marginTop: 16,
    width: '100%' // Fix IE 11 issue.
  },
  submit: {
    marginTop: 24,
    marginBottom: 32,
    background: 'linear-gradient(90deg, #515585 0%, #151965 100%)',
    border: 0,
    boxShadow: '0 3px 5px 2px rgba(50, 64, 123, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
    width: 200,
    '&:hover': {
      opacity: .8
    },
    '&:active': {
      boxShadow: 'none'
    }
  },
  link: {
    marginTop: 32,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    marginBottom: 16,
    marginTop: 16
  },
  contactInfo: {
    marginBottom: 4,
    marginTop: 4
  },
  bigTextField: {
    width: '100%',
    marginTop: 16
  },
  formWrapper: {
    maxWidth: 800
  },
  margin: {
    marginTop: 16,
    marginBottom: 16
  }
});

function TextMaskCustom(props) {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={ref => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
      placeholderChar={'\u2000'}
      showMask
    />
  );
}

TextMaskCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
};

export default function ScheduleConsultationPage() {
  React.useEffect(() => {
    document.title = 'Schedule Consultation | DC Rock Fitness';
    window.scrollTo({
      top: 0,
      left: 0,
    });
  },[]);
  const classes = useStyles();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [numberMask, setNumberMask] = React.useState('(   )    -    ');
  const [open, setOpen] = React.useState(false);
  //what the user puts in the field for "Tell me about yourself"
  const [details, setDetails] = React.useState('');
  const date = new Date();
  const [selectedDate, handleDateChange] = useState( addSeconds(endOfHour(date),1) );

  //if the user submits without entering their name
  const [nameError, setNameError] = useState(false);
  //if the user submits without entering either a email or phone number
  const [numberError, setNumberError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);

  const handleEmailChange = event => {
    setEmail(event.target.value)
  };
  const handleNameChange = event => {
    setName(event.target.value)
  };
  const handleNumberMaskChange = event => {
    setNumberMask(event.target.value);
  };
  const handleDetailChange = event => {
    setDetails(event.target.value);
  };
  //gets just the number from the mask. Removes the parentheses and dash.
  const getNumber = () => {
    return numberMask.replace(/[^0-9]/gi, '');
  };
  const isValidInput = () => {
    setNameError(name === '' || name.trim().split(' ').length < 2);
    setNumberError(getNumber().length !== 10);
    setEmailError(email === '');
    setDetailsError(details === '');
    return name !== '' && name.trim().split(' ').length >= 2 && email !== '' && getNumber().length === 10 && details !== '';
  };
  const handleSubmit = (ev) => {
    ev.preventDefault()
    if (isValidInput()) {
      setOpen(true);
      setName('');
      setNumberMask('(   )    -    ');
      setEmail('');
      setDetails('');
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Thank you for your interest!
        </Alert>
      </Snackbar>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        className={classes.main}
        component='main'
      >
        <Grid item>
          <img className={classes.logo} alt="" src={MeetIcon}/>
        </Grid>
        <Typography component="h4" variant="h5" className={classes.contactInfo}>
            <b>Contact Information</b>
          </Typography>
          <Link variant="body1" href='mailto:dwan@dcrockfitness.com'>
            dwan@dcrockfitness.com
          </Link>
          <Typography component="p" variant="body1" style={{marginBottom: 8}}>
            (305) 318-2661
          </Typography>
        <Grid item className={classes.formWrapper}>
          <Typography component="h2" variant="h4">
            <b>Schedule a Consultation</b>
          </Typography>
          <Typography component="p" variant="body1" color='textSecondary'>
            Let's talk and we can set up a consultation
          </Typography>
          <form className={classes.form}>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              spacing={0}
            >
              <Grid item xs={12} sm={6} md={4}>
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
                  helperText={nameError ? 'Enter your first and last name. Ex: John Doe' : ''}
                />
              </Grid>
              <Grid item xs={false} md={4}></Grid>
              <Grid item xs={12} sm={6} md={4}></Grid>
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  id='email'
                  label="Email"
                  helperText={emailError ? 'Enter an email address' : ''}
                  value={email}
                  onChange={handleEmailChange}
                  autoComplete="off"
                  error={emailError}
                  variant="outlined"
                  margin="dense"
                  required
                />
              </Grid>
              <Grid item xs={false} md={4}></Grid>
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  id='number'
                  label="Phone number"
                  helperText={numberError ? 'Enter a phone number' : ''}
                  value={numberMask}
                  onChange={handleNumberMaskChange}
                  autoComplete="off"
                  error={numberError}
                  required
                  margin="dense"
                  variant='outlined'
                  InputProps={{ inputComponent: TextMaskCustom }}
                />
              </Grid>
            </Grid>
            <TextField
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
              className={classes.bigTextField}
            />
          </form>
          <Grid item>
            <Button
              fullWidth
              variant="outlined"
              className={classes.submit}
              onClick={handleSubmit}
              disableRipple
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}