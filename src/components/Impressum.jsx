import React from 'react';

const Impressum = () => {
  return (
<div className="flex flex-wrap px-10">
      <div className="w-full sm:w-1/2 md:w-1/2 p-4 text-xs">
        <h2 className="text-lg font-semibold mb-4">Personal Information</h2>
        <p>Name: Dennis Diepolder</p>
        <p>City: 82279 Eching</p>
        <p>Phone: +4916091208750</p>
        <p>Email: dennisdiepolder@outlook.com</p>
      </div>
      <div className="w-full sm:w-1/2 md:w-1/3 p-4 text-xs">
        <h2 className="text-lg font-semibold mb-4">Legal Information</h2>
        <p>This website only uses technically necessary cookies. These cookies are essential for the operation of the website and do not store any personally identifiable information. By continuing to browse the site, you agree to the use of these cookies. The website collects no personal data.</p>
        <p>This website stores no userdata</p>
      </div>
    </div>
  );
}

export default Impressum;
