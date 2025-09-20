import Link from 'next/link';
import Image from 'next/image';
import BorderBox from './BorderBox';

export default function Navbar({active}: {active: string}) {
  return (
    <nav className='w-full absolute top-10'>
      <div className='mx-24'>
        <BorderBox>
          <div className='px-5 2xl:px-6 py-3 2xl:py-5 flex flex-nowrap items-center justify-between bg-[linear-gradient(rgba(255,255,255,0.07),rgba(255,255,255,0.07)),linear-gradient(rgba(0,0,0,0.28),rgba(0,0,0,0.28)),linear-gradient(rgba(25,5,7,0.54),rgba(25,5,7,0.54))] shadow-[0_20px_25px_rgba(0,0,0,0.1)] backdrop-blur-[20] rounded-[20px]'>
            <Link href='/'>
              <div className='flex gap-2 items-center'>
                <Image 
                    src='/logo_croma_art.png' 
                    alt='Logo of Croma-Art'
                    width={44}
                    height={44}
                />
                <span className='text-lg 2xl:text-xl uppercase bg-gradient-to-r from-[#B72204] to-[#FC6400] bg-clip-text text-transparent'>
                  <span>CROMA</span>
                  <span className='font-medium'>-</span>
                  <span className='font-bold'>ART</span>
                </span>
              </div>
            </Link>
            <div className='flex gap-8 justify-center items-center text-base 2xl:text-lg text-[#E9E9E9]'>
              <Link href='/' 
                className='font-bold bg-gradient-to-r from-[#B72204] to-[#FC6400] bg-clip-text text-transparent'>
                Home
              </Link>
              <Link href='#' 
                className='font-normal'>
                Roadmap
              </Link>
              <Link href='/whitepaper' 
                className='font-normal'>
                Whitepaper
              </Link>
              <Link href='#' 
                className='font-normal'>
                Tokenomics
              </Link>
              <Link href='#' 
                className='font-normal'>
                Airdrop
              </Link>
            </div>
            <Link href='#' 
              className='px-8 py-3.5 text-base 2xl:text-lg bg-gradient-to-r from-[#B72204] to-[#FC6400] text-white rounded-lg shadow-[0_2px_20px_rgb(252,100,0,0.5)]'>
              Dashboard
            </Link>
          </div>
        </BorderBox>
      </div>
    </nav>
  );
}
