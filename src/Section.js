import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Title from './Title';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(0, 2),
  },
  display: {
    display: "block",
  }
}));

//These 4 components will be Sections: Skills, Involvement, Projects, and Education
export default function Section(props) {
  const classes = useStyles();
  return (
    <ExpansionPanel defaultExpanded className={classes.root}>
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
          <Title title={props.title}/>
        </Grid>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails className={classes.display}>
        {props.details}
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
}