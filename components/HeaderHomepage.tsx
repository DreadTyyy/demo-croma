import Link from 'next/link';
import Image from 'next/image';
import { poppins } from '@/app/font';
import BorderBox from '@/components/BorderBox';
import ButtonPrimary from '@/components/ButtonPrimary';

export default function HeaderHomepage() {
  return (
    <header className='relative h-full mx-4 md:mx-[100px] flex flex-col xl:flex-row items-center justify-between'>
          <div className='mt-0'>
            <div>
              <h1 className='font-black text-3xl xl:text-[80px] uppercase'>
                <span className='block leading-[120%] bg-gradient-to-r from-[#B72204] to-[#FC6400] bg-clip-text text-transparent text-nowrap'>
                  CROMA AIRDROP
                </span>
                <span className='block leading-[120%] bg-gradient-to-r from-[#B72204] to-[#FC6400] bg-clip-text text-transparent'>
                  IS LIVE
                </span>
              </h1>
              <p className={`${poppins.className} mt-4 text-sm xl:text-lg font-medium`}>
                Claim free $CRM + $CMC tokens and join the future of art, memes & blockchain.
              </p>
            </div>
            <div className='mt-8 w-fit'>
              <BorderBox>
                <div className={`${poppins.className} px-4 xl:px-8 py-3 flex flex-nowrap flex-col xl:flex-row gap-y-2 items-center justify-between bg-[linear-gradient(rgba(255,255,255,0.11),rgba(255,255,255,0.11)),linear-gradient(rgba(0,0,0,0.34),rgba(0,0,0,0.34))] backdrop-blur-[20] rounded-[20px]`}>
                  <p className='text-base xl:text-2xl font-medium text-white'>
                    Presale Ends In
                  </p>
                  <p className='text-sm xl:text-base font-semibold bg-gradient-to-r from-[#B72204] to-[#FC6400] bg-clip-text text-transparent'>
                    Oct 16, 2025 23:59:00 UTC
                  </p>
                </div>
              </BorderBox>
              <div className='mt-5 flex flex-wrap gap-2 xl:gap-5 items-center justify-center xl:justify-start'>
                <BorderBox>
                  <div className='px-8 py-4 xl:py-6 bg-[linear-gradient(rgba(255,255,255,0.11),rgba(255,255,255,0.11)),linear-gradient(rgba(0,0,0,0.34),rgba(0,0,0,0.34))] backdrop-blur-[20] rounded-[20px] text-center'>
                    <p className='text-xl xl:text-[40px] font-bold leading-[120%] bg-gradient-to-r from-[#B72204] to-[#FC6400] bg-clip-text text-transparent'>
                      30
                    </p>
                    <p className={`${poppins.className} mt-1 xl:mt-[10px] font-semibold text-sm xl:text-base text-[#E9E9E9]`}>
                      Days
                    </p>
                  </div>
                </BorderBox>
                <BorderBox>
                  <div className='px-8 py-4 xl:py-6 bg-[linear-gradient(rgba(255,255,255,0.11),rgba(255,255,255,0.11)),linear-gradient(rgba(0,0,0,0.34),rgba(0,0,0,0.34))] backdrop-blur-[20] rounded-[20px] text-center'>
                    <p className='text-xl xl:text-[40px] font-bold leading-[120%] bg-gradient-to-r from-[#B72204] to-[#FC6400] bg-clip-text text-transparent'>
                      00
                    </p>
                    <p className={`${poppins.className} mt-1 xl:mt-[10px] font-semibold text-sm xl:text-base text-[#E9E9E9]`}>
                      Hours
                    </p>
                  </div>
                </BorderBox>
                <BorderBox>
                  <div className='px-8 py-4 xl:py-6 bg-[linear-gradient(rgba(255,255,255,0.11),rgba(255,255,255,0.11)),linear-gradient(rgba(0,0,0,0.34),rgba(0,0,0,0.34))] backdrop-blur-[20] rounded-[20px] text-center'>
                    <p className='text-xl xl:text-[40px] font-bold leading-[120%] bg-gradient-to-r from-[#B72204] to-[#FC6400] bg-clip-text text-transparent'>
                      27
                    </p>
                    <p className={`${poppins.className} mt-1 xl:mt-[10px] font-semibold text-sm xl:text-base text-[#E9E9E9]`}>
                      Minutes
                    </p>
                  </div>
                </BorderBox>
                <BorderBox>
                  <div className='px-8 py-4 xl:py-6 bg-[linear-gradient(rgba(255,255,255,0.11),rgba(255,255,255,0.11)),linear-gradient(rgba(0,0,0,0.34),rgba(0,0,0,0.34))] backdrop-blur-[20] rounded-[20px] text-center'>
                    <p className='text-xl xl:text-[40px] font-bold leading-[120%] bg-gradient-to-r from-[#B72204] to-[#FC6400] bg-clip-text text-transparent'>
                      20
                    </p>
                    <p className={`${poppins.className} mt-1 xl:mt-[10px] font-semibold text-sm xl:text-base text-[#E9E9E9]`}>
                      Seconds
                    </p>
                  </div>
                </BorderBox>
              </div>
            </div>
            <div className='mt-8 flex gap-4 xl:gap-6'>
              <Link href='#'>
                <ButtonPrimary>
                  Claim Airdrop Now
                </ButtonPrimary>
              </Link>
              <Link href='#'
                className='my_border_gradient_primary px-4 xl:px-8 py-3 xl:py-5 text-center text-sm xl:text-base before:rounded-[10px]'>
                Join Community
              </Link>
            </div>
          </div>
          <Image
            src='/header_hero.png'
            alt='Hero image'
            width={540}
            height={690}
            sizes="(max-width: 768px) 300px, (max-width: 1024px) 400px, 540px"
            className="mt-5 xl:mt-0 w-[300px] h-[380px] md:w-[480px] md:h-[630px] 2xl:w-[540px] 2xl:h-[690px]"
          />
        </header>
  )
}