'use client';

import Link from 'next/link';
import Image from 'next/image';
import { poppins } from '@/app/font';
import { FaTwitter, FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import { URLS } from '@/constant/urls';

const Footer = () => {
  return (
    <footer className='px-4 lg:px-[64px] 2xl:px-[100px] py-[40px] lg:py-12 2xl:py-20 bg-[#141414] shadow-[0_-27px_40px_-9px_rgba(252,100,0,0.28)] rounded-t-[40px]'>
        <div className={`${poppins.className}`}>
          <div className='flex flex-col lg:flex-row w-full items-end justify-between gap-x-20 gap-y-4'>
            <div className='flex flex-col gap-4'>
              <Link href='/'>
                <div className='flex gap-2 items-center'>
                  <div className="w-[56px] md:w-[60] 2xl:w-[80]">
                    <Image 
                        src='/logo_croma_art.svg' 
                        alt='Logo of Croma-Art'
                        width={80}
                        height={80}
                        className="object-contain w-full"
                    />
                  </div>
                  <span className='text-2xl lg:text-[26px] 2xl:text-[32px] uppercase bg-gradient-to-r from-[#B72204] to-[#FC6400] bg-clip-text text-transparent'>
                    <span>CROMA</span>
                    <span className='font-bold'>ART</span>
                  </span>
                </div>
              </Link>
              <p className='text-base 2xl:text-xl text-[#E9E9E9] opacity-60'>
                The world's most advanced Layer 2 solution combining AI-powered development, quantum-resistant security, and lightning-fast performance.
              </p>
              <div className='flex items-center gap-5'>
                <Link href='#'>
                  <div className='flex justify-center items-center bg-[rgba(255,255,255,0.1)] size-10 rounded-full'>
                      <FaTwitter size={24} color='#FFFFFF' />
                  </div>
                </Link>
                <Link href='#'>
                  <div className='flex justify-center items-center bg-[rgba(255,255,255,0.1)] size-10 rounded-full'>
                      <FaInstagram size={24} color='#FFFFFF' />
                  </div>
                </Link>
                <Link href='#'>
                  <div className='flex justify-center items-center bg-[rgba(255,255,255,0.1)] size-10 rounded-full'>
                      <FaFacebook size={24} color='#FFFFFF' />
                  </div>
                </Link>
                <Link href='#'>
                  <div className='flex justify-center items-center bg-[rgba(255,255,255,0.1)] size-10 rounded-full'>
                      <FaYoutube size={24} color='#FFFFFF' />
                  </div>
                </Link>
              </div>
            </div>
            <div className='flex flex-col items-start lg:items-end w-full text-[#E9E9E9]'>
              <div className='flex flex-wrap gap-5 lg:gap-10'>
                <Link 
                  href={URLS.home}
                  className='font-medium text-base lg:text-lg 2xl:text-xl hover:text-[#FC6400] transition-all duration-300'  
                >
                  Home
                </Link>
                <Link 
                  href={URLS.roadmap}
                  className='font-medium text-base lg:text-lg 2xl:text-xl hover:text-[#FC6400] transition-all duration-300'  
                >
                  Roadmap
                </Link>
                <Link 
                  href={URLS.whitepaper}
                  className='font-medium text-base lg:text-lg 2xl:text-xl hover:text-[#FC6400] transition-all duration-300'  
                >
                  Whitepaper
                </Link>
                <Link 
                  href={URLS.tokenomics}
                  className='font-medium text-base lg:text-lg 2xl:text-xl hover:text-[#FC6400] transition-all duration-300'  
                >
                  Tokenomics
                </Link>
                <Link 
                  href={URLS.airdrop} target='_blank'
                  className='font-medium text-base lg:text-lg 2xl:text-xl hover:text-[#FC6400] transition-all duration-300'  
                >
                  Airdrop
                </Link>
              </div>
              <p className='mt-[60px] text-center lg:text-right text-base 2xl:text-xl opacity-50'>
                © 2025 CromaChain Foundation. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>     
  )
}

export default Footer