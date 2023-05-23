import React from "react";

import Image from "next/image";
import { Backend_Skills } from "@/Data/Skills_Data";
import Star_Icon from "../assests/star-solid.svg";
import Backend_Icon from "../assests/backend_icon.png";
import Skill_Logo from "./Skill_Logo";

import { useContext } from "react";
import { ThemeContext } from "@/context/app_state";

const Backend_Desc = () => {
  const { Theme, SetTheme } = useContext(ThemeContext);

  return (
    <div className="flex flex-col">
      <div className="mb-2 mx-auto">
        <h1
          className={
            "text-3xl font-bold " +
            (Theme === "light" ? " text-[#015587] " : " text-blue-500")
          }
        >
          {"Backend Development"}
        </h1>
      </div>
      <div className="ml-20 flex max-sm:flex-col max-sm:mx-auto space-x-4">
        <div className="p-2">
          <Image src={Backend_Icon} width={500} alt="programming" />
        </div>
        <div>
          <div className="grid grid-cols-8 max-sm:grid-cols-4 gap-12 max-sm:my-8">
            {Backend_Skills.map(({ Image_Url, name }) => (
              <Skill_Logo
                key={name}
                Image_Url={Image_Url}
                Size="normal"
                Skill_Name={name}
              />
            ))}
          </div>
          <div className="my-8">
            <div className="flex my-2 py-2">
              <Image src={Star_Icon} height={30} alt="star" />
              <h1 className="px-2 mx-2 py-2 bg-gray-300 rounded-lg">
                {
                  "Worked with various Node.js modules and libraries, such as Express to develop full-stack applications."
                }
              </h1>
            </div>
            <div className="flex my-2 py-2">
              <Image src={Star_Icon} height={30} alt="star" />
              <h1 className="px-2 mx-2 py-2 bg-gray-300 rounded-lg">
                {
                  "Building RESTful APIs to interact with application and database"
                }
              </h1>
            </div>
            <div className="flex my-2 py-2">
              <Image src={Star_Icon} height={30} alt="star" />
              <h1 className="px-2 mx-2 py-2 bg-gray-300 rounded-lg">
                {
                  "good understanding of database design in technologies such as MongoDB and MySQL."
                }
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Backend_Desc;
