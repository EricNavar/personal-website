import SSDIcon from './../assets/involvement/SSD.webp';
import GatorUXIcon from './../assets/involvement/GatorUXLogo.webp';
import HackFSUIcon from './../assets/involvement/HackFSU.webp';
export { InvolvementItem } from '../commonTypes';

const involvementData:Array<InvolvementItem> = [
  {
    title: 'Society of Software Developers',
    positions: { 'President': 'April 2021 - present' },
    description: ['Support team of officers in preparing weekly GBMs to promote software development',
      'Host presentations, conduct interactive workshops, and coordinate industry speaker events',
      'Foster community of software developers through regular social events and online discussion'
    ],
    icon: SSDIcon,
  },
  {
    title: 'Hack FSU',
    positions: { '2nd Place': 'October 2019' },
    description: [
      'Utilize OpenCV running on a Raspberry Pi for facial recognition',
      'Create React app to display users’ score based on how many times they have taken out the trash'
    ],
    link: 'https://github.com/EricNavar/Trash-Tracker',
    linkDescription: 'Link to repository',
    icon: HackFSUIcon,
  },
  {
    title: 'Gator UX',
    positions: { 'Member': 'September 2020 - Present' },
    description: ['Explore principles of UX and product design by attending workshops and lectures and gaining resources to learn'],
    icon: GatorUXIcon,
    link: 'https://gatorux.ericnavar.com',
    linkDescription: 'Cute little website I made to practice UX'
  }
];

export { involvementData };
