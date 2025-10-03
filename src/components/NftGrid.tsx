'use client';

import React from 'react'
import Image from 'next/image';
import { motion } from 'framer-motion';
import { nftImages } from '@/utils/nftData';

const NftGrid = () => {
  const choosedNft = nftImages.filter((item) => item.nftGallery === true);

  return (
    <div className='flex min-w-1/2 max-w-[600px] gap-2'>
      <div className='w-1/2'>
        <div className='h-[320px] w-full rounded-[10px] overflow-hidden'>
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: 320 }}
            transition={{ duration: 1, ease: 'easeIn' }}
            viewport={{ once: true, amount: 0.3 }}
            className='h-[320px] rounded-[10px] overflow-hidden'
          >
            <Image 
              src={`/nft/${choosedNft[0].cover.image}`} 
              alt='NFT' 
              width={280} 
              height={320} 
              className='w-full h-full object-cover' 
              draggable={false}
              onContextMenu={(e) => e.preventDefault()} 
              style={{ pointerEvents: "none" }} 
            />
          </motion.div>
        </div>
        <div className='mt-2 h-[190px] rounded-[10px] overflow-hidden'>
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: 190 }}
            transition={{ delay: 0.5, duration: 0.5, ease: 'easeIn' }}
            viewport={{ once: true, amount: 0.2 }}
            className='h-[190px] rounded-[10px] overflow-hidden'
          >
            <Image 
              src={`/nft/${choosedNft[1].cover.image}`} 
              alt='NFT' 
              width={280} 
              height={190} 
              className='w-full h-full object-cover' 
              draggable={false}
              onContextMenu={(e) => e.preventDefault()} 
              style={{ pointerEvents: "none" }} 
            />
          </motion.div>
        </div>
      </div>
      <div className='w-1/2'>
        <div className='h-[130px] w-full rounded-[10px] overflow-hidden'>
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: 130 }}
            transition={{ duration: 0.5, ease: 'easeIn' }}
            viewport={{ once: true, amount: 0.3 }}
            className='h-[130px] rounded-[10px] overflow-hidden'
          >
            <Image 
              src={`/nft/${choosedNft[2].cover.image}`} 
              alt='NFT' 
              width={280} 
              height={130} 
              className='w-full h-full object-cover' 
              draggable={false}
              onContextMenu={(e) => e.preventDefault()} 
              style={{ pointerEvents: "none" }} 
            />
          </motion.div>
        </div>
        <div className='mt-2 h-[380px] rounded-[10px] overflow-hidden'>
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: 380 }}
            transition={{ delay: 0.5, duration: 1, ease: 'easeIn' }}
            viewport={{ once: true, amount: 0.2 }}
            className='h-[380px] rounded-[10px] overflow-hidden'
          >
            <Image 
              src={`/nft/${choosedNft[3].cover.image}`} 
              alt='NFT' 
              width={280} 
              height={380} 
              className='w-full h-full object-cover' 
              draggable={false}
              onContextMenu={(e) => e.preventDefault()} 
              style={{ pointerEvents: "none" }} 
            />
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default NftGrid;
