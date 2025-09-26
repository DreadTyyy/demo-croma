import React from 'react';

const Paragraph = ({opacity, children}: {opacity?: number; children: React.ReactNode}) => {
  const getOpacity = opacity ?? 100;
  const classOpacity: Record<number, string> = {
    10: 'opacity-10',
    20: 'opacity-20',
    30: 'opacity-30',
    40: 'opacity-40',
    50: 'opacity-50',
    60: 'opacity-60',
    70: 'opacity-70',
    80: 'opacity-80',
    90: 'opacity-90',
    100: 'opacity-100',
  }

  return (
    <p className={`text-base xl:text-[22px] 2xl:text-2xl font-medium text-[#E9E9E9] ${classOpacity[getOpacity]} xl:leading-[50px]`}>
    {children}
    </p>
  )
}

export default Paragraph;
