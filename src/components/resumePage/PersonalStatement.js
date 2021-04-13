import React, {Suspense, lazy} from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
//local files
import commonStyles from './../../styling/commonStyles.js';
const ProfilePicture = lazy(() => import('./ProfilePicture.js'));

const useStyles = makeStyles(theme => ({
  button: {
    color: 'white',
    '&:hover': {
      '& svg': {
        color: "#00a8cc"
      }
    },
    '& *': {
      transition: ".5s ease-in-out"
    }
  },
  textContainer: {
    maxWidth: 450,
    color: "#f5f4f4",
    marginTop: 16,
    padding: 16,
    transition: "background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    boxShadow: "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"
  },
  imgContainer: {
    minWidth:200,
    [theme.breakpoints.up('sm')]: {
      textAlign: 'right'
    }
  },
  animatedItem: {
    transform: "translateY(50%)",
    color: 'white',
    fontSize: 60
  },
  personalStatementWrapper: {
    paddingTop: 20,
    paddingBottom: 30
  },
  profilePicWrapper: {
    maxWidth: 250,
    maxHeight: 250,
    borderRadius: '50%',
    marginRight: 32,
    boxShadow: "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"
  }
}));

export default function PersonalStatement() {
  const classes = useStyles();
  const commonClasses = commonStyles();
  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      spacing={4}
      className={classes.personalStatementWrapper}
    >
      <div className={classes.profilePicWrapper}>
        <Suspense fallback={<div/>}>
          <ProfilePicture/>
        </Suspense>
      </div>
      <Paper className={`${classes.textContainer} ${commonClasses.backgroundGradient}`} elevation={3}>
        <Typography variant='body1' style={{fontSize:32}}>
          <b>Eric Navar</b>
        </Typography>
        <Typography variant='body1' style={{fontSize:16}}>
          I'm a computer science major and digital arts minor at UF interested in learning new things. I'm always working on a front-end development project and I'm also trying to learn UX design.
        </Typography>
      </Paper>
    </Grid>
  );
}