import React from 'react';
import { IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledIconButton = styled(IconButton)({
  margin: 4
});

type SocialLinkProps = {
  icon: string,
  circle: boolean,
  link: string,
  label: string
}

function SocialLink(props: SocialLinkProps): JSX.Element {
  const { icon, circle, link, label } = props;

  return (
    <StyledIconButton
      style={{ borderRadius: circle ? '50%' : 0 }}
      href={link}
      target="_blank"
    >
      <img height="48px" width="48px" alt={label} src={icon} />
    </StyledIconButton>
  );
}

export { SocialLink };