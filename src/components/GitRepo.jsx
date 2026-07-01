import React from "react";
import { GitHubCalendar } from "react-github-calendar";

const GitRepo = () => {
  return (
    <div className="bg-black rounded-lg p-8 flex justify-center overflow-x-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent ">
      <GitHubCalendar
        username="mehra91"
        blockSize={12}
        blockMargin={5}
        fontSize={14}
        theme={{
          light: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
          dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
        }}
      />
    </div>
  );
};

export default GitRepo;