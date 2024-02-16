import React from 'react';

const Impressum = () => {
  return (
<div className="flex flex-wrap px-10">
      <div className="w-full sm:w-1/2 md:w-1/2 p-4 text-xs">
        <h2 className="text-lg font-semibold mb-4">Personal Information</h2>
        <p>Name: Dennis Diepolder</p>
        <p>City: 82279 Eching</p>
        <p>Phone: +4916091208750</p>
        <p>Email: info@dennisdiepolder.com</p>
      </div>
      <div className="w-full sm:w-1/2 md:w-1/3 p-4 text-xs">
        <h2 className="text-lg font-semibold mb-4">Rechtliche Informationen</h2>
        <p>Diese Website verwendet ausschließlich technisch notwendige Cookies. Diese Cookies sind für den Betrieb der Website unerlässlich und speichern keine personenbezogenen Informationen. Durch die weitere Nutzung der Website stimmen Sie der Verwendung dieser Cookies zu. Die Website sammelt keine persönlichen Daten.</p>
        <p>Diese Website speichert keine Benutzerdaten.</p>

      </div>
    </div>
  );
}

export default Impressum;
