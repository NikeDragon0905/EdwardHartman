import React from "react";

const Address = () => {
  const contactInfo = {
    address: "Austin, Texas, US",
    mail: "nike.dragon0905@gmail.com",
    phone: "(786) 347 1994",
  };
  return (
    <>
      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-map position-absolute"></i>
        <span className="d-block">Address Point</span>
        {contactInfo.address}
      </p>
      {/* End .custom-span-contact */}

      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-envelope-open position-absolute"></i>
        <span className="d-block">Mail Me</span>{" "}
        <a href={`mailto:${contactInfo.mail}`}>{contactInfo.mail}</a>
      </p>
      {/* End .custom-span-contact */}

      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-phone-square position-absolute"></i>
        <span className="d-block">Call Me</span>{" "}
        <a href={`Tel: ${contactInfo.phone}`}>{contactInfo.phone}</a>
      </p>
      {/* End .custom-span-contact */}
    </>
  );
};

export default Address;
