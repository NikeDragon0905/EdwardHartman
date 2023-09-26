import React from "react";

const personalInfoContent = [
  { meta: "First Name", metaInfo: "Edward" },
  { meta: "Last Name", metaInfo: "Hartman" },
  // { meta: "Nationality", metaInfo: "US" },
  { meta: "Email", metaInfo: "nike.dragon0905@gmail.com", to: "mailto:nike.dragon0905@gmail.com"},
  { meta: "Phone", metaInfo: "(315) 215-1277" },
  { meta: "LinkedIn", metaInfo: "edward-hartman0905", to: "https://www.linkedin.com/in/edward-hartman0905" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          {
            val.to === undefined ?
            <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
              {val.metaInfo}
            </span> :
            <a href={val.to} className="value text-white d-block d-sm-inline-block d-lg-block d-xl-inline-block" target="_blank" rel="noreferrer">{val.metaInfo}</a>
            }
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
