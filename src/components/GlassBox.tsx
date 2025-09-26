import React from "react";

export default function GlassBox({
    baseColor, rounded = '20', children
  }: {
    baseColor: string; 
    rounded?: string; 
    children: React.ReactNode
  }) {
    let borderColor;
    if (baseColor == 'orange') {
        borderColor = 'border-[#FC6400]';
    } else if (baseColor == 'white') {
        borderColor = 'border-[rgba(255, 255, 255, 1)]';
    } else if (baseColor == 'primary') {
        borderColor = 'border-[#FC6400]';
    } else if (baseColor == 'green') {
        borderColor = 'border-[#16BA00]';
    } else if (baseColor == 'blue') {
        borderColor = 'border-[#00B7FF]';
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
      <div className={`border ${borderColor} relative h-full overflow-hidden ${radiusClasses[rounded] ?? 'rounded-[20px]'} bg-[linear-gradient(rgba(255,255,255,0.11),rgba(255,255,255,0.11)),linear-gradient(rgba(0,0,0,0.34),rgba(0,0,0,0.34))]`}>
        {children}        
      </div>
    )
}