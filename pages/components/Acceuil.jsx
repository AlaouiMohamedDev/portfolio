import React, { useEffect } from 'react'
import Typewriter from 'typewriter-effect'


const toggleList = () => {
  const list = document.querySelector('.sidebar')
  list.classList.toggle('hidden')
}

export default function Acceuil() {
  useEffect(() => {

    const header = document.querySelector('.header')
    
    window.addEventListener('scroll', () => {
        if ((window.scrollY || window.pageYOffset) > 10 ) {
            header.classList.add('dark:bg-Pblack');
            header.classList.add('bg-[#F7F7FF]');
        }else{
          header.classList.remove('dark:bg-Pblack');
          header.classList.remove('bg-[#F7F7FF]');
        }        
    })
  },[]);
  
  return (
    <div className=" h-full lg:h-screen w-full relative overflow-x-hidden">
      <div className=" px-[20px] flex justify-between items-center fixed w-full xl:hidden py-5 z-50 header">
           <div className="w-full flex space-x-5 items-center  ">
                    <img src="images/photo2.png" className="w-[50px] h-[50px] rounded-full bg-yellow-500 border-4 object-contain  border-white" />
                    <h1 className="text-Pblack dark:text-gray-300 tracking-Pwide font-poppins font-black ">ALAOUI</h1>
            </div>
            <i onClick={toggleList} className='bx bx-menu bg-Pgreen text-gray-200 py-1 px-2 text-3xl rounded-sm'></i>
       </div>
      <div className="text-Pblack  dark:text-gray-200 lg:px-[100px] 2xl:px-[150px] h-full   items-center justify-center w-full  relative ">

        <div className="lg:w-[800px]  lg:h-[800px] 2xl:w-[1200px] 2xl:h-[1200px] bg-[#F7F7FF] dark:bg-Pblack/60  rounded-full absolute -top-1/2 -right-1/4 -z-1"></div>
        <div className="flex lg:flex-row  px-10 lg:px-0 py-[120px] lg:py-0 flex-col space-x-0 lg:space-x-5 space-y-10 lg:space-y-0 items-center  h-full w-full relative overflow-hidden">
          <div className="flex flex-col space-y-4 lg:space-y-7 items-left text-left w-full lg:w-1/2">
            <h6 className="lg:text-lg 2xl:text-2xl font-semibold">Hello, I am</h6>
            <h1 className="text-6xl lg:text-4xl 2xl:text-6xl font-black dark:text-white">Alaoui Mohamed</h1>
            <div className="flex space-x-2 font-bold">
              <p>I Am Passionate</p>
              <Typewriter
                      options={{
                        strings: ['Web Developer', 'Web Designer','Graphic Designer'],
                        autoStart: true,
                        loop: true,
                      }}
                    />
            </div>
            <p className='text-gray-900 dark:text-gray-400 text-justify leading-loose'>Especially interested in Entrepreneurship and Business, I am passionate about new trends in Technology, Design and Web Development.
              During my college years, I focused on building a solid and wide knowledge base and working with different kinds of people on a variety of projects.
            </p>
            <div className="relative">
              <a href="ALAOUI CV.pdf"  className="bg-Pgreen text-Pblack dark:text-gray-200 py-3 px-6 font-josefin relative z-10">Download Cv</a>
              <a className="bg-Pblack dark:bg-gray-200 py-2 px-5 absolute -top-[2px] left-[2px] "> Download Cv</a>
            </div>
          </div>
          <div className=" w-full lg:w-1/2 flex items-center justify-center">
                <img src="images/photo3.png" className="w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[400px] lg:h-[400px] 2xl:w-[600px] 2xl:h-[600px]  rounded-full bg-Pgreen object-contain " />
          </div>
        </div>
      </div>
    </div>
  )
}
