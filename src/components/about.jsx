import React from "react";
import img from "/brand_img.png";
import {motion} from "framer-motion"
function About() {
  return (
    <motion.div
    initial={{opacity:0,x:200}} 
    transition={{duration:1}}
    whileInView={{opacity:1,x:0}}
    viewport={{once:true}}
     id="about" className="flex flex-col items-center justify-center mx-auto p-14 container md:px-20 lg:px-32 w-full overflow-hidden ">
      <h1 className="text-2xl  sm:text-4xl font-bold mb-2 capitalize">
        about{" "}
        <span className="l font-light decoration-slate-500 decoration-1 underline underline-offset-4">
          our brand
        </span>
      </h1>
      <p className="text-gray-500 max-w-80 text-center mb-8">
        passionate about properties, dedicated to your vision
      </p>
      <div className="flex flex-col  md:flex-row items-center md:items-start md:gap-20">
        <img src={img} className="w-full sm:w-1/2 max-w-lg" alt="" />
        <div className="flex flex-col items-center r md:items-start mt-10 text-gray-600">
          <div className="grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-8">
            <div>
              <p className="text-4xl font-medium text-gray-700">10+</p>
              <p className="capitalize">years of excellence</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-700">12+</p>
              <p className="capitalize">projects completed</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-700">20+</p>
              <p className="capitalize">mn. sq. ft. delivered</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-700">25+</p>
              <p className="capitalize">ongoing projects</p>
            </div>
          </div>
          <p className="my-10 max-w-lg">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda
            dolor architecto voluptatum facilis, nam, quo ipsa cumque fugiat
            sapiente modi ipsam repellendus. Porro ducimus consectetur ipsam
            natus.
          </p>
          <button className="bg-blue-500  text-white px-8 py-2 rounded">learn more</button>
        </div>
     
      </div>
    </motion.div>
  );
}

export default About;
