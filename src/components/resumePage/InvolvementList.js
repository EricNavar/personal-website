import React from 'react';
import Grid from '@material-ui/core/Grid';
//local files
import SSDIcon from './../../assets/resumePage/SSD.webp';
import SECIcon from './../../assets/resumePage/sec.png';
import GatorUXIcon from './../../assets/resumePage/GatorUXLogo.webp';
import HackFSUIcon from './../../assets/resumePage/HackFSU.webp';
import Section from './Section';
import InvolvementItem from './InvolvementItem';

export default function InvolvementList() {
  return (
    <Section title = "Involvement">
      <Grid container spacing={4}>
        <InvolvementItem
          title = "Society of Software Developers"
          position = "Vice President"
          time_period = "April 2020 - present"
          description={["Explore tools and technologies in computer science such as TDD and API design to promote correct, maintainable software design.",
            "Research topics for presentations and conduct workshops such as a Git workshop for 45 attendees",
            "Manage team of officers and help plan semester curricula"
          ]}
          icon={SSDIcon}
          wide={false}
        />
        <InvolvementItem
          title = "Software Engineering Club"
          position = "Tech Lead"
          time_period = "February 2021 - Present"
          description = {["Develop front-end of a React-Native mobile app that will be used discover and manage UF clubs",
            "Collaborate closely with developers and designers through stand-ups and pair programming"
          ]}
          linkDescription="Link to repository"
          icon={SECIcon}
          wide={false}
        />
        <InvolvementItem
          title = "Hack FSU"
          position = "2nd Place"
          time_period = "October 2019"
          description = {[
            "Utilize OpenCV running on a Raspberry Pi for facial recognition",
            "Create React app to display users’ score based on how many times they have taken out the trash"
          ]}
          link = "https://github.com/EricNavar/Trash-Tracker"
          linkDescription="Link to repository"
          icon={HackFSUIcon}
          wide={false}
        />
        <InvolvementItem
          title = "Gator UX"
          position = "Member"
          time_period = "September 2020 - Present"
          description = {["Explore principles of UX and product design by attending workshops and lectures and gaining resources to learn"]}
          icon={GatorUXIcon}
          wide={false}
          link = "https://gatorux.ericnavar.com"
          linkDescription="Cute little website I made to practice UX"
        />
      </Grid>
    </Section>
  );
}