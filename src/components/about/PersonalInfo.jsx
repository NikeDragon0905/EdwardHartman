import React from "react";

const personalInfoContent = [
  { meta: "First Name", metaInfo: "Edward" },
  { meta: "Last Name", metaInfo: "Hartman" },
  { meta: "Age", metaInfo: "27" },
  // { meta: "Nationality", metaInfo: "US" },
  { meta: "Gender", metaInfo: "M" },
  { meta: "Address", metaInfo: "Austin, Texas, US" },
  { meta: "Phone", metaInfo: "(786) 347 1994" },
  { meta: "Email", metaInfo: "nike.dragon0905@gmail.com" },
  { meta: "Skype", metaInfo: "live:.cid.db7376c3cccdf9af" },
  { meta: "Discord", metaInfo: "NikeDragon#9783" },
  { meta: "LinkedIn", metaInfo: "https://linkedin.com/in/edward-hartman0905" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
