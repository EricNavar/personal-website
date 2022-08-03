import React from 'react';
import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import { SkillList } from '../components/resumePage/SkillList';
import { Education } from '../components/resumePage/Education';
import { InvolvementSecion } from '../components/resumePage/InvolvementSection';
import { Interests } from '../components/resumePage/Interests';
import { experienceData } from '../data/experienceData';
import { involvementData } from '../data/involvementData';
import { HomeMain, HomeInner } from '../styling/homePageStyling';

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
    <HomeMain>
      <Grid container spacing={10} justifyContent='center'>
        <GridItem id='skill-list-container' item sm={12} lg={6}>
          <SkillList />
        </GridItem>
        <GridItem id='education-container' item sm={12} lg={6}>
          <Education />
        </GridItem>
      </Grid>
      <InvolvementSecion title="Internship Experience" data={experienceData} />
      <InvolvementSecion title="Involvement" data={involvementData} />
      <Interests />
      <HomeInner></HomeInner>
    </HomeMain>
  );
}

export { ResumePage };
