import React from "react";
import Github_Icon from "../assests/github-icon.svg";
import App_Link_Icon from "../assests/App_Link_Icon.svg";
import Projectify_Image from "../assests/projectify_image.jpg";
import Shopping_Image from "../assests/shopping_Image.jpg";
import Next_Icon from "../assests/next.svg";
import HTML from "../assests/html-icon.svg";
import CSS from "../assests/css-icon.svg";
import Tailwind from "../assests/tailwind-css-icon.svg";
import JS from "../assests/javascript-programming-language-icon.svg";
import MongoDB_Icon from "../assests/mongodb-icon.svg";
import Netlify_Icon from "../assests/netlify.svg";
import TS from "../assests/typescript-programming-language-icon.svg";
import Skill_Logo from "./Skill_Logo";
import Link from "next/link";
import Image from "next/image";
import React_Icon from "../assests/react-js-icon.svg";
import Firebase_Icon from "../assests/google-firebase-icon.svg";
import SCSS_Icon from "../assests/sass-icon.svg";
import Node_Icon from "../assests/node-js-icon.svg";
import Express_Icon from "../assests/express-js-icon.svg";
import chatting_app from "../assests/Chatting_App.jpg";

import { useContext } from "react";
import { ThemeContext } from "@/context/app_state";

const Projects = () => {
  const { Theme, SetTheme } = useContext(ThemeContext);
  return (
    <div className=" flex flex-col my-12 ">
      <h1
        className={
          "mx-auto text-5xl font-extrabold  mb-16" +
          (Theme === "light" ? " text-[#015587] " : " text-blue-500")
        }
      >
        Projects Done
      </h1>
      <div
        className={
          "grid  grid-cols-1 sm:grid-cols-3  sm:px-36 gap-24 mx-auto" +
          (Theme === "light" ? "  " : " text-white")
        }
      >
        <div
          className={
            "w-72 sm:w-84  border-4 flex flex-col   rounded-md" +
            (Theme === "light"
              ? "  shadow-gray-400 shadow-md hover:shadow-xl hover:shadow-gray-400 duration-150"
              : " shadow-gray-900 shadow-md hover:shadow-xl hover:shadow-gray-900 duration-150")
          }
        >
          <div className="h-4/6 border-b-2">
            <Image className="h-full" src={Projectify_Image} alt="img" />
          </div>
          <div className="p-2 flex flex-col ">
            <div className="flex flex-col">
              <h1 className="text-2xl font-bold mx-auto">{"Projectify"}</h1>
              <h1>
                {
                  "A full-fledged application (Project Management System) which allows managers to monitor and track the tasks of the project by developers."
                }
              </h1>
            </div>
            <div className="border-t-2 pt-2 grid grid-cols-6 gap-2">
              <div>
                <Skill_Logo
                  Image_Url={Next_Icon}
                  Size="small"
                  Skill_Name="Next.JS"
                />
              </div>
              <div>
                <Skill_Logo Image_Url={HTML} Size="small" Skill_Name="HTML" />
              </div>
              <div>
                <Skill_Logo Image_Url={CSS} Size="small" Skill_Name="CSS" />
              </div>
              <div>
                <Skill_Logo
                  Image_Url={TS}
                  Size="small"
                  Skill_Name="TypeScript"
                />
              </div>
              <div>
                <Skill_Logo
                  Image_Url={MongoDB_Icon}
                  Skill_Name="MongoDB"
                  Size="small"
                />
              </div>
              <div>
                <Skill_Logo
                  Image_Url={Tailwind}
                  Skill_Name="Tailwind CSS"
                  Size="small"
                />
              </div>
              <div>
                <Skill_Logo
                  Image_Url={Netlify_Icon}
                  Skill_Name="Netlify"
                  Size="small"
                />
              </div>
            </div>
            <div className="flex space-x-4 self-end">
              <Link href={"https://project-management-251.netlify.app/"}>
                <Image
                  className={
                    "cursor-pointer  h-6 w-6 hover:scale-125 fill-yellow-100  ease-in-out duration-300 " +
                    (Theme === "light" ? "  " : " invert")
                  }
                  src={App_Link_Icon}
                  alt="App Link"
                />
              </Link>
              <Link href={"https://github.com/Rapido730/project-task-manager"}>
                <Image
                  className={
                    "cursor-pointer  h-6 w-6 hover:scale-125 fill-yellow-100  ease-in-out duration-300 " +
                    (Theme === "light" ? "  " : " invert")
                  }
                  src={Github_Icon}
                  alt="Github"
                />
              </Link>
            </div>
          </div>
        </div>
        <div
          className={
            "w-72 sm:w-84 border-4 flex flex-col   rounded-md" +
            (Theme === "light"
              ? "  shadow-gray-400 shadow-md hover:shadow-xl hover:shadow-gray-400 duration-150"
              : " shadow-gray-900 shadow-md hover:shadow-xl hover:shadow-gray-900 duration-150")
          }
        >
          <div className="h-4/6 border-b-2">
            <Image className="h-full" src={Shopping_Image} alt="img" />
          </div>
          <div className="p-2 flex flex-col ">
            <div className="flex flex-col">
              <h1 className="text-2xl font-bold mx-auto">
                {"Online Shopping App"}
              </h1>
              <h1>
                {
                  "Developed a E-commerce app using React including user authentication and cart functionalities."
                }
              </h1>
            </div>
            <div className="border-t-2 pt-2 grid grid-cols-6 gap-2">
              <div>
                <Skill_Logo
                  Image_Url={React_Icon}
                  Size="small"
                  Skill_Name="React.JS"
                />
              </div>
              <div>
                <Skill_Logo Image_Url={HTML} Size="small" Skill_Name="HTML" />
              </div>
              <div>
                <Skill_Logo Image_Url={CSS} Size="small" Skill_Name="CSS" />
              </div>
              <div>
                <Skill_Logo
                  Image_Url={JS}
                  Size="small"
                  Skill_Name="JavaScript"
                />
              </div>
              <div>
                <Skill_Logo
                  Image_Url={SCSS_Icon}
                  Skill_Name="SCSS"
                  Size="small"
                />
              </div>
              <div>
                <Skill_Logo
                  Image_Url={Netlify_Icon}
                  Skill_Name="Netlify"
                  Size="small"
                />
              </div>
              <div>
                <Skill_Logo
                  Image_Url={Firebase_Icon}
                  Skill_Name="Firebase"
                  Size="small"
                />
              </div>
            </div>
            <div className="flex space-x-4 self-end">
              <Link href={"https://online-shopping-app-251.netlify.app/"}>
                <Image
                  className={
                    "cursor-pointer  h-6 w-6 hover:scale-125 fill-yellow-100  ease-in-out duration-300 " +
                    (Theme === "light" ? "  " : " invert")
                  }
                  src={App_Link_Icon}
                  alt="App Link"
                />
              </Link>
              <Link
                href={"https://github.com/Rapido730/online-shopping-centre"}
              >
                <Image
                  className={
                    "cursor-pointer  h-6 w-6 hover:scale-125 fill-yellow-100  ease-in-out duration-300 " +
                    (Theme === "light" ? "  " : " invert")
                  }
                  src={Github_Icon}
                  alt="Github"
                />
              </Link>
            </div>
          </div>
        </div>
        <div
          className={
            "w-72 sm:w-84 border-4 flex flex-col   rounded-md" +
            (Theme === "light"
              ? "  shadow-gray-400 shadow-md hover:shadow-xl hover:shadow-gray-400 duration-150"
              : " shadow-gray-900 shadow-md hover:shadow-xl hover:shadow-gray-900 duration-150")
          }
        >
          <div className="h-4/6 border-b-2">
            <Image className="h-full" src={chatting_app} alt="img" />
          </div>
          <div className="p-2 flex flex-col ">
            <div className="flex flex-col">
              <h1 className="text-2xl font-bold mx-auto">
                {"Online Chatting App"}
              </h1>
              <h1>
                {
                  "Developed a chatting app in which user can create a chat room or can join an existing chat room using room code."
                }
              </h1>
            </div>
            <div className="border-t-2 pt-2 grid grid-cols-6 gap-2">
              <div>
                <Skill_Logo
                  Image_Url={Node_Icon}
                  Size="small"
                  Skill_Name="Node.JS"
                />
              </div>
              <div>
                <Skill_Logo
                  Image_Url={Express_Icon}
                  Size="small"
                  Skill_Name="Express.JS"
                />
              </div>
              <div>
                <Skill_Logo Image_Url={HTML} Size="small" Skill_Name="HTML" />
              </div>
              <div>
                <Skill_Logo Image_Url={CSS} Size="small" Skill_Name="CSS" />
              </div>
              <div>
                <Skill_Logo
                  Image_Url={JS}
                  Size="small"
                  Skill_Name="JavaScript"
                />
              </div>
              <div>
                <Skill_Logo
                  Image_Url={Netlify_Icon}
                  Skill_Name="Netlify"
                  Size="small"
                />
              </div>
            </div>
            <div className="flex space-x-4 self-end mt-2">
              <Link href={"https://chatting-app-4k1s.onrender.com/"}>
                <Image
                  className={
                    "cursor-pointer  h-6 w-6 hover:scale-125 fill-yellow-100  ease-in-out duration-300 " +
                    (Theme === "light" ? "  " : " invert")
                  }
                  src={App_Link_Icon}
                  alt="App Link"
                />
              </Link>
              <Link href={"https://github.com/Rapido730/chatting-app"}>
                <Image
                  className={
                    "cursor-pointer  h-6 w-6 hover:scale-125 fill-yellow-100  ease-in-out duration-300 " +
                    (Theme === "light" ? "  " : " invert")
                  }
                  src={Github_Icon}
                  alt="Github"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
