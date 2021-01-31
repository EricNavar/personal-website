import React from 'react';
import Grid from '@material-ui/core/Grid';
//local files
import SSDIcon from './../../assets/resumePage/SSD.webp';
import OSCIcon from './../../assets/resumePage/OpenSourceClub.webp';
import GatorUXIcon from './../../assets/resumePage/GatorUXLogo.webp';
import HackFSUIcon from './../../assets/resumePage/HackFSU.webp';
import Section from './Section';
import InvolvementItem from './InvolvementItem';

export default function InvolvementList() {
  return (
    <Section title = "Involvement">
      <Grid container spacing={2}>
        <InvolvementItem
          title = "Gator UX"
          position = "Member"
          time_period = "September 2020"
          description = {["Learn about prototyping, principles of user experience and product design"]}
          icon={GatorUXIcon}
          wide={false}
          link = "https://gatorux.ericnavar.com"
          linkDescription="Cute little website I made to practice UX"
        />
        <InvolvementItem
          title = "Society of Software Developers"
          position = "Vice President"
          time_period = "April 2020 - present"
          description={["Explore tools and technologies in computer science such as testing and API design to promote well-written, working software."]}
          icon={SSDIcon}
          wide={false}
        />
        <InvolvementItem
          title = "Hack FSU"
          position = "2nd Place"
          time_period = "October 2019"
          description = {[
            "Use a Raspberry Pi for facial recognition to assign people a score for how many times they have taken out the trash.",
            "Display the participant’s scores on a website made in React."
          ]}
          link = "https://github.com/EricNavar/Trash-Tracker"
          linkDescription="Link to repository"
          icon={HackFSUIcon}
          wide={false}
        />
        <InvolvementItem
          title = "Open Source Club"
          position = "Member"
          time_period = "January 2019 - April 2019"
          description = {["Work on front end of web app using React-Redux"]}
          linkDescription="Link to repository"
          icon={OSCIcon}
          wide={false}
        />
      </Grid>
    </Section>
  );
}