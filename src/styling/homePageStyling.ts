import { makeStyles } from '@mui/styles';
import { Paper, Grid, Typography, TypographyProps, Hidden } from '@mui/material';
import { styled } from '@mui/material/styles';

export const ItemWrapper = styled(Paper)(({ theme }) => ({
  position: 'relative',
  borderRadius: 8,
  height: '100%',
  maxWidth: '100%',
  display: 'flex',
  ...theme.paper
}));

export const HeaderText = styled(Typography)<TypographyProps>(({ theme }) => ({
  textAlign: 'left',
  fontWeight: 'bold !important',
  color: theme.palette.primary.main
}));

export const cardButtonStyles = makeStyles({
  item: {
    padding: '24px 36px',
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
  underlined: {
    backgroundColor: '#6ac1c4'
  },
  loadingImage: {
    width: '100%',
    paddingBottom: '100%',
    backgroundColor: '#aaa',
    borderRadius: 8
  },
  photoWrapper: {
    maxWidth: 300,
    minWidth: 250
  },
  subTextContainer: {
    marginTop: 12,
    marginBottom: 12,
    fontSize: '1.1rem'
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
  invisibleHeader: {
    height: 0,
    overflow: 'hidden',
    margin: 0
  }
});

export const HomeMain = styled('main')(({ theme }) => ({
  padding: 24,
  justifyContent: 'center',
  display: 'grid',
  minHeight: 'calc(100vh - 112px)',
  position: 'relative',
  overflow: 'hidden',
  [theme.breakpoints.down('xl')]: {
    width: '85%',
    paddingLeft: '7.5%',
    paddingRight: '7.5%',
  },
  [theme.breakpoints.down('lg')]: {
    width: '75%',
    paddingLeft: '12.5%',
    paddingRight: '12.5%',
  },
  [theme.breakpoints.down('xs')]: {
    width: '88%',
    paddingLeft: '6%',
    paddingRight: '6%',
  },
}));

export const HomeInner = styled('div')(({ theme }) => ({
  position: 'absolute',
  zIndex: -1,
  width: '100%',
  height: '100%',
  ...theme.background
}));

export const CardButtonContainer = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down('xs')]: {
    width: '100%'
  }
}));

export const homePageStyles = makeStyles({
  section: {
    marginTop: 20,
    marginBottom: 8
  },
  divider: {
    width: '80%'
  },
  topicName: {
    marginTop: '20px !important',
    marginBottom: '20px !important'
  },
  disclaimer: {
    backgroundColor: '#fff7cf',
    width: 'max-content',
    marginBottom: 32,
  },
  homeSection: {
    marginBottom: 40
  },
  jokeProjectLink: {
    marginRight: '20px !important',
    flexWrap: 'nowrap',
    display: 'inline-flex',
    textDecoration: 'none !important'
  }
});


