import React, { useState, useRef } from "react";
import Button from "react-bootstrap/Button";
import Overlay from "react-bootstrap/Overlay";
import Tooltip from "react-bootstrap/Tooltip";
import Image from "next/image";


import { useContext } from "react";
import { ThemeContext } from "@/context/app_state";


type props = {
  Image_Url: any;
  Skill_Name: string;
  Size: string;
};

const Skill_Logo = ({ Image_Url, Skill_Name, Size }: props) => {
  const [show, setShow] = useState(false);
  const target = useRef(null);

  const { Theme, SetTheme } = useContext(ThemeContext);

  return (
    <div>
      <div
        ref={target}
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        className={
          " flex " +
          (Size === "normal" ? " p-4 shadow-xl " : " p-2 shadow-md ") +
          " bg-gray-200 rounded-full  " +
          (Theme === "light" ? "  shadow-gray-400" : " shadow-gray-900")
        }
      >
        <Image
          className={
            "m-auto ease-in-out duration-300 " +
            (Size === "normal" ? " h-8 w-8 " : " h-4 w-4 ") +
            " hover:scale-125"
          }
          src={Image_Url}
          alt="icon"
        />
      </div>
      <Overlay target={target.current} show={show} placement="bottom">
        {(props) => (
          <Tooltip
            id="overlay-example"
            className="mt-2 bg-gray-200 rounded-sm p-1 shadow-xl shadow-gray-400"
            {...props}
          >
            <div className="font-bold">{Skill_Name}</div>
          </Tooltip>
        )}
      </Overlay>
    </div>
  );
};

export default Skill_Logo;
