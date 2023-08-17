import logos from "./logos";

type ProjectName =
  | "devGram"
  | "dogmash"
  | "covid19"
  | "connect4"
  | "getItDone"
  | "urlShortener"
  | "thisWebsite"
  | "theMealHub"
  | "pokemon"
  | "jokes";

export type StackType = { label: string; logo: string; invert?: boolean };

export type ProjectType = {
  title: string;
  description: string[];
  images: {
    webm?: string;
    mp4?: string;
    main?: { link: string; height: number; width: number };
    poster?: string;
    vidHeight?: number;
    vidWidth?: number;
  };
  links: { github?: string; live: string };
  stack: StackType[];
  special?: { text: string; link: string };
};

type Projects = {
  [K in ProjectName]: ProjectType;
};

const projects: Projects = {
  devGram: {
    title: "My-Youtube",
    description: [
      "A social networking twitter like web app. Users can **create** posts, **like** posts and **comment** on posts.",
      "User can visit any **user profile** by clicking at their name or avatar to view posts by them.",
      "End-to-End typesafe code",
    ],
    images: {
      main: {
        link: "/assets/youtube.jpg",
        width: 1182,
        height: 732,
      },
    },
    stack: [
      logos.react,
      logos.javascript,
      // logos.graphql,
      logos.tailwind,
      logos.redux,
      logos.typescript,
      // logos.materialui,
    ],
    links: {
      live: "https://devgram-v2.vercel.app",
      github: "https://github.com/BhavyaCodes/devgram-v2",
    },
  },

  dogmash: {
    title: "Cloth-Fashion",
    description: [
      "**Upload**, **view** and **vote** for the cutest dogs, Dogmash project is inspired by Mark Zuckerberg's infamous website **facemash.**",
      "This was my first big **fullstack** project made using **node.js** with **express.js** and styled using **Bootstrap**. Users can upload their dog pics to the website without any registration which will only be made public once the admin logs in and approve the uploaded image. Yes this project has an **Admin panel** built into it to ensure images are appropriate.",
      "Uploaded images are stored on **amazon s3 bucket**, uploaded using **presigned URL** straight from browser to s3 bucket.",
      "This project also has **rate limiting** to avoid spam and uses **CSRF token** protection.",
    ],
    images: {
      main: {
        link: "/assets/cloth-fashion.jpg",
        width: 1903,
        height: 894,
      },
    },
    stack: [logos.react, logos.tailwind, logos.firebase, logos.redux],
    links: {
      live: "https://dogmash.herokuapp.com/",
    },
  },

  covid19: {
    title: "My Todo App",
    description: [
      "Covid-19 tracker for India made using **React.**",
      "This web app can be used to track current and historical data of India and its states and union territories. The web app shows a vector **map of India**, user may hover over any state and will be able to see the total confirmed, recovered, active and deceased for that state.",
      "There is also a state-wise table of covid data which can be sorted by any column.",
      "The app also features historical data using **charts** made using **[chartjs](https://www.chartjs.com)**, user may view data of any state and also choose the time frame and option between **daily** and **cumulative** data.",
      "The application is styled using **material-ui** and is fully responsive for all screen sizes and has a **dark mode** toggle. ",
    ],
    images: {
      main: {
        link: "/assets/my-todo.jpg",
        width: 1182,
        height: 732,
      },
    },
    stack: [logos.react, logos.tailwind, logos.redux],
    links: {
      github: "https://github.com/BhavyaCodes/covid-tracker-material-ui-react",
      live: "https://covid-tracker-beta.vercel.app/",
    },
  },
  connect4: {
    title: "NXT-Tech",
    description: [
      "Connect-4 board game that allows you to **play with anyone around the world** with no registration or downloads. You and your friend just need to open the link in the browser and you're ready to play 🙂",
      "The frontend is built using **React** and styled using **material-ui** and backend built using **node.js**.",
      "**socket.io** library is used for live transfer of data from client to server using websockets.",
      "The app supports multiple games running parallel, means multiple pair of people can play on the same website at the same time without any interference.",
      "If you wish to test this project, you must run the url on different browsers, or better check my **[video explaining how it works](https://www.linkedin.com/posts/bhavya-tomar_careerhack-github-hackathon-activity-6760854974944694272-aEDM)** that I posted on LinkedIn.",
    ],
    stack: [logos.firebase, logos.react, logos.tailwind, logos.redux],
    links: {
      github: "https://github.com/BhavyaCodes/connect-4-online-multiplayer",
      live: "https://konnect-4.vercel.app/",
    },
    images: {
      main: {
        link: "/assets/nxt-tech.jpg",
        width: 1100,
        height: 647,
      },
    },
  },
  getItDone: {
    title: "SVM-Developer",
    description: [
      "Goal tracker app made with my friend for a **hackthon that we won.**",
      "The challenge for the hackathon was to make a **CRUDy** web application for goal management.",
      "The application is made using **React** and styled using **material-ui.**",
      "Features of the app are **create, update, edit and delete** goals. Add **labels** to goal, Start a **timer to track** the time spent for goal, **timer keeps running even when the window is closed!**",
      "**Filter** goals by hashtag and/or text, **sort** goals by time spent per goal.",
      "View a **Bar graph** that displays the amount of time spent per goal.",
      "Check this video made by my hackathon partner **Priya Aswani** **[explaining how it works](https://www.linkedin.com/posts/activity-6755554068011319296-VlpE)**",
    ],
    links: {
      github: "https://github.com/BhavyaCodes/get-it-done",
      live: "https://get-it-done-git-master-juggernaut9.vercel.app",
    },
    stack: [logos.react, logos.chartjs, logos.materialui, logos.vercel],
    images: {
      main: {
        link: "/assets/dashboard.jpg",
        width: 1100,
        height: 647,
      },
    },
    // special: {
    //   text: "Hackathon winner",
    //   link: "https://www.linkedin.com/posts/mintbean_mintbeanhackathon-mintbean-hackathon-activity-6757030650957619200-xUa8",
    // },
  },
};

export default projects;
