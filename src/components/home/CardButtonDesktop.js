import React, { lazy, Suspense } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import PropTypes from "prop-types";
//local files
const CardButtonPhoto = lazy(() => import('./CardButtonPhoto'));

const useStyles = makeStyles((theme) => ({
  itemWrapper: {
    position: 'relative',
    borderRadius: 8,
    height: "100%",
    maxWidth: "100%",
    display: 'flex'
  },
  item: {
    padding: "16px 20px",
    width: '100%'
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
    textAlign: 'left',
    fontWeight: 'bold',
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
  },
  photoWrapper: {
    maxWidth: 300,
    minWidth: 250
  },
  subTextContainer: {
    marginTop: 12,
    fontSize: "1.1rem"
  },
  lineBreak: {
    marginBottom: 12
  },
  cardHeader: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%'
  },
  cardHeaderText: {
    flexGrow: 1
  },
  iconButton: {
    width: 40,
    height: 40,
    '& svg': {
      width: 32,
      height: 32,
    },
    "& svg": {
      fill: theme.palette.text.primary
    },
    "& path": {
      fill: theme.palette.text.primary
    }
  }
}));

CardButtonDesktop.propTypes = {
  headerText: PropTypes.string.isRequired,
  tools: PropTypes.string.isRequired,
  subText: PropTypes.isRequired,
  image: PropTypes.isRequired,
  link: PropTypes.string.isRequired,
  altLabel: PropTypes.string.isRequired,
  ariaLabel: PropTypes.string.isRequired
};

export default function CardButtonDesktop({ headerText, tools, subText, image, link, altLabel, ariaLabel, links }) {
  const classes = useStyles();

  return (
    <Paper className={classes.itemWrapper} elevation={4}>
      <div className={classes.photoWrapper}>
        <Suspense fallback={<div className={classes.loadingImage} />}>
          <CardButtonPhoto image={image} altLabel={altLabel} link={link} />
        </Suspense>
      </div>
      <div className={classes.item}>
        <div className={classes.cardHeader}>
          <div className={classes.cardHeaderText}>
            <Typography variant="overline" display="block" color='textSecondary'>
              {tools}
            </Typography>
            <Typography
              className={classes.title}
              href={link}
              variant="h5"
              style={{ textDecoration: 'none' }}
              aria-label={ariaLabel}
              color='primary'
            >
              {headerText}
            </Typography>
          </div>
          {links.map((link) =>
            <IconButton target="_blank" href={link.hyperlink} aria-label={link.label} className={classes.iconButton}>
              <link.icon/>
            </IconButton>
          )}
        </div>
        <Typography color='textPrimary' variant='body1' className={classes.subTextContainer}>
          {subText.map((paragraph, value) => (
            <React.Fragment>
              {value !== 0 && <br key={`${headerText}-linebreak-${value}`} className={classes.lineBreak} />}
              {paragraph.map((textPiece, value) =>
                <span key={`${headerText}-subText-${value}`} className={value % 2 === 1 ? classes.underlined : ""}>
                  {textPiece}
                </span>
              )}
            </React.Fragment>
          ))}
        </Typography>
      </div>
    </Paper>
  );
}