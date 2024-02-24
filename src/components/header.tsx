import Image from "next/image";
import React, { useContext } from "react";
import moon from "../assests/moon.svg";
import sun from "../assests/sun.svg";
import { ThemeContext } from "@/context/app_state";

type props = {
  Work_Ref: React.MutableRefObject<any>;
  Contact_Ref: React.MutableRefObject<any>;
};

const Header = ({ Work_Ref, Contact_Ref }: props) => {
  const { Theme, SetTheme } = useContext(ThemeContext);

  const ThemeChangeHandler = () => {
    if (Theme === "light") {
      SetTheme("dark");
    } else {
      SetTheme("light");
    }
  };

  return (
    <div
      className={
        "flex justify-between border-b-2 py-2 px-16 bg-gray-900" +
        (Theme === "light" ? " " : " text-white")
      }
    >
      <div className="text-2xl font-bold cursor-pointer ">
        {"<Amit Sharma/>"}
      </div>
      <div className="flex space-x-8 justify-evenly items-center">
        <h3
          className="font-bold text-xl cursor-pointer "
          onClick={() => {
            Work_Ref.current.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Works
        </h3>
        <h3
          className="font-bold text-xl cursor-pointer"
          onClick={() => {
            Contact_Ref.current.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Contact
        </h3>
        <div
          className="p-2 mb-2 hover:scale-125 cursor-pointer ease-in-out duration-300 bg-gray-200 rounded-full"
          onClick={ThemeChangeHandler}
        >
          {Theme === "light" ? (
            <Image src={moon} alt="dark" height={15}></Image>
          ) : (
            <Image src={sun} alt="dark" height={15}></Image>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
