import React from "react";

type TabProps = {
  children: React.ReactNode;
  active: boolean;
  selectTab: () => void;
};

const TabButton = ({ active, selectTab, children }: TabProps) => {
  const buttonClasses = active
    ? "text-white border-b border-cyan-500"
    : "text-[#adb7be]";

  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
        {children}
      </p>
    </button>
  );
};

export default TabButton;