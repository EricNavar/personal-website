import React from 'react';
import { Grid } from '@material-ui/core';
//local files
import { Section } from './Section';
import { InvolvementItem } from './InvolvementItem';

function InvolvementList(props:any) {
  const { title, data } = props;
  return (
    <Section title={title}>
      <Grid container spacing={5}>
        {data.map((item:any) => <InvolvementItem key={item.title} {...item} />)}
      </Grid>
    </Section>
  );
}

export { InvolvementList }
