import SSDIcon from './../assets/involvement/SSD.webp';
import SECIcon from './../assets/involvement/sec.webp';
import GatorUXIcon from './../assets/involvement/GatorUXLogo.webp';
import HackFSUIcon from './../assets/involvement/HackFSU.webp';

export default [
  {
    title: "Society of Software Developers",
    position: "President",
    time_period: "April 2021 - present",
    description: ["Explore tools and technologies in computer science such as TDD and API design to promote correct, maintainable software design.",
      "Research topics for presentations and conduct workshops such as a Git workshop for 45 attendees",
      "Manage team of officers and help plan semester curricula"
    ],
    icon: SSDIcon,
  },
  {
    title: "Software Engineering Club",
    position: "Tech Lead",
    time_period: "January - May 2021",
    description: ["Develop front-end of a React-Native mobile app that will be used discover and manage UF clubs",
      "Collaborate closely with developers and designers through stand-ups and pair programming"
    ],
    linkDescription: "Link to repository",
    icon: SECIcon,
  },
  {
    title: "Hack FSU",
    position: "2nd Place",
    time_period: "October 2019",
    description: [
      "Utilize OpenCV running on a Raspberry Pi for facial recognition",
      "Create React app to display users’ score based on how many times they have taken out the trash"
    ],
    link: "https://github.com/EricNavar/Trash-Tracker",
    linkDescription: "Link to repository",
    icon: HackFSUIcon,
  },
  {
    title: "Gator UX",
    position: "Member",
    time_period: "September 2020 - Present",
    description: ["Explore principles of UX and product design by attending workshops and lectures and gaining resources to learn"],
    icon: GatorUXIcon,
    link: "https://gatorux.ericnavar.com",
    linkDescription: "Cute little website I made to practice UX"
  }
]