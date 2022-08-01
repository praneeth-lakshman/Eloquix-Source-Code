import React from "react";
import { useState, useEffect } from "react";

const HeadingTitle = () => {
  const textLoop: string[] = ["Leader", "Innovator", "Visionary"];
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      if (index < textLoop.length - 1) {
        setIndex(index + 1);
      } else {
        setIndex(0);
      }
    }, 2000);
    return () => clearInterval(interval);
  });
  return (
    <h1 className="pt-10 text-center pl-5 text-emerald-400 font-bold text-8xl">
      Find Yourself as a{" "}
      <span className="underline text-violet-400">
        {textLoop[index]}.
      </span>
    </h1>
  );
};

export default HeadingTitle;
