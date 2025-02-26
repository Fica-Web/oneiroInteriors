import React from 'react';
import ReusableTitle from '../../components/reusable/ReusableTitle';
import ContactForm from '../../components/user/ContactPage/ContactForm';

const ContactPage = () => {
    return (
        <div>
            <ReusableTitle 
                page='Contact Us'
                title='Get in Touch with Us'
                description="We’d love to hear from you! Whether you're looking to transform your space or have a question about our services, Oneiro Interiors is here to help. Reach out to us and let's create something extraordinary together."
            />
            <ContactForm />
        </div>
    )
}

export default ContactPage
