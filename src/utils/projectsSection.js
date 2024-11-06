import chatbot from "../assets/images/chatbot.webp";
import gym from "../assets/images/gym.webp";
import github from "../assets/images/github.png";
import link from "../assets/images/link.png";

const projects = [
  {
    name: "Chatbot",
    information:
      "Full stack chat bot application, integrated with openai API, chat and user actions routes, build with React, mui, typescript, express and mongoDB",
    image: chatbot,
    externals: [{ name: "Github", link: "https://github.com/chriss222/chatBot", ico: github }],
  },
  {
    name: "Gym Site",
    information: "Gym presentation site, built with React and Tailwind",
    image: gym,
    externals: [
      { name: "Github", link: "https://github.com/chriss222/gymProject", ico: github },
      { name: "Live link", link: "https://c1448d6e.gymproject-eq2.pages.dev/", ico: link },
    ],
  },
];

export default projects;
