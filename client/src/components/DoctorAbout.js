import React, { useState } from "react";

const TabButton = ({ isSelected, onClick, children }) => {
  const baseClasses =
    "py-2 px-4 text-sm font-medium text-center rounded-3xl border border-slate-300 transition-colors duration-300";
  const selectedClasses = "bg-green-500 text-white";
  const notSelectedClasses =
    "text-gray-700 bg-white hover:bg-gray-100 hover:text-gray-900";

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${
        isSelected ? selectedClasses : notSelectedClasses
      }`}
    >
      {children}
    </button>
  );
};

const TabContent = ({ children, isSelected }) => {
  return isSelected ? (
    <div className="w-[660px] h-72 mx-auto mt-4 p-4 border rounded-lg">
      {children}
    </div>
  ) : null;
};

const AboutSection = () => {
  const [selectedTab, setSelectedTab] = useState("aboutPhysio");

  return (
    <div>
      <div className="flex gap-2 mb-4">
        <TabButton
          isSelected={selectedTab === "aboutPhysio"}
          onClick={() => setSelectedTab("aboutPhysio")}
        >
          About Physio
        </TabButton>
        <TabButton
          isSelected={selectedTab === "reviews"}
          onClick={() => setSelectedTab("reviews")}
        >
          Reviews
        </TabButton>
        <TabButton
          isSelected={selectedTab === "consultQnA"}
          onClick={() => setSelectedTab("consultQnA")}
        >
          Consult Q&A
        </TabButton>
        <TabButton
          isSelected={selectedTab === "treatmentApproach"}
          onClick={() => setSelectedTab("treatmentApproach")}
        >
          Treatment/Approach
        </TabButton>
      </div>
      <TabContent isSelected={selectedTab === "aboutPhysio"}>
        aboutPhysio
      </TabContent>
      <TabContent isSelected={selectedTab === "reviews"}>Reviews</TabContent>
      <TabContent isSelected={selectedTab === "consultQnA"}>
        consultQnA
      </TabContent>
      <TabContent isSelected={selectedTab === "treatmentApproach"}>
        treatmentApproach
      </TabContent>
    </div>
  );
};

export default AboutSection;
