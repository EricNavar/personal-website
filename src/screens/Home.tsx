import React from 'react';

import { Grid } from '@mui/material';
import { marked } from 'marked';
import { Redirect } from 'react-router-dom';

import {
  ContentfulPersonalStatement,
  ContentfulProject,
  Project,
} from '../commonTypes';
import { ContactInfo } from '../components/ContactInfo';
import { CodingProject } from '../components/home/CodingProject';
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

  const [projects, setProjects] = React.useState<Project[] | null>([]);
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
      .catch(() => {
        setProjects(null);
      });

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

  if (!projects) {
    return <Redirect to="/error?cid=home" />;
  }

  return (
    <ScreenMain>
      <PersonalStatement statement={personalStatement} />
      <Section title="Apps I've worked on">
        <Grid container spacing={6} justifyContent='center'>
          {projects.map((project) => (
            <CardButtonContainer item key={project._id} xs={12}>
              <CodingProject project={project} />
            </CardButtonContainer>
          ))}
        </Grid>
      </Section>
      <ContactInfo center={false} />
      <ScreenBackground></ScreenBackground>
    </ScreenMain>
  );
}

export { Home };
