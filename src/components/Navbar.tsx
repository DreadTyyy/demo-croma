'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import BorderBox from '@/components/BorderBox';
import { URLS } from '@/constant/urls';

export default function Navbar({active}: {active: string}) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  
  return (
    <nav className='z-[999] w-full fixed top-4 lg:top-8 2xl:top-10'>
      <div className='mx-2 lg:mx-24'>
        <BorderBox>
          <div className='px-5 2xl:px-6 py-3 2xl:py-5 flex flex-nowrap items-center justify-between bg-[linear-gradient(rgba(255,255,255,0.07),rgba(255,255,255,0.07)),linear-gradient(rgba(0,0,0,0.28),rgba(0,0,0,0.28)),linear-gradient(rgba(25,5,7,0.54),rgba(25,5,7,0.54))] shadow-[0_20px_25px_rgba(0,0,0,0.1)] backdrop-blur-[5px] rounded-[16px] md:rounded-[20px]'>
            <Link href='/'>
              <div className='flex gap-2 items-center'>
                <Image 
                    src='/logo_croma_art.svg' 
                    alt='Logo of Croma-Art'
                    width={44}
                    height={44}
                />
                <span className='text-lg 2xl:text-xl uppercase bg-gradient-to-r from-[#B72204] to-[#FC6400] bg-clip-text text-transparent'>
                  <span>CROMA</span>
                  <span className='font-medium'>-</span>
                  <span className='font-bold'>ART</span>
                </span>
              </div>
            </Link>
            <div
              style={{ 
                transition: 'all ease-in 0.3s'
              }}
              className={`absolute lg:static -top-4 -left-4 px-8 py-10 lg:px-0 lg:py-0 flex flex-col lg:flex-row gap-8 justify-start lg:justify-center items-start lg:items-center h-screen lg:h-fit w-screen lg:w-fit bg-black lg:bg-transparent text-base 2xl:text-lg ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}>
              <button 
                className='self-end block lg:hidden'
                onClick={() => setIsOpen(false)}
              >
                <IoClose size={32}/>
              </button>
              <Link href={URLS.home} 
                style={{ 
                  color: active == 'home' ? 'transparent' : '',
                  fontWeight: active == 'home' ? 'bold' : 'normal',
                 }}
                className='pb-4 lg:pb-0 border-b lg:border-none border-white w-full lg:w-fit font-bold bg-gradient-to-r from-[#B72204] to-[#FC6400] bg-clip-text transition-all duration-300 hover:text-transparent'>
                Home
              </Link>
              <Link href={URLS.roadmap} 
                className='pb-4 lg:pb-0 border-b lg:border-none border-white w-full lg:w-fit font-normal bg-gradient-to-r from-[#B72204] to-[#FC6400] bg-clip-text transition-all duration-300 hover:text-transparent'>
                Roadmap
              </Link>
              <Link href={URLS.whitepaper} 
                style={{ 
                  color: active == 'whitepaper' ? 'transparent' : '',
                  fontWeight: active == 'whitepaper' ? 'bold' : 'normal'
                 }}
                className='pb-4 lg:pb-0 border-b lg:border-none border-white w-full lg:w-fit font-normal bg-gradient-to-r from-[#B72204] to-[#FC6400] bg-clip-text transition-all duration-300 hover:text-transparent'>
                Whitepaper
              </Link>
              <Link href={URLS.tokenomics}
                className='pb-4 lg:pb-0 border-b lg:border-none border-white w-full lg:w-fit font-normal bg-gradient-to-r from-[#B72204] to-[#FC6400] bg-clip-text transition-all duration-300 hover:text-transparent'>
                Tokenomics
              </Link>
              <Link href={URLS.airdrop} target='_blank' 
                className='pb-4 lg:pb-0 border-b lg:border-none border-white w-full lg:w-fit font-normal bg-gradient-to-r from-[#B72204] to-[#FC6400] bg-clip-text transition-all duration-300 hover:text-transparent'>
                Airdrop
              </Link>
              <DashboardLink className='block lg:hidden'/>
            </div>
            <DashboardLink className='hidden lg:block'/>
            <button
              className='block lg:hidden'
              onClick={() => setIsOpen(true)}
            >
              <RxHamburgerMenu size={32} />
            </button>
          </div>
        </BorderBox>
      </div>
    </nav>
  );
}

const DashboardLink = ({className}: {className: string}) => {
  return (
    <Link href={URLS.dashboard}
      className={`${className} px-8 py-3.5 text-base 2xl:text-lg bg-gradient-to-r from-[#B72204] to-[#FC6400] text-white rounded-lg shadow-[0_2px_20px_rgb(252,100,0,0.5)] transition-all duration-300 hover:shadow-[0_2px_40px_rgba(252,100,0,0.7)]`}>
        Dashboard
    </Link>
  )
}
