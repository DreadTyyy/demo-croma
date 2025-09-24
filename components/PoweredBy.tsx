'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import { Autoplay } from 'swiper/modules';
import { useRef } from 'react';

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
 const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], 
  });

  const x = useTransform(scrollYProgress, [0.0, 0.2, 0.4, 0.5], ["90%","50%", "10%", "1%"]);
  return (
    <section ref={ref} className='py-5 xl:py-10 bg-gradient-to-r from-[#B72204] to-[#FC6400]'>
        <p className='px-0 md:px-4 xl:px-[120px] font-semibold text-xl xl:text-2xl text-white text-center'>
          Powered By
        </p>
        {/* Scroll on desktop */}
        <div className='max-w-screen overflow-x-hidden'>
          <motion.div style={{ x }} className='hidden xl:flex mt-4 xl:mt-6 2xl:mt-10 w-full justify-center'>
            <SliderComponent />
          </motion.div>
        </div>
        {/* Mobile slider */}
        <div className='flex xl:hidden mt-4 md:mt-8 xl:mt-10 w-full justify-center'>
          <SliderComponent />
        </div>
      </section>
  )
}

export default PoweredBy;

const SliderComponent = () => {
  return (
    <Swiper
            // spaceBetween={10}
            slidesPerView={3}
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
                    sizes="(max-width: 768px) 24px, (max-width: 1024px) 40px, 48px"
                    className="w-[150px] h-[24px] md:h-[40px] 2xl:h-[48px]"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
  )
};
