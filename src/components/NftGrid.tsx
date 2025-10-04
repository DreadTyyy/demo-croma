'use client';

import React, { useEffect, useMemo, useState } from 'react'
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { nftImages } from '@/utils/nftData';

const NftGrid = () => {
  const choosedNft =  useMemo(() => nftImages.filter(i => i.nftGallery), [nftImages]);
  const [indexNft, setIndexNft] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndexNft((prev) => prev === choosedNft.length - 1 ? 0 : prev + 1);
    }, 5000)
    return () => clearInterval(interval);
  }, [indexNft]);

  return (
    <div className='w-full lg:w-1/2 flex justify-center'>
      <div className='relative flex max-w-[600px] w-full lg:w-[320px] h-[420px] items-end overflow-hidden rounded-[10px]'>
        <AnimatePresence mode='sync'>
          <motion.div 
            key={indexNft}
            initial={{ y: -420 }}
            animate={{ y: [-420, -350, -350, 0], transition: { duration: 1, times: [0, 0.1, 0.3, 1], ease: 'backInOut' } }}
            exit={{ y: 420, transition: { delay: 1, duration: 1, ease: 'backInOut' } }}
            className='absolute inset-0 h-full w-full rounded-[10px] overflow-hidden'
          >
            <Image 
              src={`/nft/${choosedNft[indexNft].cover.image}`} 
              alt='NFT' 
              fill
              className='w-full h-full object-cover' 
              draggable={false}
              onContextMenu={(e) => e.preventDefault()} 
              style={{ pointerEvents: "none" }} 
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

export default NftGrid;
