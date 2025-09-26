'use client';

import Image from 'next/image';
import { poppins } from '@/app/font';
import { motion } from 'framer-motion';
import ButtonPrimary from '@/components/ButtonPrimary';

const NftGallery = () => {
  return (
    <section className='relative my-[60px] py-[60px] px-4 lg:px-[64px] 2xl:px-[100px]'>
      <div className='-z-10 absolute top-0 left-0 w-full h-full bg-linear-to-r from-0% from-[#CE2CD3] via-50% via-[#0083FB] to-[96%] to-[#FC6400] blur-[40px]'>
      </div>
      <div className='px-4 lg:px-[64px] py-8 lg:py-0 flex flex-col lg:flex-row justify-between items-center gap-y-4 bg-linear-to-r from-0% from-[#CE2CD3] via-50% via-[#0083FB] to-[96%] to-[#FC6400]'>
        <div className='flex flex-col gap-4'>
          <div className={`${poppins.className} flex flex-col text-left gap-4`}>
            <div className='px-3.5 py-2 w-fit rounded-full bg-black border border-[#FC6400]'>
              <span className='text-[#FC6400] text-sm md:text-base'>NFT Gallery</span>
            </div>
            <motion.div
              initial={{ opacity: 0, filter: 'blur(20px)' }}
              whileInView={{ opacity: 1, filter: 'blur(0px)' }}
              transition={{ duration: 1, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.1}} 
              className='blur-animate'
            >
              <h2 className='text-2xl lg:text-3xl 2xl:text-4xl font-semibold text-white tracking-[-0.04%]'>
                CROMA Meme & Art Gallery
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, filter: 'blur(20px)' }}
              whileInView={{ opacity: 1, filter: 'blur(0px)' }}
              transition={{ duration: 1, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.1}} 
              className='blur-animate'
            >
              <p className='text-base lg:text-lg 2xl:text-xl font-medium text-[#E9E9E9] opacity-80 max-w-[680px]'>
                From the community, for the community. Show your creativity through NFT & meme art. lets Submit Your Art
              </p>
            </motion.div>
          </div>
          <div className='w-fit'>
            <ButtonPrimary>
              Explore on OpenSea
            </ButtonPrimary>
          </div>
        </div>
        <div className='flex min-w-1/2 max-w-[600px] gap-2'>
          <div className='w-1/2'>
            <div className='h-[320px] w-full rounded-2xl overflow-hidden'>
              <motion.div 
                initial={{ height: 0 }}
                whileInView={{ height: 320 }}
                transition={{ duration: 1, ease: 'easeIn' }}
                viewport={{ once: true, amount: 0.3 }}
                className='h-[320px] rounded-2xl overflow-hidden'
              >
                <Image src='/ape-hat.png' alt='NFT' width={280} height={320} className='w-full h-full object-cover' />
              </motion.div>
            </div>
            <div className='mt-2 h-[190px] rounded-2xl overflow-hidden'>
              <motion.div 
                initial={{ height: 0 }}
                whileInView={{ height: 190 }}
                transition={{ delay: 0.5, duration: 0.5, ease: 'easeIn' }}
                viewport={{ once: true, amount: 0.2 }}
                className='h-[190px] rounded-2xl overflow-hidden'
              >
                <Image src='/ape-suit.png' alt='NFT' width={280} height={190} className='w-full h-full object-cover' />
              </motion.div>
            </div>
          </div>
          <div className='w-1/2'>
            <div className='h-[130px] w-full rounded-2xl overflow-hidden'>
              <motion.div 
                initial={{ height: 0 }}
                whileInView={{ height: 130 }}
                transition={{ duration: 0.5, ease: 'easeIn' }}
                viewport={{ once: true, amount: 0.3 }}
                className='h-[130px] rounded-2xl overflow-hidden'
              >
                <Image src='/ape-coin.png' alt='NFT' width={280} height={130} className='w-full h-full object-cover' />
              </motion.div>
            </div>
            <div className='mt-2 h-[380px] rounded-2xl overflow-hidden'>
              <motion.div 
                initial={{ height: 0 }}
                whileInView={{ height: 380 }}
                transition={{ delay: 0.5, duration: 1, ease: 'easeIn' }}
                viewport={{ once: true, amount: 0.2 }}
                className='h-[380px] rounded-2xl overflow-hidden'
              >
                <Image src='/ape-warrior.png' alt='NFT' width={280} height={380} className='w-full h-full object-cover' />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NftGallery;
