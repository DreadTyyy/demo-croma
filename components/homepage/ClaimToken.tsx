'use client';

import Link from 'next/link';
import Image from 'next/image';
import { poppins } from '@/app/font';
import { motion } from 'framer-motion';
import ButtonPrimary from '@/components/ButtonPrimary';
import GlassBox from '@/components/GlassBox';

const ClaimToken = () => {
  return (
    <section className='relative py-[40px] px-4 lg:px-[64px] 2xl:px-[100px] max-w-screen overflow-x-hidden lg:overflow-x-clip'>
      <div className='-z-10 absolute top-0 -right-[400px] size-[600] rounded-full bg-[radial-gradient(circle_at_center,#19A9EA_0%,rgba(242,39,174,0)_70%)] blur-3xl opacity-80'></div>
      <div className='-z-10 absolute top-[15%] -right-[650px] size-[700px] rounded-full bg-[radial-gradient(circle_at_center,#FC6400_0%,rgba(242,39,174,0)_70%)] blur-3xl opacity-80'></div>
      <div className={`border border-[#FC6400] rounded-[20px] h-full`}>
        <div className='relative h-full overflow-hidden rounded-[20px] bg-[rgba(252,100,0,0.1)]'>
          <div className='px-4 py-8 lg:p-8 2xl:p-10 text-center'>
            <motion.div
              initial={{ opacity: 0, filter: 'blur(20px)' }}
              whileInView={{ opacity: 1, filter: 'blur(0px)' }}
              transition={{ duration: 1, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.3 }} 
            >
              <h2 className='text-2xl lg:text-3xl 2xl:text-4xl font-semibold leading-[120%] bg-gradient-to-r from-[#B72204] to-[#FC6400] bg-clip-text text-transparent'>
                How to Claim
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, filter: 'blur(20px)' }}
              whileInView={{ opacity: 1, filter: 'blur(0px)' }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.3 }} 
            >
              <p className={`${poppins.className} mt-2 2xl:mt-4 text-base 2xl:text-xl font-medium text-[#E9E9E9] opacity-80`}>
                Simple 3-step process to get your free tokens
              </p>
            </motion.div>
            <div className='flex flex-col lg:flex-row mt-[26px] gap-y-4 justify-between items-center'>
              <motion.div 
                initial={{ y: 60, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: 'easeIn' }}
                viewport={{ once: true, amount: 0.2 }}
                className='xl:max-w-1/2'
              >
                <Image
                  src='/claim_coin.png'
                  alt='Claim coin'
                  width={678}
                  height={692}
                  className='w-auto'
                />
              </motion.div>
              <div className={`${poppins.className} flex flex-col gap-4`}>
                <motion.div 
                  initial={{ y: 60, x: -60, opacity: 0 }}
                  whileInView={{ y: 0, x: 0, opacity: 1 }}
                  transition={{ duration: 1, ease: 'easeIn' }}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <GlassBox baseColor='orange'>
                    <div className='relative px-4 lg:px-6 py-8 text-left max-w-[500px] bg-[url("/polygon_pattern_10.png")] bg-center'>
                      <div className='mb-4 2xl:mb-6 flex items-center gap-4'>
                        <GlassBox baseColor='white' rounded='9999'>
                          <p className='flex justify-center items-center size-[36] lg:size-[42] 2xl:size-[54px] text-white text-xl 2xl:text-2xl font-semibold'>
                            1
                          </p>
                        </GlassBox>
                        <p className='font-semibold text-xl 2xl:text-2xl text-white'>
                          Connect Wallet
                        </p>
                      </div>
                      <p className='text-base 2xl:text-xl font-medium text-[#E9E9E9] opacity-60'>
                        Connect your TrixWallet or any Web3 wallet (MetaMask, Trust Wallet, etc.) to get started with the CROMA airdrop.
                      </p>
                    </div>
                  </GlassBox>
                </motion.div>
                <motion.div 
                  initial={{ y: 60, x: -60, opacity: 0 }}
                  whileInView={{ y: 0, x: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.7, ease: 'easeIn' }}
                  viewport={{ once: true, amount: 0.1 }}
                >
                  <GlassBox baseColor='orange'>
                    <div className='relative px-4 lg:px-6 py-8 text-left max-w-[500px] bg-[url("/polygon_pattern_10.png")] bg-center'>
                      <div className='mb-4 lg:mb-6 flex items-center gap-4'>
                        <GlassBox baseColor='white' rounded='9999'>
                          <p className='flex justify-center items-center size-[36] lg:size-[42] 2xl:size-[54px] text-white text-xl 2xl:text-2xl font-semibold'>
                            2
                          </p>
                        </GlassBox>
                        <p className='font-semibold text-xl 2xl:text-2xl text-white'>
                          Complete Tasks
                        </p>
                      </div>
                      <p className='text-base 2xl:text-xl font-medium text-[#E9E9E9] opacity-60'>
                        Follow our social media accounts, join Telegram/Discord, and complete simple verification tasks to qualify.
                      </p>
                    </div>
                  </GlassBox>
                </motion.div>
                <motion.div 
                  initial={{ y: 60, x: -60, opacity: 0 }}
                  whileInView={{ y: 0, x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, ease: 'easeIn' }}
                  viewport={{ once: true, amount: 0.1 }}
                >
                  <GlassBox baseColor='orange'>
                    <div className='relative px-4 lg:px-6 py-8 text-left max-w-[500px] bg-[url("/polygon_pattern_10.png")] bg-center'>
                      <div className='mb-4 lg:mb-6 flex items-center gap-4'>
                        <GlassBox baseColor='white' rounded='9999'>
                          <p className='flex justify-center items-center size-[36] lg:size-[42] 2xl:size-[54px] text-white text-xl 2xl:text-2xl font-semibold'>
                            3
                          </p>
                        </GlassBox>
                        <p className='font-semibold text-xl 2xl:text-2xl text-white'>
                          Claim Tokens
                        </p>
                      </div>
                      <p className='text-base 2xl:text-xl font-medium text-[#E9E9E9] opacity-60'>
                        Once verified succes, claim your free $CRM + $CMC tokens directly to your wallet. No tricks, no taxes.
                      </p>
                    </div>
                  </GlassBox>
                </motion.div>
              </div>
            </div>
            <div className='mt-[26px] flex flex-col gap-2'>
              <Link href=''>
                <ButtonPrimary>
                  Claim Airdrop Now
                </ButtonPrimary>
              </Link>
              <span className={`${poppins.className} text-xs text-white`}>🔥 Already 25,321 wallets joined! Don't miss out!</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ClaimToken;
