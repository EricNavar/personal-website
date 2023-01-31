import React from 'react';

import styled from '@emotion/styled';

import Eric from './../../assets/images/Eric Navar.webp';

const RoundImage = styled('img')`
  border-radius: 50%;
`;

function ProfilePicture(): JSX.Element {
  return (
    <RoundImage width="100%" height="100%" src={Eric} alt="Eric profile" />
  );
}

export { ProfilePicture };
