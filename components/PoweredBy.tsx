'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import { Autoplay } from 'swiper/modules';

const supportTeams = [{
  icon: 'apple.svg',
  width: 130,
  height: 48
}, {
  icon: 'nvidia.svg',
  width: 218,
  height: 48
}, {
  icon: 'google.svg',
  width: 132,
  height: 48
}, {
  icon: 'openai.svg',
  width: 147,
  height: 48
}, {
  icon: 'lenovo.svg',
  width: 120,
  height: 48
}, {
  icon: 'opensea.svg',
  width: 154,
  height: 48
},]

const PoweredBy = () => {
  return (
    <section className='px-4 xl:px-[120px] py-5 xl:py-10 bg-gradient-to-r from-[#B72204] to-[#FC6400]'>
        <p className='font-semibold text-xl xl:text-2xl text-white text-center'>
          Powered By
        </p>
        <div className='mt-8 xl:mt-10 w-full flex justify-center'>
          <Swiper
            // spaceBetween={10}
            slidesPerView={2}
            loop={true}
            autoplay={{ delay: 0, disableOnInteraction: false }}
            speed={6000}
            modules={[Autoplay]}
            breakpoints={{
              640: {
                slidesPerView: 6,
                spaceBetween: 16,
              },
            }}
          >
            {supportTeams.map(({icon, width, height}: {icon: string; width: number; height: number}) => (
              <SwiperSlide key={icon}>
                <div className='w-full flex justify-center'>
                  <Image
                    src={`/support_logo/${icon}`}
                    alt='Logo apple'
                    width={width}
                    height={height}
                    sizes="(max-width: 768px) 32px, (max-width: 1024px) 48px, 48px"
                    className="w-[150px] h-[32px] md:h-[48px]"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
  )
}

export default PoweredBy;
