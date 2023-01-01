import React from 'react';
import Eric from './../../assets/other/Eric Navar.jpg';

function ProfilePicture(): JSX.Element {
  return (
    <img
      width="100%"
      height="100%"
      src={Eric}
      alt="Eric profile"
      style={{ borderRadius: '50%' }}
    />
  );
}

export { ProfilePicture };
