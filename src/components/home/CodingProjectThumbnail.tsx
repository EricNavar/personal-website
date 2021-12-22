import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  wrapper: {
    width: '100%',
    textAlign: 'center'
  },
  aspectRatioBox: {
    overflow: 'hidden',
    height: 0,
    position: 'relative',
    width: '100%',
    paddingTop: '100%',
    display: 'grid'
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

type CodingProjectThumbnailProps = {
  image: string,
  altLabel: string
}

function CodingProjectThumbnail(props: CodingProjectThumbnailProps): JSX.Element {
  const { image, altLabel } = props;
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <div className={classes.aspectRatioBox}>
        <img
          className={classes.aspectRatioBoxInside}
          src={image}
          alt={altLabel}
        />
      </div>
    </div>
  );
}

export { CodingProjectThumbnail };
