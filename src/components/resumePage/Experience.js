import React from 'react';
import InvolvementItem from './InvolvementItem';
import Section from './Section';
import Grid from '@material-ui/core/Grid';

export default function InvolvementList() {
  return (
    <Section title = "Experience">
      <Grid container spacing={4}>
        <InvolvementItem
          title = "DC Rock Fitness"
          position = "Front End Developer"
          time_period = "February - September 2020"
          description = {[
            "Work with a client in an agile environment to create a website that handles user content and admin controls.",
            "Develop front end using React and Material UI."
          ]}
          link="https://dcfitness.herokuapp.com/"
        />
      </Grid>
    </Section>
  );
}