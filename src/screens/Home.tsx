import React from 'react';

import { Grid } from '@mui/material';
import { Redirect } from 'react-router-dom';

import {
  ContentfulPersonalStatement,
  Project,
} from '../commonTypes';
import { ContactInfo } from '../components/ContactInfo';
import { CodingProject } from '../components/home/CodingProject';
import { PersonalStatement } from '../components/resumePage/PersonalStatement';
import { Section } from '../components/Section';
import { CardButtonContainer } from '../styling/homePageStyling';
import { client } from '../util/client';
import { getContentfulProjects } from '../util/contentful-api';

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

  const fetchProjects = async () => {
    const newProjects: Project[] | null = await getContentfulProjects();
    setProjects(newProjects);
  };

  React.useEffect(() => {
    fetchProjects();

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
    <>
      <PersonalStatement statement={personalStatement} />
      <Section title="Projects I've worked on">
        <Grid container spacing={6} justifyContent='center'>
          {projects.map((project) => (
            <CardButtonContainer item key={project._id} xs={12}>
              <CodingProject project={project} />
            </CardButtonContainer>
          ))}
        </Grid>
      </Section>
      <ContactInfo center={false} />
    </>
  );
}

export { Home };
