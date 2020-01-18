import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Project from './Project';
import Title from './Title';
import Grid from '@material-ui/core/Grid';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(0, 2),
  },
}));

export default function ProjectList(props) {
  const classes = useStyles();
  return (
    <ExpansionPanel className={classes.root}>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel2a-content"
        id="panel2a-header"
      >
        <Grid 
          className={classes.root}
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
      <Project 
        title = "Adventures of Flavio"
        description = "AOF description"
      />
    </ExpansionPanel>
  );
}