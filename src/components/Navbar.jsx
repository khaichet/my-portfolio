import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center px-4 sm:px-12 lg:px-24 py-4 top-0 bottom-0 right-0 gap-5 transition-all'>

      <div className='text-gray-700 sm:text-sm max-sm:w-60 mx-sm:pl-10'>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>


      </div>
    </div>
  )
}

export default Navbar