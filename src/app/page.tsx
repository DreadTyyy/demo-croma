import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

import HeaderHomepage from '@/components/homepage/HeaderHomepage';
import PoweredBy from '@/components/homepage/PoweredBy';
import Trixnews from '@/components/homepage/Trixnews';
import Community from '@/components/homepage/Community';
import FeaturedArtworks from '@/components/homepage/FeaturedAtworks';
import CromaUniverse from '@/components/homepage/CromaUniverse';
import CromaTokenomics from '@/components/homepage/CromaTokenomics';
import WalletApplication from '@/components/homepage/WalletApplication';
import Roadmap from '@/components/homepage/Roadmap';
import ClaimToken from '@/components/homepage/ClaimToken';
import Profit from '@/components/homepage/Profit';
import NftGallery from '@/components/homepage/NftGallery';
import Merch from '@/components/homepage/Merch';
import Partnership from '@/components/homepage/Partnership';
import CromaStory from '@/components/homepage/CromaStory';
import BuyForm from '@/components/homepage/BuyForm';

export default function Home() {
  return (
    <>
      <div className='relative pt-[140px] overflow-hidden pb-10 bg-[url("/header_pattern.png")] bg-auto lg:bg-cover bg-center'>
        <div className='-z-[9] absolute top-0 left-0 w-full h-full bg-gradient-to-br from-black to-[rgba(0,0,0,0.26)]'>
        </div>
        <div className='absolute inset-0 bg-[url("/header_stars.png")] bg-cover bg-center -z-20'></div>
        {/* <Image
          src='/header_pattern.png'
          alt='Rectangle pattern image'
          fill
          className='-z-10 object-cover'
        />
        <Image
          src='/header_stars.png'
          alt='Stars pattern image'
          fill
          className='-z-10 object-cover'
        /> */}
        <Navbar active='home' />
        <div className='-z-[1] absolute -top-6 -left-[8%] 2xl:-left-[10%]'>
          <Image 
            src='/object_side_header.png'
            alt='Coin side header'
            width={281}
            height={447}
            sizes='(max-width: 768px) 150px, (max-width: 1024px) 200px, 281px'
            className='w-[60px] h-[140px] md:w-[200px] md:h-[340px] 2xl:w-[281px] 2xl:h-[447px]'
          />
        </div>
        <HeaderHomepage />
        <div className='-z-[8] absolute -bottom-1/2 right-0 blur-[280px] size-[800px] bg-[#FC6400] rounded-full'></div>
      </div>
      <PoweredBy />
      <CromaUniverse />
      <FeaturedArtworks />
      <CromaTokenomics /> {/* CRM TOKEN */}
      <WalletApplication /> {/* WALLET APP */}
      <Roadmap /> {/* ROADMAP */}
      <ClaimToken /> {/* HOW TO CLAIM */}
      <Profit /> {/* NO TAX NO TRICKS */}
      <Community /> {/* COMMUNITY */}
      <Trixnews /> {/* TRIXNEWS */}
      <NftGallery /> {/* NFT GALLERY */}
      <Merch /> {/* MERCH */}
      <Partnership /> {/* PARTNERSHIP */}
      <CromaStory /> {/* STORY OF CRM */}
      <BuyForm /> {/* HOW TO BUY */}
      <Footer /> {/* FOOTER */}
    </>
  );
}
