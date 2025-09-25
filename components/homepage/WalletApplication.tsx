'use client';

import Link from 'next/link';
import Image from 'next/image';
import { poppins } from '@/app/font';
import { motion } from 'framer-motion';

const WalletApplication = () => {
  return (
    <section className={`${poppins.className} relative px-4 lg:px-[64px] 2xl:px-[100px] py-12 lg:py-20 max-w-screen overflow-x-hidden lg:overflow-x-clip`}>
      <div className='-z-10 absolute top-1/2 left-1/2 -translate-1/2 size-[400px] lg:size-[800px] bg-[#FC6400] rounded-full blur-[200px] opacity-60 lg:opacity-100'></div>
      <div className='-z-10 hidden lg:block absolute top-[40%] -translate-y-1/2 -right-[20%] size-[600] rounded-full bg-[radial-gradient(circle_at_center,#F227AE_0%,rgba(242,39,174,0)_70%)] blur-3xl opacity-80'></div>
      <div className='-z-10 hidden lg:block absolute top-[50%] -translate-y-1/2 -right-[20%] size-[600] rounded-full bg-[radial-gradient(circle_at_center,#FC6400_0%,rgba(242,39,174,0)_70%)] blur-3xl opacity-80'></div>
      <div className='flex flex-col text-center items-center gap-4'>
        <div className='px-3.5 py-2 w-fit rounded-full bg-[#A24101] border border-[#FC6400]'>
          <span className='text-white text-sm md:text-base'>Wallet Applications</span>
        </div>
        <motion.div
          initial={{ opacity: 0, filter: 'blur(20px)' }}
          whileInView={{ opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.3 }} 
          className='w-[150px] md:w-[240px] 2xl:w-[300px]'
        >
          <Image
            src='/trix_wallet_logo_text_horizontal.png'
            alt='Trix wallet logo horizontal text'
            width={300}
            height={78}
            className='object-contain w-auto'
          />
        </motion.div>
      </div>
      <div className='mt-6 flex flex-col gap-6 items-center'>
        <motion.div 
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeIn' }}
          viewport={{ once: true, amount: 0 }}
        >
          <Image
            src='/all_phones.png'
            alt='Applications'
            width={1120}
            height={610}
          />
        </motion.div>
        <motion.div 
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeIn' }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <p className='text-center max-w-[680px] text-base 2xl:text-xl font-medium text-[#E9E9E9]'>
            Secure, fast, and user-friendly Web3 wallet. Manage your crypto assets, NFTs, and interact with dApps effortlessly.
          </p>
        </motion.div>
        <div className='flex flex-wrap justify-center gap-1 lg:gap-2 max-w-[800px]'>
          {['Post-Quantum Cryptography', 'Multi-chain Support', 'DeFi Integration', 'Zero-Knowledge Proofs', 'ZK Risk Scanner', 'and more']
          .map((text, i) => (
            <motion.div key={i} 
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: i * 0.1 + 0.1,duration: 0.5, ease: 'easeIn' }}
              viewport={{ once: true, amount: 0 }}
              className={`border border-[#FFFFFF] rounded-[20px] h-full`}
            >
              <div className={`relative px-2 lg:px-4 2xl:px-6 py-3 h-full overflow-hidden rounded-[20px] bg-[rgba(0,0,0,0.1)]`}>
                <span className='text-sm lg:text-base 2xl:text-xl font-medium text-[#E9E9E9] opacity-80'>
                  {text}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
        <div className='flex gap-2 lg:gap-6 items-center'>
          <div className='w-auto lg:w-[180] 2xl:w-[250]'>
            <Link href='#'>
              <Image
                src='/google_play_store.svg'
                alt='google play'
                width={250}
                height={75}
                className='w-auto object-contain'
                />
            </Link>
          </div>
          <div className='w-auto lg:w-[180] 2xl:w-[250]'>
            <Link href='#'>
              <Image
                src='/app_store.svg'
                alt='app store'
                width={250}
                height={75}
                className='w-auto object-contain'
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WalletApplication;
