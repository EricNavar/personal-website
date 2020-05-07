import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  parent: {
    display: "flex",
    color:'textSecondary',
  },
  position: {
    flex: 1,
    textAlign: "left",
  },
  time_period: {
    flex: 1,
    textAlign: "right",
  },
  flex:{
    display:"flex"
  }
}));

export default function InvolvementItem({link, description, time_period, linkDescription, title, position, icon}) {
  const classes = useStyles();
  const getLink = () => {
    if (link != null) {
      return (
        <ListItem>
          <Link href={link}>
            {linkDescription}
          </Link>
        </ListItem>
      );
    }
  };
  
  const getDescription = () => {
    if (Array.isArray(description)) {
      description = description.map((x) =>
        <ListItem>
          {x}
        </ListItem>
      );
    }
  };

  return (
    <div className={classes.root}>
      <div className={classes.flex}>
        <Typography variant="h5">
          {title}
        </Typography>
        <Avatar variant="square" src={icon}/>
      </div>
      <div className={classes.parent}>
        <Typography className={classes.position}>
          {position}
        </Typography>
        <Typography className={classes.time_period}>
          {time_period}
        </Typography>
      </div>
      <List>
        {getDescription()}
        {getLink()}
      </List>
    </div>
  );
}