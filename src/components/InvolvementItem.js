import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import LinkIcon from '@material-ui/icons/Link';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  involvementItem: {
    overflow: 'hidden',
    marginBottom: 8,
    marginTop: 8,
    height: 'auto',
  },
  involvementItemInner: {
    borderRadius: 4,
    background: 'linear-gradient(90deg, rgba(241,245,248,1) 0%, rgba(228,232,235,1) 85%, rgba(215,218,225,1) 100%)',
    paddingLeft: 16,
    paddingRight: 16,
    marginLeft:8,
    marginRight:8,
    height:'100%',
    '&:hover': {
      '& svg': {
        color: "#00a8cc"
      }
    },
    '& *': {
      transition: ".5s ease-in-out"
    }
  },
  title: {
    color: '#151965',
    textAlign: 'left',
    fontSize: 30,
    width: 'max-content',
    marginRight: 16
  },
  topRow: {
    display: 'flex',
    alignItems: 'center',
    justify: 'left'
  }
});

export default function InvolvementItem({title, description, link, time_period, linkDescription, position, icon}) {
  const classes = useStyles();
  return (
    <Grid item sm={12} md={6} className={classes.involvementItem}>
      <div className={classes.involvementItemInner}>
        <div className={classes.topRow}>
          <Typography className={classes.title} href={link} variant="h5">
            <b>{title}</b>
          </Typography>
          <img style={{height: 24}} alt='' src={icon}></img>
          <IconButton href={link}>
            <LinkIcon/>
          </IconButton>
        </div>
        <Typography component='span' variant="overline" gutterBottom>
          {position}&emsp;
        </Typography>
        <Typography component='span' variant="overline" gutterBottom color='textSecondary'>
          {time_period}
        </Typography>
        <Typography variant="body1" gutterBottom color='textSecondary'>
          {description}
        </Typography>
      </div>
    </Grid>
  );
}