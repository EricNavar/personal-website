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

export const cardButtonStyles = makeStyles((theme) => ({
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
    width: 32,
    height: 32,
    '& svg': {
      width: 32,
      height: 32,
      fill: theme.palette.text.primary
    },
    "& path": {
      fill: theme.palette.text.primary
    }
  },
  popover: {
    pointerEvents: 'none',
  },
  paper: {
    padding: theme.spacing(1),
  },
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
      background: '#09203f'
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
    minHeight: 'calc(100vh - 112px)',
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