import React from "react";

const educationContent = [
  {
    year: "Sep 2021",
    university: "IBM Blockchain Foundation for Developer Certificate",
    degree: "🍸",
    details: "Coursera",
  },
  {
    year: "May 2020",
    university: "Full Stack Web and Multiplatform App Development Certificate",
    degree: "🍸",
    details: "Coursera",
  },
  {
    year: "Feb 2019",
    university: "Front End Web Development Certificate",
    degree: "🍸",
    details: "Coursera",
  },
  {
    year: "Jul 2018",
    university: "NodeJS-The Complete Guide",
    degree: "🍸",
    details: "Udemy",
  },
  {
    year: "Jan 2018",
    university: "HTML5 Web Developer Camp Certificate",
    degree: "🍸",
    details: "Coursera",
  },
  {
    year: "May 2017",
    university: "React-The Complete Guide",
    degree: "🍸",
    details: "Udemy",
  },
  {
    year: "Mar 2017",
    university: "Introduction to Programming Using JavaScript",
    degree: "🍸",
    details: "Udemy",
  },
  
];

const Education = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className='icon'>
            <i className='fa fa-briefcase'></i>
          </div>
          <span className='time open-sans-font'>{val.year}</span>
          <h5 className='poppins-font'>
            {val.university}
            <span className='place open-sans-font'>{val.degree}</span>
          </h5>
          <p className='open-sans-font'>{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Education;
