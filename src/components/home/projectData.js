import DCRFLogo from './../../assets/homePage/dcrf.webp';
import ClubfinityLogo from './../../assets/homePage/clubfinity.png';
import DatabasePic from './../../assets/homePage/database.webp';
import InspirationPic from './../../assets/homePage/inspiration.webp';
import GithubIcon from './../../assets/homePage/github_fluent.svg';
import GooglePlayIcon from './../../assets/homePage/google_play_fluent.svg';
import AppStoreIcon from './../../assets/homePage/app_store_fluent.svg';
import WebIcon from './../../assets/homePage/web_fluent.svg';
import GitlabIcon from './../../assets/homePage/gitlab_ios.svg';

export default [
  {
    "_id": 1,
    "tools": "MERN Stack web app",
    "headerText": "DC Rock Fitness",
    "subText": [["(No longer functional)"],
      ["A website for a fitness center where an admin can create ",
      "blog posts", " and nutrition posts. Clients can view their assigned ",
      " personalized workout", " plans for the week."]
    ],
    "image": DCRFLogo,
    "altLabel": "DC Rock Fitness Logo",
    "ariaLabel": "DC Rock Fitness website",
    "links": [
      {
        "label":"Website",
        "hyperlink": "https://dcrf.ericnavar.com/",
        "icon": WebIcon
      }
    ]
  },
  {
    "_id": 3,
    "tools": "React app",
    "headerText": "Inspiration Generator",
    "subText": [["Autogenerated ", "inspiration", " with each refresh!"]],
    "image": InspirationPic,
    "altLabel": "Mountain",
    "ariaLabel": "Inspiration Generator",
    "links": [
      {
        "label":"Website",
        "hyperlink": "/inspire",
        "icon": WebIcon
      },
    ]
  },
  {
    "_id": 5,
    "tools": "Flask app",
    "headerText": "SQL Injection Demo",
    "subText": [["A ", "flask app",
      " I got running that serves as an example for how ",
      "SQL injection",
      " in a website with poor security may occur"]
    ],
    "image": DatabasePic,
    "altLabel": "Database icon",
    "ariaLabel": "SQL injection playground. I made it for SSD's meeting on databases.",
    "links": [
      {
        "label":"Website",
        "hyperlink": "https://sql-ssd.herokuapp.com/login",
        "icon": WebIcon
      },
      {
        "label":"Github source",
        "hyperlink": "https://github.com/ufssd/sql-injection-demo",
        "icon": GithubIcon
      }
    ]
  },
  {
    "_id": 6,
    "tools": "React Native, Expo, Mongo DB",
    "headerText": "Clubfinity",
    "subText": [["Mobile app that allows school clubs to notify members of events and announcements. Users can easily discover and follow clubs and be notified of events they're going to."]
    ],
    "image": ClubfinityLogo,
    "altLabel": "Gator UX Logo",
    "ariaLabel": "Gator UX website",
    "links": [
      {
        "label":"Clubfinity app store",
        "hyperlink": "https://apps.apple.com/tt/app/clubfinity/id1539334633?ign-mpt=uo%3D2",
        "icon": AppStoreIcon
      },
      {
        "label":"Gitlab source",
        "hyperlink": "https://gitlab.com/ufsec/clubfinity",
        "icon": GitlabIcon
      }
    ]
  }
]