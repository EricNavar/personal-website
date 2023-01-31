import React, { Suspense } from 'react';

import { styled } from '@mui/material/styles';

import { LoadingImage } from '../../styling/homePageStyling';

const Wrapper = styled('div')({
  width: '100%',
  textAlign: 'center',
});
const AspectRatioBox = styled('div')({
  overflow: 'hidden',
  height: 0,
  position: 'relative',
  width: '100%',
  paddingTop: '100%',
  display: 'grid',
});
const AspectRatioBoxInside = styled('img')({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  borderRadius: 8,
});

type CodingProjectThumbnailProps = {
  image: string;
  altLabel: string;
};

function CodingProjectThumbnail(
  props: CodingProjectThumbnailProps
): JSX.Element {
  const { image, altLabel } = props;
  return (
    <Wrapper>
      <AspectRatioBox>
        <Suspense fallback={<LoadingImage />}>
          <AspectRatioBoxInside src={image} alt={altLabel} loading="lazy" />
        </Suspense>
      </AspectRatioBox>
    </Wrapper>
  );
}

export { CodingProjectThumbnail };
