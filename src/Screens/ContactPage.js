import React from 'react';
import SubPageHeader from '../components/SubPageHeader';
import ContactForm from '../components/Contact/ContactForm';
import ContactInfo from '../components/Contact/ContactInfo';

const ContactPage = () => {
  return (
    <div className="container">
      <SubPageHeader
        title="Contact"
        subtitle="Feel free to contact us if you have any questions."
      />
      <div className="columns is-multiline">
        <div className="column is-12-touch is-8">
          <ContactForm />
        </div>
        <div className="column is-12-touch is-4">
          <ContactInfo />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
