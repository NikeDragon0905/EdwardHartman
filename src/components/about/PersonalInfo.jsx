import React from "react";

const personalInfoContent = [
  { meta: "first name", metaInfo: "Edward" },
  { meta: "last name", metaInfo: "Hartman" },
  { meta: "Age", metaInfo: "27" },
  // { meta: "Nationality", metaInfo: "US" },
  { meta: "Freelance", metaInfo: "Available" },
  { meta: "Address", metaInfo: "Brentwood, Texas, US" },
  { meta: "phone", metaInfo: "+832-699-0288" },
  { meta: "Email", metaInfo: "nikedragon0905@gmail.com" },
  { meta: "Skype", metaInfo: "live:.cid.db7376c3cccdf9af" },
  { meta: "Discord", metaInfo: "NikeDragon#9783" },
  { meta: "LinkedIn", metaInfo: "in/edward-hartman0905" },
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
