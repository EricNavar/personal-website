import { makeStyles } from '@material-ui/core/styles';

export const cardButtonStyles = makeStyles((theme) => ({
  itemWrapper: {
    position: 'relative',
    borderRadius: 8,
    height: '100%',
    maxWidth: '100%',
    display: 'flex'
  },
  item: {
    padding: '32px 48px',
    width: '100%'
  },
  topic: {
    textDecoration: 'none',
    '&:hover': {
      color: '#000000'
    },
    '&:active': {
      color: '#000000'
    }
  },
  title: {
    textAlign: 'left',
    fontWeight: 'bold',
  },
  underlined: {
    display: 'inline-grid',
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
    width: '100%',
    paddingBottom: '100%',
    backgroundColor: '#aaa',
    borderRadius: 8
  },
  photoWrapper: {
    maxWidth: 400,
    minWidth: 350
  },
  subTextContainer: {
    marginTop: 12,
    marginBottom: 12,
    fontSize: '1.25rem'
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
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center'
  },
  iconButton: {
    width: 32,
    height: 32,
    '& svg': {
      width: 32,
      height: 32,
      fill: theme.palette.text.primary
    },
    '& path': {
      fill: theme.palette.text.primary
    }
  },
  popover: {
    pointerEvents: 'none',
  },
  invisibleHeader: {
    height: 0,
    overflow: 'hidden',
    margin: 0
  }
}));
