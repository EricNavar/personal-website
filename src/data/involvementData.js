import SSDIcon from './../assets/involvement/SSD.webp';
import SECIcon from './../assets/involvement/sec.webp';
import GatorUXIcon from './../assets/involvement/GatorUXLogo.webp';
import HackFSUIcon from './../assets/involvement/HackFSU.webp';

export default [
  {
    title: "Society of Software Developers",
    positions: { "Vice President": "April 2020 - April 2021", "President": "April 2021 - present" },
    description: ["Support the team of officers in planning semester curricula and preparing weekly meetings.",
      "Host presentations and conduct interactive workshops on topics such as Git and TDD to promote correct, maintainable software design",
      "Foster community of software developers through social events and online discussion"
    ],
    icon: SSDIcon,
  },
  {
    title: "Software Engineering Club",
    positions: { "Tech Lead": "January - May 2021" },
    description: ["Develop front-end of a React-Native mobile app that will be used discover and manage UF clubs",
      "Collaborate closely with developers and designers through stand-ups and pair programming"
    ],
    linkDescription: "Link to repository",
    icon: SECIcon,
  },
  {
    title: "Hack FSU",
    positions: { "2nd Place": "October 2019" },
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
    positions: { "Member": "September 2020 - Present" },
    description: ["Explore principles of UX and product design by attending workshops and lectures and gaining resources to learn"],
    icon: GatorUXIcon,
    link: "https://gatorux.ericnavar.com",
    linkDescription: "Cute little website I made to practice UX"
  }
]