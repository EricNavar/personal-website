import React from 'react';

import { Grid, Paper, Typography, TypographyProps } from '@mui/material';
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

export const Item = styled('div')`
  padding: 24px 36px;
  width: 100%;
  ${(props) => props.theme.breakpoints.down('sm')} {
    padding: 24px 24px;
  }
`;

export const LoadingImage = styled('div')`
  width: 100%;
  padding-bottom: 100%;
  background-color: #aaa;
  border-radius: 8px;
`;

export const PhotoWrapper = styled('div')`
  max-width: 300px;
  min-width: 250px;
`;

export const SubTextContainer = styled(Typography)`
  margin-top: 12px;
  margin-bottom: 12px;
  font-fize: 1.1rem;
`;

export const CardHeader = styled('div')`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const CardHeaderText = styled('div')`
  flex-grow: 1;
`;

export const CardButtonContainer = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.only('xs')]: {
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
