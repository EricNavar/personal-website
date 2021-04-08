import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
//local files
import Eric from './../../assets/homePage/Eric Navar.webp';
import commonStyles from './../../commonStyles.js';

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
    transition: "background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms"
  },
  imgContainer: {
    minWidth:200,
    [theme.breakpoints.up('sm')]: {
      textAlign: 'right'
    }
  },
  animatedItem: {
    animation: `$myEffect 2000ms ${theme.transitions.easing.easeInOut}`,
    transform: "translateY(50%)",
    color: 'white',
    fontSize: 60
  },
  profile: {
    maxWidth: 250,
    right: 25,
    bottom: 0,
    borderRadius: '50%',
    marginRight: 32
  },
  personalStatementWrapper: {
    paddingTop: 20,
    paddingBottom: 30
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
      <img src={Eric} alt="" className={classes.profile}/>
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