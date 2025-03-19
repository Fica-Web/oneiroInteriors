import React, { useEffect, useRef } from "react";
import hettich from '../../../assets/images/hettich.jpeg';
import hafele from '../../../assets/images/hafele.png';
import greenPly from '../../../assets/images/greenply.png';
import merino from '../../../assets/images/merino.avif';
import advance from '../../../assets/images/advance.jpg';
import saintGobain from '../../../assets/images/saint-gobain.jpg';
import godrej from '../../../assets/images/godrej.png';
import artisto from '../../../assets/images/artisto.jpeg';

const brands = [
    { name: "Hafele", logo: hafele },
    { name: "Advance", logo: advance },
    { name: "Green Ply", logo: greenPly },
    { name: "Hettich", logo: hettich },
    { name: "Saint Gobain", logo: saintGobain },
    { name: "Merino", logo: merino },
    { name: "Godrej", logo: godrej },
    { name: "Aristo", logo: artisto },
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
            <h2 className="sm:text-5xl text-3xl text-center mb-14 ackeler-a">Brands We Work With</h2>
            <div className="relative flex items-center">
                <div ref={scrollRef} className="flex whitespace-nowrap animate-scroll">
                    {brands.concat(brands).map((brand, index) => (
                        <div key={index} className="w-40 h-20 flex items-center justify-center mx-10">
                            <img src={brand.logo} alt={brand.name} className="h-full w-auto object-cover" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BrandsWeWorkWith;