import React from 'react'
import { motion } from "framer-motion"
import { Expo, Power4 } from 'gsap/all'

const Landing = () => {

    return (
        <motion.div
            initial={{ rotate: 10, y: 200, opacity: 0 }}
            animate={{ rotate: 0, y: 0, opacity: 1 }}
            transition={{ ease: [0.22, 1, 0.36, 1], duration: 1.2,delay:3.2}}
            className='relative w-full h-[150vh] origin-left sm:h-[250vh]'>

            <div className='picture w-full h-full overflow-hidden'>
                <img data-scroll data-scroll-speed="-1" className='w-full h-full object-cover' src="https://a.storyblok.com/f/133769/1920x2716/5c24d6b467/exo-ape-hero-1.jpg/m/2400x3395/filters:quality(90)" alt="" />
            </div>

            <div className='w-full absolute top-0'>
                <div className=' max-w-screen-2xl mx-auto px-5 sm:px-30'>
                    <div className='para mt-72 sm:mt-96 text-white'>
                        {[" Global digital design studio patnering", "with brands and buisnesses that create", "exceptional experience where people", " live,  work, and unwind."]
                            .map((items, index) =>
                                <p key={index} className='text-md masker font-regular overflow-hidden sm:text-2xl'>
                                    <motion.span
                                        initial={{ rotate: 90, y: "100%", opacity: 0 }}
                                        animate={{ rotate: 0, y: 0, opacity: 1 }}
                                        transition={{ ease: [0.22, 1, 0.36, 1], duration: 1, delay:3.2 + index * 0.15   }}
                                        className='inline-block origin-left'>
                                        {items}
                                    </motion.span>
                                </p>
                            )}


                    </div>


                    <div className='headings text-white mt-5 sm:mt-10'>
                        {["Digital", "Design", "Experience"].map((items, index) => (

                            <h1 key={index} className='text-6xl tracking-tighter  sm:text-[33vh] font-light leading-10 py-5 sm:py-25 -mt-5 sm:-mt-25 sm:font-base
                                 sm:leading-50 overflow-hidden'>
                                <motion.span
                                    initial={{ rotate: 90, y: "100%", opacity: 0 }}
                                    animate={{ rotate: 0, y: 0, opacity: 1 }}
                                    transition={{ ease: [0.22, 1, 0.36, 1], duration: 1, delay:3.2 + index * 0.15  }}
                                    className='inline-block origin-left font-semibold'>
                                    {items}
                                </motion.span>
                            </h1>
                        ))}

                    </div>


                    <div className='sm:w-1/3 para-2 text-white mt-20'>
                        <p className='sm:text-xl'>We help experience-driven companies thrive by making their audience feel the refined intricacies of their brand and product in the digital space. <br /> Unforgettable journeys start with a click.</p>
                        <a className='border-b-[0.2vh] pb-[0.05vh] inline-block mt-15' href="">The Studio</a>
                    </div>
                </div>
            </div>

        </motion.div>

    )
}

export default Landing