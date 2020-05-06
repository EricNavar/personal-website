import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import Section from './Section';

export default function Education(props) {
  const coursework = [
    "Programming 1 & 2",
    "Discrete Structures",
    "Data Structures",
    "Computer Organization",
    "Software Engineering"
  ];
  const courseworkList = coursework.map((x) =>
    <ListItem>
      {x}
    </ListItem>
  );

  const contents = (
    <div>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      <Typography variant="h5">
        University of Florida
      </Typography>
      <Typography>
        GPA: 3.93
      </Typography>
      <Typography>
        May 2022
      </Typography>
      <Typography variant="h6">
        Relevant coursework
      </Typography>
      <List>
        {courseworkList}
      </List>
    </div>
  );

  return (
    <Section
      title = "Education"
      details = {contents}
    />
  );
}