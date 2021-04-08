import { makeStyles } from '@material-ui/core/styles';

export const pageStyles = makeStyles(theme=> ({
  blogs: {
    marginTop: 40,
    marginBottom: 40,
    marginLeft: 'auto',
    marginRight: 'auto',
    [theme.breakpoints.down('xs')]: {
      maxWidth: '85vw',
    },
    [theme.breakpoints.up('sm')]: {
      maxWidth: '72.5vw',
    }
  },
  popup: {
    width: '80%',
    height: '80%'
  },
  center: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  spacing: {
    marginTop: 16,
    marginBottom: 28
  }
}));

export const homePageStyles = makeStyles((theme) => ({
  homePageTitle: {
    position: 'relative',
    textDecoration: 'none',
    marginBottom: 14,
    fontSize: 32,
    width: "max-width",
    margin: "auto",
    '&::after': {
      width: '100%',
      position: 'absolute',
      content: '""',
      right: 0,
      left: 0,
      bottom: '-8px',
      borderRadius: 1,
      height: '3px',
      background: '#151965'
    }
  },
  section: {
    marginTop: 20,
    marginBottom: 8
  },
  home: {
    padding: 24,
    justifyContent: 'center',
    display: 'grid',
    background: theme.palette.background.default,
    minHeight: '100vh',
    [theme.breakpoints.up('xl')]: {
      width: "85%",
      paddingLeft: "7.5%",
      paddingRight: "7.5%",
    },
    [theme.breakpoints.down('lg')]: {
      width: "75%",
      paddingLeft: "12.5%",
      paddingRight: "12.5%",
    },
  },
  divider: {
    width:"80%"
  },
  sectionTitle: {
    paddingTop: 8,
    marginBottom: 8,
    fontSize: '18px !important',
  },
  topicName: {
    marginBottom: 12
  },
  cardButtonContainer: {
    [theme.breakpoints.down('xs')]: {
      width: "100%"
    }
  }
}));