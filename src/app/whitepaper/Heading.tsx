import React from 'react';

const Heading = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='flex items-center gap-4'>
      <div className='w-4 xl:w-6 h-10 xl:h-15 bg-gradient-to-r from-[#B72204] to-[#FC6400] rounded-full'></div>
        <h3 className='text-2xl xl:text-3xl 2xl:text-4xl font-semibold -tracking-[0.04%] text-white'>
          {children}
        </h3>
    </div>
  )
};

export default Heading;
