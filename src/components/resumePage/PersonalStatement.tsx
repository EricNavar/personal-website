import React, { Suspense, lazy } from 'react';
import { Typography, Grid, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';
//local files
import { backgroundGradient } from '../../styling/commonStyles';
import { styled } from '@mui/material/styles';
const ProfilePicture = lazy(() => import('./ProfilePicture').then((module) => ({
  default: module.ProfilePicture,
})));

const PersonalStatementHeader = styled(Typography)({
  fontSize: 32,
  marginBottom: 8
});

const useStyles = makeStyles({
  textContainer: {
    maxWidth: 450,
    color: '#f5f4f4 !important',
    marginTop: 16,
    padding: 16,
    transition: 'background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    boxShadow: 'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px'
  },
  animatedItem: {
    transform: 'translateY(50%)',
    color: 'white',
    fontSize: 60
  },
  personalStatementWrapper: {
    paddingTop: 20,
    paddingBottom: 30,
    marginBottom: 20
  },
  profilePicWrapper: {
    maxWidth: 200,
    maxHeight: 200,
    borderRadius: '50%',
    marginRight: 48,
    boxShadow: 'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px'
  },
  text: {
    fontSize: 16
  }
});

function PersonalStatement(): JSX.Element {
  const classes = useStyles();
  return (
    <Grid
      container
      direction='row'
      justify='center'
      alignItems='center'
      spacing={4}
      className={classes.personalStatementWrapper}
    >
      <div className={classes.profilePicWrapper}>
        <Suspense fallback={<div />}>
          <ProfilePicture />
        </Suspense>
      </div>
      <Paper className={classes.textContainer} sx={backgroundGradient} elevation={3}>
        <PersonalStatementHeader variant='body1'>
          <b>Hi, I&apos;m Eric Navar</b>
        </PersonalStatementHeader>
        <Typography variant='body1' className={classes.text}>
          I&apos;m a computer science major and digital arts minor at UF interested in learning new things. I have lots of cool experience in frontend and I&apos;m also trying to learn UX design. Feel free to reach out!
        </Typography>
      </Paper>
    </Grid>
  );
}

export { PersonalStatement };
