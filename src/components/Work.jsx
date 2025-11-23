import React from 'react'

const Work = () => {
    return (
        <div className='w-full relative'>
            <div className='max-w-screen-2xl mx-auto px-5 py-20 sm:px-50'>
                <div className='featured flex gap-3'>
                    <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4" data-v-669b4a84=""><path d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z" fill="currentColor" data-v-669b4a84=""></path></svg>
                    <h3 className='capitalize'>featured projects</h3>
                </div>
                <h1 className='text-[17vw] font-normal tracking-tight my-3'>Work</h1>
                <p className='leading-6 text-md sm:w-[20vw] sm:text-[1.3vw]'>Highlights of cases that we passionately built with forward-thinking clients and friends over the years.</p>
                <div className='elems mt-10'>
                    <div className='elem w-full'>
                        <div className='video w-full relative overflow-hidden h-[104vw] sm:h-[110vh] sm:w-[90vh]  '>
                            <img className=' hidden sm:block w-full h-full object-cover' src="https://a.storyblok.com/f/133769/2400x2990/729680ed7f/ottografie-2025-hero.jpg/m/1300x1620/filters:quality(90)" alt="" />
                            <video className='block sm:hidden w-full h-full absolute scale-[1.3] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' autoPlay muted loop src="https://player.vimeo.com/progressive_redirect/playback/1047169994/rendition/720p/file.mp4?loc=external&log_user=0&signature=780c70237c241a1fe7a4b3837cad974ed7fb98f38cd2e6f912752ff9e44107ee"></video>
                        </div>
                        <div className='mt-4'>
                            <h3>Pixelflakes</h3>
                            <h3>Architectural Marketing Agency</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Work