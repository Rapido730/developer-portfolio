import Header from "@/components/header";
import Image from "next/image";

import { Poppins } from "next/font/google";
import Body from "@/components/body";
import { useRef } from "react";

import { useContext } from "react";
import { ThemeContext } from "@/context/app_state";

const poppins = Poppins({
  subsets: ["latin"],
  style: ["normal"],
  weight: ["300"],
});

export default function Home() {
  const { Theme, SetTheme } = useContext(ThemeContext);
  const Work_Ref = useRef();
  const Contact_Ref = useRef();

  return (
    <div
      className={
        "flex flex-col " +
        (Theme === "light"
          ? ""
          : " bg-gradient-to-tl from-gray-800 via-slate-600 to-slate-800 ") +
        poppins.className
      }
    >
      <div className={"fixed w-full "}>
        <Header Work_Ref={Work_Ref} Contact_Ref={Contact_Ref} />
      </div>
      <div className={"max-sm:overflow-auto"}>
        <Body Work_Ref={Work_Ref} Contact_Ref={Contact_Ref} />
      </div>
    </div>
  );
}
