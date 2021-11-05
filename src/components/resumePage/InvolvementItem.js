import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import IconButton from '@material-ui/core/IconButton';
import LinkIcon from '@material-ui/icons/Link';
import Grid from '@material-ui/core/Grid';
import Tooltip from '@material-ui/core/Tooltip';
import ListItem from '@material-ui/core/ListItem';

const useStyles = makeStyles(theme => ({
  involvementItem: {
    boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
    overflow: 'hidden',
    borderRadius: 4,
    background: theme.palette.type === "light" ? theme.palette.itemContainer : theme.palette.backgroundGradient,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    height: '100%',
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
    padding: 24,
  },
  title: {
    textAlign: 'left',
    fontSize: 26
  },
  topRow: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 16
  },
  img: {
    borderRadius: 8,
    width: 50,
    marginRight: 16
  },
  timePeriod: {
    fontSize: ".85rem"
  },
  position: {
    flexGrow: 1,
    fontSize: ".85rem"
  },
  descriptionList: {
    paddingLeft: 12,
    listStyle: "initial"
  },
  listItem: {
    display: "flow-root list-item",
    "&::marker": {
      color: theme.palette.primary.main
    }
  },
  positionLine: {
    display: 'flex'
  }
}));

export default function InvolvementItem({ title, description, link, linkDescription, positions, icon }) {
  const classes = useStyles();

  function Description() {
    if (Array.isArray(description))
      return (
        description.map((line) =>
          <ListItem key={line} className={classes.listItem}>
            <Typography variant="body1" color='textPrimary'>
              {line}
            </Typography>
          </ListItem>
        )
      )
  }

  function Positions() {
    return (
      Object.keys(positions).map((position, index) =>
        <div className={classes.positionLine} key={index}>
          <Typography component='span' variant="overline" color='textPrimary' className={classes.position}>
            {position}&emsp;
          </Typography>
          <Typography component='span' variant="overline" gutterBottom color='textPrimary' className={classes.timePeriod}>
            {positions[position]}
          </Typography>
        </div>
      )
    );
  }

  return (
    <Grid item sm={12} lg={6}>
      <div className={classes.involvementItem}>
        <div className={classes.involvementItemInner}>
          <div className={classes.topRow}>
            <div>
              <img className={classes.img} alt={title + " icon"} src={icon}></img>
            </div>
            <div>
              <Typography
                className={classes.title}
                color="primary"
                href={link}
                target="_blank"
                component="p"
                variant="h5"
              >
                <b>{title}</b>
              </Typography>
            </div>
            {link &&
              <Tooltip title={linkDescription} aria-label={linkDescription}>
                <IconButton target="_blank" href={link}>
                  <LinkIcon />
                </IconButton>
              </Tooltip>
            }
          </div>
          <Positions />
          <List className={classes.descriptionList}>
            <Description />
          </List>
        </div>
      </div>
    </Grid>
  );
}