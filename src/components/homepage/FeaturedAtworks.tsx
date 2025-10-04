'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { poppins } from "@/app/font";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import ButtonPrimary from "@/components/ButtonPrimary";
import NftGrid from "@/components/NftGrid";
import { URLS } from "@/constant/urls";
import { NFTItemType } from "@/types/nft";
import { nftImages } from "@/utils/nftData";

import 'swiper/css';
import 'swiper/css/pagination';

type NFTItemProps = {
  item: NFTItemType
}

const FeaturedArtworks = () => {
  const [tab, setTab] = useState<number>(0);
  
  const padding = 'px-4 lg:px-[100px]'
  return (
    <section className='relative py-[60px] border-t border-b border-[#414141]'>
      <div className='-z-10 absolute -bottom-[200px] -left-[350px] size-[700px] rounded-full bg-[radial-gradient(circle_at_center,#FC6400_0%,rgba(242,39,174,0)_70%)] blur-3xl opacity-50 xl:opacity-80'></div>
      <div className={`${poppins.className} ${padding} flex flex-col text-center items-center gap-2 2xl:gap-4`}>
        <div className='px-3.5 py-2 w-fit rounded-full bg-black border border-[#FC6400]'>
          <span className='text-[#FC6400] text-sm md:text-base'>CROMA Artworks</span>
        </div>
        <motion.div
          initial={{ opacity: 0, filter: 'blur(6px)' }}
          whileInView={{ opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.3 }} 
          className='blur-animate'
        >
          <h2 className='text-2xl lg:text-3xl 2xl:text-4xl font-semibold text-white tracking-[-0.04%]'>FEATURED ARTWORKS</h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, filter: 'blur(6px)' }}
          whileInView={{ opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.1 }} 
          className='blur-animate'
        >
          <p className='text-base 2xl:text-xl font-medium text-[#E9E9E9] opacity-80'>
            Hand-drawn masterpieces immortalized as NFTs
          </p>
        </motion.div>
      </div>
      <div className={`${padding} mt-6`}>
        <div className={`${poppins.className} w-full flex justify-center`}>
          <div className='p-2 relative flex items-center rounded-full h-12 2xl:h-16 w-fit inset-ring-[#979797] bg-linear-to-tl from-[rgba(255,255,255,0.83)] to-[rgba(255,255,255,0.44)] inset-shadow-[1px_3px_6px_0_rgba(0,0,0,0,0.25)]'>
            <div className='z-0 absolute top-[2px] w-[120px] lg:w-[150px] 2xl:w-[220px] h-[44px] 2xl:h-[60px] bg-gradient-to-r from-[#B72204] to-[#FC6400] rounded-full transition-all duration-300'
              style={{
                transform: tab === 0 ? 'translateX(0)' : 'translateX(100%)'
              }}
            ></div>
            <div className='flex text-center items-center w-[120px] lg:w-[150px] 2xl:w-[220px] h-full z-10 cursor-pointer'
                onClick={() => setTab(0)}
            >
              <p className='text-white font-semibold lg:text-lg 2xl:text-2xl w-full'>All atworks</p>
            </div>
            <div className='flex text-center items-center w-[120px] lg:w-[150px] 2xl:w-[220px] h-full z-10 cursor-pointer'
                onClick={() => setTab(1)}
            >
              <p className='text-white font-medium lg:text-lg 2xl:text-2xl w-full'>Feature</p>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-5 lg:mt-10 px-4 block'>
        <Swiper
        slidesPerView='auto'
        spaceBetween={24}
        initialSlide={0}
        centeredSlides={false}
        centerInsufficientSlides={false}
        freeMode={true}
        pagination={{
          dynamicBullets: true,
          clickable: true,
          el: '.custom-pagination',
          bulletClass: 'custom-bullet',
          bulletActiveClass: 'custom-active-bullet',
        }}
        modules={[FreeMode, Pagination]}
        className='mySwiper my_artworks_gallery'
      >
        {nftImages.map((item, i) => {
          if (item.featuredNetwork)
          return (
            <SwiperSlide
              key={i}
              className="group relative overflow-hidden border-[#FC6400] hover:border-[2px]"
              style={{
                width: `304px`,
                height: `380px`,
              }}
            >
              <NftCard item={item} />
            </SwiperSlide>
          )
        })}
            <div className='custom-pagination'></div>
      </Swiper>
      </div>
      <Link href={URLS.opensea} target='_blank' 
        className={`${padding} flex justify-center`}
      >
        <ButtonPrimary>
            See All Artwork
        </ButtonPrimary>
      </Link>
    </section>
  )
};

export default FeaturedArtworks;

const NftCard = ({ item }: NFTItemProps) => {
  return (
    <>
      <div className="z-[9] group-hover:opacity-100 opacity-0 absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[rgba(0,0,0,0.9)] to-[rgba(0,0,0,0)] transition-all duration-300"></div>
      <div className="z-10 px-2 absolute group-hover:opacity-100 opacity-0 bottom-2 w-full">
        <p className="text-lg font-semibold line-clamp-1 overflow-ellipsis">{item.artist!}</p>
        <div className={`${poppins.className}`}>
          <span className="text-[13px] opacity-80 line-clamp-4 overflow-hidden">{item.text!}</span>
          <span className="ml-[2px] text-[13px] text-[#FC6400] font-bold">
            <Link href={item.url!}>
              Read Full Story
            </Link>
          </span>
        </div>
      </div>
      <Image
        src={`/nft/${item.cover.image}`}
        alt={`Image by ${item.artist}`}
        fill
        className="object-cover w-auto object-center"
        draggable={false}
        onContextMenu={(e) => e.preventDefault()} 
        style={{ pointerEvents: "none" }} 
      />
    </>
  )
}

