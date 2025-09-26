'use client';

import Image from 'next/image';
import { poppins } from '@/app/font';
import { motion } from 'framer-motion';
import ButtonPrimary from '@/components/ButtonPrimary';
import GlassBox from '@/components/GlassBox';

const Partnership = () => {
  return (
    <section className='py-[40px] lg:py-12 2xl:py-20 px-4 lg:px-[64px] 2xl:px-[100px]'>
      <div className={`${poppins.className} mb-5 2xl:mb-10 flex flex-col jusitfy-center text-center items-center gap-4`}>
        <div className='px-3.5 py-2 w-fit rounded-full bg-black border border-[#FC6400]'>
          <span className='text-[#FC6400] text-sm md:text-base'>Partnership</span>
        </div>
        <motion.div
          initial={{ opacity: 0, filter: 'blur(20px)' }}
          whileInView={{ opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.3 }} 
          className='blur-animate'
        >
          <h2 className='text-2xl lg:text-3xl 2xl:text-4xl font-semibold tracking-[-0.04%] text-white'>
            Our Ecosystem Partners
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, filter: 'blur(20px)' }}
          whileInView={{ opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.3 }} 
          className='blur-animate'
        >
          <p className='text-base 2xl:text-xl font-medium text-[#E9E9E9] opacity-80 max-w-fit lg:max-w-[500px]'>
            Collaborating with industry leaders to bring you the finest art experience on the blockchain
          </p>
        </motion.div>
      </div>
      <GlassBox baseColor='orange'>
        <div className='px-4 lg:px-[40px] py-8 lg:py-12 2xl:py-20 flex justify-center items-center backdrop-blur-[50px] blur-[10px]'>
          <div className='max-w-full lg:max-w-[780px] flex flex-wrap items-center justify-center gap-[70px]'>
            {supportTeams.map(({icon, width, height}) => (
              <Image
                key={icon}
                src={`/support_logo/${icon}`}
                alt='Logo'
                width={width}
                height={height}
                sizes='(max-height: 768px) 24px, (max-height: 1024px) 48px, 48px'
                className='max-w-fit lg:w-1/3 h-[24px] md:h-[48px] 2xl:h-[48px]'
              />
            ))}
          </div>
        </div>
      </GlassBox>
      <div className='mt-5 2xl:mt-10 flex flex-col lg:flex-row text-center lg:text-left jusitfy-between items-center gap-2.5'>
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0 }} 
          className='motion-element'
        >
          <p className={`${poppins.className} text-base 2xl:text-xl font-medium text-[#E9E9E9] opacity-80`}>
            Are you interested in partnering with Croma Art? We're always looking for strategic collaborations that can enhance our ecosystem and provide value to our community.
          </p>
        </motion.div>
        <div className='text-nowrap'>
          <ButtonPrimary>
            Become a Partner
          </ButtonPrimary>
        </div>
      </div>
    </section>
  )
}

export default Partnership;

const supportTeams = [{
  icon: 'apple.svg',
  width: 130,
  height: 48
}, {
  icon: 'nvidia.svg',
  width: 218,
  height: 48
}, {
  icon: 'google.svg',
  width: 132,
  height: 48
}, {
  icon: 'openai.svg',
  width: 147,
  height: 48
}, {
  icon: 'lenovo.svg',
  width: 120,
  height: 48
}, {
  icon: 'opensea.svg',
  width: 154,
  height: 48
}];
