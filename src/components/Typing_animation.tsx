import React from "react";
import { TypeAnimation } from "react-type-animation";

const Typing_Animation = () => {
  return (
    <div className="mx-auto">
      <TypeAnimation
        sequence={[
          " Amit Sharma", // Types 'One'
          1000, // Waits 1s
          " Full-Stack Developer", // Deletes 'One' and types 'Two'
          1000, // Waits 2s
          " Technology Geek", // Types 'Three' without deleting 'Two'
          1000,
          () => {},
        ]}
        wrapper="span"
        cursor={true}
        repeat={Infinity}
        style={{ fontSize: "1em", display: "inline-block" }}
      />
    </div>
  );
};

export default Typing_Animation;
