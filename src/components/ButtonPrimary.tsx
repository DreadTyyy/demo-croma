import { MouseEventHandler } from "react";

export default function ButtonPrimary({bgColor,handleClick, children}
    : {
        bgColor?: string;
        handleClick?: MouseEventHandler<HTMLButtonElement>; 
        children: React.ReactNode
  }) {
  
  let _bgColor = bgColor ?? 'bg-gradient-to-r from-[#B72204] to-[#FC6400]';
  return (
    <button onClick={handleClick}
      className={`${_bgColor} px-4 lg:px-6 2xl:px-8 py-3 lg:py-4 2xl:py-5  rounded-[10px] shadow-[0_2px_20px_rgba(252,100,0,0.5)] cursor-pointer text-sm lg:text-base transition-all duration-300 hover:shadow-[0_2px_40px_rgba(252,100,0,0.7)]`}>
        {children}
    </button>
  );
}
