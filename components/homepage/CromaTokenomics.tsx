import Image from 'next/image';
import { poppins } from '@/app/font';
import GlassBox from '@/components/GlassBox';

const CromaTokenomics = () => {
  return (
    <section className='px-4 xl:px-[64px] 2xl:px-[100px] py-[60px] border-t border-[#414141]'>
      <div className={`${poppins.className} flex flex-col text-center items-center gap-4`}>
        <div className='px-3.5 py-2 w-fit rounded-full bg-black border border-[#FC6400]'>
          <span className='text-[#FC6400] text-base'>CROMA Tokenomics</span>
        </div>
        <h2 className='text-2xl xl:text-4xl font-semibold text-white tracking-[-0.04%]'>Two Tokens, One Ecosystem</h2>
        <p className='text-base xl:text-xl font-medium text-[#E9E9E9] opacity-80 max-w-[680px]'>
          $CRM powers the art marketplace while $CMC fuels the blockchain infrastructure. Real utility for art & chain with transparent, community-focused distribution.
        </p>
      </div>
      <div className='mt-10 xl:mt-[60px] grid grid-cols-1 xl:grid-cols-2 gap-y-4 gap-x-6'>
        <GlassBox baseColor='orange'>
          <Image
            src='/coin_cromaart_2.png'
            alt='Coin CromaArt'
            width={264}
            height={264}
            className='-z-10 absolute -right-12 top-0 blur-xs'
          />
          <div className='mb-6 px-4 py-8 xl:p-10 text-center'>
            <div className='flex w-full justify-center'>
              <Image 
                src='/crm_token_logo.png'
                alt='CRM token logo'
                width={126}
                height={126}
              />
            </div>
            <h3 className='mt-4 xl:mt-6 text-2xl xl:text-4xl font-bold text-white'>$CRM Token</h3>
            <p className={`${poppins.className} mt-2 mb-4 xl:mb-6 text-base xl:text-xl font-medium text-[#E9E9E9] opacity-80`}>CromaArt Token</p>
            <GlassBox baseColor='white'>
              <div className='xl:px-8 py-6 backdrop-blur-[50px] rounded-[20px]'>
                <p className='mb-2.5 text-[26px] xl:text-[40px] font-bold leading-[120%] bg-gradient-to-r from-[#B72204] to-[#FC6400] bg-clip-text text-transparent'>
                  950,000,000
                </p>
                <span className={`${poppins.className} text-sm xl:text-base font-semibold text-[#E9E9E9] uppercase`}>Total suply</span>
              </div>
            </GlassBox>
            <div className='mt-6'>
              <div className='flex flex-col gap-2 xl:gap-4'>
                {dataCrmToken.map(({title, percentage, amount}) => (
                  <div className='flex flex-col gap-1' key={title}>
                    <div className='mb-2 flex w-full justify-between items-center'>
                      <p className='block font-medium text-xs xl:text-sm'>{title}</p>
                      <div>
                        <span className='text-sm xl:text-base font-bold bg-gradient-to-r from-[#B72204] to-[#FC6400] bg-clip-text text-transparent'>
                          {percentage}% {' '}
                        </span>
                        <span className='text-sm xl:text-base font-bold text-white'>({amount}.5M)</span>
                      </div>
                    </div>
                    <div className='relative bg-[#323336] ring-inset-[#3E3E3E] w-full h-[28px] rounded-full'>
                      <div 
                        style={{ width: `${percentage}%` }} 
                        className={`absolute top-0 left-0 h-full rounded-full bg-gradient-to-r from-[#B72204] to-[#FC6400]`}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </GlassBox>
        <GlassBox baseColor='orange'>
          <Image
            src='/coin_cromaart_2.png'
            alt='Coin CromaArt'
            width={264}
            height={264}
            className='-z-10 absolute -right-12 top-0 blur-xs'
          />
          <div className='mb-6 px-4 py-8 xl:p-10 text-center'>
            <div className='flex w-full justify-center'>
              <Image 
                src='/crc_token_logo.png'
                alt='CRC token logo'
                width={126}
                height={126}
              />
            </div>
            <h3 className='mt-4 xl:mt-6 text-2xl xl:text-4xl font-bold text-white'>$CRC Token</h3>
            <p className={`${poppins.className} mt-2 mb-4 xl:mb-6 text-base xl:text-xl font-medium text-[#E9E9E9] opacity-80`}>CromaChain Token</p>
            <GlassBox baseColor='white'> 
              <div className='xl:px-8 py-6 backdrop-blur-[50px] rounded-[20px]'>
                <p className='mb-2.5 text-[26px] xl:text-[40px] font-bold leading-[120%] bg-gradient-to-r from-[#B72204] to-[#FC6400] bg-clip-text text-transparent'>
                  2,000,000,000
                </p>
                <span className={`${poppins.className} text-sm xl:text-base font-semibold text-[#E9E9E9] uppercase`}>Total suply</span>
              </div>
            </GlassBox>
            <div className={`${poppins.className} mt-6`}>
              <div className='grid grid-cols-1 xl:grid-cols-2 gap-2 xl:gap-4 text-left'>
                {dataCrcToken.map(({title, desc, icon}) => (
                  <GlassBox baseColor='primary' key={title}>
                    <div className='p-4 xl:p-6 flex items-start gap-2.5 rounded-[20px] backdrop-blur-[20px] h-full bg-[linear-gradient(rgba(252,100,0,0.08),rgba(252,100,0,0.08)),linear-gradient(rgba(0,0,0,0.34),rgba(0,0,0,0.34))]'>
                      <Image 
                        src={icon}
                        alt={`Icon ${title}`}
                        width={42}
                        height={42}
                      />
                      <div>
                        <p className='mb-1 xl:mb-2.5 font-semibold text-base xl:text-xl text-[#E9E9E9]'>{title}</p>
                        <p className='text-[#E9E9E9] opacity-60 text-sm xl:text-base'>{desc}</p>
                      </div>
                    </div>
                  </GlassBox>
                ))}
              </div>
            </div>
          </div>
        </GlassBox>
      </div>
    </section>
  )
}

export default CromaTokenomics;

const dataCrmToken = [{
  title: 'Presale',
  percentage: 49,
  amount: 465.5 
}, {
  title: 'LP',
  percentage: 10,
  amount: 92
}, {
  title: 'Airdrop',
  percentage: 15,
  amount: 142.5 
}, {
  title: 'Burn/Reward/Treasury',
  percentage: 15,
  amount: 142.5 
}];

const dataCrcToken = [{
  title: 'Gas Fees',
  desc: 'Transaction costs on CromaChain',
  icon: 'gas_fees.svg'
}, {
  title: 'Stacking',
  desc: 'Earn rewards by stacking tokens',
  icon: 'stacking.svg'
}, {
  title: 'Governance',
  desc: 'Vote on protocol decisions',
  icon: 'governance.svg'
}, {
  title: 'Rewards',
  desc: 'Earn from ecosystem activities',
  icon: 'rewards.svg'
}];
