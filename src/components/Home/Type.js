import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "React Developer",
          "Open Source Contributor",
          "LeetCode 8OO+ Problems Solved",
          "4 Start On Leetcode",
          "4 Start On CodeChef",
          "1920 rating On CodeChef",
          "Java Developer ",
          "Competative Coder",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
