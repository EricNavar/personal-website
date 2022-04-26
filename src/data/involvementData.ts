import SSDIcon from './../assets/involvement/SSD.webp';
import GatorUXIcon from './../assets/involvement/GatorUXLogo.webp';
import HackFSUIcon from './../assets/involvement/HackFSU.webp';
import LightningTalk from './../assets/involvement/SSDLightningTalk.jpg';
import TrashTracker from './../assets/involvement/TrashTracker.jpg';
import { InvolvementItem } from '../commonTypes';

const involvementData: Array<InvolvementItem> = [
  {
    title: 'Society of Software Developers',
    positions: { 'President': 'April 2021 - April 2022' },
    description: [
      'Support team of officers in preparing weekly GBMs to promote software development',
      'Host presentations, conduct interactive workshops, and coordinate industry speaker events',
      'Foster community of developers and approximately double attendance size from previous year'
    ],
    icon: SSDIcon,
    thumbnail: LightningTalk,
    link: 'https://ufssd.org',
    linkDescription: 'SSD website',
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
    thumbnail: TrashTracker
  },
  {
    title: 'Gator UX',
    positions: { 'Member': 'September 2020 - February 2022' },
    description: ['Explore principles of UX and product design by attending workshops and lectures and gaining resources to learn'],
    icon: GatorUXIcon,
    link: 'https://www.instagram.com/gator.ux',
    linkDescription: 'Gator UX Instagram',
  }
];

export { involvementData };
