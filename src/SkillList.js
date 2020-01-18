import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Title from './Title';
import SkillItem from './SkillItem';
import Grid from '@material-ui/core/Grid';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(0, 2),
  }
}));

export default function SimpleList() {
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
          <Title title="Skills"/>
        </Grid>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <SkillItem skill="C++" value="4"/>
        <SkillItem skill="Java" value="3"/>
        <SkillItem skill="React" value="2"/>
        <SkillItem skill="Git" value="3"/>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
}