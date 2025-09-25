import Image from 'next/image';
import { poppins } from '@/app/font';
import ButtonPrimary from '@/components/ButtonPrimary';
import GlassBox from '@/components/GlassBox';

const CromaStory = () => {
  return (
    <section className='relative py-[60px] mx-4 xl:mx-[100px] 2xl:mx-[160px]'>
      <div className={`border border-[#FFFFFF] rounded-[15px] h-full`}>
        <div className='relative h-full overflow-hidden rounded-[15px]'>
          <div className='-z-10 absolute -top-[200px] xl:-top-[450px] left-1/2 -translate-x-1/2 size-[400px] xl:size-[900px] rounded-full bg-[radial-gradient(circle_at_center,#FC6400_0%,rgba(242,39,174,0)_70%)] blur-3xl opacity-80'></div>
          <div className='px-4 py-8 w-full min-h-[360px] xl:min-h-[500px] flex flex-col justify-center items-center text-center gap-6 bg-[url("/header_stars.png")] bg-cover bg-center'>
            <Image
              src='/crc_token_logo.png'
              alt='CRC token logo'
              width={126}
              height={126} />
            <div>
              <h2 className='text-2xl xl:text-4xl font-semibold leading-[120%] bg-gradient-to-r from-[#B72204] to-[#FC6400] bg-clip-text text-transparent'>
                The Story of CROMA
              </h2>
              <div className={`${poppins.className} my-4 flex flex-col items-center`}>
                <p className='mb-4 text-base xl:text-xl font-medium text-[#E9E9E9] opacity-80 max-w-[780px]'>
                  CROMA was born from an oil canvas. From brushstrokes came a new movement: art + blockchain. From canvas to crypto revolution.
                </p>
                <div className='flex flex-col xl:flex-row items-center gap-2 xl:gap-4 text-left'>
                  <GlassBox baseColor='primary'>
                    <div className='p-4 xl:p-6 flex items-start gap-2.5 rounded-[20px] backdrop-blur-[20px] h-full bg-[linear-gradient(rgba(252,100,0,0.08),rgba(252,100,0,0.08)),linear-gradient(rgba(0,0,0,0.34),rgba(0,0,0,0.34))]'>
                      <Image
                        src='contract.svg'
                        alt='Icon'
                        width={42}
                        height={42} />
                      <div>
                        <p className='mb-1 xl:mb-2.5 font-semibold text-base xl:text-xl text-[#E9E9E9]'>Contract</p>
                        <p className='text-[#E9E9E9] opacity-60 text-sm xl:text-base break-all'>0x3Fdf5aab678dF0e34F3bA2255823c5340550711D</p>
                      </div>
                    </div>
                  </GlassBox>
                  <GlassBox baseColor='primary'>
                    <div className='p-4 xl:p-6 flex items-start gap-2.5 rounded-[20px] backdrop-blur-[20px] h-full bg-[linear-gradient(rgba(252,100,0,0.08),rgba(252,100,0,0.08)),linear-gradient(rgba(0,0,0,0.34),rgba(0,0,0,0.34))]'>
                      <Image
                        src='wallet.svg'
                        alt='Icon'
                        width={42}
                        height={42} />
                      <div>
                        <p className='mb-1 xl:mb-2.5 font-semibold text-base xl:text-xl text-[#E9E9E9]'>Dev Wallet</p>
                        <p className='text-[#E9E9E9] opacity-60 text-sm xl:text-base break-all'>0x84b55D4d60cFff14b3eF40E7B5D1c6FA59023f31</p>
                      </div>
                    </div>
                  </GlassBox>
                </div>
              </div>
              <ButtonPrimary>
                Join the Story
              </ButtonPrimary>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CromaStory;
