import React from 'react';

import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const SectionMain = styled('section')<{center?: boolean}>(({center}) => ({
  marginTop: 50,
  marginBottom: 30,
  width: '100%',
  justifyContent: center ? 'center' : 'initial',
  textAlign: center ? 'center' : 'initial',
}));

const Title = styled(Typography)`
  font-weight: bold;
  font-size: 1.5rem;
  margin-bottom: 14px;
  ${(props) => props.theme.breakpoints.down('sm')} {
    font-size: 1.5rem;
  }
`;

type SectionProps = {
  children: JSX.Element | JSX.Element[];
  title: string;
  className?: string;
  center?: boolean;
};
function Section({ children, title, className, center }: SectionProps): JSX.Element {
  return (
    <SectionMain className={className} center={center}>
        <Title variant="h4" color="textPrimary" align={center ? 'center' : 'inherit'}>
          {title}
        </Title>
      {children}
    </SectionMain>
  );
}

export { Section };
