'use client';

import Image from 'next/image';
import { poppins } from '@/app/font';
import { motion } from 'framer-motion';
import GlassBox from '@/components/GlassBox';

const Profit = () => {
  return (
    <section className='relative py-[40px] lg:py-12 2xl:py-[80px] px-4 lg:px-[64px] 2xl:px-[100px]'>
      <div className='-z-10 absolute -bottom-[40px] -left-[350px] size-[700px] rounded-full bg-[radial-gradient(circle_at_center,#FC6400_0%,rgba(242,39,174,0)_70%)] blur-3xl opacity-80'></div>
      <div className={`${poppins.className} grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6`}>
        <div className='flex flex-col justify-center items-center text-center w-full'>
          <motion.div
            initial={{ opacity: 0, filter: 'blur(6px)' }}
            whileInView={{ opacity: 1, filter: 'blur(0px)' }}
            transition={{ duration: 1, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.3 }} 
          >
            <h2 className='text-2xl lg:text-3xl 2xl:text-4xl font-semibold tracking-[-0.04%] bg-gradient-to-r from-[#B72204] to-[#FC6400] bg-clip-text text-transparent'>
              No Taxes, No Tricks.
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, filter: 'blur(6px)' }}
            whileInView={{ opacity: 1, filter: 'blur(0px)' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.3 }} 
            className='blur-animate'
          >
            <p className='mt-4 lg:mt-6 text-base 2xl:text-xl font-medium text-[#E9E9E9] opacity-80 max-w-[560px]'>
              CROMA is painted with honesty, not bullshit. Clean tokenomics with zero buy/sell taxes.
            </p>
          </motion.div>
        </div>
        <motion.div 
          initial={{ y: 60, x: -60, opacity: 0 }}
          whileInView={{ y: 0, x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.2 }}
          className='motion-element'
        >
          <GlassBox baseColor='orange'>
            <div className='px-4 lg:px-6 py-8 backdrop-blur-[10px] bg-[url("/wave_pattern.webp")] bg-center bg-cover space-y-4 2xl:space-y-6'>
              <div className='w-fit'>
                <GlassBox baseColor='white' rounded='9999'>
                  <Image
                    src='/fire.svg'
                    alt='Icon'
                    width={54}
                    height={54}
                    className='p-2.5 aspect-square'
                  />
                </GlassBox>
              </div>
              <h3 className='mt-4 text-xl 2xl:text-2xl font-semibold text-white'>
                LP Tokens Burned
              </h3>
              <p className='mt-4 text-base 2xl:text-xl font-medium text-[#E9E9E9] opacity-60'>
                LP tokens burned like old canvases. What's gone, stays gone. Permanent liquidity lock.
              </p>
            </div>
          </GlassBox>
        </motion.div>
        <motion.div 
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.2 }}
          className='motion-element'
        >
          <GlassBox baseColor='orange'>
            <div className='px-4 lg:px-6 py-8 backdrop-blur-[10px] bg-[url("/wave_pattern.webp")] bg-center bg-cover space-y-4 2xl:space-y-6'>
              <div className='w-fit'>
                <GlassBox baseColor='white' rounded='9999'>
                  <Image
                    src='/ownership.svg'
                    alt='Icon'
                    width={54}
                    height={54}
                    className='p-2.5 aspect-square'
                  />
                </GlassBox>
              </div>
              <h3 className='mt-4 text-xl 2xl:text-2xl font-semibold text-white'>
                Ownership Renounced
              </h3>
              <p className='mt-4 text-base 2xl:text-xl font-medium text-[#E9E9E9] opacity-60'>
                Even Picasso couldn't take it back. Contract ownership fully renounced for true decentralization.
              </p>
            </div>
          </GlassBox>
        </motion.div>
        <motion.div 
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.2 }}
          className='motion-element'
        >
          <GlassBox baseColor='orange'>
            <div className='px-4 lg:px-6 py-8 backdrop-blur-[10px] bg-[url("/wave_pattern.webp")] bg-center bg-cover space-y-4 2xl:space-y-6'>
              <div className='w-fit'>
                <GlassBox baseColor='white' rounded='9999'>
                  <Image
                    src='/community.svg'
                    alt='Icon'
                    width={54}
                    height={54}
                    className='p-2.5 aspect-square'
                  />
                </GlassBox>
              </div>
              <h3 className='mt-4 text-xl 2xl:text-2xl font-semibold text-white'>
                Community Driven
              </h3>
              <p className='mt-4 text-base 2xl:text-xl font-medium text-[#E9E9E9] opacity-60'>
                This is our gallery, together. Decentralized. Ungoverned. Unstoppable.
              </p>
            </div>
          </GlassBox>
        </motion.div>
      </div>
    </section>
  )
}

export default Profit;
