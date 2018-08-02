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
      <div className="columns">
        <div className="column is-8">
          <ContactForm />
        </div>
        <div className="column is-4">
          <ContactInfo />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
