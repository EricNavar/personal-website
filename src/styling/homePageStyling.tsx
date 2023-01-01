import React from 'react';
import { makeStyles } from '@mui/styles';
import { Paper, Grid, Typography, TypographyProps } from '@mui/material';
import { styled } from '@mui/material/styles';

export const ItemWrapper = styled(Paper)(({ theme }) => ({
  position: 'relative',
  borderRadius: 8,
  height: '100%',
  maxWidth: '100%',
  display: 'flex',
  ...theme.paper,
}));

export const HeaderText = styled(Typography)<TypographyProps>(({ theme }) => ({
  textAlign: 'left',
  fontWeight: 'bold !important',
  color: theme.palette.primary.main,
}));

export const cardButtonStyles = makeStyles({
  item: {
    padding: '24px 36px',
    width: '100%',
  },
  topic: {
    textDecoration: 'none',
    '&:hover': {
      color: '#000000',
    },
    '&:active': {
      color: '#000000',
    },
  },
  underlined: {
    backgroundColor: '#6ac1c4',
  },
  loadingImage: {
    width: '100%',
    paddingBottom: '100%',
    backgroundColor: '#aaa',
    borderRadius: 8,
  },
  photoWrapper: {
    maxWidth: 300,
    minWidth: 250,
  },
  subTextContainer: {
    marginTop: 12,
    marginBottom: 12,
    fontSize: '1.1rem',
  },
  lineBreak: {
    marginBottom: 12,
  },
  cardHeader: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
  },
  cardHeaderText: {
    flexGrow: 1,
  },
  invisibleHeader: {
    height: 0,
    overflow: 'hidden',
    margin: 0,
  },
});

export const ScreenMain = styled('main')(({ theme }) => ({
  padding: 24,
  justifyContent: 'center',
  display: 'grid',
  minHeight: 'calc(100vh - 112px)',
  position: 'relative',
  overflow: 'hidden',
  width: '85%',
  paddingLeft: '7.5%',
  paddingRight: '7.5%',
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

export const ScreenBackground = styled('div')(({ theme }) => ({
  position: 'absolute',
  zIndex: -1,
  width: '100%',
  height: '100%',
  ...theme.background,
}));

export const CardButtonContainer = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down('xs')]: {
    width: '100%',
  },
}));

const StyledButton = styled('button')({
  height: 'var(--btn-size)',
  width: 'calc(var(--btn-size) * 10)',
  cursor: 'pointer',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  userSelect: 'none',
  background: '#999 url("https://i.ibb.co/rb2TWXL/bgbtn.png") center / cover',
  imageRendering: 'pixelated',
  border: '2px solid #000',
});

const StyledButtonText = styled('span')({
  width: '100%',
  height: '100%',
  paddingBottom: '.3em',
  color: '#DDD',
  textShadow: '2px 2px #000A',
  boxShadow: 'inset -2px -4px #0006, inset 2px 2px #FFF7',
});

export function MCButton(props: { children: JSX.Element }) {
  return (
    <StyledButton>
      <StyledButtonText>{props.children}</StyledButtonText>
    </StyledButton>
  );
}

export const homePageStyles = makeStyles({
  section: {
    marginTop: 20,
    marginBottom: 8,
  },
  divider: {
    width: '80%',
  },
  topicName: {
    marginTop: '20px !important',
    marginBottom: '20px !important',
  },
  disclaimer: {
    backgroundColor: '#fff7cf',
    width: 'max-content',
    marginBottom: 32,
  },
  homeSection: {
    marginBottom: 40,
  },
  jokeProjectLink: {
    marginRight: '20px !important',
    flexWrap: 'nowrap',
    display: 'inline-flex',
    textDecoration: 'none !important',
  },
});
