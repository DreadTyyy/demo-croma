'use client';

import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { poppins } from '@/app/font';
import { motion, useInView } from 'framer-motion';
import ButtonPrimary from '@/components/ButtonPrimary';
import GlassBox from '@/components/GlassBox';
import { URLS } from '@/constant/urls';

const CromaStory = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.3, once: true });

  return (
    <section ref={ref} className='relative py-12 lg:py-[60px] mx-4 lg:mx-[100px] 2xl:mx-[160px] min-h-[500px]'>
      <motion.div
        initial={{ height: 0 }}
        animate={ inView ? { height: 'auto' } : {}}
        transition={{ duration: 0.7, ease: 'easeIn' }}
      >
        <div className={`border border-[#FFFFFF] rounded-[15px] h-full`}>
          <motion.div
            initial={{ opacity: 0, filter: 'blur(2px)' }}
            whileInView={{ opacity: 1, filter: 'blur(0px)' }}
            transition={{ delay: 0.7, duration: 1, ease: 'easeIn' }}
            viewport={{ once: true, amount: 0.4 }}
            className='blur-animate'
          >
            <div className='relative h-full overflow-hidden rounded-[15px]'>
              <div className='-z-10 absolute -top-[200px] lg:-top-[450px] left-1/2 -translate-x-1/2 size-[400px] lg:size-[900px] rounded-full bg-[radial-gradient(circle_at_center,#FC6400_0%,rgba(242,39,174,0)_70%)] blur-3xl opacity-80'></div>
              <div className='px-4 py-8 w-full min-h-[360px] lg:min-h-[500px] flex flex-col justify-center items-center text-center gap-6 bg-[url("/header_stars.png")] bg-cover bg-center'>
                <Image
                  src='/crc_token_logo.png'
                  alt='CRC token logo'
                  width={126}
                  height={126} />
                <div>
                  <h2 className='text-2xl lg:text-3xl 2xl:text-4xl font-semibold leading-[120%] bg-gradient-to-r from-[#B72204] to-[#FC6400] bg-clip-text text-transparent'>
                    The Story of CROMA
                  </h2>
                  <div className={`${poppins.className} my-4 flex flex-col items-center`}>
                    <p className='mb-4 text-base 2xl:text-xl font-medium text-[#E9E9E9] opacity-80 max-w-[780px]'>
                      CROMA was born from an oil canvas. From brushstrokes came a new movement: art + blockchain. From canvas to crypto revolution.
                    </p>
                    <div className='flex flex-col lg:flex-row items-center gap-2 lg:gap-4 text-left'>
                      <GlassBox baseColor='primary'>
                        <div className='p-4 lg:p-6 flex items-start gap-2.5 rounded-[20px] backdrop-blur-[20px] h-full bg-[linear-gradient(rgba(252,100,0,0.08),rgba(252,100,0,0.08)),linear-gradient(rgba(0,0,0,0.34),rgba(0,0,0,0.34))]'>
                          <Image
                            src='contract.svg'
                            alt='Icon'
                            width={42}
                            height={42} />
                          <div>
                            <p className='mb-1 2xl:mb-2.5 font-semibold text-base 2xl:text-xl text-[#E9E9E9]'>Contract</p>
                            <p className='text-[#E9E9E9] opacity-60 text-sm lg:text-base break-all'>0x3Fdf5aab678dF0e34F3bA2255823c5340550711D</p>
                          </div>
                        </div>
                      </GlassBox>
                      <GlassBox baseColor='primary'>
                        <div className='p-4 lg:p-6 flex items-start gap-2.5 rounded-[20px] backdrop-blur-[20px] h-full bg-[linear-gradient(rgba(252,100,0,0.08),rgba(252,100,0,0.08)),linear-gradient(rgba(0,0,0,0.34),rgba(0,0,0,0.34))]'>
                          <Image
                            src='wallet.svg'
                            alt='Icon'
                            width={42}
                            height={42} />
                          <div>
                            <p className='mb-1 2xl:mb-2.5 font-semibold text-base 2xl:text-xl text-[#E9E9E9]'>Dev Wallet</p>
                            <p className='text-[#E9E9E9] opacity-60 text-sm lg:text-base break-all'>0x84b55D4d60cFff14b3eF40E7B5D1c6FA59023f31</p>
                          </div>
                        </div>
                      </GlassBox>
                    </div>
                  </div>
                  <Link href={URLS.crmtoken} target='_blank'>
                    <ButtonPrimary>
                      Join the Story
                    </ButtonPrimary>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default CromaStory;
