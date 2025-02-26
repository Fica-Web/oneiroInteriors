import React from 'react';
import ReusableTitle from '../../components/reusable/ReusableTitle';
import ContactForm from '../../components/user/ContactPage/ContactForm';

const ContactPage = () => {
    return (
        <div>
            <ReusableTitle 
                page='Contact Us'
                title='Get In touch With Us'
            />
            <ContactForm />
        </div>
    )
}

export default ContactPage
