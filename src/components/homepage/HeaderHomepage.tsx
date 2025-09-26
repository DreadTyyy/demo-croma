'use client';

import Link from 'next/link';
import Image from 'next/image';
import { poppins } from '@/app/font';
import { motion } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';
import { URLS } from '@/constant/urls';
import ButtonPrimary from '@/components/ButtonPrimary';
import GlassBox from '@/components/GlassBox';


const timer = [{
  number: '30',
  desc: 'Days'
}, {
  number: '00',
  desc: 'Hours'
}, {
  number: 27,
  desc: 'Minutes'
},{
  number: 20,
  desc: 'Seconds'
},]

export default function HeaderHomepage() {
  return (
    <header className='relative h-full mt-0 xl:mt-8 mx-4 md:mx-[100px] flex flex-col xl:flex-row gap-y-4 items-center justify-between'>
          <div className='flex flex-col'>
            <div className='order-1'>
              <div className='font-black text-3xl lg:text-[68px] 2xl:text-[80px] uppercase'>
                <div className='h-fit overflow-hidden'>
                  <motion.h1
                    initial={{ y: 200 }}
                    animate={{ y: 0 }}
                    transition={{ delay: 2.5, duration: 1, ease: 'easeInOut' }}
                  >
                    <span className='block leading-[120%] bg-gradient-to-r from-[#B72204] to-[#FC6400] bg-clip-text text-transparent text-nowrap'>
                      CROMA PRESALE
                    </span>
                  </motion.h1>
                </div>
                <div className='h-fit overflow-hidden'>
                  <motion.h1
                    initial={{ y: 200 }}
                    animate={{ y: 0 }}
                    transition={{ delay: 2.7, duration: 1, ease: 'easeInOut' }}
                  >
                    <span className='block leading-[120%] bg-gradient-to-r from-[#B72204] to-[#FC6400] bg-clip-text text-transparent'>
                      IS LIVE
                    </span>
                  </motion.h1>
                </div>
              </div>
              <div className={`${poppins.className} mt-4 text-sm xl:text-lg font-medium h-fit overflow-hidden`}>
                <motion.p
                  initial={{ y: 100 }}
                  animate={{ y: 0 }}
                  transition={{ delay: 1.8, duration: 1, ease: 'easeInOut' }}
                >
                  Claim free $CRM + $CMC tokens and join the future of art, memes & blockchain.
                </motion.p>
              </div>
            </div>
            <motion.div className='mt-4 md:mt-8 w-fit order-3 xl:order-2'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 1, ease: 'easeIn' }}
            >
              <div className='border border-[rgba(255,255,255,0.4)] rounded-[8px] overflow-hidden bg-[linear-gradient(rgba(255,255,255,0.11),rgba(255,255,255,0.11)),linear-gradient(rgba(0,0,0,0.34),rgba(0,0,0,0.34))] backdrop-blur-[4px]'>
                <div className={` relative px-4 xl:px-8 py-3 flex flex-col gap-y-1 md:gap-y-2 items-center justify-between`}>
                  <div className={`${poppins.className} pb-1 w-full text-center border-b border-[rgba(255,255,255,0.6)]`}>
                    <p className='text-xl xl:text-2xl font-bold tracking-wide text-white uppercase'>
                      Presale Ends In
                    </p>
                  </div>
                  <div className='grid grid-cols-4 gap-2'>
                    {timer.map(({number, desc}, index) => (
                      <div key={index} className='flex gap-2 items-start'>
                        <div className='text-center'>
                          <p className='text-3xl xl:text-[40px] font-bold leading-[120%] text-white'>
                            {number}
                          </p>
                          <p className={`${poppins.className} font-semibold text-sm xl:text-base text-[#E9E9E9] uppercase`}>
                            {desc}
                          </p>
                        </div>
                        {index !== 3 &&
                          <span className='font-bold text-[40px] -mt-2'> 
                            :
                          </span>
                        }
                      </div>
                    ))}
                  </div>
                </div>
                <div className={`${poppins.className} w-full text-center py-1 bg-gradient-to-r from-[#B72204] to-[#FC6400]`}>
                  <p className='text-sm xl:text-base font-light tracking-wider text-white'>
                    Oct 16, 2025 23:59:00 UTC
                  </p>
                </div>
              </div>
            </motion.div>
            <div className='mt-6 md:mt-8 flex justify-center xl:justify-start gap-2 md:gap-4 xl:gap-6 order-2 xl:order-3'>
              <motion.div
                initial={{ y: 100, opacity: 0, width: 60 }}
                animate={{  y: 0, opacity: 1, width: 'auto' }}
                transition={{ 
                  y: { duration: 0.5, ease: 'easeOut' },
                  opacity: { duration: 0.5, ease: 'easeOut' },
                  width: { delay: 0.6, duration: 0.8, ease: 'easeOut' },
                 }}
                className='inline-block min-w-[60px]'
              >
                <Link href={URLS.claimairdrop} target='_blank' className='block'>
                  <ButtonPrimary>
                    <div className='min-w-[30px] xl:min-w-fit'>
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: 'auto' }}
                        transition={{ delay: 0.6, duration: 0.7, ease: 'easeOut' }}
                        className='overflow-hidden'
                      >
                        <span className='line-clamp-2 xl:whitespace-nowrap'>
                          Claim Airdrop Now
                        </span>
                      </motion.div>
                    </div>
                  </ButtonPrimary>
                </Link>
              </motion.div>
              <motion.div
                initial={{ y: 100, opacity: 0, width: 60 }}
                animate={{  y: 0, opacity: 1, width: 'auto' }}
                transition={{ 
                  y: { delay: 0.2, duration: 0.5, ease: 'easeOut' },
                  opacity: { delay: 0.2, duration: 0.5, ease: 'easeOut' },
                  width: { delay: 0.7, duration: 0.8, ease: 'easeOut' },
                 }}
                className='inline-block'
              >
                <Link href={URLS.community}
                  className='group relative my_border_gradient_primary block px-4 xl:px-8 py-3 xl:py-5 text-center text-sm xl:text-base rounded-[10px] before:rounded-[10px] transition-all duration-300 hover:shadow-[0_2px_30px_rgba(252,100,0,0.5)] overflow-hidden'>
                    <div className='z-0 absolute top-0 left-0 w-full h-0 bg-gradient-to-r from-[#B72204] to-[#FC6400] group-hover:h-full transition-all duration-300'></div>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: 'auto' }}
                      transition={{ delay: 0.7, duration: 0.7, ease: 'easeOut' }}
                      className='overflow-hidden relative z-10'
                    >
                      <span className='line-clamp-2 xl:whitespace-nowrap'>
                        Join Community
                      </span>
                    </motion.div>
                </Link>
              </motion.div>
            </div>
          </div>
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ 
              delay: 1.2,
              duration: 0.6,
              ease: 'easeInOut'
             }}
             className='h-full 2xl:min-w-[500px]'
          >
            <GlassBox baseColor='orange'>
              <div className='p-4 text-center 2xl:min-w-[500px] backdrop-blur-[8px]'>
                <div className='space-y-2'>
                  <p className='text-2xl xl:text-4xl font-semibold bg-gradient-to-r from-[#B72204] to-[#FC6400] bg-clip-text text-transparent'>
                    Presale $CRM
                  </p>
                  <p className={`${poppins.className} text-base xl:text-lg font-medium text-white`}>
                    1 CRM = $0.04511
                  </p>
                </div>
                <div className={`${poppins.className} mt-4 space-y-2`}>
                  <p className='text-sm lg:text-lg font-medium text-right text-white'>
                    Next Stage = $0.0455
                    </p>
                    <div className='relative'>
                      <div className='relative w-full overflow-hidden rounded-full h-[36px] bg-[#323336]'>
                        <div style={{ width: '35%' }} className='absolute top-0 left-0 bg-gradient-to-r from-[#B72204] to-[#FC6400] h-full transition-all'></div>
                        </div>
                        <p className='text-white text-base font-semibold absolute left-3 top-1/2 -translate-y-1/2'>
                          35%
                        </p>
                      </div>
                      <div className='flex justify-between'>
                        <p className='text-white text-base lg:text-lg font-medium text-left'>
                          Total Raised
                        </p>
                        <p className='bg-clip-text text-right bg-gradient-to-r from-[#B72204] to-[#FC6400] text-transparent text-sm lg:text-lg font-bold'>
                          27,047,287 CRM = $894,723.98
                        </p>
                      </div>
                </div>
                <div className={`${poppins.className} mt-4 space-y-4`}>
                  <GlassBox baseColor='white'>
                    <div className='px-4 py-4 2xl:py-6 text-left'>
                      <p className='text-base 2xl:text-xl font-medium'>You Pay (USD)</p>
                      <div className='flex justify-between gap-4'>
                        <div>
                          <span className='text-2xl 2xl:text-3xl font-bold leading-[120%]'>$0.00</span>
                          <p className='text-[#E9E9E9] opacity-60 text-lg'>0.000</p>
                        </div>
                        <GlassBox baseColor='white'>
                          <div className='px-3 2xl:px-5 py-2 cursor-pointer hover:bg-[rgba(0,0,0,0.3)]'>
                            <div className='flex gap-2 items-center'>
                              <Image
                                src='/wallets/eth.png'
                                alt='ETH icon'
                                width={28}
                                height={28}
                              />
                              <span className='uppercase text-base xl:text-lg'>ETH</span>
                              <span>
                                <FaChevronDown />
                              </span>
                            </div>
                          </div>
                        </GlassBox>
                      </div>
                    </div>
                  </GlassBox>
                  <GlassBox baseColor='white'>
                    <div className='px-4 py-4 2xl:py-6 text-left'>
                      <p className='text-base 2xl:text-xl font-medium'>Receive</p>
                      <div className='flex items-start justify-between gap-4'>
                        <div>
                          <span className='text-2xl 2xl:text-3xl font-bold leading-[120%]'>0.00</span>
                        </div>
                        <GlassBox baseColor='white'>
                          <div className='px-3 2xl:px-5 py-2 cursor-pointer hover:bg-[rgba(0,0,0,0.3)]'>
                            <div className='flex gap-2 items-center'>
                              <Image
                                src='/CRM Logo Koin.png'
                                alt='Croma icon'
                                width={28}
                                height={28}
                              />
                              <span className='uppercase text-base xl:text-lg'>CRM</span>
                              <span>
                                <FaChevronDown />
                              </span>
                            </div>
                          </div>
                        </GlassBox>
                      </div>
                    </div>
                  </GlassBox>
                </div>
                <div className={`${poppins.className} mt-4 space-y-2`}>
                  <p className='font-bold text-base xl:text-lg text-center w-full'>We Accepting</p>
                  <div className='flex justify-center items-center gap-2 flex-wrap xl:flex-nowrap'>
                    {['binance.png','bitcoin.png','compound.png','eth.png','fabric.png','ox.png','solana.png','trx.png','tusd.png','xrp.png']
                    .map((icon, i) => (
                      <Image
                        key={i}
                        src={`/wallets/${icon}`}
                        alt='Icon wallet'
                        width={36}
                        height={36}
                        sizes='(max-width: 768px) 30px, (max-width: 1024px) 36px, 36px'
                        className='w-[30px] md:w-[36px] 2xl:w-[36px]'
                      />
                    ))}
                  </div>
                </div>
                <button className='mt-4 2xl:mt-6 w-full px-8 py-3 xl:py-4 bg-gradient-to-r from-[#B72204] to-[#FC6400] text-white font-bold text-base xl:text-lg rounded-[10px] bg-[#FFFBFB] shadow-[0_2px_20px_0_rgba((252,100,0,0.6)] cursor-pointer transition-all duration-300 hover:shadow-[0_2px_40px_rgba(252,100,0,0.7)]'>
                  BUY NOW
                </button>
              </div>
            </GlassBox>
            {/* <Image
              src='/header_hero.png'
              alt='Hero image'
              width={540}
              height={690}
              sizes='(max-width: 768px) 300px, (max-width: 1024px) 400px, 540px'
              className='object-contain mt-5 xl:mt-0 w-[300px] h-[380px] md:w-[480px] md:h-[630px] 2xl:w-[540px] 2xl:h-[690px]'
            /> */}
          </motion.div>
        </header>
  )
}