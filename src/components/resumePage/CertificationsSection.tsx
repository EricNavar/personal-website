import React from 'react';

import { Typography } from '@mui/material';

import { Section } from '../Section';

type Certification = {
  title: string;
  provider: string;
  issue_month: string;
  issue_year: number;
}

const data = [
  {
    title: 'AWS Certified Cloud Practitioner',
    provider: 'Amazon Web Services',
    issue_month: 'February',
    issue_year: 2023
  }
];

const CertificationItem = (item: Certification) => (
  <Typography variant='body1' color='textPrimary'>
    <b>{item.title}</b>&ensp;
    {item.provider},&ensp;
    {item.issue_month} {item.issue_year}
  </Typography>
);

function CertificationsSection(): JSX.Element {
  return (
    <Section title="Certifications">
      {data.map((item: Certification, index) => (
        <CertificationItem key={index} {...item} />
      ))}
    </Section>
  );
}

export { CertificationsSection };
