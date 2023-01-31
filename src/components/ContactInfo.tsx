import React from 'react';

import { styled, Typography } from '@mui/material';

import GitHubIcon from './../assets/icons/github.svg';
import LinkedInIcon from './../assets/icons/linkedin.svg';
import { Section } from './Section';
import { SocialLink } from '../components/home/SocialLink';


const Email = styled(Typography)(({ theme }) => ({
  marginBottom: 8,
  marginTop: 8,
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

const ContactInfo = ({center}: {center: boolean}) => {
	return (
		<Section title='Contact Info' center={center}>
			<Email color="primary" variant="body1">
				ericn2413@gmail.com
			</Email>
			<SocialLink
				label="Github"
				link="https://www.github.com/ericnavar"
				icon={GitHubIcon}
			/>
			<SocialLink
				label="LinkedIn"
				link="https://www.linkedin.com/in/ericnavar/"
				icon={LinkedInIcon}
			/>
		</Section>
	);
};

export { ContactInfo };
