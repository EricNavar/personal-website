import React from 'react';
import { Typography, List } from '@mui/material';
import { Section } from './Section';
import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';

const useStyles = makeStyles((theme: Theme) => ({
  descriptionList: {
    paddingLeft: 12,
    listStyle: 'initial'
  },
  listItem: {
    display: 'flow-root list-item',
    '&::marker': {
      color: theme.palette.primary.main
    }
  }
}));

function Interests(): JSX.Element {
  const classes = useStyles();
  return (
    <Section title='Interests'>
      <List className={classes.descriptionList}>
        <Typography variant='body1' color='textPrimary' gutterBottom className={classes.listItem}>
          Frontend Dev
        </Typography>
        <Typography variant='body1' color='textPrimary' gutterBottom className={classes.listItem}>
          UX Design
        </Typography>
        <Typography variant='body1' color='textPrimary' gutterBottom className={classes.listItem}>
          The fact that we apparently haven&apos;t run out of IP addresses
        </Typography>
      </List>
    </Section>
  );
}

export { Interests };
