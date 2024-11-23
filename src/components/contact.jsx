import React from 'react'
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';

function Contact() {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "1c8e9551-a411-4cae-93b4-1cdad237d73e");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
toast.success("Form Submitted Successfully")
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message)
      setResult("");
    }
  };
  return (
    <motion.div
    initial={{opacity:0,x:-200}} 
    transition={{duration:1}}
    whileInView={{opacity:1,x:0}}
    viewport={{once:true}}
     className='text-center p-6 py-20 lg:px-32 w-full overflow-hidden' id='#contact'>
      <h1 className=' text-2xl sm:text-4xl font-bold mb-2 text-center'>Contact <span className='underline underline-offset-4 decoration-1 under font-light'>with us</span>
      </h1>
      <p className='text-center text-gray-500 mb-8 max-w-80 mx-auto capitalize'>ready to make a move ?let's build your future togther</p>

      <form onSubmit={onSubmit} className='max-w-2xl mx-auto to-gray-800 pt-8' >
        <div className='flex flex-wrap'>
          <div className='w-full md:w-1/2 text-left capitalize'>
            your name
            <input type="text" required className='w-full border border-gray-800 rounded py-3 px-4 mt-2' name='name' placeholder='your name' />
          </div>
        </div>
        <div className='w-full md:w-1/2 text-left capitalize'>
          your email
          <input type="email" required className='w-full border border-gray-800 rounded py-3 px-4 mt-2' name='email' placeholder='your email' />

        </div>
        <div className='my-6 text-left'>
          message
          <textarea className='w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none' name="message" placeholder='message' required></textarea>
        </div>
        <button className='rounded bg-blue-600 text-white py-2 px-12 mb-10 '>
          {result ? result : "Send Message"}
        </button>
      </form>
    </motion.div>
  )
}

// 1c8e9551-a411-4cae-93b4-1cdad237d73e
export default Contact