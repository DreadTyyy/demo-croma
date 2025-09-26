'use client';

import Image from 'next/image';
import { poppins } from '@/app/font';
import GlassBox from '@/components/GlassBox';
import { motion } from 'framer-motion';

const Roadmap = () => {
  return (
    <section id='roadmap' className='scroll-mt-[100px] relative px-4 lg:px-[64px] 2xl:px-[100px] py-12 lg:py-[60px]'>
      <div className='-z-10 absolute -top-[350px] -left-[350px] size-[700px] rounded-full bg-[radial-gradient(circle_at_center,#FC6400_0%,rgba(242,39,174,0)_70%)] blur-3xl opacity-60 lg:opacity-80'></div>
      <div className={`${poppins.className} flex flex-col text-center items-center gap-4`}>
        <div className='px-3.5 py-2 w-fit rounded-full bg-black border border-[#FC6400]'>
          <span className='text-[#FC6400] text-sm md:text-base'>📅 Roadmap</span>
        </div>
        <motion.div
          initial={{ opacity: 0, filter: 'blur(6px)' }}
          whileInView={{ opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.3 }}  
          className='blur-animate'
        >
          <h2 className=' text-2xl lg:text-3xl 2xl:text-4xl font-semibold text-white tracking-[-0.04%]'>
            <span className='bg-gradient-to-r from-[#B72204] to-[#FC6400] bg-clip-text text-transparent'>CROMA {' '}</span>
            Development Journey
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, filter: 'blur(6px)' }}
          whileInView={{ opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.3 }} 
          className='blur-animate'
        >
          <p className='text-base 2xl:text-xl font-medium text-[#E9E9E9] opacity-80 max-w-[680px]'>
            From airdrop launch to full ecosystem deployment. Track our progress as we build the future of art and blockchain integration step by step.
          </p>
        </motion.div>
      </div>
      <div className={`${poppins.className} mt-5 lg:mt-10 grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-y-4 2xl:gap-y-6`}>
        <motion.div 
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.2 }}
          className='motion-element'
        >
          <GlassBox baseColor='green'>
            <div className='flex flex-col gap-4 lg:gap-6 px-4 lg:px-6 py-8 backdrop-blur-[50px]'>
              <div className='flex items-center justify-between w-full'>
                <div className='flex items-center gap-4'>
                  <GlassBox baseColor='white' rounded='9999'>
                    <Image
                      src='/icon_phase1.svg'
                      alt='Phase 1'
                      width={54}
                      height={54}
                      className='p-2.5 backdrop-blur-[20px]'
                    />
                  </GlassBox>
                  <div className='text-[#E9E9E9]'>
                    <p className='text-base 2xl:text-xl font-medium'>Phase 1</p>
                    <p className='text-sm lg:text-base opacity-50'>Now - Completed</p>
                  </div>
                </div>
                <div className='px-2 lg:px-4 py-1 lg:py-2 2xl:py-3 w-fit rounded-full bg-[rgba(255,255,255,0.07)] border border-[#16BA00]'>
                  <span className='text-[#16BA00] font-semibold text-sm lg:text-base'>Completed</span>
                </div>
              </div>
              <h2 className='text-xl 2xl:text-2xl font-semibold text-white'>
                Airdrop Distribution
              </h2>
              <p className='text-[#E9E9E9] opacity-60 text-base font-medium'>
                Successfully launched CROMA airdrop with massive community participation. Free $CRM + $CMC tokens distributed to early supporters.
              </p>
              <div className='flex flex-wrap items-center gap-2'>
                {['25,321+ wallets joined','Community started', 'Airdrop smart contract deployed','Social media campaigns launched']
                .map((text, i) => (
                  <div key={i} className={`border border-[#FFFFFF] rounded-[20px] h-full`}>
                    <div className={`relative px-4 py-2 h-full overflow-hidden rounded-[20px] bg-[rgba(0,0,0,0.1)]`}>
                      <span className='text-xs lg:text-sm font-medium text-[#E9E9E9] opacity-80'>
                        {text}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </GlassBox>
        </motion.div>
        {/* ARROW ICON */}
        <div className='flex items-center justify-center rotate-90 lg:rotate-0'>
          <Image
            src='/icon_arrow_phase.svg'
            alt='Double arrow'
            width={54}
            height={54}
            className=''
          />
        </div>
        <motion.div 
          initial={{ x: -60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.2 }}
          className='motion-element'
        >
          <div className={`border-[6px] border-[#FC6400] rounded-[20px] h-full`}>
            <div className='relative h-full overflow-hidden rounded-[20px] bg-[linear-gradient(rgba(255,255,255,0.11),rgba(255,255,255,0.11)),linear-gradient(rgba(0,0,0,0.34),rgba(0,0,0,0.34))]'>
              <div className='flex flex-col gap-4 lg:gap-6 px-4 py-8 backdrop-blur-[50px]'>
                <div className='flex items-center justify-between w-full'>
                  <div className='flex items-center gap-4'>
                    <GlassBox baseColor='white' rounded='9999'>
                      <Image
                        src='/icon_phase2.svg'
                        alt='Phase 2'
                        width={54}
                        height={54}
                        className='p-2.5 backdrop-blur-[20px]'
                      />
                    </GlassBox>
                    <div className='text-[#E9E9E9]'>
                      <p className='text-base 2xl:text-xl font-medium'>Phase 2</p>
                      <p className='text-sm lg:text-base opacity-50'>Soon - Q1 2025</p>
                    </div>
                  </div>
                  <div className={`border border-[#FC6400] rounded-full h-full`}>
                    <div className='px-2 lg:px-4 py-1 lg:py-2 2xl:py-3 w-fit rounded-full bg-[rgba(255,255,255,0.07)] backdrop-blur-[20px]'>
                      <span className=' bg-gradient-to-r from-[#B72204] to-[#FC6400] bg-clip-text text-transparent font-semibold text-sm lg:text-base'>
                        In Progress
                      </span>
                    </div>
                  </div>
                </div>
                <h2 className='text-xl 2xl:text-2xl font-semibold text-white'>
                  Presale Launch
                </h2>
                <p className='text-[#E9E9E9] opacity-60 text-base font-medium'>
                  Official presale launch with early bird pricing for community members. DEX listing preparation and liquidity pool setup.
                </p>
                <div className='flex flex-wrap items-center gap-2'>
                  {['Presale smart contract audit','Early bird pricing tiers', 'KYC & whitelist process','Marketing campaign rollout']
                  .map((text, i) => (
                    <div key={i} className={`border border-[#FFFFFF] rounded-[20px] h-full`}>
                      <div className={`relative px-4 py-2 h-full overflow-hidden rounded-[20px] bg-[rgba(0,0,0,0.1)]`}>
                        <span className='text-xs lg:text-sm font-medium text-[#E9E9E9] opacity-80'>
                          {text}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        <div className='flex lg:hidden items-center justify-center rotate-90'>
          <Image
            src='/icon_arrow_phase.svg'
            alt='Double arrow'
            width={54}
            height={54}
            className=''
          />
        </div>
        <motion.div 
          initial={{ x: -60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0 }}
          className='motion-element'
        >
          <GlassBox baseColor='blue'>
            <div className='flex flex-col gap-4 lg:gap-6 px-4 lg:px-6 py-8 backdrop-blur-[50px]'>
              <div className='flex items-center justify-between w-full'>
                <div className='flex items-center gap-4'>
                  <GlassBox baseColor='white' rounded='9999'>
                    <Image
                      src='/icon_phase3.svg'
                      alt='Phase 3'
                      width={54}
                      height={54}
                      className='p-2.5 backdrop-blur-[20px]'
                    />
                  </GlassBox>
                  <div className='text-[#E9E9E9]'>
                    <p className='text-base 2xl:text-xl font-medium'>Phase 3</p>
                    <p className='text-sm lg:text-base opacity-50'>Q2 2025</p>
                  </div>
                </div>
                <div className='px-2 lg:px-4 py-1 lg:py-2 2xl:py-3 w-fit rounded-full bg-[rgba(255,255,255,0.07)] border border-[#00B7FF]'>
                  <span className='text-[#00B7FF] font-semibold text-sm lg:text-base'>Upcoming</span>
                </div>
              </div>
              <h2 className='text-xl 2xl:text-2xl font-semibold text-white'>
                CEX & DEX Listings
              </h2>
              <p className='text-[#E9E9E9] opacity-60 text-base font-medium'>
                Major exchange listings for $CRM and $CMC tokens. Enhanced liquidity and global accessibility for the CROMA ecosystem.
              </p>
              <div className='flex flex-wrap items-center gap-2'>
                {['DEX listings (Uniswap, PancakeSwap)','CEX partnerships secured', 'Market making agreements','Trading pairs established']
                .map((text, i) => (
                  <div key={i} className={`border border-[#FFFFFF] rounded-[20px] h-full`}>
                    <div className={`relative px-4 py-2 h-full overflow-hidden rounded-[20px] bg-[rgba(0,0,0,0.1)]`}>
                      <span className='text-xs lg:text-sm font-medium text-[#E9E9E9] opacity-80'>
                        {text}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </GlassBox>
        </motion.div>
        {/* ARROW ICON */}
        <div className='flex items-center justify-center rotate-90 lg:rotate-0'>
          <Image
            src='/icon_arrow_phase.svg'
            alt='Double arrow'
            width={54}
            height={54}
            className=''
          />
        </div>
        <motion.div 
          initial={{ x: -60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0 }}
          className='motion-element'
        >
          <GlassBox baseColor='blue'>
            <div className='flex flex-col gap-4 lg:gap-6 px-4 lg:px-6 py-8 backdrop-blur-[50px]'>
              <div className='flex items-center justify-between w-full'>
                <div className='flex items-center gap-4'>
                  <GlassBox baseColor='white' rounded='9999'>
                    <Image
                      src='/icon_phase4.svg'
                      alt='Phase 4'
                      width={54}
                      height={54}
                      className='p-2.5 backdrop-blur-[20px]'
                    />
                  </GlassBox>
                  <div className='text-[#E9E9E9]'>
                    <p className='text-base 2xl:text-xl font-medium'>Phase 4</p>
                    <p className='text-sm lg:text-base opacity-50'>Q3-Q4 2025</p>
                  </div>
                </div>
                <div className='px-2 lg:px-4 py-1 lg:py-2 2xl:py-3 w-fit rounded-full bg-[rgba(255,255,255,0.07)] border border-[#00B7FF]'>
                  <span className='text-[#00B7FF] font-semibold text-sm lg:text-base'>Upcoming</span>
                </div>
              </div>
              <h2 className='text-xl 2xl:text-2xl font-semibold text-white'>
                Ecosystem Integration
              </h2>
              <p className='text-[#E9E9E9] opacity-60 text-base font-medium'>
                Full integration of CromaArt, CromaChain, TrixWallet, and TrixNews. Launch of NFT marketplace and Layer-2 blockchain.
              </p>
              <div className='flex flex-wrap items-center gap-2'>
                {['CromaArt.io NFT marketplace','CromaChain L2 mainnet', 'TrixWallet beta release','TrixNews portal launch']
                .map((text, i) => (
                  <div key={i} className={`border border-[#FFFFFF] rounded-[20px] h-full`}>
                    <div className={`relative px-4 py-2 h-full overflow-hidden rounded-[20px] bg-[rgba(0,0,0,0.1)]`}>
                      <span className='text-xs lg:text-sm font-medium text-[#E9E9E9] opacity-80'>
                        {text}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </GlassBox>
        </motion.div>
      </div>
    </section>
  )
}

export default Roadmap;
