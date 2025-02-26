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
            <h2 className="text-4xl  ackeler-a text-center mb-10">The Way We Work</h2>
            <div className="flex justify-between items-center relative">
                {steps.map((step, index) => (
                    <div key={index} className="flex flex-col items-center w-1/5 relative">
                        {/* Step Circle */}
                        <div 
                            className={`w-12 h-12 flex items-center justify-center rounded-full text-white font-semibold cursor-pointer transition-all duration-500
                                ${index <= currentStep ? "bg-primary" : "bg-gray-300"}`}
                            onClick={() => setCurrentStep(index)}
                        >
                            {index + 1}
                        </div>
                        {/* Step Line (except last step) */}
                        {index < steps.length - 1 && (
                            <div className={`absolute top-5 left-1/2 w-full h-1 -z-10 transition-all duration-500
                                ${index < currentStep ? "bg-primary" : "bg-gray-300"}`} />
                        )}
                        {/* Step Title */}
                        <p className={`mt-2 text-sm font-semibold ${index <= currentStep ? "text-primary" : "text-gray-500"}`}>
                            {step.title}
                        </p>
                    </div>
                ))}
            </div>
            
            {/* Step Description */}
            <div className="mt-8 text-center">
                <p className="text-lg text-gray-700">{steps[currentStep].description}</p>
            </div>
        </div>
    );
};

export default HowWeWork;