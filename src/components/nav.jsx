
import React, { useEffect, useState } from 'react'
import svg from '/logo.svg'
import svg2 from '/menu_icon.svg'
import cross from '/cross_icon.svg'
function Navbar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [showMobileMenu])
  return (
    <div className=' absolute top-0 z-10 w-full ' >
      <div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-9 lg:px-32'>
        <img src={svg} alt="" />
        <img onClick={() => setShowMobileMenu(true)} src={svg2} alt="" className='md:hidden sm:absolute top-1 cursor-pointer right-1 w-7' />
        <ul className='hidden md:flex gap-7 text-white uppercase'>
          <a href="#header" className='text-black cursor-pointer hover:text-gray-300 font-semibold'>home</a>
          <a href="#about" className='text-black cursor-pointer hover:text-gray-300 font-semibold'>about</a>
          <a href="#projects" className='text-black cursor-pointer hover:text-gray-300 font-semibold'>projects</a>
          <a href="#testimonials" className='text-black cursor-pointer hover:text-gray-300 font-semibold'>testimonials</a>
        </ul>
        <button className='hidden md:block bg-white text-black capitalize hover:bg-black hover:text-white  px-8 py-2 rounded-full'>sign up</button>
      </div>
      <div className={`md:hidden ${showMobileMenu ? 'fixed w-full' : 'h-0 w-0'} right-0 top-0 transition-all  bottom-0 overflow-hidden bg-white`}>
        <div className='flex justify-end p-6 cursor-pointer'><img onClick={() => setShowMobileMenu(false)} src={cross} className='w-5' alt="" /></div>
        <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium capitalize'>
          <a href="#header" onClick={() => setShowMobileMenu(false)} className='px-4 py-2 rounded-full inline-block'>home</a>
          <a href="#about" onClick={() => setShowMobileMenu(false)} className='px-4 py-2 rounded-full inline-block'>about</a>
          <a href="#projects" onClick={() => setShowMobileMenu(false)} className='px-4 py-2 rounded-full inline-block'>projects</a>
          <a href="#testimonials" onClick={() => setShowMobileMenu(false)} className='px-4 py-2 rounded-full inline-block'>testimonials</a>
        </ul>
      </div>
    </div>
  )
}

export default Navbar