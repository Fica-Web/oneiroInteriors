import React from 'react';

const LocationMap = () => {
    return (
        <div className="w-full h-[500px] overflow-hidden shadow-lg my-10">
            <iframe
                title="Google Map Location"
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d72809.22800380262!2d77.58514279403248!3d13.08762921868914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s1st%20floor%2C%20site%20no.%2035%20%26%2036%2080%20ft%20road%2C%20ShivaramKarath%20Nagar%2C%20Banglore%20-%20560077!5e0!3m2!1sen!2sin!4v1741424034485!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    );
};

export default LocationMap; 