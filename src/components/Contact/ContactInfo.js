import React from 'react';

const ContactInfo = () => {
  return (
    <div className="contact-info content is-warning notification">
      <h3>Dział obsługi klienta</h3>
      <h4>Paula</h4>
      <address>tel: 658 255 225 email: kontakt@koko.pl</address>
      <br />
      <p>
        <strong>Godziny pracy: </strong>
        <br />
        <span>poniedziałek - sobota 9:00 - 19:00</span>
      </p>
    </div>
  );
};

export default ContactInfo;
