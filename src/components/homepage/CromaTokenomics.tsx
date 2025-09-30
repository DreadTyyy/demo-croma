'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { poppins } from '@/app/font';
import GlassBox from '@/components/GlassBox';

const CromaTokenomics = () => {
  return (
    <section className='px-4 lg:px-[64px] 2xl:px-[100px] py-12 lg:py-20 border-t border-[#414141]'>
      <div className={`${poppins.className} flex flex-col text-center items-center gap-4`}>
        <div className='px-3.5 py-2 w-fit rounded-full bg-black border border-[#FC6400]'>
          <span className='text-[#FC6400] text-sm md:text-base'>CROMA Tokenomics</span>
        </div>
        <motion.div
          initial={{ opacity: 0, filter: 'blur(6px)' }}
          whileInView={{ opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.3 }} 
          className='blur-animate'
        >
          <h2 className='text-2xl lg:text-3xl 2xl:text-4xl font-semibold text-white tracking-[-0.04%]'>Two Tokens, One Ecosystem</h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, filter: 'blur(6px)' }}
          whileInView={{ opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.1 }} 
          className='blur-animate'
        >
          <p className='text-base 2xl:text-xl font-medium text-[#E9E9E9] opacity-80 max-w-[680px]'>
            $CRM powers the art marketplace while $CMC fuels the blockchain infrastructure. Real utility for art & chain with transparent, community-focused distribution.
          </p>
        </motion.div>
      </div>
      <div id='tokenomics' className='scroll-mt-[120px] 2xl:scroll-mt-[160px] mt-10 2xl:mt-[60px] grid grid-cols-1 lg:grid-cols-2 gap-y-4 lg:gap-x-4 2xl:gap-x-6'>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5, ease: 'easeIn' }}
          viewport={{ once: true, amount: 0.1 }} 
          className='w-full motion-element'
        >
          <GlassBox baseColor='orange'>
            <Image
              src='/coin_cromaart_2.png'
              alt='Coin CromaArt'
              width={214}
              height={214}
              className='-z-10 absolute -right-12 top-0 blur-xs'
            />
            <div className='mb-6 px-4 py-4 lg:px-8 2xl:px-10 text-center'>
              <div className='flex w-full justify-center'>
                <Image 
                  src='/crm_token_logo.png'
                  alt='CRM token logo'
                  width={104}
                  height={104}
                />
              </div>
              <h3 className='mt-4 text-2xl lg:text-3xl 2xl:text-4xl font-bold text-white'>$CRM Token</h3>
              <p className={`${poppins.className} mt-2 mb-4 text-base 2xl:text-xl font-medium text-[#E9E9E9] opacity-80`}>CromaArt Token</p>
              <GlassBox baseColor='white'>
                <div className='xl:px-8 py-4 rounded-[20px]'>
                  <p className='mb-2.5 text-[26px] lg:text-[32px] 2xl:text-[40px] font-bold leading-[120%] bg-gradient-to-r from-[#B72204] to-[#FC6400] bg-clip-text text-transparent'>
                    950,000,000
                  </p>
                  <span className={`${poppins.className} text-sm 2xl:text-base font-semibold text-[#E9E9E9] uppercase`}>Total suply</span>
                </div>
              </GlassBox>
              <div className='mt-4'>
                <div className='flex flex-col gap-2 lg:gap-4'>
                  {dataCrmToken.map(({title, percentage, amount}) => (
                    <div className='flex flex-col gap-1' key={title}>
                      <div className='mb-1 flex w-full justify-between items-center'>
                        <p className='block font-medium text-xs lg:text-sm'>{title}</p>
                        <div>
                          <span className='text-sm lg:text-base font-bold bg-gradient-to-r from-[#B72204] to-[#FC6400] bg-clip-text text-transparent'>
                            {percentage}% {' '}
                          </span>
                          <span className='text-sm lg:text-base font-bold text-white'>({amount}M)</span>
                        </div>
                      </div>
                      <div className='relative bg-[#323336] ring-inset-[#3E3E3E] w-full h-[20px] 2xl:h-[26px] rounded-full'>
                        <div 
                          style={{ width: `${percentage}%` }} 
                          className={`absolute top-0 left-0 h-full rounded-full bg-gradient-to-r from-[#B72204] to-[#FC6400]`}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </GlassBox>
        </motion.div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5, ease: 'easeIn' }}
          viewport={{ once: true, amount: 0.1 }} 
          className='w-full motion-element'
        >
          <GlassBox baseColor='orange'>
            <Image
              src='/coin_cromaart_2.png'
              alt='Coin CromaArt'
              width={214}
              height={214}
              className='-z-10 absolute -right-12 top-0 blur-xs'
            />
            <div className='mb-6 px-4 py-4 lg:px-8 2xl:px-10 text-center'>
              <div className='flex w-full justify-center'>
                <Image 
                  src='/crc_token_logo.png'
                  alt='CMC token logo'
                  width={104}
                  height={104}
                />
              </div>
              <h3 className='mt-4 text-2xl lg:text-3xl 2xl:text-4xl font-bold text-white'>$CMC Token</h3>
              <p className={`${poppins.className} mt-2 mb-4 text-base 2xl:text-xl font-medium text-[#E9E9E9] opacity-80`}>CromaChain Token</p>
              <GlassBox baseColor='white'> 
                <div className='xl:px-8 py-4 rounded-[20px]'>
                  <p className='mb-2.5 text-[26px] lg:text-[32px] 2xl:text-[40px] font-bold leading-[120%] bg-gradient-to-r from-[#B72204] to-[#FC6400] bg-clip-text text-transparent'>
                    2,000,000,000
                  </p>
                  <span className={`${poppins.className} text-sm 2xl:text-base font-semibold text-[#E9E9E9] uppercase`}>Total suply</span>
                </div>
              </GlassBox>
              <div className={`${poppins.className} mt-4`}>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-4 text-left'>
                  {dataCmcToken.map(({title, desc, icon}) => (
                    <GlassBox baseColor='primary' key={title}>
                      <div className='p-4 flex items-start gap-2.5 rounded-[20px] h-full bg-[linear-gradient(rgba(252,100,0,0.08),rgba(252,100,0,0.08)),linear-gradient(rgba(0,0,0,0.34),rgba(0,0,0,0.34))]'>
                        <Image 
                          src={icon}
                          alt={`Icon ${title}`}
                          width={42}
                          height={42}
                        />
                        <div>
                          <p className='mb-1 2xl:mb-2.5 font-semibold text-base 2xl:text-xl text-[#E9E9E9]'>{title}</p>
                          <p className='text-[#E9E9E9] opacity-60 text-sm 2xl:text-base'>{desc}</p>
                        </div>
                      </div>
                    </GlassBox>
                  ))}
                </div>
              </div>
            </div>
          </GlassBox>
        </motion.div>
      </div>
    </section>
  )
}

export default CromaTokenomics;

const dataCrmToken = [{
  title: 'Presale',
  percentage: 52.6,
  amount: 500 
}, {
  title: 'Liquidity',
  percentage: 7.9,
  amount: 75
}, {
  title: 'Marketing',
  percentage: 7.9,
  amount: 75
}, {
  title: 'Minning Locked',
  percentage: 31.6,
  amount: 300
}];

const dataCmcToken = [{
  title: 'Gas Fees',
  desc: 'Transaction costs on CromaChain',
  icon: 'gas_fees.svg'
}, {
  title: 'Stacking',
  desc: 'Earn rewards by stacking tokens',
  icon: 'stacking.svg'
}, {
  title: 'Governance',
  desc: 'Vote on protocol decisions',
  icon: 'governance.svg'
}, {
  title: 'Rewards',
  desc: 'Earn from ecosystem activities',
  icon: 'rewards.svg'
}];
