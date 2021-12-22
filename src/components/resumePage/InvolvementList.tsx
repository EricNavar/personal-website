import React from 'react';
import { Grid } from '@material-ui/core';
//local files
import { Section } from './Section';
import { InvolvementItem } from './InvolvementItem';
import { Project } from '../../commonTypes';

type InvolvementListProps = {
  title: string,
  data: Array<Project>
}

function InvolvementList(props: InvolvementListProps): JSX.Element {
  const { title, data } = props;
  return (
    <Section title={title}>
      <Grid container spacing={5}>
        {data.map((item: Project) => <InvolvementItem key={item._id} involvementItem={item} />)}
      </Grid>
    </Section>
  );
}

export { InvolvementList };
