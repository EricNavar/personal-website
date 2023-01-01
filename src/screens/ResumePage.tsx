import React from 'react';
import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import { SkillList } from '../components/resumePage/SkillList';
import { Education } from '../components/resumePage/Education';
import { InvolvementSection } from '../components/resumePage/InvolvementSection';
import { ScreenMain, ScreenBackground } from '../styling/homePageStyling';
import { client } from '../util/client';
import {
  ContentfulExperienceItem,
  ContentfulResumePage,
  ContentfulSkill,
  ExperienceItem,
  Skill,
} from '../commonTypes';
import { marked } from 'marked';

const GridItem = styled(Grid)`
  justify-content: center;
  display: flex;
`;

function ResumePage(): JSX.Element {
  React.useEffect(() => {
    document.title = 'Resume | Eric Navar';
    window.scrollTo({
      top: 0,
      left: 0,
    });
  }, []);

  const [skills, setSkills] = React.useState<Skill[]>([]);
  const [experienceData, setExperienceData] = React.useState<ExperienceItem[]>(
    []
  );
  const [studentOrgInvolvement, setStudentOrgInvolvement] = React.useState<
    ExperienceItem[]
  >([]);
  React.useEffect(() => {
    client
      .getEntries({
        content_type: 'resumePage',
      })
      .then((response) => {
        const items = response.items;
        const resumePage = items[0].fields as ContentfulResumePage;

        const skillsData = resumePage.skills.map((skill: ContentfulSkill) => {
          return {
            title: skill.fields.title,
            icon: skill.fields.icon.fields.file.url,
          };
        });
        setSkills(skillsData);

        const experienceData = resumePage.internshipExperience.map(
          (experience: ContentfulExperienceItem) => {
            return {
              organization: experience.fields.organization,
              organizationIcon:
                experience.fields.organizationIcon.fields.file.url,
              position: experience.fields.position,
              description: marked.parse(experience.fields.description),
              link: experience.fields.link,
              linkAriaLabel: experience.fields.linkAriaLabel,
              time: experience.fields.time,
            };
          }
        ) as ExperienceItem[];
        setExperienceData(experienceData);

        const studentOrgInvolvementData = resumePage.studentOrgInvolvement.map(
          (involvement: ContentfulExperienceItem) => {
            return {
              organization: involvement.fields.organization,
              organizationIcon:
                involvement.fields.organizationIcon.fields.file.url,
              position: involvement.fields.position,
              description: marked.parse(involvement.fields.description),
              link: involvement.fields.link,
              linkAriaLabel: involvement.fields.linkAriaLabel,
              time: involvement.fields.time,
            };
          }
        ) as ExperienceItem[];
        setStudentOrgInvolvement(studentOrgInvolvementData);
      })
      .catch(console.error);
  }, []);

  console.log(studentOrgInvolvement);

  return (
    <ScreenMain>
      <Grid container spacing={10} justifyContent="center">
        <GridItem id="skill-list-container" item sm={12} lg={6}>
          <SkillList skills={skills} />
        </GridItem>
        <GridItem id="education-container" item sm={12} lg={6}>
          <Education />
        </GridItem>
      </Grid>
      <InvolvementSection title="Internship Experience" data={experienceData} />
      <InvolvementSection
        title="Student Org Involvement"
        data={studentOrgInvolvement}
      />
      <ScreenBackground />
    </ScreenMain>
  );
}

export { ResumePage };
