import React from 'react';
import Grid from '@material-ui/core/Grid';
//local files
import Section from './Section';
import InvolvementItem from './InvolvementItem';
import involvementData from './../../data/involvementData.js';

export default function InvolvementList() {
  return (
    <Section title = "Involvement">
      <Grid container spacing={4}>
        {involvementData.map((item) => <InvolvementItem key={item.title} {...item}/>)}
      </Grid>
    </Section>
  );
}