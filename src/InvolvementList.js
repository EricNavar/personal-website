import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InvolvementItem from './InvolvementItem';
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

export default function InvolvementList(props) {
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
          <Title title="Involvement"/>
        </Grid>
      </ExpansionPanelSummary>
      <InvolvementItem
        title = "Programming Team"
        position = "club member"
        time_period = "August 2019 - November 2019"
        description={["Take classes with UF Programming Team.",
        "Practice contest problems"]}
      />
      <InvolvementItem
        title = "Society of Software developers"
        position = "member"
        time_period = "September 2019 - present"
        description={["Study software design concepts such as testing", "API design, and writing documentation"]}
      />
      <InvolvementItem
        title = "Open Source Club"
        position = "member"
        time_period = "January 2019 - April 2019"
        description = {["Work on front end of web app using React-Redux"]}
      />
      <InvolvementItem
        title = "Hack FSU"
        position = "Participant"
        time_period = "October 2019"
        description = {[
          "Use a Raspberry Pi for facial recognition to assign people a score for how many times they have taken out the trash.",
          "Participants’ scores are posted on a website made with React and Google Material UI API.",
          "Placed 2nd overall"
        ]}
      />
    </ExpansionPanel>
  );
}