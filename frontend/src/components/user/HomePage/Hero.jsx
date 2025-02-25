import React from 'react';

const Hero = () => {
    return (
        <div className='w-11/12 mx-auto my-28'>
            <div className='flex items-center gap-7 foros-medium'>
                <h2 className='xl:text-8xl text-5xl font-semibold'>
                    Transforming Dream
                </h2>
                <img
                    src="https://mojoboutique.com/cdn/shop/articles/what_interior_design_style_uses_plants_1344x.jpg?v=1710240081"
                    alt="Interior Design"
                    className='h-24 rounded-full object-cover flex-1 hidden xl:block'
                />
            </div>
            <div className='flex items-center gap-7 xl:mt-8 mt-5'>
                <img
                    src="https://www.fabmodula.com/images/Newbanner3.jpg"
                    alt="Interior Design"
                    className='h-24 rounded-full object-cover flex-1 hidden xl:block'
                />
                <h2 className='xl:text-8xl text-5xl foros-medium font-semibold'>
                    Into Reality
                </h2>
            </div>

            <div className='flex xl:mt-24'>
                <div className='w-1/3 p-5 text-lg flex flex-col gap-8'>
                    <p className=''>
                        Oneiro believes a home should reflect its owners. Every design is tailored to match each client’s lifestyle and personality, creating spaces that feel both personal and functional.
                    </p>
                    <p>
                        Guided by the Golden Ratio, Oneiro ensures balanced proportions, seamless layouts, and elegant craftsmanship. Their approach blends timeless beauty with modern innovation, making every space visually harmonious.
                    </p>
                    <p>
                        For Oneiro, a home is more than just a structure—it’s a journey. They transform empty spaces into meaningful experiences, crafting designs that tell a story and bring dreams to life.
                    </p>
                </div>
                <div className='w-2/3'>
                    <img
                        src="https://www.fabmodula.com/images/Newbanner3.jpg"
                        alt="Interior Design"
                        className='object-cover'
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;
