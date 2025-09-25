import Image from 'next/image';
import { poppins } from '@/app/font';
import GlassBox from '@/components/GlassBox';

const BuyForm = () => {
  return (
    <section className='max-w-screen overflow-x-hidden xl:overflow-x-clip'>
      <div className='relative pb-[80px] pt-[60px] xl:pt-[100px] mx-4 xl:mx-[64px] 2xl:mx-[100px]'>
        <div className='px-4 py-8 xl:p-[60px] bg-gradient-to-r from-[#B72204] to-[#FC6400] rounded-[20px]'>
          <Image
            src='/coin_cromaart_2.png'
            alt='Coin'
            width={590}
            height={460}
            className='relative xl:absolute top-0 xl:-bottom-[60px] -right-[40px]'
          />
          <div className='xl:max-w-1/2'>
            <h2 className='text-2xl xl:text-4xl font-semibold leading-[120%] text-white'>
              How to Buy $CRM & $CMC
            </h2>
            <div className={`${poppins.className} my-4`}>
              <p className='mb-4 text-base xl:text-2xl font-medium text-[#E9E9E9] opacity-80 max-w-[780px]'>
                Step-by-step guide will be available when presale begins. Stay tuned & join our community for
              </p>
              <div className='flex flex-col xl:flex-row items-center gap-4'>
                <div className='w-full xl:w-1/2'>
                  <label htmlFor='name'
                    className='mb-1 text-sm font-medium text-white'
                  >Name</label>
                  <GlassBox baseColor='white' rounded='14'>
                    <input 
                      type='text' 
                      id='name'
                      placeholder='Your Name'
                      className='p-4 backdrop-blur-[20px] text-sm font-medium text-white placeholder:text-[#A8A8A8] w-full focus:ring-none focus:outline-none' 
                    />
                  </GlassBox>
                </div>
                <div className='w-full xl:w-1/2'>
                  <label htmlFor='name'
                    className='mb-1 text-sm font-medium text-white'
                  >Email</label>
                  <GlassBox baseColor='white' rounded='14'>
                    <input 
                      type='email' 
                      id='email'
                      placeholder='Your Email'
                      className='p-4 backdrop-blur-[20px] text-sm font-medium text-white placeholder:text-[#A8A8A8] w-full focus:ring-none focus:outline-none' 
                    />
                  </GlassBox>
                </div>
              </div>
            </div>
            <button className='w-full px-8 py-3 xl:py-4 text-[#B72204] font-bold text-base xl:text-lg rounded-[10px] bg-[#FFFBFB] shadow-[0_2px_20px_0_rgba((252,100,0,0.6)] cursor-pointer'>
              GET UPDATES
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BuyForm;
