"use client";
import Image from 'next/image';
import React from 'react'
import heroImage from '../../Assets/hero-image.png'
import Button from '../Button/Button';

const Hero = () => {
  return (
    <section className='bg-[#f4f4f5]  pt-[160px] pb-20'>
      <div className='container'>
        <div className='w-[48rem] m-auto text-center pb-16'>
          <h2 className='text-[50px] font-bold pb-4 leading-tight'>The creative <span className='italic'>platform</span> for cross-functional work</h2>
          <p className='text-lg mb-8 text-[#71717A]'>Turbocharge your creative process with a powerful AI design platform that gives creatives the power of creating without limits.</p>
          <div className='flex justify-center gap-5'>
            <div><Button text='Request Demo'/></div>
            <div><Button text='Try For Free'props="bg-white text-gray-500"/></div>
          </div>
        </div>
        <div className='w-full flex justify-center pb-20'>
          <Image src={heroImage} alt='hero image' width={1104} height={620}/>
        </div>
        <div className=' relative m-auto grid grid-cols-4 text-center'>
          <div className='px-5  '>
            <div className='text-[32px] font-bold'>476K</div>
            <p className='text-sm font-normal leading-6 text-[#71717A] text-center'>Assets packed with power beyond your imagination.</p>
          </div>
          <div className='px-5 '>
            <div className='text-[32px] font-bold'>1.44K</div>
            <p className='text-sm font-normal leading-6 text-[#71717A]'>Assets packed with power beyond your imagination.</p>
          </div>
          <div className='px-5 '>
            <div className='text-[32px] font-bold'>1.5M+</div>
            <p className='text-sm font-normal leading-6 text-[#71717A]'>Assets packed with power beyond your imagination.</p>
          </div>
          <div className='px-5 '>
            <div className='text-[32px] font-bold'>192K</div>
            <p className='text-sm font-normal leading-6 text-[#71717A]'>Assets packed with power beyond your imagination.</p>
          </div>
           
        </div>
      </div>
    </section>
  )
}

export default Hero
