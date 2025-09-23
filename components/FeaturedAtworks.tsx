'use client';

import { poppins } from "@/app/font";
import ButtonPrimary from "./ButtonPrimary";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';
import { useState } from "react";

const FeaturedArtworks = () => {
  const [tab, setTab] = useState<number>(0);
  
  const padding = 'px-4 xl:px-[100px]'
  return (
    <section className='py-[60px] border-t border-b border-[#414141]'>
      <div className={`${poppins.className} ${padding} flex flex-col text-center items-center gap-4`}>
        <div className='px-3.5 py-2 w-fit rounded-full bg-black border border-[#FC6400]'>
          <span className='text-[#FC6400] text-base'>CROMA Artworks</span>
        </div>
        <h2 className='text-2xl xl:text-4xlfont-semibold text-white tracking-[-0.04%]'>FEATURED ARTWORKS</h2>
        <p className='text-base xl:text-xl font-medium text-[#E9E9E9] opacity-80'>
          Hand-drawn masterpieces immortalized as NFTs
        </p>
      </div>
      <div className={`${padding} mt-6`}>
        <div className={`${poppins.className} w-full flex justify-center`}>
          <div className='p-2 relative flex items-center rounded-full h-12 2xl:h-16 w-fit inset-ring-[#979797] bg-linear-to-tl from-[rgba(255,255,255,0.83)] to-[rgba(255,255,255,0.44)] inset-shadow-[1px_3px_6px_0_rgba(0,0,0,0,0.25)]'>
            <div className='z-0 absolute top-[2px] w-[120px] xl:w-[150px] 2xl:w-[220px] h-[44px] 2xl:h-[60px] bg-gradient-to-r from-[#B72204] to-[#FC6400] rounded-full transition-all duration-300'
              style={{
                transform: tab === 0 ? 'translateX(0)' : 'translateX(100%)'
              }}
            ></div>
            <div className='flex text-center items-center w-[120px] xl:w-[150px] 2xl:w-[220px] h-full z-10 cursor-pointer'
                onClick={() => setTab(0)}
            >
              <p className='text-white font-semibold xl:text-lg 2xl:text-2xl w-full'>All atworks</p>
            </div>
            <div className='flex text-center items-center  w-[120px] xl:w-[150px] 2xl:w-[220px] h-full z-10 cursor-pointer'
                onClick={() => setTab(1)}
            >
              <p className='text-white font-medium xl:text-lg 2xl:text-2xl w-full'>Feature</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 px-4">
        <Swiper
        slidesPerView="auto"
        spaceBetween={24}
        freeMode={true}
        pagination={{
          dynamicBullets: true,
          clickable: true,
          el: '.custom-pagination',
          bulletClass: 'custom-bullet',
          bulletActiveClass: 'custom-active-bullet',
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper my_artworks_gallery"
      >
        {dataImages.map((item, i) => (
            item.isList === false ? (
                <SwiperSlide key={`single-${i}`} 
                  className='group relative overflow-hidden'
                  style={{ 
                    width: `${item.covers!.width}px`,
                    height: `${item.covers!.height}px`
                  }}
                >
                  <div className='z-[9] group-hover:opacity-100 opacity-0 absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[rgba(0,0,0,0.9)] to-[rgba(0,0,0,0)] transition-all duration-300'></div>
                  <div className='z-10 px-2 absolute group-hover:opacity-100 opacity-0 bottom-2 w-full'>
                    <p className='text-lg font-semibold'>{item.artist!}</p>
                    <div className={`${poppins.className}`}>
                    <span className='text-[13px] opacity-80'>{item.text!}</span>
                    <span className='ml-[2px] text-[13px] text-[#FC6400] font-bold'>
                      <Link href={item.url!}>
                        Read Full Story
                      </Link>
                    </span>
                    </div>
                  </div>
                  <Image 
                    src={`/artworks/${item.covers!.image}`}
                    alt={`Image by ${item.artist}`}
                    fill
                    className='object-cover object-center'
                  />
                </SwiperSlide>
            ) : (
                <SwiperSlide key={`list-${i}`} className='space-y-6'
                  style={{ 
                    width: `${item.list![0].covers.width}px`,
                    minWidth: `${item.list![0].covers.width}px`
                   }}
                >
                    {item.list!.map((t, j) => (
                    <div key={`list-${i}-${j}`}
                      className='group relative overflow-hidden'
                      style={{ 
                        width: `${t.covers!.width}px`,
                        height: `${t.covers!.height}px`
                      }}
                    >
                      <div className='z-[9] group-hover:opacity-100 opacity-0 absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[rgba(0,0,0,0.9)] to-[rgba(0,0,0,0)] transition-all duration-300'></div>
                      <div className='z-10 px-2 absolute group-hover:opacity-100 opacity-0 bottom-2 w-full'>
                        <p className='text-lg font-semibold'>{t.artist!}</p>
                        <div className={`${poppins.className}`}>
                        <span className='text-[13px] opacity-80'>{t.text!}</span>
                        <span className='ml-[2px] text-[13px] text-[#FC6400] font-bold'>
                        <Link href={t.url!}>
                            Read Full Story
                        </Link>
                        </span>
                        </div>
                      </div>
                      <Image 
                        src={`/artworks/${t.covers!.image}`}
                        alt={`Image by ${t.artist}`}
                        fill
                        className='object-cover object-center'
                      />
                    </div>
                    ))}
                </SwiperSlide>
            )
            ))}
            <div className="custom-pagination"></div>
      </Swiper>
      </div>
      <div className={`${padding} flex justify-center`}>
        <ButtonPrimary>
            See All Artwork
        </ButtonPrimary>
      </div>
    </section>
  )
};

export default FeaturedArtworks;

const dataImages = [{
    isList: false,
    covers: {
      image: 'image_3.png',
      width: 208,
      height: 338
    },
    artist: 'Pavel Durov',
    text: 'Pavel Durov is the founder of Telegram, a messaging platform known for its strong encryption and commitment to freedom of expression. Born in 1984 in Russia, Pavel was once dubbed the "Zuckerberg of Russia"',
    url: '#',
}, {
    isList: true,
    list: [
      {
        covers: {
          image: 'image_5.png',
          width: 232,
          height: 213
        },
        artist: 'Pavel Durov',
        text: 'Pavel Durov is the founder of Telegram, a messaging"',
        url: '#',
      },
      {
        covers: {
          image: 'image_4.png',
          width: 232,
          height: 196
        },
        artist: 'Pavel Durov',
        text: 'Pavel Durov is the founder of Telegram, a messaging"',
        url: '#',
      },
    ]
}, {
    isList: false,
    covers: {
      image: 'image_8.png',
      width: 208,
      height: 352
    },
    artist: 'Pavel Durov',
    text: 'Pavel Durov is the founder of Telegram, a messaging platform known for its strong encryption and commitment to freedom of expression. Born in 1984 in Russia, Pavel was once dubbed the "Zuckerberg of Russia"',
    url: '#',
}, {
    isList: false,
    covers: {
      image: 'image_1.png',
      width: 276,
      height: 385
    },
    artist: 'Pavel Durov',
    text: 'Pavel Durov is the founder of Telegram, a messaging platform known for its strong encryption and commitment to freedom of expression. Born in 1984 in Russia, Pavel was once dubbed the "Zuckerberg of Russia"',
    url: '#',
}, {
    isList: true,
    list: [
      {
        covers: {
          image: 'image_7.png',
          width: 380,
          height: 237
        },
        artist: 'Pavel Durov',
        text: 'Pavel Durov is the founder of Telegram, a messaging platform known for its strong encryption and commitment to freedom of expression. Born in 1984 in Russia, Pavel was once dubbed the "Zuckerberg of Russia"',
        url: '#',
      },
      {
        covers: {
          image: 'image_6.png',
          width: 380,
          height: 172
        },
        artist: 'Pavel Durov',
        text: 'Pavel Durov is the founder of Telegram, a messaging platform known for its strong encryption and commitment to freedom of expression. Born in 1984 in Russia, Pavel was once dubbed the "Zuckerberg of Russia"',
        url: '#',
      },
    ]
}, {
    isList: false,
    covers: {
      image: 'image_3.png',
      width: 232,
      height: 359
    },
    artist: 'Pavel Durov',
    text: 'Pavel Durov is the founder of Telegram, a messaging platform known for its strong encryption and commitment to freedom of expression. Born in 1984 in Russia, Pavel was once dubbed the "Zuckerberg of Russia"',
    url: '#',
}, {
    isList: false,
    covers: {
      image: 'image_3.png',
      width: 208,
      height: 338
    },
    artist: 'Pavel Durov',
    text: 'Pavel Durov is the founder of Telegram, a messaging platform known for its strong encryption and commitment to freedom of expression. Born in 1984 in Russia, Pavel was once dubbed the "Zuckerberg of Russia"',
    url: '#',
}, {
    isList: true,
    list: [
      {
        covers: {
          image: 'image_5.png',
          width: 232,
          height: 213
        },
        artist: 'Pavel Durov',
        text: 'Pavel Durov is the founder of Telegram, a messaging"',
        url: '#',
      },
      {
        covers: {
          image: 'image_4.png',
          width: 232,
          height: 196
        },
        artist: 'Pavel Durov',
        text: 'Pavel Durov is the founder of Telegram, a messaging"',
        url: '#',
      },
    ]
}, {
    isList: false,
    covers: {
      image: 'image_8.png',
      width: 208,
      height: 352
    },
    artist: 'Pavel Durov',
    text: 'Pavel Durov is the founder of Telegram, a messaging platform known for its strong encryption and commitment to freedom of expression. Born in 1984 in Russia, Pavel was once dubbed the "Zuckerberg of Russia"',
    url: '#',
}, {
    isList: false,
    covers: {
      image: 'image_1.png',
      width: 276,
      height: 385
    },
    artist: 'Pavel Durov',
    text: 'Pavel Durov is the founder of Telegram, a messaging platform known for its strong encryption and commitment to freedom of expression. Born in 1984 in Russia, Pavel was once dubbed the "Zuckerberg of Russia"',
    url: '#',
}, {
    isList: true,
    list: [
      {
        covers: {
          image: 'image_7.png',
          width: 380,
          height: 237
        },
        artist: 'Pavel Durov',
        text: 'Pavel Durov is the founder of Telegram, a messaging platform known for its strong encryption and commitment to freedom of expression. Born in 1984 in Russia, Pavel was once dubbed the "Zuckerberg of Russia"',
        url: '#',
      },
      {
        covers: {
          image: 'image_6.png',
          width: 380,
          height: 172
        },
        artist: 'Pavel Durov',
        text: 'Pavel Durov is the founder of Telegram, a messaging platform known for its strong encryption and commitment to freedom of expression. Born in 1984 in Russia, Pavel was once dubbed the "Zuckerberg of Russia"',
        url: '#',
      },
    ]
}, {
    isList: false,
    covers: {
      image: 'image_3.png',
      width: 232,
      height: 359
    },
    artist: 'Pavel Durov',
    text: 'Pavel Durov is the founder of Telegram, a messaging platform known for its strong encryption and commitment to freedom of expression. Born in 1984 in Russia, Pavel was once dubbed the "Zuckerberg of Russia"',
    url: '#',
},]

{/* <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      ></Swiper> */}
