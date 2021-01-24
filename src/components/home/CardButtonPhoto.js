import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  wrapper: {
    width: "45%"
  },
  aspectRatioBox: {
    overflow: 'hidden',
    height: 0,
    position: 'relative',
    width: "100%",
    paddingTop: "100%"
  },
  aspectRatioBoxInside: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    borderRadius: 8
  }
});

export default function HomePageButton({image, alt}) {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <div className={classes.aspectRatioBox}>
        <img
          className={classes.aspectRatioBoxInside}
          src={image}
          alt={alt}
          />
      </div>
    </div>
  );
}
