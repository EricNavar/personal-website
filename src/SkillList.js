import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Title from './Title';
import SkillItem from './SkillItem';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(0, 2),
  }
}));

export default function SimpleList() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Title title="Skills"/>
      <SkillItem skill="C++" value="4"/>
      <SkillItem skill="Java" value="3"/>
      <SkillItem skill="React" value="2"/>
      <SkillItem skill="Git" value="3"/>
    </div>
  );
}