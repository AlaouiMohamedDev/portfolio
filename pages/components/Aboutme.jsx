import React from 'react'

export default function Aboutme() {
  return (
    <div className="text-Pblack lg:h-screen flex flex-col items-center justify-center  w-full relative overflow-hidden font-poppins py-[70px]">
        <div className="flex items-center justify-center w-full relative">
            <h1 className='dark:text-gray-200 text-4xl md:text-5xl lg:text-6xl font-black relative z-10'>ABOUT <c className='text-Pgreen'>ME</c></h1>
            <h1 className='text-gray-200 dark:text-gray-400/20 text-7xl md:text-8xl lg:text-9xl font-black absolute z-2'>RESUME</h1>
        </div>
        <div className='flex flex-col space-y-7  lg:flex-row items-center justify-center lg:space-y-5 2xl:space-y-10 w-full lg:space-x-10 2xl:space-x-20 px-12 py-12 md:px-16 lg:py-16 2xl:px-32 2xl:py-24'>
            <div className='flex flex-col space-y-7 lg:space-y-0 h-full justify-between 2xl:justify-evenly text-[15px] w-full' > 
                <h1 className='dark:text-white col-span-2 text-xl 2xl:text-2xl font-bold'>PERSONAL INFOS</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 text-sm 2xl:text-[15px] lg:gap-x-10 2xl:gap-x-32 gap-y-5'>
                    <p className='text-gray-700 dark:text-gray-300'>Fist Name: <c className='text-Pblack dark:text-white font-semibold'>Mohamed</c></p>
                    <p className='text-gray-700 dark:text-gray-300'>Last Name: <c className='text-Pblack dark:text-white font-semibold'>Alaoui</c></p>
                   
                    <p className='text-gray-700 dark:text-gray-300'>Age: <c className='text-Pblack dark:text-white font-semibold'>24 Years</c></p>
                    <p className='text-gray-700 dark:text-gray-300'>Nationality: <c className='text-Pblack dark:text-white font-semibold'>Moroccan</c></p>
                    
                    <p className='text-gray-700 dark:text-gray-300'>Open To Work: <c className='text-Pgreen font-semibold'>Available</c></p>
                    <p className='text-gray-700 dark:text-gray-300'>Address: <c className='text-Pblack dark:text-white font-semibold'>Morocco</c></p>
                    
                    <p className='text-gray-700 dark:text-gray-300'>Phone: <c className='text-Pblack dark:text-white font-semibold'>+212701344384</c></p>
                    <p className='text-gray-700 dark:text-gray-300'>Email: <c className='text-Pblack dark:text-white font-semibold'>sayrosse1@gmail.com</c></p>

                    <p className='text-gray-700 dark:text-gray-300'>Linkedin: <c className='text-Pblack dark:text-white font-semibold'>MOHAMED ALAOUI</c></p>
                    <p className='text-gray-700 dark:text-gray-300'>Langages: <c className='text-Pblack dark:text-white font-semibold'>English, French</c></p>

                </div>
                <a href='ALAOUI CV.pdf' className="group border w-[220px] 2xl:w-[260px] border-Pgreen py-4 rounded-full text-Pblack dark:text-white flex items-center justify-between relative">
                    <span className='pl-10 2xl:pl-16 relative z-10'>DOWNLOAD CV</span>
                    <i class='bx bx-download absolute z-10 -right-2 bg-Pgreen flex items-center  justify-center rounded-full w-[56px] h-[56px] text-2xl'></i>
                    <div className="absolute z-0 bg-Pgreen transition-all ease-in-out delay-100 group-hover:opacity-100 opacity-0 group-hover:w-full w-0 right-0  rounded-full  h-14"></div>
                </a>
            </div>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-7 2xl:gap-x-20 2xl:gap-y-10">
                <div className="border group transition-all delay-75 hover:text-white hover:bg-Pgreen hover:border-Pgreen border-gray-400 dark:border-gray-600 rounded-md flex flex-col space-y-2 2xl:space-y-5 py-5 px-5 2xl:py-7 2xl:px-7">
                    <span className="text-5xl 2xl:text-6xl transition-all delay-75 group-hover:text-white text-Pgreen relative">4<c className="absolute text-[30px] top0">+</c></span>
                    <div className='flex items-start space-x-3'>
                        <span className="bg-gray-400 transition-all delay-75 group-hover:bg-white dark:bg-gray-600 h-0.5 w-10"></span>
                        <span className="dark:text-gray-200 text-lg 2xl:text-xl font-bold">YEARS OF<br/>EXPERIENCE</span>
                    </div>
                </div>
                <div className="border group transition-all delay-75 hover:text-white hover:bg-Pgreen hover:border-Pgreen border-gray-400 dark:border-gray-600 rounded-md flex flex-col space-y-2 2xl:space-y-5 py-5 px-5 2xl:py-7 2xl:px-7">
                    <span className="text-5xl 2xl:text-6xl transition-all delay-75 group-hover:text-white text-Pgreen relative">10<c className="absolute text-[30px] top0">+</c></span>
                    <div className='flex items-start space-x-3'>
                        <span className="bg-gray-400 transition-all delay-75 group-hover:bg-white dark:bg-gray-600 h-0.5 w-10"></span>
                        <span className="dark:text-gray-200 text-lg 2xl:text-xl font-bold">COMPLETED<br/>PROJECTS</span>
                    </div>
                </div>
                <div className="border group transition-all delay-75 hover:text-white hover:bg-Pgreen hover:border-Pgreen border-gray-400 dark:border-gray-600 rounded-md flex flex-col space-y-2 2xl:space-y-5 py-5 px-5 2xl:py-7 2xl:px-7">
                    <span className="text-5xl 2xl:text-6xl transition-all delay-75 group-hover:text-white text-Pgreen relative">6<c className="absolute text-[30px] top0">+</c></span>
                    <div className='flex items-start space-x-3'>
                        <span className="bg-gray-400 transition-all delay-75 group-hover:bg-white dark:bg-gray-600 h-0.5 w-10"></span>
                        <span className="dark:text-gray-200 text-lg 2xl:text-xl font-bold">OBTAINED<br/>CERTIFICAT</span>
                    </div>
                </div>
                <div className="border group transition-all delay-75 hover:text-white hover:bg-Pgreen hover:border-Pgreen border-gray-400 dark:border-gray-600 rounded-md flex flex-col space-y-2 2xl:space-y-5 py-5 px-5 2xl:py-7 2xl:px-7">
                    <span className="text-5xl 2xl:text-6xl transition-all delay-75 group-hover:text-white text-Pgreen relative">7<c className="absolute text-[30px] top0">+</c></span>
                    <div className='flex items-start space-x-3'>
                        <span className="bg-gray-400 transition-all delay-75 group-hover:bg-white dark:bg-gray-600 h-0.5 w-10"></span>
                        <span className="dark:text-gray-200 text-lg 2xl:text-xl font-bold">TECHNOLOGIES<br/>MASTERD</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
