"use client";
import Image from 'next/image';
import React from 'react'
import heroImage from '../../Assets/hero-image.png'
import Button from '../Button/Button';

const Hero = () => {
  return (
    <section>
      <div className='container pt-[160px]'>
        <div className='w-[48rem] m-auto text-center pb-16'>
          <h2 className='text-[50px] font-bold pb-4 leading-tight'>The creative <span className='italic'>platform</span> for cross-functional work</h2>
          <p className='text-lg mb-8 text-gray-300'>Turbocharge your creative process with a powerful AI design platform that gives creatives the power of creating without limits.</p>
          <div className='flex justify-center gap-5'>
            <div><Button text='Request Demo'/></div>
            <div><Button text='Try For Free'props="bg-white text-gray-500"/></div>
          </div>
        </div>
        <div className='w-full flex justify-center pb-20'>
          <Image src={heroImage} alt='hero image' width={1104} height={620}/>
        </div>
        <div className='grid grid-cols-4 '>
          <div className=''>
            <div>476K</div>
            <p>Assets packed with power beyond your imagination.</p>
          </div>
          <div>
            <div>476K</div>
            <p>Assets packed with power beyond your imagination.</p>
          </div>
          <div>
            <div>476K</div>
            <p>Assets packed with power beyond your imagination.</p>
          </div>
          <div>
            <div>476K</div>
            <p>Assets packed with power beyond your imagination.</p>
          </div>
           
        </div>
      </div>
    </section>
  )
}

export default Hero
