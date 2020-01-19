import React from 'react';
import Link from '@material-ui/core/Link';
import InvolvementItem from './InvolvementItem';
import Section from './Section';

export default function InvolvementList(props) {
  const contents = (
    <div>
      <InvolvementItem
        title = "Programming Team"
        position = "Club member"
        time_period = "August 2019 - November 2019"
        description={["Take classes with UF Programming Team.",
        "Practice contest problems"]}
      />
      <InvolvementItem
        title = "Society of Software developers"
        position = "Member"
        time_period = "September 2019 - present"
        description={["Study software design concepts such as testing", "API design, and writing documentation"]}
        link="https://github.com/EricNavar/Proof"
        linkDescription="Practice test-driven development"
      />
      <InvolvementItem
        title = "Open Source Club"
        position = "Member"
        time_period = "January 2019 - April 2019"
        description = {["Work on front end of web app using React-Redux"]}
        link="https://github.com/ufosc/AskAGator"
        linkDescription="Link to repository"
      />
      <InvolvementItem
        title = "Hack FSU"
        position = "Participant"
        time_period = "October 2019"
        description = {[
          "Use a Raspberry Pi for facial recognition to assign people a score for how many times they have taken out the trash.",
          "Participants’ scores are posted on a website made with React and Google Material UI API.",
          "Placed 2nd overall"
        ]}
        link = "https://github.com/EricNavar/Trash-Tracker"
        linkDescription="Link to repository"
      />
    </div>
  );

  return (
    <Section
      title = "Involvement"
      details = {contents}
    />
  );
}