import { MouseEventHandler } from "react";

export default function ButtonPrimary({handleClick, children}
    : {
        handleClick?: MouseEventHandler<HTMLButtonElement>; 
        children: React.ReactNode
  }) {
  return (
    <button onClick={handleClick}
      className='px-4 xl:px-8 py-3 xl:py-5 bg-gradient-to-r from-[#B72204] to-[#FC6400] rounded-[10px] shadow-[0_2px_20px_rgba(252,100,0,0.5)] cursor-pointer text-sm xl:text-base'>
        {children}
    </button>
  );
}
