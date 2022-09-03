import React from 'react';
import { Grid } from '@mui/material';
//local files
import { Section } from './Section';
import { InvolvementItemCard } from './InvolvementItemCard';
import { InvolvementItem } from '../../commonTypes';

type InvolvementListProps = {
  title: string,
  data: Array<InvolvementItem>
}

function InvolvementSection(props: InvolvementListProps): JSX.Element {
  const { title, data } = props;
  return (
    <Section title={title}>
      <Grid container spacing={5}>
        {data.map((item: InvolvementItem, index) => <InvolvementItemCard key={index} involvementItem={item} />)}
      </Grid>
    </Section>
  );
}

export { InvolvementSection };
