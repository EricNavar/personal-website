import React from 'react';
import { Button, ButtonProps } from '@mui/material';
import { styled } from '@mui/material/styles';

const MyIconButton = styled(Button)<ButtonProps>(({ theme }) => ({
  '& svg': {
    width: 32,
    height: 32,
    fill: theme.palette.text.primary,
  },
  '& path': {
    fill: theme.palette.text.primary,
  },
  marginRight: 10,
  marginTop: 10,
  backgroundColor: theme.palette.grey[300],
  color: 'black',
  textTransform: 'initial',
}));

type CardButtonLinkProps = {
  icon: string;
  label: string;
  hyperlink: string;
  ariaLabel: string;
};

function CardButtonLink(props: CardButtonLinkProps): JSX.Element {
  return (
    <MyIconButton
      href={props.hyperlink}
      aria-label={props.ariaLabel}
      startIcon={<img src={props.icon} />}
      variant="contained"
      disableElevation
    >
      {props.label}
    </MyIconButton>
  );
}

export { CardButtonLink };
