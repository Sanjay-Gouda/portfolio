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
      "Developed a full-fledged YouTube web application replicating the original YouTube experience",
      "Employed Tailwind CSS to achieve a modern and visually appealing design, enhancing user engagement",
      "Integrated the YouTube **Live API** to showcase trending videos, providing users with real-time popular content",
      "Implemented **debouncing** techniques for the search functionality, optimizing API calls and improving search responsiveness",
      "Incorporated an iframe container to seamlessly play videos, enhancing the overall user experience.",
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
      "Developed a user-friendly e-commerce application with static product data, enabling users to easily browse and add items to their cart",
      "Utilized **React** and **Redux** for efficient state management, ensuring seamless updates and consistent user experience throughout the app",
      "Integrated **Firebase** for secure user **authentication**, enhancing the app's reliability and enabling personalized experiences",
      "Implemented **Stripe payment gateway** to enable secure and convenient online payments, ensuring a smooth checkout process",
      "Incorporated **SCSS** for styling, resulting in visually appealing interfaces that enhance user engagement and navigation",
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
      "Developed a functional Todo App using **React and Redux**, offering users the ability to effortlessly manage tasks with CRUD operations",
      "Utilized Redux for efficient state management, ensuring smooth updates and maintaining a consistent task list across the application",
      "Integrated **Tailwind** CSS to style the app, resulting in a clean and intuitive user interface that enhances the user experience",
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
      "Led the development of an interactive invitation-based website for a virtual college tech event",

      "Organized a successful tech event that required participants to register on the site to obtain an event ticket",

      "Integrated **Firebase** authentication to ensure secure participant sign-ups and personalized experiences",

      "Leveraged **React** to create dynamic and engaging user interfaces, enhancing the event's online presence",

      "Utilized **Tailwind** CSS for styling, resulting in a modern and visually appealing design that captured participants' interest.      ",
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
      "Spearheaded the creation of a comprehensive real estate dashboard catering to multiple functionalities, including booking management, project tracking, user data administration, and more.",
      "Employed **Next.js** with **server-side rendering (SSR)** to ensure optimal performance and **SEO-friendly** content, enhancing the user experience",
      "Integrated a **REST API** to seamlessly fetch and manage real estate data, facilitating smooth communication between the frontend and backend.",
      "Implemented **private routing** using **Next.js Middleware**, ensuring secure access to sensitive data and features",
      "Utilized **debouncing** techniques to **optimize** data search functionality, improving the dashboard's responsiveness.",
      "Leveraged Tailwind CSS components to design visually appealing interfaces, creating an intuitive and modern user experience",
    ],
    links: {
      github: "https://github.com/BhavyaCodes/get-it-done",
      live: "https://get-it-done-git-master-juggernaut9.vercel.app",
    },
    stack: [logos.nextjs, logos.chartjs, logos.tailwind, logos.vercel],
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
