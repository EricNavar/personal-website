import DcrfLogo from './../assets/projects/dcrf.webp';
import AsurionLogo from './../assets/involvement/asurion.webp';
import { InvolvementItem } from '../commonTypes';

const experienceData: InvolvementItem[] = [
  {
    'title': 'Asurion',
    'positions': { 'Software Engineer Intern': 'May 2022 - Present' },
    'description': [
      'Develop React website and React Native app for customers of Asurion and Asurion partners',
      'Learn to collaborate with with developers and product designers to analyze requirements and understand business value to find a solution',
      'Review user sessions and write component tests to find bugs and increase testing capacity'
    ],
    'icon': AsurionLogo
  },
  {
    'title': 'DC Rock Fitness',
    'positions': { 'Front End Developer': 'February - September 2020' },
    'description': [
      'Develop a MERN stack web app handling user content and admin controls',
      'Respond to client feedback and requirements in an Agile environment to find the best solution',
      'Configure backend for a serverless AWS Lambda deployment and minimize costs'
    ],
    'link': 'https://dcfitness.herokuapp.com/',
    'linkDescription': 'link to website (Not currently operational)',
    'icon': DcrfLogo
  }
];

export { experienceData };
