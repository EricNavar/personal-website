import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  background: {
    position: 'relative',
    width: '100%',
    top: 0,
    left: 0,
    margin: 0,
    padding: 0,
    height: 180,
    background: '#151965',
    overflow: 'hidden',
    display: 'block',
    listStyleType: 'disc',
    marginBlockStart: '1em',
    marginBlockEnd: '1em',
    paddingInlineStart: 40,
    unicodeBidi: 'isolate',
    textAlign: 'center',
    '& li': {
      position: 'absolute',
      top: '80vh',
      left: '45vw',
      width: 10,
      height: 10,
      border: 'solid 1px #46b5d1',
      color: 'transparent',
      transformOrigin: 'top left',
      transform: 'scale(0) rotate(0deg) translate(-50%, -50%)',
      animation: '$cube 7s ease-in forwards infinite',
    },

    '& li:nth-child(0)': {
      animationDelay: '0s',
      left: '63vw',
      top: '6vh',
    },

    '& li:nth-child(1)': {
      animationDelay: '2s',
      left: '36%',
      top: '23%',
    },

    '& li:nth-child(2)': {
      animationDelay: '4s',
      left: '77%',
      top: '63%',
    },

    '& li:nth-child(3)': {
      animationDelay: '6s',
      left: '87%',
      top: '44%',
    },

    '& li:nth-child(4)': {
      animationDelay: '8s',
      left: '27%',
      top: '72%',
    },

    '& li:nth-child(5)': {
      animationDelay: '10s',
      left: '12%',
      top: '85%',
    },
  },
  '@keyframes cube': {
    'from': {
      transform: 'scale(0) rotate(0deg) translate(-50%, -50%)',
      opacity: 1,
    },
    'to': {
      transform: 'scale(20) rotate(960deg) translate(-50%, -50%)',
      opacity: 0,
    }
  },
  animatedItem: {
    animation: `$myEffect 2000ms ${theme.transitions.easing.easeInOut}`,
    transform: "translateY(50%)",
    color: 'white',
    fontSize:60
  },
  "@keyframes myEffect": {
    "0%": {
      opacity: 0,
      transform: "translateY(-200%)"
    },
    "100%": {
      opacity: 1,
      transform: "translateY(50%)"
    }
  },
}))

export default function Blog() {
  const classes = useStyles()
  return (
    <ul id='cool card' className={classes.background}>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <Typography component='h1' className={classes.animatedItem}>
        Eric Navar
      </Typography>
    </ul>
  )
}