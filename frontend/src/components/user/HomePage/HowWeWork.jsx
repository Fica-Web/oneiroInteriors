import React, { useState } from "react";

const steps = [
    { title: "Consultation", description: "Understanding your needs and style preferences." },
    { title: "Concept & Design", description: "Crafting detailed layouts and 3D visualizations." },
    { title: "Material Selection", description: "Choosing the best materials and finishes." },
    { title: "Execution", description: "Bringing ideas to life with expert craftsmanship." },
    { title: "Final Touches", description: "Ensuring perfection before handover." }
];

const HowWeWork = () => {
    const [currentStep, setCurrentStep] = useState(0);

    return (
        <div className="w-11/12 mx-auto my-20">
            <h2 className="text-4xl ackeler-a  text-center mb-10">How We Work</h2>

            {/* Steps Container */}
            <div className="relative flex flex-col lg:flex-row items-start lg:items-center lg:justify-between lg:pl-0 pl-10">
                {steps.map((step, index) => (
                    <div 
                        key={index} 
                        className="relative flex items-center lg:flex-col w-full lg:w-1/5"
                    >
                        {/* Step Circle */}
                        <div 
                            className={`w-14 h-14 lg:mt-0 mt-10 flex items-center justify-center rounded-full text-white text-lg font-semibold cursor-pointer transition-all duration-500 z-50
                                ${index <= currentStep ? "bg-primary" : "bg-gray-400"}`}
                            onClick={() => setCurrentStep(index)}
                        >
                            {index + 1}
                        </div>

                        {/* Step Connector Line */}
                        {index < steps.length - 1 && (
                            <div 
                                className={`absolute bg-gray-300 transition-all duration-500 
                                    ${index < currentStep ? "bg-primary" : "bg-gray-300"} 
                                    lg:w-full lg:h-1 lg:top-7 lg:left-1/2 
                                    w-1 h-20 top-14 left-7 transform -translate-x-1/2 lg:translate-x-0`}
                            />
                        )}

                        {/* Step Title & Description */}
                        <div className="ml-6 lg:ml-0 lg:mt-4 mt-9 text-left lg:text-center">
                            <p className={`text-lg font-semibold ${index <= currentStep ? "text-primary" : "text-gray-500"}`}>
                                {step.title}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Step Description */}
            <div className="mt-10 text-center max-w-lg mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
                <p className="text-lg text-gray-800">{steps[currentStep].description}</p>
            </div>
        </div>
    );
};

export default HowWeWork;