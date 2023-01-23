import { Button, ButtonProps } from '@mui/material';
import React from 'react';
import { client } from '../../util/client';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { styled } from '@mui/material/styles';
import { ContentfulResumeLink } from '../../commonTypes';

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
  };

  return (
    <a
      href={resume?.substring(2)}
      download
      target="_blank"
      rel="noreferrer"
      style={{ width: 'max-content', marginLeft: 'auto', marginRight: 'auto' }}
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
