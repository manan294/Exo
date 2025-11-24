import React from 'react'

const Images = () => {
    return (
        <div className='w-full h-[70vh] sm:h-[170vh] flex items-center justify-center bg-white-500'>
            <div className='w-[35%] sm:w-[26%] sm:h-[94.5vh] h-1/2 relative'>
                <div className='absolute bg-red-500 top-6 -right-[14.5vw] w-16 h-23 sm:w-44 sm:h-65 overflow-hidden'>
                    <img className='w-full h-full object-cover' src="https://a.storyblok.com/f/133769/348x494/21becfd449/home-news-3.jpg/m/1200x1703/filters:quality(90)" alt="" />
                </div>
                <div className='absolute bg-green-500 top-47 right-[32.5vw] w-33 h-23 sm:w-100 sm:h-65 overflow-hidden'>
                    <img className='w-full h-full object-cover' src="https://a.storyblok.com/f/133769/758x508/8a1ff60d00/home-news-4.jpg/m/1200x804/filters:quality(90)" alt="" />
                </div>
                <img className='w-full h-full object-cover' src="https://a.storyblok.com/f/133769/748x1278/5784aa7150/home-news-1.jpg/m/1200x2050/filters:quality(90)" alt="" />
            </div>
        </div>
    )
}

export default Images