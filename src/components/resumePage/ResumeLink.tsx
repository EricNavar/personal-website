import React from 'react';

import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

import { ContentfulResumeLink, PageName } from '../../commonTypes';
import { client } from '../../util/client';
import { logEvent } from '../../util/mixpanel';

const DownloadButton = styled(Button)({
  marginTop: 24,
  marginBottom: 32,
  border: 0,
  height: 48,
  padding: '0 30px',
  textTransform: 'initial',
  '&:hover': {
    opacity: 0.85,
    boxShadow: '0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)',
  },
  '&:active': {
    boxShadow: 'none',
  },
});

const StyledLink = styled('a')`
  width: max-content;
  margin-bottom: 10px;
`;

const ResumeLink = () => {
  const [resume, setResume] = React.useState<string>();

  React.useEffect(() => {
    client
      .getEntries({
        content_type: 'resume',
      })
      .then((response) => {
        const resumes = response.items as ContentfulResumeLink[];
        const latestResume =
          resumes.length > 0 ? resumes[0].fields.pdf.fields.file.url : '';
        setResume(latestResume);
      })
      .catch(console.error);
  }, []);

  const onClick = () => {
    window.open(resume);
    logEvent('Download resume', PageName.Resume);
  };

  return (
    <StyledLink
      href={resume?.substring(2)}
      download
      target="_blank"
      rel="noreferrer"
    >
      <DownloadButton
        variant="contained"
        disableElevation
        endIcon={<FileDownloadIcon />}
        onClick={onClick}
      >
        Download my resume
      </DownloadButton>
    </StyledLink>
  );
};

export { ResumeLink };
