import React, { useEffect, useRef } from "react";

const brands = [
    { name: "Brand 1", logo: "https://via.placeholder.com/150?text=Brand+1" },
    { name: "Brand 2", logo: "https://via.placeholder.com/150?text=Brand+2" },
    { name: "Brand 3", logo: "https://via.placeholder.com/150?text=Brand+3" },
    { name: "Brand 4", logo: "https://via.placeholder.com/150?text=Brand+4" },
    { name: "Brand 5", logo: "https://via.placeholder.com/150?text=Brand+5" },
    { name: "Brand 6", logo: "https://via.placeholder.com/150?text=Brand+6" },
];

const BrandsWeWorkWith = () => {
    const scrollRef = useRef(null);

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (scrollContainer) {
            const clone = scrollContainer.innerHTML;
            scrollContainer.innerHTML += clone; // Duplicate content for seamless effect
        }
    }, []);

    return (
        <div className="w-full overflow-hidden bg-white py-10">
            <h2 className="text-5xl text-center mb-14 ackeler-a">Brands We Work With</h2>
            <div className="relative flex items-center">
                <div ref={scrollRef} className="flex whitespace-nowrap animate-scroll">
                    {brands.concat(brands).map((brand, index) => (
                        <div key={index} className="w-40 h-20 flex items-center justify-center mx-4 bg-gray-100">
                            <img src={brand.logo} alt={brand.name} className="h-full object-contain" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BrandsWeWorkWith;