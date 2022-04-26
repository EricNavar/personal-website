import React from 'react';
import { Button, ButtonProps } from '@mui/material';
import { styled } from '@mui/material/styles';

const MyIconButton = styled(Button)<ButtonProps>(({ theme }) => ({
  '& svg': {
    width: 32,
    height: 32,
    fill: theme.palette.text.primary
  },
  '& path': {
    fill: theme.palette.text.primary
  },
  marginRight: 10
}));

type CardButtonLinkProps = {
  icon: JSX.Element,
  label: string,
  hyperlink: string,
  ariaLabel: string
}

function CardButtonLink(props: CardButtonLinkProps): JSX.Element {
  return (
    <MyIconButton
      target="noopener"
      href={props.hyperlink}
      aria-label={props.ariaLabel}
      startIcon={<props.icon />}
      variant='outlined'
    >
      {props.label}
    </MyIconButton>
  );
}

export { CardButtonLink };
