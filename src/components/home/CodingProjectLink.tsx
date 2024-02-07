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
  '&:hover': {
    backgroundColor: theme.palette.grey[400],
  },
  marginRight: 10,
  marginTop: 10,
  backgroundColor: theme.palette.grey[300],
  color: 'black',
  textTransform: 'initial',
}));

type CodingProjectLinkProps = {
  icon: string;
  label: string;
  hyperlink: string;
  ariaLabel: string;
};

function CodingProjectLink(props: CodingProjectLinkProps): JSX.Element {
  const onClick = (link: string) => {
    window.open(link, '_blank');
  };

  return (
    <MyIconButton
      onClick={() => onClick(props.hyperlink)}
      aria-label={props.ariaLabel}
      startIcon={props.icon ? <img src={props.icon} width="24px" height="24px" /> : undefined}
      variant="contained"
      disableElevation
    >
      {props.label}
    </MyIconButton>
  );
}

export { CodingProjectLink };
