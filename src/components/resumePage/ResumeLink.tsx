import React from 'react';

import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { Button, ButtonProps } from '@mui/material';
import { styled } from '@mui/material/styles';
import mixpanel from 'mixpanel-browser';

import { ContentfulResumeLink, PageName } from '../../commonTypes';
import { client } from '../../util/client';
import { logEvent } from '../../util/mixpanel';

const DownloadButton = styled(Button)<ButtonProps>(({ theme }) => ({
  marginTop: 10,
  backgroundColor: theme.palette.grey[300],
  color: 'black',
  textTransform: 'initial',
  marginLeft: 'auto',
  marginRight: 'auto',
  padding: 14,
}));

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


    // mixpanel.init('711993d2aa6338780b65a444a8fe97d4', { debug: true });
    // mixpanel.track('test', {
    //   'source': 'test source',
    // });
  };

  return (
    <a
      href={resume?.substring(2)}
      download
      target="_blank"
      rel="noreferrer"
      style={{ width: 'max-content',  marginBottom: 10 }}
    >
      <DownloadButton
        variant="contained"
        disableElevation
        endIcon={<FileDownloadIcon />}
        onClick={onClick}
      >
        Download my resume
      </DownloadButton>
    </a>
  );
};

export { ResumeLink };
