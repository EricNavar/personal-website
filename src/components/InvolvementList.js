import React from 'react';
import InvolvementItem from './InvolvementItem';
import Section from './Section';
import ACMIcon from './../assets/images/UFACM.png';
import SSDIcon from './../assets/images/SSD.png';
import OSCIcon from './../assets/images/OpenSourceClub.webp';
import HackFSUIcon from './../assets/images/HackFSU.webp';
import Grid from '@material-ui/core/Grid';

export default function InvolvementList() {
  return (
    <Section title = "Involvement">
      <Grid container spacing={4}>
        <InvolvementItem
          title = "Open Source Club"
          position = "Member"
          time_period = "January 2019 - April 2019"
          description = {["Work on front end of web app using React-Redux"]}
          link="https://github.com/ufosc/AskAGator"
          linkDescription="Link to repository"
          icon={OSCIcon}
        />
        <InvolvementItem
          title = "Programming Team"
          position = "Club member"
          time_period = "August 2019 - November 2019"
          description={[
            "Practice contest problems",
            "Take classes with UF Programming Team"            
          ]}
          icon={ACMIcon}
        />
        <InvolvementItem
          title = "Society of Software developers"
          position = "Member"
          time_period = "September 2019 - present"
          description={["Explore tools and technologies in computer science such as testing and API design to promote well-written, working software."]}
          icon={SSDIcon}
        />
        <InvolvementItem
          title = "Hack FSU"
          position = "Participant"
          time_period = "October 2019"
          description = {[
            "Use a Raspberry Pi for facial recognition to assign people a score for how many times they have taken out the trash. Display the participant’s scores on a website made in React.",
            "Placed 2nd overall"
          ]}
          link = "https://github.com/EricNavar/Trash-Tracker"
          linkDescription="Link to repository"
          icon={HackFSUIcon}
        />
      </Grid>
    </Section>
  );
}