import Image from 'next/image';
import { poppins } from '@/app/font';
import ButtonPrimary from '@/components/ButtonPrimary';

const NftGallery = () => {
  return (
    <section className='relative my-[60px] py-[60px] px-4 xl:px-[64px] 2xl:px-[100px]'>
      <div className='-z-10 absolute top-0 left-0 w-full h-full bg-linear-to-r from-0% from-[#CE2CD3] via-50% via-[#0083FB] to-[96%] to-[#FC6400] blur-[40px]'>
      </div>
      <div className='px-4 xl:px-[64px] py-8 xl:py-0 flex flex-col xl:flex-row justify-between items-center gap-y-4 bg-linear-to-r from-0% from-[#CE2CD3] via-50% via-[#0083FB] to-[96%] to-[#FC6400]'>
        <div className='flex flex-col gap-4'>
          <div className={`${poppins.className} flex flex-col text-left gap-4`}>
            <div className='px-3.5 py-2 w-fit rounded-full bg-black border border-[#FC6400]'>
              <span className='text-[#FC6400] text-base'>NFT Gallery</span>
            </div>
            <h2 className='text-2xl xl:text-4xl font-semibold text-white tracking-[-0.04%]'>
              CROMA Meme & Art Gallery
            </h2>
            <p className='text-base xl:text-xl font-medium text-[#E9E9E9] opacity-80 max-w-[680px]'>
              From the community, for the community. Show your creativity through NFT & meme art. lets Submit Your Art
            </p>
          </div>
          <div className='w-fit'>
            <ButtonPrimary>
              Explore on OpenSea
            </ButtonPrimary>
          </div>
        </div>
        <div className='flex max-w-[600px] gap-2'>
          <div>
            <div className='h-[320px] rounded-2xl overflow-hidden'>
              <Image src='/ape-hat.png' alt='NFT' width={280} height={320} className='w-full h-full object-cover' />
            </div>
            <div className='mt-2 h-[190px] rounded-2xl overflow-hidden'>
              <Image src='/ape-suit.png' alt='NFT' width={280} height={190} className='w-full h-full object-cover' />
            </div>
          </div>
          <div>
            <div className='h-[130px] rounded-2xl overflow-hidden'>
              <Image src='/ape-coin.png' alt='NFT' width={280} height={130} className='w-full h-full object-cover' />
            </div>
            <div className='mt-2 h-[380px] rounded-2xl overflow-hidden'>
              <Image src='/ape-warrior.png' alt='NFT' width={280} height={380} className='w-full h-full object-cover' />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NftGallery;
