import React from 'react';

import { styled, Typography } from '@mui/material';

import Missingno from '../assets/images/missingno.jpg';
import { PageName } from '../commonTypes';
import { logEvent } from '../util/mixpanel';

const Container = styled('div')`
  height: calc(100vh - 72px);
  justify-content: center;
  display: grid;
  background-image: url('${Missingno}');
`;

const ErrorMessage = styled(Typography)`
  margin: auto;
  line-height: 150%;
  background-color: white;
  padding: 8px;
  font-size: 1.5rem;
`;

const ErrorPage = () => {
  React.useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const cid = searchParams.get('cid');
    console.log(cid);
    logEvent('Download resume', cid as PageName);
  }, []);

  return (
    <Container>
      <ErrorMessage>
        Oopsie if you&apos;re seeing this my website is probably down for
        maintenance 😭😔💀
        <br />
        This has been reported and will be fixed so that the one person a week
        who views my site won&apos;t have problems
      </ErrorMessage>
    </Container>
  );
};

export { ErrorPage };
