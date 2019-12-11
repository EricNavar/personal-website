import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

export default function PersonalStatement(props) {
  return (
    <div>
        <Typography component="h3">
          Hello my name is Eric Navar
        </Typography>
        <Typography component="h3">
          <a href="./images/ProfilePic.jpg" download>Resume</a>
        </Typography>
    </div>
  );
}