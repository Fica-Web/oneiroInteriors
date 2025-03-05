import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";
import kitchen from "../../../assets/images/kitchen1.png";
import kitchen4 from "../../../assets/images/kitchen4.png";
import kitchen6 from "../../../assets/images/kitchen6.png";
import kitchen7 from "../../../assets/images/kitchen7.png";
import kitchen8 from "../../../assets/images/kitchen8.png";
import kitchen9 from "../../../assets/images/kitchen9.png";

const faqs = [
    { question: "What services does Oneiro Interiors offer?", answer: "We provide end-to-end interior design services, including space planning, 3D visualization, custom furniture, and project execution.", img: kitchen },
    { question: "How do I get started with a project?", answer: "You can start by scheduling a consultation with us, where we understand your requirements, budget, and design preferences before moving forward.", img: kitchen6 },
    { question: "Do you offer customized designs?", answer: "Absolutely! Our designs are tailored to your needs, style, and functional requirements, ensuring a unique space that reflects your personality.", img: kitchen7 },
    { question: "What is the usual timeline for a project?", answer: "The timeline varies depending on the project scope. However, most projects take between 4-12 weeks, from design approval to completion.", img: kitchen8 },
    { question: "Can I see a 3D visualization before execution?", answer: "Yes, we offer 3D visualizations and mood boards to help you visualize your space before we begin execution.", img: kitchen9 },
];

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const [selectedImage, setSelectedImage] = useState(kitchen);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const toggleFAQ = (index) => {
        if (activeIndex === index) {
            setActiveIndex(null);
        } else {
            setActiveIndex(index);
            setSelectedImage(faqs[index].img);
        }
    };

    return (
        <div className="w-full relative my-32 mt-56">
            {/* Background Image Section */}
            <div
                className="absolute -top-24 left-0 w-full h-full -z-10 lg:max-h-[60vh] max-h-[100vh] bg-cover bg-center opacity-70"
                style={{ backgroundImage: `url(${kitchen4})` }}
            ></div>

            <div ref={ref} className="w-11/12 mx-auto my-20">
                <div className="flex flex-col lg:flex-row items-center gap-12 bg-white shadow-2xl rounded-xl lg:p-10 p-4 py-20 relative z-10">
                    {/* FAQ Section */}
                    <div className="w-full lg:w-1/2">
                        <motion.h2
                            className="sm:text-5xl text-4xl text-center text-gray-900 mb-12 ackeler-a"
                            initial={{ opacity: 0, y: -40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.9 }}
                        >
                            Frequently Asked Questions
                        </motion.h2>
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                className="border border-gray-300 rounded-xl overflow-hidden shadow-lg mb-4 bg-white transition-all duration-300 hover:shadow-xl"
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                            >
                                <button
                                    className="w-full flex justify-between items-center p-6 text-left text-lg font-semibold bg-gradient-to-r from-[#fea034] to-[#f7501f] text-white hover:from-[#f7501f] hover:to-[#d80d0d] transition-all duration-300"
                                    onClick={() => toggleFAQ(index)}
                                >
                                    {faq.question}
                                    {activeIndex === index ? (
                                        <FaMinus className="text-xl cursor-pointer ml-4" />
                                    ) : (
                                        <FaPlus className="text-xl cursor-pointer ml-4" />
                                    )}
                                </button>
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={activeIndex === index ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                                    className="overflow-hidden bg-gray-50"
                                >
                                    <p className="p-6 text-gray-700">{faq.answer}</p>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Image Section */}
                    <motion.div
                        className="w-full lg:w-1/2 flex justify-center items-center"
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <motion.img
                            key={selectedImage}
                            src={selectedImage}
                            alt="FAQ Illustration"
                            className="w-full"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                        />
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;