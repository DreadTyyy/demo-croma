import React from 'react';

const SubSubHeading = ({children}: {children: React.ReactNode}) => {
  return (
    <h5 className="text-lg xl:text-[22px] 2xl:text-2xl font-medium text-[#E9E9E9] xl:leading-[50px]">
      {children}
    </h5>
  )
}

export default SubSubHeading;
