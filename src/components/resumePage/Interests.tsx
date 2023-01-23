import React from 'react';

import { List, Typography, TypographyProps } from '@mui/material';
import { styled } from '@mui/material/styles';

import { Section } from '../Section';

const DescriptionList = styled(List)({
  paddingLeft: 12,
  listStyle: 'initial',
});

const ListItem = styled(Typography)<TypographyProps>(({ theme }) => ({
  display: 'flow-root list-item',
  '&::marker': {
    color: theme.palette.primary.main,
  },
}));

function Interests(): JSX.Element {
  return (
    <Section title="Interests">
      <DescriptionList>
        <ListItem variant="body1" color="textPrimary" gutterBottom>
          Frontend Dev
        </ListItem>
        <ListItem variant="body1" color="textPrimary" gutterBottom>
          UX Design
        </ListItem>
        <ListItem variant="body1" color="textPrimary" gutterBottom>
          The fact that we apparently haven&apos;t run out of IP addresses
        </ListItem>
      </DescriptionList>
    </Section>
  );
}

export { Interests };
