import React from 'react';

const SubHeading = ({children}: {children: React.ReactNode}) => {
  return (
    <h4 className="text-lg xl:text-2xl 2xl:text-3xl font-semibold text-[#E9E9E9] leading-[30px] tracking-[-0.04%]">
      {children}
    </h4>
  )
}

export default SubHeading;
