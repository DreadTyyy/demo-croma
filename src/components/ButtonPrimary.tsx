import { MouseEventHandler } from "react";

export default function ButtonPrimary({bgColor,shadow,hoverShadow,handleClick, children}
    : {
        bgColor?: string;
        shadow?: string;
        hoverShadow?: string;
        handleClick?: MouseEventHandler<HTMLButtonElement>; 
        children: React.ReactNode
  }) {
  
  let _bgColor = bgColor ?? 'bg-gradient-to-r from-[#B72204] to-[#FC6400]';
  let _shadow = shadow ?? 'hover:shadow-[0_2px_40px_rgba(252,100,0,0.5)]';
  let _hoverShadow = hoverShadow ?? 'hover:shadow-[0_2px_40px_rgba(252,100,0,0.7)]';
  return (
    <button onClick={handleClick}
      className={`${_bgColor} ${_shadow} ${_hoverShadow} px-4 lg:px-6 2xl:px-8 py-3 lg:py-4 2xl:py-5  rounded-[10px] cursor-pointer text-sm 2xl:text-base transition-all duration-300`}>
        {children}
    </button>
  );
}
