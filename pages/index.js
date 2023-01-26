
import Head from 'next/head'
import Image from 'next/image'
import Sidebar from './components/Sidebar'
import Acceuil from './components/Acceuil'
import {useTheme} from 'next-themes'
import { useEffect, useState } from 'react'
import Aboutme from './components/Aboutme'


export default function Home() {
   const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  if (!mounted) return null;
  const currentTheme = theme === 'system' ? systemTheme : theme;


  //Cursor 

  /*

    //follow cursor on mousemove
    document.addEventListener("mousemove", (e) => {
      const cursor = document.querySelector(".cursor");
      var timeout;
      let x = e.pageX;
      let y = e.pageY;

      cursor.style.top = y + "px";
      cursor.style.left = x + "px";
      cursor.style.display = "flex";
      //cursor effects when mouse stopped
      function mouseStopped(){
        cursor.style.display = "none";
      }
      clearTimeout(timeout);
      timeout = setTimeout(mouseStopped, 5000);
    });*/

    


  return (
    <div className="w-full flex bg-white  dark:bg-PDark m-0 p-0 font-poppins relative">

      <Head>
        <title>Mohamed Alaoui</title>
        <link rel="icon" href="/favicon.ico" />
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet' />
        <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@900;900&family=Poppins&display=swap" rel="stylesheet" />
      </Head>
      {
        currentTheme === 'dark' ? (
          <i onClick={() => setTheme('light')}  className='z-10 transition ease-in delay-75 bx bxs-moon cursor-pointer w-12 h-12 justify-center flex items-center  text-2xl bg-white text-Pblack rounded-full fixed top-24 xl:top-10 right-5'></i>
        )
        :
        (
          <i onClick={() => setTheme('dark')}  className='z-10 transition ease-in delay-75 bx bxs-moon cursor-pointer w-12 h-12 justify-center flex items-center  text-2xl bg-Pblack text-white rounded-full fixed top-24 xl:top-10 right-5'></i>
        )
      }
    
      {/*
      <div className="cursor bg-Pgreen/30 flex items-center justify-center fixed z-100 w-[50px] h-[50px] rounded-full">
        <div className="bg-Pgreen w-[10px] h-[10px] rounded-full"></div>
      </div>
      */}
      <Sidebar />
      
      <div className='xl:ml-[250px] relative'>
        <Acceuil />
        <Aboutme />
      </div>
  
    </div>
  )
}

