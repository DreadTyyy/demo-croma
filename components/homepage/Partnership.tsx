import Image from 'next/image';
import { poppins } from '@/app/font';
import ButtonPrimary from '@/components/ButtonPrimary';
import GlassBox from '@/components/GlassBox';

const Partnership = () => {
  return (
    <section className='py-[40px] xl:py-[80px] px-4 xl:px-[64px] 2xl:px-[100px]'>
      <div className={`${poppins.className} mb-5 xl:mb-10 flex flex-col jusitfy-center text-center items-center gap-4`}>
        <div className='px-3.5 py-2 w-fit rounded-full bg-black border border-[#FC6400]'>
          <span className='text-[#FC6400] text-base'>Partnership</span>
        </div>
        <h2 className='text-2xl xl:text-4xl font-semibold tracking-[-0.04%] text-white'>Our Ecosystem Partners</h2>
        <p className='text-base xl:text-xl font-medium text-[#E9E9E9] opacity-80 max-w-fit xl:max-w-[500px]'>
          Collaborating with industry leaders to bring you the finest art experience on the blockchain
        </p>
      </div>
      <GlassBox baseColor='orange'>
        <div className='px-4 xl:px-[40px] py-8 xl:py-[80px] flex justify-center items-center backdrop-blur-[50px] blur-[10px]'>
          <div className='max-w-full xl:max-w-[780px] flex flex-wrap items-center justify-center gap-[70px]'>
            {supportTeams.map(({icon, width, height}) => (
              <Image
                key={icon}
                src={`/support_logo/${icon}`}
                alt='Logo'
                width={width}
                height={height}
                sizes='(max-height: 768px) 24px, (max-height: 1024px) 48px, 48px'
                className='max-w-fit xl:w-1/3 h-[24px] md:h-[48px] 2xl:h-[48px]'
              />
            ))}
          </div>
        </div>
      </GlassBox>
      <div className='mt-5 xl:mt-10 flex flex-col xl:flex-row text-center xl:text-left jusitfy-between items-center gap-2.5'>
        <p className={`${poppins.className} text-base xl:text-xl font-medium text-[#E9E9E9] opacity-80`}>
          Are you interested in partnering with Croma Art? We're always looking for strategic collaborations that can enhance our ecosystem and provide value to our community.
        </p>
        <div className='text-nowrap'>
          <ButtonPrimary>
            Become a Partner
          </ButtonPrimary>
        </div>
      </div>
    </section>
  )
}

export default Partnership;

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
}];
