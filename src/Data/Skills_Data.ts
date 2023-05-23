import HTML from "../assests/html-icon.svg";
import CSS from "../assests/css-icon.svg";
import JS from "../assests/javascript-programming-language-icon.svg";
import TS from "../assests/typescript-programming-language-icon.svg";
import React_Icon from "../assests/react-js-icon.svg";
import Next_Icon from "../assests/next.svg";
import Tailwind from "../assests/tailwind-css-icon.svg";
import SCSS from "../assests/sass-icon.svg";
import Bootstrap from "../assests/bootstrap-4-icon.svg";
import Redux_Icon from "../assests/redux-icon.svg";
import React_Router_Icon from "../assests/react-router.png";

import Node_Icon from "../assests/node-js-icon.svg";
import Express_Icon from "../assests/express-js-icon.svg";
import Rest_Api_Icon from "../assests/rest-api-icon.svg";
import MYSQL_Icon from "../assests/mysql-icon.svg";
import MongoDB_Icon from "../assests/mongodb-icon.svg";
import Git_Icon from "../assests/git-icon.svg";
import GitHub_Icon from "../assests/github-icon.svg";
import Heroku from "../assests/heroku-icon.svg";
import Netlify_Icon from "../assests/netlify.svg";
import Render_Icon from "../assests/rendericon.png";
import Firebase_Icon from "../assests/google-firebase-icon.svg";
import Postman_Icon from "../assests/postman-icon.svg";

type Skill_Type = {
  Image_Url: any;
  name: string;
};

export const Frontend_Skills: Array<Skill_Type> = [
  {
    Image_Url: HTML,
    name: "HTML",
  },
  {
    Image_Url: CSS,
    name: "CSS",
  },
  {
    Image_Url: JS,
    name: "JavaScript",
  },
  {
    Image_Url: TS,
    name: "TypeScript",
  },
  {
    Image_Url: React_Icon,
    name: "React",
  },
  {
    Image_Url: Next_Icon,
    name: "Next.JS",
  },
  {
    Image_Url: Tailwind,
    name: "Tailwind CSS",
  },
  {
    Image_Url: SCSS,
    name: "Sass",
  },
  {
    Image_Url: Bootstrap,
    name: "Bootstrap",
  },
  {
    Image_Url: Redux_Icon,
    name: "Redux",
  },
  {
    Image_Url: React_Router_Icon,
    name: "React Router",
  },
];

export const Backend_Skills: Array<Skill_Type> = [
  {
    Image_Url: Node_Icon,
    name: "Node.JS",
  },
  {
    Image_Url: Express_Icon,
    name: "Express.JS",
  },
  {
    Image_Url: Rest_Api_Icon,
    name: "REST API",
  },
  {
    Image_Url: MYSQL_Icon,
    name: "MYSQL",
  },
  {
    Image_Url: MongoDB_Icon,
    name: "MongoDB",
  },
  {
    Image_Url: Git_Icon,
    name: "Git",
  },
  {
    Image_Url: GitHub_Icon,
    name: "GitHub",
  },
  {
    Image_Url: Firebase_Icon,
    name: "Firebase",
  },
  {
    Image_Url: Heroku,
    name: "Heroku",
  },
  {
    Image_Url: Netlify_Icon,
    name: "Netlify",
  },
  {
    Image_Url: Render_Icon,
    name: "render.com",
  },
  {
    Image_Url: Postman_Icon,
    name: "Postman",
  },
];
