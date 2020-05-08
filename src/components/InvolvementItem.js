import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import LinkIcon from '@material-ui/icons/Link';
import Grid from '@material-ui/core/Grid';
import Tooltip from '@material-ui/core/Tooltip';
import ListItem from '@material-ui/core/ListItem';

const useStyles = makeStyles({
  involvementItem: {
    overflow: 'hidden',
    borderRadius: 4,
    background: 'linear-gradient(90deg, rgba(241,245,248,1) 0%, rgba(228,232,235,1) 85%, rgba(215,218,225,1) 100%)',
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
  involvementItemInner: {
    padding: 16,
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
  },
  img: {
    borderRadius: 8,
    width: 50
  }
});

export default function InvolvementItem({title, description, link, time_period, linkDescription, position, icon}) {
  const classes = useStyles();

  const getDescription = () => {
    if (Array.isArray(description))
      return (
        description.map((line) =>
          <ListItem key={line} dense>
            <Typography variant="body1" color='textSecondary'>
              {line}
            </Typography>
          </ListItem>
        )
      )
  }
  return (
    <Grid item sm={12} md={6}>
      <div className={classes.involvementItem}>
        <div className={classes.involvementItemInner}>
          <div className={classes.topRow}>
            <Typography className={classes.title} href={link} variant="h5">
              <b>{title}</b>
            </Typography>
            {icon &&
              <img className={classes.img} alt='' src={icon}></img>
            }
            {link &&
              <Tooltip title={linkDescription} aria-label={linkDescription}>
                <IconButton href={link}>
                  <LinkIcon/>
                </IconButton>
              </Tooltip>
            }
          </div>
          <Typography component='span' variant="overline" gutterBottom>
            {position}&emsp;
          </Typography>
          <Typography component='span' variant="overline" gutterBottom color='textSecondary'>
            {time_period}
          </Typography>
          {getDescription()}
        </div>
      </div>
    </Grid>
  );
}