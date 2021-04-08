import React from 'react';
import Grid from '@material-ui/core/Grid';
import InvolvementItem from './InvolvementItem';
import Section from './Section';
import DcrfLogo from './../../assets/homePage/dcrf.webp';

export default function InvolvementList() {
  return (
    <Section title = "Experience" style={{marginTop:40}}>
      <Grid container spacing={4}>
        <InvolvementItem
          title = "DC Rock Fitness"
          position = "Front End Developer"
          time_period = "February - September 2020"
          description = {[
            "Develop a MERN stack web app handling user content and admin controls",
            "Respond to client feedback and requirements in an Agile environment to find the best solution",
            "Configure backend for a serverless AWS Lambda deployment and minimize costs"
          ]}
          link="https://dcfitness.herokuapp.com/"
          wide={true}
          linkDescription="link to website (no longer functional)"
          icon = {DcrfLogo}
        />
      </Grid>
    </Section>
  );
}