import React from 'react';
import { Typography } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';
import MinecraftCursor from '../assets/icons/diamond-sword.png';
//local files

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      cursor: `url(${MinecraftCursor}), auto`,
      height: 'calc(100vh - 64px)',
    },
    content: {
      marginRight: '10%',
      marginLeft: '10%',
    },
    serverLink: {
      fontSize: '1.4rem',
    },
  })
);

function MinecraftPage(): JSX.Element {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <Typography
          color="textPrimary"
          component="h2"
          variant="h4"
          gutterBottom
        >
          Please join my Minecraft server
        </Typography>
        <Typography component="p" variant="body1" gutterBottom>
          SSDungeons is the official Minecraft server for UF Society of Software
          Developers
        </Typography>
        <Typography
          component="p"
          variant="body1"
          gutterBottom
          className={classes.serverLink}
          color="primary"
        >
          51.79.111.26:25602
        </Typography>
      </div>
    </div>
  );
}

export { MinecraftPage };
