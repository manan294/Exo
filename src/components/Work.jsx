import React, { useState } from 'react'
import { motion } from 'framer-motion'

const Work = () => {

    const [elems, setElems] = useState([

        { heading: "Ottografie", subheading: "Seamless Photographic Journey", video: "https://player.vimeo.com/progressive_redirect/playback/1047169994/rendition/720p/file.mp4?loc=external&log_user=0&signature=780c70237c241a1fe7a4b3837cad974ed7fb98f38cd2e6f912752ff9e44107ee", image: "https://a.storyblok.com/f/133769/2400x2990/729680ed7f/ottografie-2025-hero.jpg/m/1300x1620/filters:quality(90)" },
        { heading: "Amaterasu", subheading: "Frontier Health Innovation", video: "https://player.vimeo.com/progressive_redirect/playback/1020697798/rendition/720p/file.mp4?loc=external&log_user=0&signature=cd45f23683db91c40f08a3f4a31ba153f1e93eac3d4f98cb3ca4b651b8830d04", image: "https://a.storyblok.com/f/133769/2409x3000/c155d3e27e/amaterasu-hero.jpg/m/1300x1619/filters:quality(90)" },
        { heading: "Columbia Pictures", subheading: "Celeberating a centry of Cinema", video: "https://player.vimeo.com/progressive_redirect/playback/927016456/rendition/720p/file.mp4?loc=external&log_user=0&signature=270ce5ba6bf44a717c74cf85de5f3de1d33a36ba5205b660e5e23b873199d71a", image: "https://a.storyblok.com/f/133769/2400x2990/540fb12941/columbia-pictures-thumbnail.jpg/m/1300x1620/filters:quality(90)" },
        { heading: "Cambium", subheading: "Pioneering Sustainable Solutions", video: "https://player.vimeo.com/progressive_redirect/playback/1001982172/rendition/720p/file.mp4?loc=external&log_user=0&signature=b92eb1ab8119f2ffaaa03f075ef271714f5ee63065ee8d29f4e188ce30202de0", image: "https://a.storyblok.com/f/133769/2409x3000/cfd16e1a58/cambium-carbon-hero.jpg/m/1300x1619/filters:quality(90)" }
    ])


    return (
        <div className='w-full relative'>
            <div className='max-w-screen-2xl mx-auto px-5 py-20 sm:px-25'>
                <div className='featured flex gap-3'>
                    <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4" data-v-669b4a84=""><path d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z" fill="currentColor" data-v-669b4a84=""></path></svg>
                    <h3 className='capitalize'>featured projects</h3>
                </div>
                <h1 className='text-[17vw] font-normal tracking-tight my-3'>
                    <motion.span
                        initial={{ rotate: 90, y: "40%", opacity: 0 }}
                        whileInView={{ rotate: 0, y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ ease: [0.22, 1, 0.36, 1], duration: 1, }}
                        className='inline-block origin-left'>
                        Work
                    </motion.span>
                </h1>
                <p className='leading-6 text-md sm:w-[20vw] sm:text-[1.3vw]'>Highlights of cases that we passionately built with forward-thinking clients and friends over the years.</p>

                <div className='elems mt-10 sm:flex sm:gap-[6.5vh] flex-wrap'>
                    {elems.map((items, index) => {

                        return <div className='elem w-full sm:w-[48%] mt-15'>

                            <div className='video border-none rounded-lg  shadow-lg shadow-zinc-500/50 w-full relative overflow-hidden h-[104vw] sm:h-[100vh] sm:w-[90vh]  '>
                                <motion.img
                                    initial={{ opacity: 1 }}
                                    whileHover={{ opacity: 0 }}
                                    data-scroll
                                    data-scroll-speed="-.4"
                                    className=' hidden sm:absolute sm:z-[2] sm:top-0 sm:left-0 sm:block w-full h-full object-cover' src={items.image} alt="" />

                                <video
                                    className='block relative z-[1] w-full h-full absolute scale-[1.3] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
                                    autoPlay
                                    muted
                                    loop
                                    src={items.video}>
                                </video>
                            </div>

                            <div className='mt-4'>
                                <h3 className='font-bold'>{items.heading}</h3>
                                <h3 className='text-sm font-semibold text-zinc-500'>{items.subheading}</h3>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default Work