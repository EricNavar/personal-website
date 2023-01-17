import React from 'react';
import { Grid, Typography, Hidden } from '@mui/material';
//local files
import GitHubIcon from './../assets/icons/github.svg';
import LinkedInIcon from './../assets/icons/linkedin.svg';
import { PersonalStatement } from '../components/resumePage/PersonalStatement';
import { CodingProjectMobile } from '../components/home/CodingProjectMobile';
import { CodingProjectDesktop } from '../components/home/CodingProjectDesktop';
import {
  homePageStyles,
  ScreenMain,
  ScreenBackground,
  CardButtonContainer,
  Section,
  TopicName,
  HomeSection,
} from '../styling/homePageStyling';
import { SocialLink } from '../components/home/SocialLink';
import { ContentfulPersonalStatement, ContentfulProject, Project } from '../commonTypes';
import { client } from '../util/client';
import { marked } from 'marked';

function Home(): JSX.Element {
  React.useEffect(() => {
    document.title = 'Eric Navar';
    window.scrollTo({
      top: 0,
      left: 0,
    });
  }, []);

  const [projects, setProjects] = React.useState<Project[]>([]);
  const [personalStatement, setPersonalStatement] = React.useState<string>('');
  React.useEffect(() => {
    client
      .getEntries({
        content_type: 'project',
      })
      .then((response) => {
        const items = response.items as ContentfulProject[];
        const articlesFromContentful = items.map((item: ContentfulProject) => {
          return {
            _id: item.fields.id,
            tools: item.fields.tools,
            headerText: item.fields.headerText,
            subText: marked.parse(item.fields.subText),
            image: item.fields.image.fields.file.url,
            altLabel: item.fields.altLabel,
            links: item.fields.links.map((linkItem) => {
              return {
                ariaLabel: linkItem.fields.ariaLabel,
                label: linkItem.fields.label,
                hyperlink: linkItem.fields.hyperlink,
                icon: linkItem.fields.icon.fields.file.url,
              };
            }),
          };
        }) as Project[];
        setProjects(articlesFromContentful);
      })
      .catch(console.error);

      client
      .getEntries({
        content_type: 'personalStatement',
      })
      .then((response) => {
        const items = response.items as ContentfulPersonalStatement[];
        const personalStatementContentful = items.length > 0 ? items[0].fields.text : ''; 
        setPersonalStatement(personalStatementContentful);
      })
      .catch(console.error);
  }, []);

  const classes = homePageStyles();

  return (
    <ScreenMain>
      <PersonalStatement statement={personalStatement}/>
      <Section id="project-list">
        <TopicName
          color="textPrimary"
          as="h2"
          variant="h4"
        >
          Apps I&apos;ve Worked On
        </TopicName>
        <Hidden smUp>
          <Grid container spacing={6}>
            {projects.map((project) => (
              <CardButtonContainer item key={project._id} xs={12}>
                <CodingProjectMobile project={project} />
              </CardButtonContainer>
            ))}
          </Grid>
        </Hidden>
        <Hidden only={'xs'}>
          <Grid container spacing={3}>
            {projects.map((project) => (
              <CardButtonContainer item key={project._id} xs={12} xl={6}>
                <CodingProjectDesktop project={project} />
              </CardButtonContainer>
            ))}
          </Grid>
        </Hidden>
      </Section>
      <HomeSection id="connect">
        <TopicName
          color="textPrimary"
          as="h2"
          variant="h4"
        >
          Connect
        </TopicName>
        <div>
          <Typography color="textPrimary">
            Email: ericn2413@gmail.com
          </Typography>
          <br />
          <SocialLink
            label="LinkedIn"
            link="https://www.linkedin.com/in/ericnavar/"
            icon={LinkedInIcon}
            circle={false}
          />
          <SocialLink
            label="Github"
            link="https://www.github.com/ericnavar"
            icon={GitHubIcon}
            circle={true}
          />
        </div>
      </HomeSection>
      <ScreenBackground></ScreenBackground>
    </ScreenMain>
  );
}

export { Home };
