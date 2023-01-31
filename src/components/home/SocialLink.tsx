import React from 'react';

import { IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledIconButton = styled(IconButton)({
  margin: 4,
});

type SocialLinkProps = {
  icon: string;
  link: string;
  label: string;
};

function SocialLink(props: SocialLinkProps): JSX.Element {
  const { icon, link, label } = props;

  const onClick = () => {
    window.open(link, '_blank');
  };

  return (
    <StyledIconButton onClick={onClick}>
      <img height="48px" width="48px" alt={label} src={icon} />
    </StyledIconButton>
  );
}

export { SocialLink };
