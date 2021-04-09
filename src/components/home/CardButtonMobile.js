import React, { lazy, Suspense } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import PropTypes from "prop-types";
//local files
import CardButtonLink from './CardButtonLink.js';
const CardButtonPhoto = lazy(() => import('./CardButtonPhoto'));

const useStyles = makeStyles((theme) => ({
  itemWrapper: {
    position: 'relative',
    borderRadius: 8,
    height: "100%",
    [theme.breakpoints.down('xs')]: {
      maxWidth: "100%"
    },
    [theme.breakpoints.up('sm')]: {
      maxWidth: 325
    },
  },
  item: {
    padding: "16px 20px"
  },
  topic: {
    textDecoration: 'none',
    '&:hover': {
      color: "#000000"
    },
    '&:active': {
      color: "#000000"
    }
  },
  title: {
    color: '#09203f',
    textAlign: 'left',
    fontWeight: 'bold',
    '&:hover': {
      color: "#00a8cc",
    },
    '&:active': {
      color: "#00a8cc",
    }
  },
  underlined: {
    display: "inline-grid",
    position: 'relative',
    textDecoration: 'none',
    '&::after': {
      width: '100%',
      position: 'absolute',
      content: '""',
      right: 0,
      left: 0,
      bottom: '-2px',
      borderRadius: 1,
      height: '2px',
      background: '#00c4cc'
    }
  },
  loadingImage: {
    width: "100%",
    paddingBottom: "100%",
    backgroundColor: "#aaa",
    borderRadius: 8
  }
}));

CardButtonMobile.propTypes = {
  headerText: PropTypes.string.isRequired,
  tools: PropTypes.string.isRequired,
  subText: PropTypes.array.isRequired,
  image: PropTypes.string.isRequired,
  altLabel: PropTypes.string.isRequired,
  ariaLabel: PropTypes.string.isRequired
};

export default function CardButtonMobile({ headerText, tools, subText, image, links, altLabel, ariaLabel }) {
  const classes = useStyles();

  return (
    <Paper className={classes.itemWrapper} elevation={4}>
      <div className={classes.item}>
        <Suspense fallback={<div className={classes.loadingImage} />}>
          <CardButtonPhoto image={image} altLabel={altLabel} />
        </Suspense>
        <Typography variant="overline" display="block" color='textSecondary'>
          {tools}
        </Typography>
        <Link
          className={classes.title}
          variant="h5"
          style={{ textDecoration: 'none' }}
          aria-label={ariaLabel}
        >
          {headerText}
        </Link>
        <Typography color='textPrimary' variant='body1' className={classes.subTextContainer}>
          {subText.map((paragraph, value1) => (
            <React.Fragment>
              {value1 !== 0 && <br key={`${headerText}-linebreak-${value1}`} className={classes.lineBreak} />}
              {paragraph.map((textPiece, value2) =>
                <span key={`${headerText}-subText-${value1}-${value2}`} className={value2 % 2 === 1 ? classes.underlined : ""}>
                  {textPiece}
                </span>
              )}
            </React.Fragment>
          ))}
        </Typography>
        {links.map((link, value) => <CardButtonLink key={`link-${value}`} {...link} />)}
      </div>
    </Paper>
  );
}