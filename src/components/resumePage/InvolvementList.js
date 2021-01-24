import React from 'react';
import Grid from '@material-ui/core/Grid';
import Section from './Section';
import SSDIcon from './../../assets/images/SSD.webp';
import OSCIcon from './../../assets/images/OpenSourceClub.webp';
import GatorUXIcon from './../../assets/images/GatorUXLogo.webp';
import HackFSUIcon from './../../assets/images/HackFSU.webp';
import InvolvementItem from './InvolvementItem';

export default function InvolvementList() {
  return (
    <Section title = "Involvement">
      <Grid container spacing={4}>
        <InvolvementItem
          title = "Open Source Club"
          position = "Member"
          time_period = "January 2019 - April 2019"
          description = {["Work on front end of web app using React-Redux"]}
          linkDescription="Link to repository"
          icon={OSCIcon}
        />
        <InvolvementItem
          title = "Society of Software Developers"
          position = "Vice President"
          time_period = "April 2020 - present"
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
        <InvolvementItem
          title = "Gator UX"
          position = "Member"
          time_period = "September 2020"
          description = {["Learn about prototyping, principles of user experience and product design"]}
          icon={GatorUXIcon}
        />
      </Grid>
    </Section>
  );
}