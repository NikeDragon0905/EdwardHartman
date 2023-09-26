import React from "react";

const experienceContent = [
  {
    year: "Oct 2021 - Apr 2023",
    position: "Senior Frontend Developer & Blockchain Engineer",
    compnayName: "PowerUSD, LLC (United States)",
    details:
      `Developed 12+ smart contracts on Ethereum/Binance networks and integrated with frontend using web3; Designed, created 10+ web/mobile apps for frontend interface and integrated 3rd-party APIs with a backend team; Optimised 15+ apps to enhance performance, assisted in building 100% reusable code and libraries for future use`,
  },
  {
    year: "Oct 2018 - Oct 2021",
    position: "Full Stack Engineer",
    compnayName: "Golden Hippo (United States)",
    details:
      `Designed, innovated, and modified 25+ software systems and custom components; Defined 30+ new software solutions by analyzing system performance standards; Planned, tracked, and managed deliverables on 200+ short-term sprints and 50+ long-term deployments`,
  },
  {
    year: "May 2017 - Oct 2018",
    position: "Web | Mobile App Developer",
    compnayName: "Coding Dojo (United States)",
    details:
      `Provided customer-first priority, fixed buges, and maintained a 99% SLA for response/resolution times; Provided customer-first priority, fixed buges, and maintained a 99% SLA for response/resolution times; •Implemented and maintained 30+ REST APIs writing documentation using OpenAPI specifications`,
  },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font">{val.year}</span>
          <h5 className="poppins-font">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
