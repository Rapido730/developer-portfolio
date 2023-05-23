import React, { useRef } from "react";
import dp from "../assests/profile.png";
import linkedIn from "../assests/linkedin.svg";
import Github from "../assests/github.svg";
import CV from "../assests/cv.png";

import Link from "next/link";

import Image from "next/image";
import Frontend_Desc from "./frontend_desc";
import Backend_Desc from "./backend_desc";
import Typing_Animation from "./Typing_animation";
import Projects from "./projects.component";
import Leetcode from "../assests/leetcode.svg";
import Gmail_Icon from "../assests/gmail_icon.svg";
import Phone_Icon from "../assests/Phone_Icon.svg";
import Location_Icon from "../assests/location.svg";
import Degree_Icon from "../assests/degree_icon.png";
import W3dev_Logo from "../assests/w3dev_profile_logo.png";

import { useContext } from "react";
import { ThemeContext } from "@/context/app_state";

type props = {
  Work_Ref: React.MutableRefObject<any>;
  Contact_Ref: React.MutableRefObject<any>;
};

const Body = ({ Work_Ref, Contact_Ref }: props) => {
  const { Theme, SetTheme } = useContext(ThemeContext);

  return (
    <div className={"mt-24 flex flex-col"}>
      <div className="mx-auto ">
        <Image className="rounded-full" src={dp} alt="profile" width={200} />
      </div>
      <div className="mx-auto pt-8">
        <h1 className="text-4xl font-bold flex space-x-2">
          <span className={"" + (Theme === "light" ? " " : " text-white")}>
            {" "}
            {"Hi, I'm  "}{" "}
          </span>
          <span className="text-blue-500">
            <Typing_Animation />
          </span>
        </h1>
      </div>
      <div
        className={
          "mx-auto px-96 py-2" + (Theme === "light" ? " " : " text-white")
        }
      >
        <h1>
          {("I have experience in developing web applications from the ground up, ")+
          ("handling all the aspects till deployment. My major work is in MERN ")+
          ("Stack. I'm Skilled in Problem Solving, Data structure & Algorithms. ")+
          ("Actively participate in coding contests like Google Kickstart (achieved ")+
          ("5041 rank in Kick start(round E), and LeetCode Weekly(rating 1750+).")}
        </h1>
      </div>
      <div className="flex mx-auto py-12 space-x-12">
        <Link href={"https://www.linkedin.com/in/amit-sharma-510/"}>
          <div className="bg-gray-200 p-4 rounded-full">
            <Image
              className=" ease-in-out duration-300 hover:scale-125"
              src={linkedIn}
              alt="LinkedIn"
              height={25}
            />
          </div>
        </Link>
        <Link href={"https://github.com/Rapido730"}>
          <div className="bg-gray-200 p-4 rounded-full">
            <Image
              className="ease-in-out duration-300 hover:scale-125"
              src={Github}
              alt="GitHub"
              height={25}
            />
          </div>
        </Link>
        <Link href={"https://tinyurl.com/shamitCV"}>
          <div className="bg-gray-200 p-4 rounded-full">
            <Image
              className="ease-in-out duration-300 hover:scale-125"
              src={CV}
              alt="CV"
              height={25}
            />
          </div>
        </Link>
        <Link href={"https://leetcode.com/sharmamit510/"}>
          <div className="bg-gray-200 p-4 rounded-full">
            <Image
              className="ease-in-out duration-300 hover:scale-125"
              src={Leetcode}
              alt="Leetcode"
              height={25}
            />
          </div>
        </Link>
      </div>
      <div className="">
        <div className="flex flex-col gap-8">
          <h1
            className={
              "mx-auto mt-4 mb-2 text-5xl font-extrabold " +
              (Theme === "light" ? " text-[#015587] " : " text-blue-500")
            }
          >
            Experience
          </h1>
          <div className="flex mx-auto p-4 mb-2 w-6/12 rounded-lg bg-gray-100 space-x-4">
            <Image src={W3dev_Logo} className="h-12 w-12" alt="W3Dev" />
            <div>
              <h1 className="text-2xl mb-2 font-bold">
                {"Full Stack Developer Intern (Jan - Apr 2023)"}
              </h1>
              <h1 className="text-xl font-bold">
                {
                  "Developed a project to create email templates to quickly send emails to customers. Also developed a resumable uploader and worked on latest tech such as Next.JS and aws-amplify"
                }
              </h1>
            </div>
          </div>
          <h1
            className={
              "mx-auto mt-4 mb-2 text-5xl font-extrabold " +
              (Theme === "light" ? " text-[#015587] " : " text-blue-500")
            }
          >
            Education
          </h1>
          <div className="flex mx-auto p-4 mb-2 rounded-lg bg-gray-100 space-x-4">
            <Image src={Degree_Icon} alt="degree" />
            <div>
              <h1 className="text-2xl font-bold">
                {"B.Tech in Computer Science & Engineering"}
              </h1>
              <h1 className="text-xl font-bold">
                {"IIIT Kurnool, Andhra Pradesh (2020-24)"}{" "}
              </h1>
            </div>
          </div>
          <h1
            className={
              "mx-auto mt-4 mb-8 text-5xl font-extrabold " +
              (Theme === "light" ? " text-[#015587] " : " text-blue-500")
            }
          >
            What I do
          </h1>
          <Frontend_Desc />
          <Backend_Desc />
          <div ref={Work_Ref}>
            <Projects />
          </div>

          <div className="flex flex-col" ref={Contact_Ref}>
            <h1
              className={
                "text-4xl mx-auto text-5xl font-extrabold  mb-4 " +
                (Theme === "light" ? " text-[#015587] " : " text-blue-500")
              }
            >
              {" "}
              {"Get  In Touch"}{" "}
            </h1>
            <div className="flex bg-gray-100 space-x-4 font-bold rounded-lg p-2 my-2 mx-auto w-96">
              <Image className="h-8 w-8" src={Phone_Icon} alt="phone" />
              <h1>{"+91 9140154897"}</h1>
            </div>
            <div className="flex bg-gray-100 space-x-4 font-bold rounded-lg p-2 my-2 mx-auto w-96">
              <Image className="h-8 w-8" src={Gmail_Icon} alt="gmail" />
              <h1>{"sharmamit510@gmail.com"}</h1>
            </div>
            <div className="flex mx-auto mt-4">
              <Image src={Location_Icon} className="h-8 w-8 " alt="location" />
              <h1
                className={
                  "font-bold " +
                  (Theme === "light" ? " " : " text-white")
                }
              >
                {"Kurnool, Andhra Pradesh, India"}
              </h1>
            </div>
            <div className="flex mx-auto py-4 space-x-12">
              <Link href={"https://www.linkedin.com/in/amit-sharma-510/"}>
                <div className="bg-gray-200 p-4 rounded-full">
                  <Image
                    className=" ease-in-out duration-300 hover:scale-125"
                    src={linkedIn}
                    alt="LinkedIn"
                    height={25}
                  />
                </div>
              </Link>
              <Link href={"https://github.com/Rapido730"}>
                <div className="bg-gray-200 p-4 rounded-full">
                  <Image
                    className="ease-in-out duration-300 hover:scale-125"
                    src={Github}
                    alt="GitHub"
                    height={25}
                  />
                </div>
              </Link>
              <Link href={"https://tinyurl.com/shamitCV"}>
                <div className="bg-gray-200 p-4 rounded-full">
                  <Image
                    className="ease-in-out duration-300 hover:scale-125"
                    src={CV}
                    alt="CV"
                    height={25}
                  />
                </div>
              </Link>
              <Link href={"https://leetcode.com/sharmamit510/"}>
                <div className="bg-gray-200 p-4 rounded-full">
                  <Image
                    className="ease-in-out duration-300 hover:scale-125"
                    src={Leetcode}
                    alt="Leetcode"
                    height={25}
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Body;
