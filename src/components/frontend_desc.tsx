import React from "react";

import Image from "next/image";
import { useContext } from "react";
import { ThemeContext } from "@/context/app_state";

import Star_Icon from "../assests/star-solid.svg";
import anim_prog from "../assests/anim_prog.png";
import Skill_Logo from "./Skill_Logo";
import { Frontend_Skills } from "@/Data/Skills_Data";

const Frontend_Desc = () => {
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
          {"Frontend Development"}
        </h1>
      </div>

      <div className="ml-20 flex max-sm:flex-col max-sm:mx-auto  sm:space-x-4">
        <div className="p-2 max-sm:mx-auto">
          <Image src={anim_prog} width={500} alt="programming" />
        </div>
        <div>
          <div className="grid grid-cols-8 max-sm:grid-cols-4 gap-12 max-sm:my-8">
            {Frontend_Skills.map(({ name, Image_Url }) => (
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
                {"Building complex, interactive user interfaces using Reactjs."}
              </h1>
            </div>
            <div className="flex my-2 py-2">
              <Image src={Star_Icon} height={30} alt="star" />
              <h1 className="px-2 mx-2 py-2 bg-gray-300 rounded-lg">
                {
                  "Building Large scale Web applications using state management library such as redux."
                }
              </h1>
            </div>
            <div className="flex my-2 py-2">
              <Image src={Star_Icon} height={30} alt="star" />
              <h1 className="px-2 mx-2 py-2 bg-gray-300 rounded-lg">
                {"Building responsive Web Applications."}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frontend_Desc;
