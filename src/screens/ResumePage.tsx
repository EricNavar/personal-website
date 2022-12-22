import React from 'react';
import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import { SkillList } from '../components/resumePage/SkillList';
import { Education } from '../components/resumePage/Education';
import { InvolvementSection } from '../components/resumePage/InvolvementSection';
import { Interests } from '../components/resumePage/Interests';
import { experienceData } from '../data/experienceData';
import { involvementData } from '../data/involvementData';
import { ScreenMain, ScreenBackground } from '../styling/homePageStyling';

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

  return (
    <ScreenMain>
      <Grid container spacing={10} justifyContent='center'>
        <GridItem id='skill-list-container' item sm={12} lg={6}>
          <SkillList />
        </GridItem>
        <GridItem id='education-container' item sm={12} lg={6}>
          <Education />
        </GridItem>
      </Grid>
      <InvolvementSection title="Internship Experience" data={experienceData} />
      <InvolvementSection title="Involvement" data={involvementData} />
      <Interests />
      <ScreenBackground />
    </ScreenMain>
  );
}

export { ResumePage };
