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

const AspectRatioBoxInside = styled('a')({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  display: 'grid',
  alignContent: 'center',
});

type YouTubeThumbnailProps = {
  videoId: string;
};

export function YouTubeThumbnail({videoId}: YouTubeThumbnailProps): JSX.Element {
  return (
    <AspectRatioBox>
      <AspectRatioBoxInside target='_blank' href={`https://www.youtube.com/watch?v=${videoId}`}>
        <img
          width="480px"
          height="360px"
          src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
        />
      </AspectRatioBoxInside>
    </AspectRatioBox>
  );
}
