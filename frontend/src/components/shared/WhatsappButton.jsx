import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const phoneNumber = "917411552239"; // Replace with your WhatsApp number
  const message = "Hi! I would like to know more about Oneiro Interiors.";

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-40 bg-green-500 text-white rounded-full w-16 h-16 lg:w-20 lg:h-20 flex items-center justify-center shadow-lg hover:bg-green-600 transition-all sm:bottom-4 sm:right-4 sm:w-14 sm:h-14"
    >
      <FaWhatsapp className="text-2xl sm:text-xl lg:text-5xl" />
    </a>
  );
};

export default WhatsAppButton;