import React from 'react';

import { Link, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Redirect } from 'react-router-dom';

import EricLogo from '../assets/images/eric.jpg';
import SSDLogo from '../assets/images/ssd.jpg';
import { YouTubeThumbnail } from '../components/blog/YouTubeThumbnail';
import { Section } from '../components/Section';
import { client } from '../util/client';

const VideosContainer = styled('div')`
  max-width: 800px;
`;

const VideoWrapper = styled('div')`
  margin-bottom: 20px;
  margin-top: 8px;
`;

const YouTubeChannelContainer = styled('div')(({ theme }) => ({
  maxWidth: 350,
  color: theme.palette.primary.contrastText,
  marginTop: 16,
  padding: 16,
  display: 'flex',
  alignItems: 'center',
  borderRadius: 8,
  transition: 'background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
  boxShadow:
    'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px',
  ...theme.gradientPaper,
  flexBasis: 1,
  flexGrow: 1,
  marginLeft: 12,
  marginRight: 12,
}));

const YouTubeChannelLogo = styled('img')`
  height: 50px;
  width: 50px;
  border-radius: 25px;
`;

const Description = styled(Typography)`
  margin-bottom: 28px;
`;

const ChannelName = styled(Link)`
  margin-left: 12px;
`;

type ContentfulBlogPage = {
  fields: {
    videos: Array<ContentfulVideo>;
  };
};

type ContentfulVideo = {
  fields: Video;
};

type Video = {
  youtubeId: string;
  description: string;
};

type YouTubeChannelLink = {
  icon: string;
  name: string;
  link: string;
};

const YouTubeChannelLink = ({ icon, name, link }: YouTubeChannelLink) => {
  return (
    <YouTubeChannelContainer>
      <YouTubeChannelLogo src={icon} />
      <ChannelName target="_blank" href={link} variant="body1">
        {name}
      </ChannelName>
    </YouTubeChannelContainer>
  );
};

function BlogPage(): JSX.Element {
  const [videos, setVideos] = React.useState<Video[] | null>([]);
  React.useEffect(() => {
    client
      .getEntries({
        content_type: 'blogPage',
      })
      .then((response) => {
        const items = response.items as ContentfulBlogPage[];
        const blogPage = items.length ? items[0] : null;
        const contentfulVideos = blogPage?.fields.videos;
        if (!contentfulVideos) {
          console.log('No videos found');
          return;
        }
        const videosFromContentful = contentfulVideos.map(
          (item: ContentfulVideo) => {
            return {
              youtubeId: item.fields.youtubeId,
              description: item.fields.description,
            };
          }
        ) as Video[];
        setVideos(videosFromContentful);
      })
      .catch(() => {
        setVideos(null);
      });
  }, []);

  if (!videos) {
    return <Redirect to="/error?cid=blog" />;
  }

  return (
    <>
      <Section title='YouTube Channels'>
        <YouTubeChannelLink
          name="UF Society of Software Developers"
          icon={SSDLogo}
          link="https://www.youtube.com/@ufssd/videos"
        />
        <YouTubeChannelLink
          name="My YouTube Channel"
          icon={EricLogo}
          link="https://www.youtube.com/@ericnavar/videos"
        />
      </Section>
      <Section title='My Videos'>
        <VideosContainer>
          {videos.map((video, index) => (
            <VideoWrapper key={index}>
              <YouTubeThumbnail videoId={video.youtubeId} />
              <Description color="textPrimary">{video.description}</Description>
            </VideoWrapper>
          ))}
        </VideosContainer>
      </Section>
    </>
  );
}

export { BlogPage };
