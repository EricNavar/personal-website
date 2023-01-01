import React from 'react';
import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const SectionMain = styled('section')({
  marginTop: 50,
  marginBottom: 30,
  width: '100%',
});

const Divider = styled('div')({
  background: '#32407b',
  marginTop: 2,
  height: 4,
  width: '100%',
  borderRadius: 2,
  marginBottom: 24,
});

const Title = styled(Typography)({
  fontWeight: 'bold',
  fontSize: '2rem',
});

const MaxContent = styled('div')({
  width: 'max-content',
});

type SectionProps = {
  children: JSX.Element | JSX.Element[];
  title: string;
  className?: string;
};
function Section({ children, title, className }: SectionProps): JSX.Element {
  return (
    <SectionMain className={className}>
      <MaxContent>
        <Title variant="h4" color="textPrimary">
          {title}
        </Title>
        <Divider></Divider>
      </MaxContent>
      {children}
    </SectionMain>
  );
}

export { Section };
