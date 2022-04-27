import React, { Suspense, lazy } from 'react';
import { Typography, Grid, Paper, PaperProps } from '@mui/material';
//local files
import { styled } from '@mui/material/styles';
import useTheme from '@mui/material/styles/useTheme';
const ProfilePicture = lazy(() => import('./ProfilePicture').then((module) => ({
  default: module.ProfilePicture,
})));

const PersonalStatementHeader = styled(Typography)({
  fontSize: 32,
  marginBottom: 8
});

const TextContainer = styled(Paper)<PaperProps>(({ theme }) => ({
  maxWidth: 450,
  color: theme.palette.primary.contrastText,
  marginTop: 16,
  padding: 16,
  transition: 'background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
  boxShadow: 'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px',
  ...theme.gradientPaper
}));

const PersonalStatementWrapper = styled(Grid)({
  paddingTop: 20,
  paddingBottom: 30,
  marginBottom: 20
});

const ProfilePicWrapper = styled('div')({
  maxWidth: 200,
  maxHeight: 200,
  borderRadius: '50%',
  marginRight: 48,
  boxShadow: 'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px'
});

function PersonalStatement(): JSX.Element {
  return (
    <PersonalStatementWrapper
      container
      direction='row'
      justifyContent='center'
      alignItems='center'
      spacing={4}
    >
      <ProfilePicWrapper>
        <Suspense fallback={<div />}>
          <ProfilePicture />
        </Suspense>
      </ProfilePicWrapper>
      <TextContainer elevation={3}>
        <PersonalStatementHeader variant='body1'>
          <b>Hi, I&apos;m Eric Navar</b>
        </PersonalStatementHeader>
        <Typography variant='body1' style={{ fontSize: 16 }}>
          I&apos;m a computer science major and digital arts minor at UF interested in learning new things. I have lots of cool experience in frontend and I&apos;m also trying to learn UX design. Feel free to reach out!
        </Typography>
      </TextContainer>
    </PersonalStatementWrapper>
  );
}

export { PersonalStatement };
