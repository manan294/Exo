import React from 'react'

const Landing = () => {
    return (
        <div className='relative w-full h-[250vh]'>
            <div className='picture w-full h-full'>
                <img className='w-full h-full object-cover' src="https://a.storyblok.com/f/133769/1920x2716/5c24d6b467/exo-ape-hero-1.jpg/m/2400x3395/filters:quality(90)" alt="" />
            </div>
            <div className='w-full absolute top-0'>
                <div className=' max-w-screen-2xl mx-auto px-5 sm:px-10'>
                    <div className='para mt-72 sm:mt-96 text-white'>
                        <p className='text-md font-regular sm:text-2xl'>Global digital design studio patnering</p>
                        <p className='text-md font-regular sm:text-2xl'>with brands and buisnesses that create</p>
                        <p className='text-md font-regular sm:text-2xl'>exceptional experience where people</p>
                        <p className='text-md font-regular sm:text-2xl'>live,  work, and unwind.</p>
                    </div>
                    <div className='headings text-white mt-5 sm:mt-10'>
                        <h1 className='text-6xl tracking-tighter sm:text-[35vh] leading-none'>Digital</h1>
                        <h1 className='text-6xl tracking-tighter sm:text-[35vh] leading-none'>Design</h1>
                        <h1 className='text-6xl tracking-tighter sm:text-[35vh] leading-none'>Experience</h1>
                    </div>
                    <div className='sm:w-1/3 para-2 text-white mt-20'>
                        <p className=' text-[18px] mb-8 tracking-[0.2vw] leading-[1.3]'>We help experience-driven companies thrive by making their audience feel the refined intricacies of their brand and product in the digital space. <br /> Unforgettable journeys start with a click.</p>
                        <a className='border-b-[0.2vh] pb-[0.05vh] ' href="">The Studio</a>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Landing