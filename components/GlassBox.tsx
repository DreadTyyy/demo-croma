import React from "react";

export default function GlassBox({
    baseColor, rounded = '20', children
  }: {
    baseColor: string; 
    rounded?: string; 
    children: React.ReactNode
  }) {
    let borderGradient;
    if (baseColor == 'orange') {
        borderGradient = 'my_border_gradient_orange';
    } else if (baseColor == 'white') {
        borderGradient = 'my_border_gradient_white_dark';
    } else if (baseColor == 'primary') {
        borderGradient = 'my_border_gradient_primary';
    } else if (baseColor == 'green') {
        borderGradient = 'my_border_gradient_green';
    } else if (baseColor == 'blue') {
        borderGradient = 'my_border_gradient_blue';
    }

    const radiusClasses: Record<string, string> = {
      '10': 'rounded-[10px]',
      '14': 'rounded-[14px]',
      '20': 'rounded-[20px]',
      '9999': 'rounded-[9999px]',
    }
    const beforeRadiusClasses: Record<string, string> = {
      '10': 'before:rounded-[10px]',
      '14': 'before:rounded-[14px]',
      '20': 'before:rounded-[20px]',
      '9999': 'before:rounded-[9999px]',
    }

    return (
        <div 
          className={`${borderGradient} p-[1px] ${beforeRadiusClasses[rounded] ?? 'before:rounded-[20px]'} ${radiusClasses[rounded] ?? 'rounded-[20px]'} h-full`}
        >
          <div className={`relative h-full overflow-hidden ${radiusClasses[rounded] ?? 'rounded-[20px]'} bg-[linear-gradient(rgba(255,255,255,0.11),rgba(255,255,255,0.11)),linear-gradient(rgba(0,0,0,0.34),rgba(0,0,0,0.34))]`}>
            {children}        
          </div>
        </div>
    )
}