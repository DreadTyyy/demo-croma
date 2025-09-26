'use client';

import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { FaDiscord,FaTelegramPlane } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { poppins } from '@/app/font';
import { URLS } from '@/constant/urls';

const Community = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.5, once: true});

  return (
    <section ref={ref} id='community' className='scroll-mt-[100px] relative py-[40px] mx-4 lg:mx-[64px] 2xl:mx-[100px] min-h-[500px]'>
      <div className='-z-10 absolute -top-[100px] -left-[500px] size-[600] rounded-full bg-[radial-gradient(circle_at_center,#19A9EA_0%,rgba(242,39,174,0)_70%)] blur-3xl opacity-80'></div>
      <motion.div
        initial={{ height: 0 }}
        animate={ inView ? { height: 'auto' } : {}}
        transition={{ duration: 0.7, ease: 'easeIn' }}
      >
      <div className={`border border-[#FFFFFF] rounded-[15px] h-full`}>
        <motion.div
          initial={{ opacity: 0, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, filter: 'blur(0px)' }}
          transition={{ delay: 0.7, duration: 1, ease: 'easeIn' }}
          viewport={{ once: true, amount: 0.4 }}
          className='blur-animate'
        >
        <div className='relative h-full overflow-hidden rounded-[15px]'>
          <div className='-z-10 absolute -top-[200px] lg:-top-[450px] left-1/2 -translate-x-1/2 size-[400px] lg:size-[900px] rounded-full bg[radial-gradient(circle_at_center,#FC6400_0%,rgba(242,39,174,0)_70%)] blur-3xl opacity-80'></div>
          <div className='px-4 py-8 w-full min-h-[360px] lg:min-h-[500px] flex flex-col justify-center items-center text-center gap-6 bg-[ur("/header_stars.png")] bg-cover bg-center'>
              <Image 
                src='/crm_token_logo.png'
                alt='CRM token logo'
                width={126}
                height={126}
              />
              <div>
                <h2 className='text-2xl lg:text-3xl 2xl:text-4xl font-semibold leading-[120%] bg-gradient-to-r from-[#B72204] to-[#FC6400] bg-clip-text text-transparent'>
                  Join the CROMA Movement
                </h2>
                <p className={`${poppins.className} mt-4 text-base 2xl:text-xl font-medium text-[#E9E9E9] opacity-80`}>
                  Simple 3-step process to get your free tokens
                </p>
              </div>
              <div className={`${poppins.className} flex flex-wrap items-center justify-center gap-4 lg:gap-6`}>
                <Link href={URLS.discrod} target='_blank'>
                  <div className={`border border-[#FFFFFF] rounded-[15px] h-full`}>
                    <div className='relative h-full overflow-hidden rounded-[15px] bg-[rgba(255,255,255,0.1)] hover:bg-[rgba(0,0,0,0.2)] transition-all duration-300'>
                      <div className='px-4 2xl:px-6 py-3 flex items-center gap-3'>
                        <div className='size-10 bg-white rounded-full flex justify-center items-center'>
                          <FaDiscord size={26} color='#000000' />
                        </div>
                        <p className='text-base 2xl:text-xl font-medium text-[#E9E9E9] opacity-80'>Join Discord</p>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link href={URLS.telegram} target='_blank'>
                  <div className={`border border-[#FFFFFF] rounded-[15px] h-full`}>
                    <div className='relative h-full overflow-hidden rounded-[15px] bg-[rgba(255,255,255,0.1)] hover:bg-[rgba(0,0,0,0.2)] transition-all duration-300'>
                      <div className='px-4 2xl:px-6 py-3 flex items-center gap-3'>
                        <div className='size-10 bg-white rounded-full flex justify-center items-center'>
                          <FaTelegramPlane size={26} color='#000000' /> 
                        </div>
                        <p className='text-base 2xl:text-xl font-medium text-[#E9E9E9] opacity-80'>Join Telegram</p>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link href={URLS.xtwitter} target='_blank'>
                  <div className={`border border-[#FFFFFF] rounded-[15px] h-full`}>
                    <div className='relative h-full overflow-hidden rounded-[15px] bg-[rgba(255,255,255,0.1)] hover:bg-[rgba(0,0,0,0.2)] transition-all duration-300'>
                      <div className='px-4 2xl:px-6 py-3 flex items-center gap-3'>
                        <div className='size-10 bg-white rounded-full flex justify-center items-center'>
                          <FaXTwitter size={26} color='#000000' />
                        </div>
                        <p className='text-base 2xl:text-xl font-medium text-[#E9E9E9] opacity-80'>Follow on X</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
          </div>
        </div>
        </motion.div>
      </div>
      </motion.div>
    </section>
  )
};

export default Community;
