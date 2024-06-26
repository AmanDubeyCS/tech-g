'use client';
import React from 'react'

interface ButtonProps {
  text: string;
  props?: any 
}

const Button = ({text, props}:ButtonProps) => {
  return (
    <>
      <div className={`text-sm px-4 py-2 bg-black text-gray-100 rounded-lg font-semibold leading-6 border shadow-md text-center cursor-pointer ${props}`}>{text}</div>
    </>
  )
}

export default Button
