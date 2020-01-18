import React from 'react';
import Grid from '@material-ui/core/Grid';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Project from './Project';
import Title from './Title';;

export default function ProjectList(props) {
  return (
    <ExpansionPanel defaultExpanded>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon/>}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Grid
          container
          justify="center"
          alignItems="center"
        >
          <Title title="Projects"/>
        </Grid>
      </ExpansionPanelSummary>
      <Project
        title = "ARM simulator"
        description = "A simulator that takes in binary instructions and can output and execute the equivalent ARM assembly instructions"
      />
    </ExpansionPanel>
  );
}