import Image from 'next/image';
import { poppins } from '@/app/font';
import GlassBox from '@/components/GlassBox';

const Profit = () => {
  return (
    <section className='relative py-[40px] xl:py-[80px] px-4 xl:px-[64px] 2xl:px-[100px]'>
      <div className='-z-10 absolute -bottom-[40px] -left-[350px] size-[700px] rounded-full bg-[radial-gradient(circle_at_center,#FC6400_0%,rgba(242,39,174,0)_70%)] blur-3xl opacity-80'></div>
      <div className={`${poppins.className} grid grid-cols-1 xl:grid-cols-2 gap-4 xl:gap-6`}>
        <div className='flex flex-col justify-center items-center text-center w-full'>
          <h2 className='text-2xl xl:text-4xl font-semibold tracking-[-0.04%] bg-gradient-to-r from-[#B72204] to-[#FC6400] bg-clip-text text-transparent'>
            No Taxes, No Tricks.
          </h2>
          <p className='mt-4 xl:mt-6 text-base xl:text-xl font-medium text-[#E9E9E9] opacity-80 max-w-[560px]'>
            CROMA is painted with honesty, not bullshit. Clean tokenomics with zero buy/sell taxes.
          </p>
        </div>
        <GlassBox baseColor='orange'>
          <div className='px-4 xl:px-6 py-8 backdrop-blur-[50px] bg-[url("/wave_pattern.png")] bg-center bg-cover'>
            <div className='w-fit'>
              <GlassBox baseColor='white' rounded='9999'>
                <Image
                  src='/fire.svg'
                  alt='Icon'
                  width={54}
                  height={54}
                  className='p-2.5'
                />
              </GlassBox>
            </div>
            <h3 className='mt-4 xl:mt-6 text-xl xl:text-2xl font-semibold text-white'>
              LP Tokens Burned
            </h3>
            <p className='mt-4 xl:mt-6 text-base xl:text-xl font-medium text-[#E9E9E9] opacity-60'>
              LP tokens burned like old canvases. What's gone, stays gone. Permanent liquidity lock.
            </p>
          </div>
        </GlassBox>
        <GlassBox baseColor='orange'>
          <div className='px-4 xl:px-6 py-8 backdrop-blur-[50px] bg-[url("/wave_pattern.png")] bg-center bg-cover'>
            <div className='w-fit'>
              <GlassBox baseColor='white' rounded='9999'>
                <Image
                  src='/ownership.svg'
                  alt='Icon'
                  width={54}
                  height={54}
                  className='p-2.5'
                />
              </GlassBox>
            </div>
            <h3 className='mt-4 xl:mt-6 text-xl xl:text-2xl font-semibold text-white'>
              Ownership Renounced
            </h3>
            <p className='mt-4 xl:mt-6 text-base xl:text-xl font-medium text-[#E9E9E9] opacity-60'>
              Even Picasso couldn't take it back. Contract ownership fully renounced for true decentralization.
            </p>
          </div>
        </GlassBox>
        <GlassBox baseColor='orange'>
          <div className='px-4 xl:px-6 py-8 backdrop-blur-[50px] bg-[url("/wave_pattern.png")] bg-center bg-cover'>
            <div className='w-fit'>
              <GlassBox baseColor='white' rounded='9999'>
                <Image
                  src='/community.svg'
                  alt='Icon'
                  width={54}
                  height={54}
                  className='p-2.5'
                />
              </GlassBox>
            </div>
            <h3 className='mt-4 xl:mt-6 text-xl xl:text-2xl font-semibold text-white'>
              Community Driven
            </h3>
            <p className='mt-4 xl:mt-6 text-base xl:text-xl font-medium text-[#E9E9E9] opacity-60'>
              This is our gallery, together. Decentralized. Ungoverned. Unstoppable.
            </p>
          </div>
        </GlassBox>
      </div>
    </section>
  )
}

export default Profit;
