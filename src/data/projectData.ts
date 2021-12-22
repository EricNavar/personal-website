import DCRFLogo from './../assets/projects/dcrf.webp';
import ClubfinityLogo from './../assets/projects/clubfinity.webp';
import InspirationPic from './../assets/projects/inspiration.webp';
import SimplifunctionLogo from './../assets/projects/simplifunction.webp';
import AppStoreIcon from '../assets/icons/app_store_fluent';
import WebIcon from '../assets/icons/web_fluent';
import GitlabIcon from '../assets/icons/gitlab_ios';
import { Project } from '../commonTypes';

const projectData:Array<Project> = [
  {
    _id: 1,
    tools: 'MERN Stack web app',
    headerText: 'DC Rock Fitness',
    subText: [['(No longer functional)'],
      ['A website for a fitness center where an admin can create ',
        'blog posts', ' and nutrition posts. Clients can view their assigned ',
        ' personalized workout', ' plans for the week.']
    ],
    image: DCRFLogo,
    altLabel: 'DC Rock Fitness Logo',
    ariaLabel: 'DC Rock Fitness website',
    links: [
      {
        label:'Website',
        ariaLabel: 'DC Rock Fitness Website',
        hyperlink: 'https://dcrf.ericnavar.com/',
        icon: WebIcon
      }
    ]
  },
  {
    _id: 3,
    tools: 'React app',
    headerText: 'Inspiration Generator',
    subText: [['Autogenerated ', 'inspiration', ' with each refresh!']],
    image: InspirationPic,
    altLabel: 'Mountain',
    ariaLabel: 'Inspiration Generator',
    links: [
      {
        label:'Website',
        ariaLabel: 'Inspiration Generator',
        hyperlink: '/inspire',
        icon: WebIcon
      },
    ]
  },
  {
    _id: 7,
    tools: '',
    headerText: 'SimpliFunction',
    subText: [['Website that allows users to create formulas for Microsoft Excel and Google Sheets without needing to know Visual Basic For Applications syntax or any programming.']
    ],
    image: SimplifunctionLogo,
    altLabel: 'Simplifunction Logo',
    ariaLabel: 'Simplifunction website',
    links: [
      {
        label:'Website',
        ariaLabel: 'Simplifunction Logo',
        hyperlink: 'https://apps.apple.com/tt/app/clubfinity/id1539334633?ign-mpt=uo%3D2',
        icon: WebIcon
      },
    ]
  },
  {
    _id: 6,
    tools: 'React Native, Expo, Mongo DB',
    headerText: 'Clubfinity',
    subText: [['Mobile app that allows school clubs to notify members of events and announcements. Users can easily discover and follow clubs and be notified of events they\'re going to.']
    ],
    image: ClubfinityLogo,
    altLabel: 'Clubfinity Logo',
    ariaLabel: 'Clubfinity website',
    links: [
      {
        label:'View in App Store',
        ariaLabel: 'Clubfinity App Store page',
        hyperlink: 'https://apps.apple.com/tt/app/clubfinity/id1539334633?ign-mpt=uo%3D2',
        icon: AppStoreIcon
      },
      {
        label:'Gitlab source',
        hyperlink: 'https://gitlab.com/ufsec/clubfinity',
        ariaLabel: 'Gitlab source code',
        icon: GitlabIcon
      }
    ]
  }
];

export { projectData };
