import React from "react";

const skillsContent = [
  //Basic
  { skillPercent: "99", skillName: "HTML/CSS" },
  { skillPercent: "99", skillName: "Tailwind CSS" },
  { skillPercent: "98", skillName: "JavaScript" },
  { skillPercent: "95", skillName: "TypeScript" },
  { skillPercent: "98", skillName: "React" },
  { skillPercent: "90", skillName: "Angular" },
  { skillPercent: "94", skillName: "Vue.js" },
  { skillPercent: "92", skillName: "Web3/SmartContract" },
  { skillPercent: "96", skillName: "NodeJS/Express" },
  { skillPercent: "94", skillName: "PHP/Laravel" },
  { skillPercent: "88", skillName: "Python/Django" },
  { skillPercent: "82", skillName: "C#/.NET" },
  { skillPercent: "85", skillName: "WordPress" },
  { skillPercent: "80", skillName: "Shopify" },
  { skillPercent: "96", skillName: "ReactNative" },
  { skillPercent: "92", skillName: "Flutter" },
];

const Skills = () => {
  return (
    <>
      {skillsContent.map((val, i) => (
        <div className="col-6 col-md-3 mb-3 mb-sm-5" key={i}>
          <div className={`c100 p${val.skillPercent}`}>
            <span>{val.skillPercent}%</span>
            <div className="slice">
              <div className="bar"></div>
              <div className="fill"></div>
            </div>
          </div>
          <h6 className="open-sans-font text-center mt-2 mt-sm-4">
            {val.skillName}
          </h6>
        </div>
      ))}
    </>
  );
};

export default Skills;
