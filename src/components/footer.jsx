import React from 'react'
import logo from '/logo_dark.svg'

function Footer() {
  return (
    <div className='pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden' id='footer'>
        <div className='container mx-auto flex flex-col md:flex-row justify-between items-center'>
            <div className='w-full md:w-1/3 mb-8 md:mb-0'>
                <img src={logo} alt="" />
                <p className='text-gray-400 mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti cumque excepturi porro minima neque eius nam similique obcaecati, cupiditate earum voluptas officia accusantium!</p>
            </div>
            <div className='w-full md:w-1/5 mb-8 md:mb-0'>
                <h3 className='text-white text-lg font-bold mb-4'>Company</h3>
                <ul className='flex flex-col gap-2 text-gray-400'>
                    <a href="#header" className='hover:text-white'>Home</a>
                    <a href="#about" className='hover:text-white'>About Us</a>
                    <a href="#contact" className='hover:text-white'>Contact Us</a>
                    <a href="#" className='hover:text-white'>Privacy Policy</a>
                </ul>
            </div>
            <div className='w-full md:w-1/3'>
            <h3 className='text-white text-lg font-bold mb-4 capitalize'>subscribe to our newsletter</h3>
            <p className='text-gray-400 mb-4 max-w-80'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, ullam?</p>
            <div className='flex gap-3'>
                <input type="email" name="email" id="enter your email" className='p-2 rounded bg-gray-800 text-gray-400 border border-gray-700 focus:outline-none w-full md:w-auto' />
          <button className='py-2 px-4 rounded bg-blue-500 text-white'>subscribe</button>
            </div>
            </div>
        </div>
        <div className='border bg-gray-700 py-4 mt-10 text-center text-gray-500'>
            copyright 2024 @ xyz.all right reserved
        </div>
    </div>
  )
}

export default Footer