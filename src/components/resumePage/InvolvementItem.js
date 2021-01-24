import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import LinkIcon from '@material-ui/icons/Link';
import Grid from '@material-ui/core/Grid';
import Tooltip from '@material-ui/core/Tooltip';
import ListItem from '@material-ui/core/ListItem';

const useStyles = makeStyles(theme => ({
  involvementItem: {
    overflow: 'hidden',
    borderRadius: 4,
    background: theme.palette.itemContainer,
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
    fontSize: 26
  },
  topRow: {
    display: 'flex',
    alignItems: 'center',
  },
  img: {
    borderRadius: 8,
    width: 50
  },
  timePeriod: {
    display: "flex",
    flexWrap: "no-wrap"
  }
}));

export default function InvolvementItem({title, description, link, time_period, linkDescription, position, icon, wide}) {
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
    <Grid item sm={12} md={6} lg={wide ? 6 : 3}>
      <div className={classes.involvementItem}>
        <div className={classes.involvementItemInner}>
          <tr className={classes.topRow}>
            <td style={{width: "100%"}}>
              <Typography className={classes.title} href={link} variant="h5">
                <b>{title}</b>
              </Typography>
            </td>
            <td>
              <img className={classes.img} alt='' src={icon}></img>
            </td>
            {link &&
              <Tooltip title={linkDescription} aria-label={linkDescription}>
                <IconButton href={link}>
                  <LinkIcon/>
                </IconButton>
              </Tooltip>
            }
          </tr>
          <Typography component='span' variant="overline" color='textPrimary'>
            {position}&emsp;
          </Typography>
          <Typography component='span' variant="overline" gutterBottom color='textSecondary' className={classes.timePeriod}>
            {time_period}
          </Typography>
          {getDescription()}
        </div>
      </div>
    </Grid>
  );
}