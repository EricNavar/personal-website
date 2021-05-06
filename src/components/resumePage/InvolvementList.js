import React from 'react';
import Grid from '@material-ui/core/Grid';
//local files
import Section from './Section';
import InvolvementItem from './InvolvementItem';

export default function InvolvementList({title, data}) {
  return (
    <Section title = {title}>
      <Grid container spacing={5}>
        {data.map((item) => <InvolvementItem key={item.title} {...item}/>)}
      </Grid>
    </Section>
  );
}