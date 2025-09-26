'use client';

import Link from 'next/link';
import Image from 'next/image';
import { poppins } from '@/app/font';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import GlassBox from '@/components/GlassBox';
import ButtonPrimary from '@/components/ButtonPrimary';

import '@/app/globals.css';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { motion } from 'framer-motion';

const dataNews = [{
    id: 1,
    url: '#',
    cover: 'news_1.png',
    title: 'Layer-2 Expansion: Ethereum Scaling and CromaChain’s Role in Web3 Adoption'
},{
    id: 2,
    url: '#',
    cover: 'news_2.png',
    title: 'NFT Market Rebounds: From Collectibles to CromaArt’s Curated Blockchain Art'
},{
    id: 3,
    url: '#',
    cover: 'news_3.png',
    title: 'Web3 Industry Expands: From Tokenized Assets to Enterprise Adoption'
},{
    id: 4,
    url: '#',
    cover: 'news_1.png',
    title: 'Layer-2 Expansion: Ethereum Scaling and CromaChain’s Role in Web3 Adoption'
},{
    id: 5,
    url: '#',
    cover: 'news_2.png',
    title: 'NFT Market Rebounds: From Collectibles to CromaArt’s Curated Blockchain Art'
},{
    id: 6,
    url: '#',
    cover: 'news_3.png',
    title: 'Web3 Industry Expands: From Tokenized Assets to Enterprise Adoption'
}]

const Trixnews = () => {
  return (
    <section>
      <div className={`${poppins.className} mb-10 mx-4 xl:mx-[64px] 2xl:mx-[100px] flex flex-col text-center items-center gap-4`}>
        <div className='px-3.5 py-2 w-fit rounded-full bg-black border border-[#FC6400]'>
          <span className='text-[#FC6400] text-base'>Trixnews</span>
        </div>
        <motion.div
          initial={{ opacity: 0, filter: 'blur(20px)' }}
          whileInView={{ opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.3 }} 
          className='blur-animate'
        >
          <h2 className='text-2xl lg:text-3xl 2xl:text-4xl font-semibold tracking-[-0.04%] bg-gradient-to-r from-[#B72204] to-[#FC6400] bg-clip-text text-transparent'>
            Latest Update
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, filter: 'blur(20px)' }}
          whileInView={{ opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.3 }} 
          className='blur-animate'
        >
          <p className='text-base 2xl:text-xl font-medium text-[#E9E9E9] opacity-80 max-w-fit xl:max-w-[500px]'>
            Hand-drawn masterpieces immortalized as NFTs
          </p>
        </motion.div>
      </div>
      <div className={`${poppins.className} mx-4 xl:mx-0`}>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          speed={500}
          loop={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false, 
          }}
          pagination={{
            dynamicBullets: true,
            clickable: true,
            el: '.custom-pagination',
            bulletClass: 'custom-bullet',
            bulletActiveClass: 'custom-active-bullet',
          }}
          onSetTransition={(swiper, transition) => {
            swiper.slides.forEach((slide: HTMLElement) => {
                slide.style.transition = `${transition}ms`;
          });
          }}
          modules={[EffectCoverflow, Pagination]}
          className='mySwiper'
        >
            {dataNews.map((p) => (
            <SwiperSlide
                key={p.id}
                className='max-w-[600px] mx-8'
            >
              <Link href={p.url}>
                <GlassBox baseColor='orange'>
                    <div className='py-8 px-4 2xl:px-6 w-full backdrop-blur-[50px]'>
                    <div className='relative w-full h-[270px] bg-red-500 rounded-[20px] overflow-hidden'>
                        <Image
                        src={`/news_cover/${p.cover}`}
                        alt={p.title}
                        fill
                        className='object-cover object-center w-full h-full'
                        />
                    </div>
                    <h2 className='mt-6 text-base lg:text-xl 2xl:text-2xl font-semibold text-white'>
                        {p.title}
                    </h2>
                    </div>
                </GlassBox>
              </Link>
            </SwiperSlide>
            ))}
            <div className='custom-pagination'></div>
        </Swiper>
      </div>
      <div className='w-full flex flex-col justify-center items-center'>
        <ButtonPrimary>
            <Link href='trixnews.com' className='mt-6' target='_blank'>
            Read More on Trixnews.com
            </Link>
        </ButtonPrimary>
      </div>
    </section>
  )
}

export default Trixnews;
