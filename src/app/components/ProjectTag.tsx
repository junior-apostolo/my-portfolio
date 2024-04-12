import React from "react";

type TagProps = {
  isSelected: boolean;
  name: string;
  onClick: (name: string) => void;
};

const ProjectTag = ({ isSelected, name, onClick }: TagProps) => {
  const buttonStyles = isSelected
    ? "text-white border-cyan-500"
    : "text-[#adb7be] border-slate-600 hover:border-white";
  return (
    <button
      onClick={() => onClick(name)}
      className={`${buttonStyles} rounded-full border-2 px-6 py-3 text-xl cursor-pointer`}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
