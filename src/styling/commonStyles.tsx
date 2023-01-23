import { styled } from '@mui/material/styles';

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
  [theme.breakpoints.only('xs')]: {
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
  [theme.breakpoints.only('xs')]: {
    animation: 'none',
  },
}));
