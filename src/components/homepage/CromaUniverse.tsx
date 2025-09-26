'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { poppins } from '@/app/font';
import { URLS } from '@/constant/urls';
import ButtonPrimary from '@/components/ButtonPrimary';
import GlassBox from '@/components/GlassBox';


const CromaUniverse = () => {
  return (
    <section className='px-4 lg:px-[64px] 2xl:px-[100px] py-12 lg:py-20 relative max-w-screen overflow-x-hidden lg:overflow-x-clip'>
      <div className='-z-10 absolute top-[8%] -left-[10%] size-[600] rounded-full bg-[radial-gradient(circle_at_center,#E34C01_0%,rgba(242,39,174,0)_70%)] blur-3xl opacity-80'></div>
      <div className='-z-10 absolute top-[2%] -left-[20%] size-[600] rounded-full bg-[radial-gradient(circle_at_center,#F227AE_0%,rgba(242,39,174,0)_70%)] blur-3xl opacity-80'></div>
      <div className='-z-10 absolute bottom-[10%] lg:-bottom-[10%] -right-[20%] size-[600] rounded-full bg-[radial-gradient(circle_at_center,#465BF3_0%,rgba(242,39,174,0)_70%)] blur-3xl opacity-80'></div>
      <div className='-z-10 absolute bottom-0 lg:-bottom-[20%] -right-[20%] size-[600] rounded-full bg-[radial-gradient(circle_at_center,#F227AE_0%,rgba(242,39,174,0)_70%)] blur-3xl opacity-80'></div>
      <div className='flex flex-col lg:flex-row items-center justify-between gap-9'>
        <div className={`${poppins.className} lg:max-w-[30%]`}>
          <div className='px-3.5 py-2 w-fit rounded-full bg-black border border-[#FC6400]'>
            <span className='text-[#FC6400] text-sm md:text-base'>The CROMA Universe</span>
          </div>
          <motion.div
            initial={{ opacity: 0, filter: 'blur(6px)' }}
            whileInView={{ opacity: 1, filter: 'blur(0px)' }}
            transition={{ duration: 1, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.3 }}  
            className='blur-animate'
          >
            <p className='mt-4 font-semibold text-2xl lg:text-3xl 2xl:text-4xl text-white '>
              CROMA is not just a taken. It's a complete ecosystem:
            </p>
          </motion.div>
        </div>
        <motion.div
          initial={{ y: 20, x: -20, opacity: 0 }}
          whileInView={{ y: 0, x: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 1, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.3 }} 
          className='w-full motion-element'
        >
          <GlassBox baseColor='orange'>
            <div className='px-4 py-8 lg:p-8 2xl:p-10'>
              <h2 className='text-white text-2xl lg:text-[26px] 2xl:text-[32px] font-semibold leading-[120%] max-w-3/4'>
                All connected in one vision: building a global art + crypto movement
              </h2>
              <p className={`${poppins.className} mt-3 mb-6 font-medium text-base 2xl:text-xl text-[#E9E9E9]`}>
                building a global art + crypto movement
              </p>
              <Link href='#'>
                <ButtonPrimary>
                  Learn More
                </ButtonPrimary>
              </Link>
              <Image
                src='/skate_people.webp'
                alt='Skateboard image'
                width={340}
                height={420}
                className='hidden lg:block absolute top-4 -right-1/12 max-w-[40%] object-contain'
              />
            </div>
          </GlassBox>
        </motion.div>
      </div>
      <div className='mt-4 2xl:mt-6 grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] lg:grid-rows-[auto_auto] gap-4 2xl:gap-6'>
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.1 }}
          className='motion-element'
        >
          <GlassBox baseColor='orange'>
            <div className='px-4 py-8 lg:p-8 2xl:p-10 lg:h-[740px] w-full'>
              <h2 className='text-white text-2xl lg:text-[26px] 2xl:text-[32px] font-semibold leading-[120%]'>
                CromaArt.io
              </h2>
              <p className={`${poppins.className} mt-3 mb-6 font-medium text-base 2xl:text-xl text-[#E9E9E9]`}>
                NFT marketplace for original art & meme art. Discover, create, and trade unique digital artworks with seamless blockchain integration.
              </p>
              <Link href={URLS.cromaartio} target='_blank'>
                <ButtonPrimary>
                  Learn More
                </ButtonPrimary>
              </Link>
              <Image
                src='/skate_king.png'
                alt='Skateboard king image'
                width={424}
                height={610}
                className='mt-6 lg:mt-0 relative lg:absolute -bottom-1/5 left-1/2 -translate-x-1/2'
              />
            </div>
          </GlassBox>
        </motion.div>
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.1 }}
          className='motion-element'
        >
          <GlassBox baseColor='orange'>
            <div className='px-4 py-8 lg:p-8 2xl:p-10 lg:h-[740px] w-full lg:w-[420px]'>
              <div className='mb-6 flex justify-center w-full'>
                <div className='w-[150px] md:w-[310px] 2xl:w-[310px]'>
                  <Image
                    src='/coin_cromaart.png'
                    alt='Coin CromaArt'
                    width={290}
                    height={310}
                    className='object-contain w-auto'
                  />
                </div>
              </div>
              <h2 className='text-white text-2xl lg:text-[26px] 2xl:text-[32px] font-semibold leading-[120%]'>
                CromaChain.com
              </h2>
              <p className={`${poppins.className} mt-3 mb-6 font-medium text-base 2xl:text-xl text-[#E9E9E9]`}>
                Modular Layer-2 blockchain powered by $CMC token. Fast, secure, and scalable infrastructure for the next generation of dApps.
              </p>
              <Link href={URLS.cromachain} target='_blank'>
                <ButtonPrimary>
                  Learn More
                </ButtonPrimary>
              </Link>
            </div>
          </GlassBox>
        </motion.div>
        
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.1 }}
          className='motion-element h-full lg:row-start-1 lg:row-end-3 lg:col-start-3'
        >
          <div className='h-full'>
            <GlassBox baseColor='orange'>
              <div className='px-4 py-8 lg:p-8 2xl:p-10 w-full h-full'>
                <div className='mb-10 flex flex-col justify-center items-center w-full gap-5 lg:gap-10'>
                  <Image
                    src='/trixwallet_logo_text.png'
                    alt='Trix Wallet Logo'
                    width={163}
                    height={143}
                    sizes='(max-width: 768px) 100px, (max-width: 1024px) 143, 143px'
                    className='w-[100px] md:w-[143] 2xl:w-[143px]'
                  />
                  <div className='flex flex-wrap justify-center items-center gap-2'>
                    {['Post-Quantum Cryptography', 'Multi-chain Support', 'DeFi Integration', 'Zero-Knowledge Proofs', 'ZK Risk Scanner']
                    .map((value, i) => (
                      <div key={i} className='px-3 py-2 bg-black border border-[#0083FB] rounded-full w-fit'>
                        <span className='text-[#0083FB] text-[10px] lg:text-xs font-semibold tracking-[-0.01%]'>
                          {value}
                        </span>
                      </div>
                    ))}
                  </div>
                  <Image
                    src='/phone_trix.webp'
                    alt='Phone trix wallet'
                    width={292}
                    height={335}
                  />
                </div>
                <h2 className='text-white text-2xl lg:text-[26px] 2xl:text-[32px] font-semibold leading-[120%]'>
                  TrixWallet.com
                </h2>
                <p className={`${poppins.className} mt-3 mb-6 font-medium text-base 2xl:text-xl text-[#E9E9E9]`}>
                  Secure, fast, and user-friendly Web3 wallet. Manage your crypto assets, NFTs, and interact with dApps effortlessly.
                </p>
                <Link href={URLS.trixwallet}>
                  <ButtonPrimary>
                    Learn More
                  </ButtonPrimary>
                </Link>
              </div>
            </GlassBox>
            
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.3 }}
          className='motion-element xl:col-span-2'
        >
          <div>
            <GlassBox baseColor='orange'>
            <div className='px-4 py-8 lg:p-8 2xl:p-10 flex flex-col lg:flex-row items-center justify-between w-full gap-4'>
              <Image
                src='/king_read_book.webp'
                alt='King read book image'
                width={325}
                height={289}
              />
              <div>
                <h2 className='text-white  text-2xl lg:text-[26px] 2xl:text-[32px] font-semibold leading-[120%]'>
                  TrixNews.com
                </h2>
                <p className={`${poppins.className} mt-3 mb-6 font-medium text-base 2xl:text-xl text-[#E9E9E9]`}>
                  Real-time crypto news portal. Stay updated with the latest blockchain developments, market insights, and project updates.
                </p>
                <Link href={URLS.trixnews}>
                  <ButtonPrimary>
                    Learn More
                  </ButtonPrimary>
                </Link>
              </div>
            </div>
          </GlassBox>
          </div>
        </motion.div>
      
      
      </div>
    </section>
  )
}

export default CromaUniverse;
