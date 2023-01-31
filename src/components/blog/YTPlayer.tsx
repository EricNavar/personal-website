import React from 'react';

import styled from '@emotion/styled';

// The size of a YTPlayer component is dependent on the width of the parent component.
// Setting a width of the parent will work, but not setting the height.

const AspectRatioBox = styled('div')({
  overflow: 'hidden',
  height: 0,
  position: 'relative',
  borderRadius: 6,
  marginBottom: 8,
  paddingTop: '56.25%',
});

const AspectRatioBoxInside = styled('div')({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
});

type YTPlayerProps = {
  videoSrc: string;
};

export default function YTPlayer(props: YTPlayerProps): JSX.Element {
  const { videoSrc } = props;

  return (
    <AspectRatioBox>
      <AspectRatioBoxInside>
        <iframe
          width="100%"
          height="100%"
          src={videoSrc}
          frameBorder="0"
          allowFullScreen
          loading='lazy'
        />
      </AspectRatioBoxInside>
    </AspectRatioBox>
  );
}
