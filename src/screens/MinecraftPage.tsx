import React from 'react';
import { Typography } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
//local files

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      marginRight: '10%',
      marginLeft: '10%'
    },
    serverLink: {
      fontSize: '1.4rem',
    }
  })
);

function MinecraftPage():JSX.Element {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography color='textPrimary' component='h2' variant='h4' gutterBottom>
        Please join my Minecraft server
      </Typography>
      <Typography component="p" variant="body1" gutterBottom>
        SSDungeons is the official Minecraft server for UF Society of Software Developers
      </Typography>
      <Typography component="p" variant="body1" gutterBottom className={classes.serverLink} color="primary">
        51.79.111.26:25602
      </Typography>
    </div>
  );
}

export { MinecraftPage };
