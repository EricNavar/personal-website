import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Title from './Title';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(0, 2),
  },
}));

export default function Education(props) {
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
          <Title title="Education"/>
        </Grid>
      </ExpansionPanelSummary>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <Typography variant="h4">
          University of Florida
        </Typography>
        <Typography>
          GPA: 3.92
        </Typography>
        <Typography>
          May 2022
        </Typography>
        <Typography variant="h6">
          Relevant coursework
        </Typography>
        <List>
          <ListItem>
            Programming 1
          </ListItem>
          <ListItem>
            Programming 2
          </ListItem>
          <ListItem>
            Discrete Structures
          </ListItem>
          <ListItem>
            Data Structures
          </ListItem>
          <ListItem>
            Into to Computer Organization
          </ListItem>
          <ListItem>
            Software Engineering
          </ListItem>
        </List>
    </ExpansionPanel>
  );
}