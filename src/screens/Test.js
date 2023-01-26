import React, { useState, useRef } from 'react';

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
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();

  console.log(process.env.REACT_APP_MAILJS_PUBLIC_KEY);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('contact_service', 'contact_form', form.current, process.env.REACT_APP_MAILJS_PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div>
      <button onClick={()=>{console.log(form.current)}}>click me</button>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
};
