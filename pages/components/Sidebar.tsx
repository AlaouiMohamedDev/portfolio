import React from 'react'

export default function Sidebar() {
  return (
    <div className="relative">
        <div className="h-screen w-[250px] bg-[#F7F7FF] dark:bg-Pblack fixed hidden xl:flex sidebar z-90">
            <div className="w-[290px] h-[290px] rounded-full bg-Pgreen absolute -top-40 -left-10 -z-5"></div>
            <div className='w-full flex flex-col  relative'>
            <div className="w-full flex flex-col space-y-5 items-center justify-center py-[60px]">
                    <img src="images/photo2.png" className="w-[100px] h-[100px] rounded-full bg-yellow-500 border-4 object-contain  border-white" />
                    <h1 className="text-Pblack dark:text-gray-300 tracking-Pwide font-josefin ">ALAOUI</h1>
            </div>
            <div className="flex flex-col w-full text-gray-500 dark:text-gray-300">
                    <div className=" cursor-pointer  hover:text-Pgreen dark:hover:text-white flex items-center space-x-3 active  border-b border-gray-150 dark:border-gray-900 py-2 px-9">
                        <i className='bx bx-layout text-lg'></i>
                        <h3 className="tracking-PSemiwide text-sm">HOME</h3>
                    </div>
                    <div className="cursor-pointer  hover:text-Pgreen dark:hover:text-white flex items-center space-x-3  border-b border-gray-150 dark:border-gray-900  py-2 px-9">
                        <i className='bx bxs-user-detail text-lg'></i>
                        <h3 className="tracking-PSemiwide text-sm">ABOUT ME</h3>
                    </div>
                    <div className=" cursor-pointer hover:text-Pgreen dark:hover:text-white flex items-center space-x-3 border-b border-gray-150 dark:border-gray-900  py-2 px-9">
                        <i className='bx bx-slider text-lg'></i>
                        <h3 className="tracking-PSemiwide text-sm">SERVICES</h3>
                    </div>
                    <div className="cursor-pointer  hover:text-Pgreen dark:hover:text-white flex items-center space-x-3 border-b border-gray-150 dark:border-gray-900 py-2 px-9">
                        <i className='bx bx-certification text-lg'></i>
                        <h3 className="tracking-PSemiwide text-sm">PORTFOLIO</h3>
                    </div>
                    <div className="cursor-pointer  hover:text-Pgreen dark:hover:text-white flex items-center space-x-3  border-b border-gray-150 dark:border-gray-900   py-2 px-9">
                        <i className='bx bx-detail text-lg'></i>
                        <h3 className="tracking-PSemiwide text-sm">BLOGS</h3>
                    </div>
                    <div className="cursor-pointer  hover:text-Pgreen dark:hover:text-white flex items-center space-x-3  py-2 px-9">
                        <i className='bx bx-mail-send text-lg'></i>
                        <h3 className="tracking-PSemiwide text-sm">CONTACT ME</h3>
                    </div>
            </div>
            </div>
            <div className='flex items-center  w-full justify-center space-x-5 absolute bottom-5 text-gray-500 dark:text-gray-200'>
                <i className='hover:active delay-200 transition ease-in-out cursor-pointer bx bxl-facebook'></i>
                <i className='hover:active delay-200 transition ease-in-out cursor-pointer bx bxl-github'></i>
                <i className='hover:active delay-200 transition ease-in-out cursor-pointer bx bxl-linkedin'></i>
                <i className='hover:active delay-200 transition ease-in-out cursor-pointer bx bxl-instagram-alt'></i>
            </div>
        </div>

    </div>
  )
}
