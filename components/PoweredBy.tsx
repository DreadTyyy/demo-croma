import { poppins } from '@/app/font';
import Image from 'next/image';

const supportTeams = [{
  icon: 'apple.svg',
  width: 130,
  height: 48
}, {
  icon: 'nvidia.svg',
  width: 218,
  height: 48
}, {
  icon: 'google.svg',
  width: 132,
  height: 48
}, {
  icon: 'openai.svg',
  width: 147,
  height: 48
}, {
  icon: 'lenovo.svg',
  width: 120,
  height: 48
}, {
  icon: 'opensea.svg',
  width: 154,
  height: 48
},]

const PoweredBy = () => {
  return (
    <section className='px-4 xl:px-[120px] py-5 xl:py-10 bg-gradient-to-r from-[#B72204] to-[#FC6400]'>
        <p className='font-semibold text-xl xl:text-2xl text-white text-center'>
          Powered By
        </p>
        <div className='mt-8 xl:mt-10 flex flex-wrap xl:flex-nowrap justify-center xl:justify-between items-center w-full gap-6'>
          {supportTeams.map(({icon, width, height}: {icon: string; width: number; height: number}) => (
            <Image
              key={icon}
              src={`/support_logo/${icon}`}
              alt='Logo apple'
              width={width}
              height={height}
              sizes="(max-height: 768px) 24px, (max-height: 1024px) 48px, 48px"
              className="max-w-fit xl:max-w-1/2 h-[24px] md:h-[48px] 2xl:h-[48px]"
            />
          ))}
        </div>
      </section>
  )
}

export default PoweredBy;
