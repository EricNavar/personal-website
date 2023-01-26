import React from 'react';

// import { ArticleSection } from '../components/ArticleSection';
import { Link, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

// import { client } from '../data/client';
// import { ArticleProps } from '../components/Article';
import YTPlayer from '../components/blog/YTPlayer';
import { ScreenBackground, ScreenMain } from '../styling/commonStyles';
import { client } from '../util/client';

const VideosContainer = styled('div')`
  max-width: 800px;
`;

const VideoWrapper = styled('div')`
  margin-bottom: 20px;
  margin-top: 8px;
`;

const YouTubeChannelContainer = styled('div')(({ theme }) => ({
  maxWidth: 450,
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
}));

const YouTubeChannelLogo = styled('img')`
  height: 50px;
  width: 50px;
  border-radius: 25px;
`;

const Description = styled(Typography)`
  margin-bottom: 18px;
`;

type ContentfulBlogPage = {
  fields: {
    videos: Array<ContentfulVideo>;
  };
}

type ContentfulVideo = {
  fields: Video;
};

type Video = {
  youtubeId: string;
  description: string;
};

function BlogPage(): JSX.Element {
  // const [articles, setArticles] = React.useState<ArticleProps[]>([]);

  // React.useEffect(() => {
  //   client.getEntries()
  //     .then((response) => {
  //       const items = response.items as ContentfulArticle[];
  //       const articlesFromContentful = items.map((item: ContentfulArticle) => {
  //         return {
  //           description: item.fields.description,
  //           name: item.fields.name,
  //           featuredImage: item.fields.featuredImage.fields.url,
  //         };
  //       }) as ArticleProps[];
  //       setArticles(articlesFromContentful);
  //     })
  //     .catch(console.error);
  // }, []);

  const [videos, setVideos] = React.useState<Video[]>([]);
  React.useEffect(() => {
    client
      .getEntries({
        //eslint-disable-next-line
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
        const videosFromContentful = contentfulVideos.map((item: ContentfulVideo) => {
          return {
            youtubeId: item.fields.youtubeId,
            description: item.fields.description,
          };
        }) as Video[];
        setVideos(videosFromContentful);
      })
      .catch(console.error);
  }, []);

  return (
    <ScreenMain>
      {/* <ArticleSection articles={articles} /> */}
      <Typography component="h2" variant="h5">
        YouTube Channels
      </Typography>
      <YouTubeChannelContainer>
        <YouTubeChannelLogo src="https://yt3.googleusercontent.com/ytc/AMLnZu-clO-MD7YassFljB0F90MCaz6bEqP8cvtmWZgB=s176-c-k-c0x00ffffff-no-rj" />
        <Typography
          style={{ marginLeft: 12 }}
          component={Link}
          target="_blank"
          href="https://www.youtube.com/@ufssd/videos"
        >
          UF Society of Software Developers
        </Typography>
      </YouTubeChannelContainer>
      <YouTubeChannelContainer>
        <YouTubeChannelLogo src="https://yt3.googleusercontent.com/Y5PmT9HCWpFxHu3vDXCE5BV3qAhg2ZodAknJXw7d3pYYflnV0P-oX4ZkNutnDWpUOw3RUmYfYw=s176-c-k-c0x00ffffff-no-rj" />
        <Typography
          style={{ marginLeft: 12 }}
          component={Link}
          target="_blank"
          href="https://www.youtube.com/@ericnavar/videos"
        >
          My YouTube Channel
        </Typography>
      </YouTubeChannelContainer>
      <Typography component="h2" variant="h5" style={{marginTop: 35}}>
        My videos
      </Typography>
      <VideosContainer>
        {videos.map((video, index) => (
          <VideoWrapper key={index}>
            <YTPlayer
              videoSrc={`https://www.youtube.com/embed/${video.youtubeId}`}
            />
            <Description color="textPrimary">{video.description}</Description>
          </VideoWrapper>
        ))}
      </VideosContainer>
      <ScreenBackground />
    </ScreenMain>
  );
}

export { BlogPage };
