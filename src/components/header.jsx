import React from 'react'
import Navbar from './nav'
import {motion} from "framer-motion"

function Header() {
  return (

    <div className='min-h-screen mb-4 bg-cover  bg-cyan-200 bg-center flex items-center w-full overflow-hidden ' style={{backgroundImage:"url('/header_img.png')"}} id='header'>
         <Navbar/>
         <motion.div 
         initial={{opacity:0,y:100}} 
         transition={{duration:1.5}}
         whileInView={{opacity:1,y:0}}
         viewport={{once:true}}
          className=' container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white'>
            <h2 className='text-5xl text-white sm:text-6xl capitalize md:text-[82px] inline-block max-w-3xl font-semibold pt-20 '>explore homes that fit your dreams</h2>
        <div className='space-x-6 mt-16'>
         <a href="#projects" className='border border-white px-8 py-3 rounded-lg text-xl capitalize'>projects</a>
         <a href="#contact"  className='border-none hover:bg-slate-50 hover:text-black bg-blue-600 px-8 py-3 rounded-lg text-xl capitilize'>contact us</a>
         </div>
         </motion.div>
    </div>
  )
}

export default Header
