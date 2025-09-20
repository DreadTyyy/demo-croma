import React from "react";

export default function GlassBox({
    baseColor, children
  }: {
    baseColor: string; 
    children: React.ReactNode
  }) {
    let borderGradient;
    if (baseColor == 'orange') {
        borderGradient = 'my_border_gradient_orange';
    } else if (baseColor == 'white') {
        borderGradient = 'my_border_gradient_white_dark';
    } else if (baseColor == 'primary') {
        borderGradient = 'my_border_gradient_primary'
    }
    return (
        <div className={`${borderGradient} p-[1px] before:rounded-[20px] rounded-[20px] h-full`}>
          <div className={`relative h-full overflow-hidden rounded-[20px] bg-[linear-gradient(rgba(255,255,255,0.11),rgba(255,255,255,0.11)),linear-gradient(rgba(0,0,0,0.34),rgba(0,0,0,0.34))]`}>
            {children}        
          </div>
        </div>
    )
}