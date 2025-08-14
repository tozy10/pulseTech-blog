'use client'
import React from 'react'
import{Swiper, SwiperSlide} from 'swiper/react'
import {Navigation, Pagination, Autoplay} from 'swiper/modules'
import Image from 'next/image'
import Link from 'next/link'

import 'swiper/css'
export default function HeroSlider() {
  const slides = [
  {
    id: 1,
    image: '/images/banner1.jpg',
    title: 'The Future of Tech Starts Here',
    subtitle: 'Explore the latest trends and innovations',
    cta: 'Read More',
    link: '/news',
  },
  {
    id: 2,
    image: '/images/banner2.jpg',
    title: 'Breaking News in the Tech World',
    subtitle: 'Stay informed with real-time updates',
    cta: 'Discover Now',
    link: '/news',
  },
  {
    id: 3,
    image: '/images/banner3.jpg',
    title: 'In-Depth Features & Expert Opinions',
    subtitle: 'Go beyond the headlines with exclusive insights',
    cta: 'Explore Features',
    link: '/features',
  },
];

  return (
    <div className='relative w-full h-[80vh]'>
      <Swiper 
      className ="w-full h-full"
      modules ={[Navigation, Pagination, Autoplay]}
      navigation
      pagination = {{clickable:true}}
      autoplay = {{delay: 5000}}
      loop
      
      
      >
        {slides.map(slide =>(
          <SwiperSlide key ={slide.id}>
            <div className='relative w-full h-[80vh]'>
              <Image
              src={slide.image}
              alt={slide.title}
              fill
              className='brightness-75 object-cover'
              />
            <div className="absolute inset-0 flex flex-col items-start justify-center px-10 md:px-24 text-white">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">{slide.title}</h2>
                <p className="text-lg md:text-2xl mb-6">{slide.subtitle}</p>
                <Link href={slide.link}>
                  <span className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-6 py-3 rounded-lg transition">
                    {slide.cta}
                  </span>
                </Link>
              </div>
            
            </div>
          </SwiperSlide>
        ))}
        
      </Swiper>     
    </div>
  )
}
