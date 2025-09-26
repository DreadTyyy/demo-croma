'use client';

import Image from 'next/image';
import { poppins } from '@/app/font';
import { motion } from 'framer-motion';

const Merch = () => {
  return (
    <section className='relative overflow-hidden'>
      <Image
        src='/merch.png'
        alt='Merch icon'
        width={410}
        height={460}
        className='absolute -top-[80px] -left-[100px] opacity-30 lg:opacity-100'
      />
      <Image
        src='/king_hold_coin.png'
        alt='King hold coin'
        width={450}
        height={450}
        className='hidden lg:block absolute -right-[150px] -bottom-[150px]'
      />
      <div className='p-8 lg:p-[60px] bg-gradient-to-r from-[#B72204] to-[#FC6400]'>
        <div className={`${poppins.className} mx-4 lg:mx-[64px] 2xl:mx-[100px] flex flex-col jusitfy-center text-center items-center gap-4`}>
          <div className='px-3.5 py-2 w-fit rounded-full bg-black border border-[#FC6400]'>
            <span className='text-[#FC6400] text-sm md:text-base'>COMING SOON</span>
          </div>
          <motion.div
            initial={{ opacity: 0, filter: 'blur(20px)' }}
            whileInView={{ opacity: 1, filter: 'blur(0px)' }}
            transition={{ duration: 1, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.3 }} 
            className='blur-animate'
          >
            <h2 className='text-2xl lg:text-3xl 2xl:text-4xl font-semibold tracking-[-0.04%] text-white'>
              Croma March
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
              A limited collection designed for those who lead, not follow.
            </p>
          </motion.div>
          <div className='flex flex-wrap justify-center items-center gap-1 lg:gap-2'>
            {['Hoodies', 'Tees', 'NFT Prints', 'Tshirts', 'and more']
            .map((text, i) => (
              <motion.div key={i} 
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.1 + 0.1,duration: 0.5, ease: 'easeIn' }}
                viewport={{ once: true, amount: 0.2 }}
                className={`motion-element border border-[#FFFFFF] rounded-[20px] h-full`}
              >
                <div className={`relative px-2 lg:px-4 2xl:px-6 py-3 h-full overflow-hidden rounded-[20px] bg-[rgba(0,0,0,0.1)]`}>
                  <span className='text-sm lg:text-base 2xl:text-xl font-medium text-[#E9E9E9] opacity-80'>
                    {text}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Merch