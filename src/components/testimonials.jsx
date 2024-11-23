import React from 'react'
import { testimonialsData } from '../../assets'
import star from '/star_icon.svg'
import {motion} from "framer-motion"

function Testimonials() {
  return (
    <motion.div
    initial={{opacity:0,x:100}} 
    transition={{duration:1}}
    whileInView={{opacity:1,x:0}}
    viewport={{once:true}} className='capitalize container mx-auto py-10 lg:px-32 w-full overflow-hidden' id='testimonials'>
        <h1 className=' text-2xl sm:text-4xl font-bold mb-2 text-center'>customer <span className='underline underline-offset-4 decoration-1 under font-light'>Testimonials</span>
        </h1>
        <p className='text-center text-gray-500 mb-8 max-w-80 mx-auto capitalize'>real stories from those who found home with us</p>
        <div  className='flex flex-wrap justify-center gap-8'>
            {testimonialsData.map((Testimonials,index)=>(
             <div key={index} className='max-w-[340px] border shadow-lg rounded px-8 py-12 text-center'>
                <img src={Testimonials.image} alt={Testimonials.alt} className='w-20 h-20 rounded-full mx-auto mb-4' />
                <h2 className='text-xl to-gray-500 font-medium'>{Testimonials.name}</h2>
                <p className='to-gray-500 mb-4 text-sm'>{Testimonials.title}</p>
                <div className='flex justify-center gap-1 text-red-500 mb-4'>
                    {Array.from({length: Testimonials.rating},(item,index)=>(
                        <img src={star}  key={index} alt="" />
                    ))}
                </div>
                <p>{Testimonials.text}</p>
             </div>
            )
            )}
        </div>
   </motion.div>
  )
}

export default Testimonials