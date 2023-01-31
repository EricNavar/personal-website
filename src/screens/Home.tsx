import React from 'react';

import { Grid, Typography } from '@mui/material';
import { marked } from 'marked';

import GitHubIcon from './../assets/icons/github.svg';
import LinkedInIcon from './../assets/icons/linkedin.svg';
import {
  ContentfulPersonalStatement,
  ContentfulProject,
  Project,
} from '../commonTypes';
import { CodingProject } from '../components/home/CodingProject';
import { SocialLink } from '../components/home/SocialLink';
import { PersonalStatement } from '../components/resumePage/PersonalStatement';
import { Section } from '../components/Section';
import { ScreenBackground, ScreenMain } from '../styling/commonStyles';
import { CardButtonContainer } from '../styling/homePageStyling';
import { client } from '../util/client';

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
        const personalStatementContentful =
          items.length > 0 ? items[0].fields.text : '';
        setPersonalStatement(personalStatementContentful);
      })
      .catch(console.error);
  }, []);

  return (
    <ScreenMain>
      <PersonalStatement statement={personalStatement} />
      <Section title="Apps I've worked on">
        <Grid container spacing={6}>
          {projects.map((project) => (
            <CardButtonContainer item key={project._id} xs={12}>
              <CodingProject project={project} />
            </CardButtonContainer>
          ))}
        </Grid>
      </Section>
      <Section title="Connect">
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
      </Section>
      <ScreenBackground></ScreenBackground>
    </ScreenMain>
  );
}

export { Home };
