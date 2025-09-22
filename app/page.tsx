import Link from 'next/link';
import Image from 'next/image';
import { poppins } from './font';
import Navbar from '@/components/Navbar';
import ButtonPrimary from '@/components/ButtonPrimary';
import HeaderHomepage from '@/components/HeaderHomepage';
import PoweredBy from '@/components/PoweredBy';
import GlassBox from '@/components/GlassBox';

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
},]

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
},]

export default function Home() {
  return (
    <>
      <div className='relative pt-[140px] overflow-hidden pb-10'>
        <div className="-z-[9] absolute top-0 left-0 w-full h-full bg-gradient-to-br from-black to-[rgba(0,0,0,0.26)]">
        </div>
        <Image
          src='/header_pattern.png'
          alt='Rectangle pattern image'
          fill
          className="-z-10 object-cover"
        />
        <Image
          src='/header_stars.png'
          alt='Stars pattern image'
          fill
          className="-z-10 object-cover"
        />
        {/* <Navbar active='home' /> */}
        <div className='-z-[1] absolute -top-6 -left-[8%] 2xl:-left-[10%]'>
          <Image 
            src='/object_side_header.png'
            alt='Coin side header'
            width={281}
            height={447}
            sizes="(max-width: 768px) 150px, (max-width: 1024px) 200px, 281px"
            className="w-[60px] h-[140px] md:w-[200px] md:h-[340px] 2xl:w-[281px] 2xl:h-[447px]"
          />
        </div>
        <HeaderHomepage />
        <div className='-z-[8] absolute -bottom-1/2 right-0 blur-[280px] size-[800px] bg-[#FC6400] rounded-full'></div>
      </div>
      <PoweredBy />
      <section className='px-4 xl:px-[100] py-20 relative max-w-screen overflow-x-hidden'>
        <div className="-z-10 absolute top-[8%] -left-[10%] size-[600] rounded-full bg-[radial-gradient(circle_at_center,#E34C01_0%,rgba(242,39,174,0)_70%)] blur-3xl opacity-80"></div>
        <div className="-z-10 absolute top-[2%] -left-[20%] size-[600] rounded-full bg-[radial-gradient(circle_at_center,#F227AE_0%,rgba(242,39,174,0)_70%)] blur-3xl opacity-80"></div>
        <div className="-z-10 absolute bottom-[10%] xl:-bottom-[10%] -right-[20%] size-[600] rounded-full bg-[radial-gradient(circle_at_center,#465BF3_0%,rgba(242,39,174,0)_70%)] blur-3xl opacity-80"></div>
        <div className="-z-10 absolute bottom-0 xl:-bottom-[20%] -right-[20%] size-[600] rounded-full bg-[radial-gradient(circle_at_center,#F227AE_0%,rgba(242,39,174,0)_70%)] blur-3xl opacity-80"></div>
        <div className='flex flex-col xl:flex-row items-center justify-between gap-9'>
          <div className={`${poppins.className} xl:max-w-[30%]`}>
            <div className='px-3.5 py-2 w-fit rounded-full bg-black border border-[#FC6400]'>
              <span className='text-[#FC6400] text-base'>The CROMA Universe</span>
            </div>
            <p className='mt-4 font-semibold text-2xl xl:text-4xl text-white '>
              CROMA is not just a taken. It's a complete ecosystem:
            </p>
          </div>
          <GlassBox baseColor='orange'>
            <div className='px-4 py-8 xl:p-10 backdrop-blur-[50]'>
              <h2 className='text-white text-2xl xl:text-[32px] font-semibold leading-[120%] max-w-3/4'>
                All connected in one vision: building a global art + crypto movement
              </h2>
              <p className={`${poppins.className} mt-3 mb-6 font-medium text-base xl:text-xl text-[#E9E9E9]`}>
                building a global art + crypto movement
              </p>
              <Link href='#'>
                <ButtonPrimary>
                  Learn More
                </ButtonPrimary>
              </Link>
              <Image
                src='/skate_people.png'
                alt='Skateboard image'
                width={340}
                height={420}
                className='hidden xl:block absolute top-4 -right-1/12'
              />
            </div>
          </GlassBox>
        </div>
        <div className="mt-4 xl:mt-6 grid grid-cols-1 xl:grid-cols-[1fr_auto_1fr] xl:grid-rows-[auto_auto] gap-4 xl:gap-6">
          <GlassBox baseColor='orange'>
            <div className='px-4 py-8 xl:p-10 backdrop-blur[50] xl:h-[740px] w-full'>
              <h2 className='text-white text-2xl xl:text-[32px] font-semibold leading-[120%]'>
                CromaArt.io
              </h2>
              <p className={`${poppins.className} mt-3 mb-6 font-medium text-base xl:text-xl text-[#E9E9E9]`}>
                NFT marketplace for original art & meme art. Discover, create, and trade unique digital artworks with seamless blockchain integration.
              </p>
              <Link href='#'>
                <ButtonPrimary>
                  Learn More
                </ButtonPrimary>
              </Link>
              <Image
                src='/skate_king.png'
                alt='Skateboard king image'
                width={424}
                height={610}
                className='mt-6 xl:mt-0 relative xl:absolute -bottom-1/5 left-1/2 -translate-x-1/2'
              />
            </div>
          </GlassBox>
          <GlassBox baseColor='orange'>
            <div className='px-4 py-8 xl:p-10 backdrop-blur[50] xl:h-[740px] w-full xl:w-[420px]'>
              <div className='mb-6 flex justify-center w-full'>
                <Image
                  src='/coin_cromaart.png'
                  alt='Coin CromaArt'
                  width={290}
                  height={310}
                  sizes="(max-width: 768px) 150px, (max-width: 1024px) 310, 310px"
                  className="w-[150px] md:w-[310] 2xl:w-[310px]"
                />
              </div>
              <h2 className='text-white text-2xl xl:text-[32px] font-semibold leading-[120%]'>
                CromaChain.com
              </h2>
              <p className={`${poppins.className} mt-3 mb-6 font-medium text-base xl:text-xl text-[#E9E9E9]`}>
                Modular Layer-2 blockchain powered by $CMC token. Fast, secure, and scalable infrastructure for the next generation of dApps.
              </p>
              <Link href='#'>
                <ButtonPrimary>
                  Learn More
                </ButtonPrimary>
              </Link>
            </div>
          </GlassBox>
          
          <div className="h-full xl:row-start-1 xl:row-end-3 xl:col-start-3">
            <GlassBox baseColor='orange'>
              <div className='px-4 py-8 xl:p-10 backdrop-blur[50] w-full h-full'>
                <div className='mb-10 flex flex-col justify-center items-center w-full gap-5 xl:gap-10'>
                  <Image
                    src='/trixwallet_logo_text.png'
                    alt='Trix Wallet Logo'
                    width={163}
                    height={143}
                    sizes="(max-width: 768px) 100px, (max-width: 1024px) 143, 143px"
                    className="w-[100px] md:w-[143] 2xl:w-[143px]"
                  />
                  <div className='flex flex-wrap justify-center items-center gap-2'>
                    {['Post-Quantum Cryptography', 'Multi-chain Support', 'DeFi Integration', 'Zero-Knowledge Proofs', 'ZK Risk Scanner']
                    .map((value, i) => (
                      <div key={i} className='px-3 py-2 bg-black border border-[#0083FB] rounded-full w-fit'>
                        <span className='text-[#0083FB] text-[10px] xl:text-xs font-semibold tracking-[-0.01%]'>
                          {value}
                        </span>
                      </div>
                    ))}
                  </div>
                  <Image
                    src='/phone_trix.png'
                    alt='Phone trix wallet'
                    width={292}
                    height={335}
                  />
                </div>
                <h2 className='text-white text-2xl xl:text-[32px] font-semibold leading-[120%]'>
                  TrixWallet.com
                </h2>
                <p className={`${poppins.className} mt-3 mb-6 font-medium text-base xl:text-xl text-[#E9E9E9]`}>
                  Secure, fast, and user-friendly Web3 wallet. Manage your crypto assets, NFTs, and interact with dApps effortlessly.
                </p>
                <Link href='#'>
                  <ButtonPrimary>
                    Learn More
                  </ButtonPrimary>
                </Link>
              </div>
            </GlassBox>
            
          </div>
          
          <div className="xl:col-span-2">
            <GlassBox baseColor='orange'>
            <div className='px-4 py-8 xl:p-10 flex flex-col xl:flex-row items-center justify-between backdrop-blur[50] w-full gap-y-4'>
              <Image
                src='/king_read_book.png'
                alt='King read book image'
                width={325}
                height={289}
              />
              <div>
                <h2 className='text-white  text-2xl xl:text-[32px] font-semibold leading-[120%]'>
                  TrixNews.com
                </h2>
                <p className={`${poppins.className} mt-3 mb-6 font-medium text-base xl:text-xl text-[#E9E9E9]`}>
                  Real-time crypto news portal. Stay updated with the latest blockchain developments, market insights, and project updates.
                </p>
                <Link href='#'>
                  <ButtonPrimary>
                    Learn More
                  </ButtonPrimary>
                </Link>
              </div>
            </div>
          </GlassBox>
          </div>
        </div>
      </section>
      {/* <section className='px-4 xl:px-[100] py-[60px] border-t border-b border-[#414141]'>
        <div className={`${poppins.className} flex flex-col text-center items-center gap-4`}>
          <div className='px-3.5 py-2 w-fit rounded-full bg-black border border-[#FC6400]'>
            <span className='text-[#FC6400] text-base'>CROMA Artworks</span>
          </div>
          <h2 className='text-2xl xl:text-4xlfont-semibold text-white tracking-[-0.04%]'>FEATURED ARTWORKS</h2>
          <p className='text-base xl:text-xl font-medium text-[#E9E9E9] opacity-80'>
            Hand-drawn masterpieces immortalized as NFTs
          </p>
        </div>
        <div className='mt-6'>
          <div className={`${poppins.className} w-full flex justify-center`}>
            <div className='p-2 relative flex gap-6 items-center rounded-full h-16 w-fit inset-ring-[#979797] bg-linear-to-tl from-[rgba(255,255,255,0.83)] to-[rgba(255,255,255,0.44)] inset-shadow-[1px_3px_6px_0_rgba(0,0,0,0,0.25)]'>
              <div className='z-0 absolute top-[2px] left-[4px] w-[212px] h-[60px] bg-gradient-to-r from-[#B72204] to-[#FC6400] rounded-full'></div>
              <div className='flex text-center items-center w-[220px] h-full z-10 cursor-pointer'>
                <p className='text-white font-semibold text-2xl w-full'>All atworks</p>
              </div>
              <div className='flex text-center items-center w-[220px] h-full z-10 cursor-pointer'>
                <p className='text-white font-medium text-2xl w-full'>Feature</p>
              </div>
            </div>
          </div>
        </div>
        <ButtonPrimary>
          See All Artwork
        </ButtonPrimary>
      </section> */}
      <section className='px-4 xl:px-[100] py-[60px] border-t border-[#414141]'>
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
            <div className='mb-6 px-4 py-8 xl:p-10 backdrop-blur[50] text-center'>
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
                <div className='xl:px-8 py-6 backdrop-blur[50]'>
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
            <div className='mb-6 px-4 py-8 xl:p-10 backdrop-blur[50] text-center'>
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
                <div className='xl:px-8 py-6 backdrop-blur[50]'>
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
                      <div className='p-4 xl:p-6 flex items-start gap-2.5 backdrop-blur-[20] h-full bg-[linear-gradient(rgba(252,100,0,0.08),rgba(252,100,0,0.08)),linear-gradient(rgba(0,0,0,0.34),rgba(0,0,0,0.34))]'>
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
      <section className={`${poppins.className} relative px-4 xl:px-[100] py-[60px] max-w-screen overflow-x-hidden`}>
        <div className='-z-10 absolute top-1/2 left-1/2 -translate-1/2 size-[400px] bg-[#FC6400] rounded-full blur-[200px]'></div>
        <div className="-z-10 hidden xl:block absolute top-[40%] -translate-y-1/2 -right-[20%] size-[600] rounded-full bg-[radial-gradient(circle_at_center,#F227AE_0%,rgba(242,39,174,0)_70%)] blur-3xl opacity-80"></div>
        <div className="-z-10 hidden xl:block absolute top-[65%] -translate-y-1/2 -right-[20%] size-[600] rounded-full bg-[radial-gradient(circle_at_center,#FC6400_0%,rgba(242,39,174,0)_70%)] blur-3xl opacity-80"></div>
        <div className='flex flex-col text-center items-center gap-4'>
          <div className='px-3.5 py-2 w-fit rounded-full bg-[#A24101] border border-[#FC6400]'>
            <span className='text-white text-base'>Wallet Applications</span>
          </div>
          <Image
            src='/trix_wallet_logo_text_horizontal.png'
            alt='Trix wallet logo horizontal text'
            width={300}
            height={78}
            sizes="(max-width: 768px) 150px, (max-width: 1024px) 300px, 300px"
            className="w-[150] md:w-[300px] 2xl:w-[300px]"
          />
        </div>
        <div className='mt-6 flex flex-col gap-6 items-center'>
          <Image
            src='/all_phones.png'
            alt='Applications'
            width={1120}
            height={610}
            // className='object-contain'
          />
          <p className='text-center max-w-[680px] text-base xl:text-xl font-medium text-[#E9E9E9]'>
            Secure, fast, and user-friendly Web3 wallet. Manage your crypto assets, NFTs, and interact with dApps effortlessly.
          </p>
          <div className='flex flex-wrap justify-center gap-1 xl:gap-2 max-w-[800px]'>
            {['Post-Quantum Cryptography', 'Multi-chain Support', 'DeFi Integration', 'Zero-Knowledge Proofs', 'ZK Risk Scanner', 'and more']
            .map((text, i) => (
              <div key={i} className={`my_border_gradient_white_dark p-[1px] before:rounded-[20px] rounded-[20px] h-full`}>
                <div className={`relative px-2 xl:px-6 py-3 h-full overflow-hidden rounded-[20px] bg-[rgba(0,0,0,0.1)]`}>
                  <span className='text-sm xl:text-xl font-medium text-[#E9E9E9] opacity-80'>
                    {text}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className='flex gap-2 xl:gap-6 items-center'>
            <Link href='#'>
              <Image
                src='/google_play_store.svg'
                alt='google play'
                width={250}
                height={75}
              />
            </Link>
            <Link href='#'>
              <Image
                src='/app_store.svg'
                alt='app store'
                width={250}
                height={75}
              />
            </Link>
          </div>
        </div>
      </section>
      <section className='relative px-4 xl:px-[100] py-[60px]'>
        <div className="-z-10 absolute -top-[350px] -left-[350px] size-[700px] rounded-full bg-[radial-gradient(circle_at_center,#FC6400_0%,rgba(242,39,174,0)_70%)] blur-3xl opacity-80"></div>
        <div className={`${poppins.className} flex flex-col text-center items-center gap-4`}>
          <div className='px-3.5 py-2 w-fit rounded-full bg-black border border-[#FC6400]'>
            <span className='text-[#FC6400] text-base'>📅 Roadmap</span>
          </div>
          <h2 className='text-2xl xl:text-4xl font-semibold text-white tracking-[-0.04%]'>
            <span className='bg-gradient-to-r from-[#B72204] to-[#FC6400] bg-clip-text text-transparent'>CROMA {' '}</span>
            Development Journey
          </h2>
          <p className='text-base xl:text-xl font-medium text-[#E9E9E9] opacity-80 max-w-[680px]'>
            From airdrop launch to full ecosystem deployment. Track our progress as we build the future of art and blockchain integration step by step.
          </p>
        </div>
        <div className={`${poppins.className} mt-5 xl:mt-10 grid grid-cols-1 xl:grid-cols-[1fr_auto_1fr] gap-y-4 xl:gap-y-6`}>
          <GlassBox baseColor='green'>
            <div className='flex flex-col gap-4 xl:gap-6 px-4 xl:px-6 py-8 backdrop-blur-[50]'>
              <div className='flex items-center justify-between w-full'>
                <div className="flex items-center gap-4">
                  <GlassBox baseColor='white' rounded='9999'>
                    <Image
                      src='/icon_phase1.svg'
                      alt='Phase 1'
                      width={54}
                      height={54}
                      className='p-2.5 backdrop-blur-[20]'
                    />
                  </GlassBox>
                  <div className='text-[#E9E9E9]'>
                    <p className='text-base xl:text-xl font-medium'>Phase 1</p>
                    <p className='text-sm xl:text-base opacity-50'>Now - Completed</p>
                  </div>
                </div>
                <div className='px-2 xl:px-4 py-1 xl:py-3 w-fit rounded-full bg-[rgba(255,255,255,0.07)] border border-[#16BA00]'>
                  <span className='text-[#16BA00] font-semibold text-sm xl:text-base'>Completed</span>
                </div>
              </div>
              <h2 className='text-xl xl:text-2xl font-semibold text-white'>
                Airdrop Distribution
              </h2>
              <p className='text-[#E9E9E9] opacity-60 text-base font-medium'>
                Successfully launched CROMA airdrop with massive community participation. Free $CRM + $CMC tokens distributed to early supporters.
              </p>
              <div className='flex flex-wrap items-center gap-2'>
                {['25,321+ wallets joined','Community started', 'Airdrop smart contract deployed','Social media campaigns launched']
                .map((text, i) => (
                  <div key={i} className={`my_border_gradient_white_dark p-[1px] before:rounded-[20px] rounded-[20px] h-full`}>
                    <div className={`relative px-4 py-2 h-full overflow-hidden rounded-[20px] bg-[rgba(0,0,0,0.1)]`}>
                      <span className='text-xs xl:text-sm font-medium text-[#E9E9E9] opacity-80'>
                        {text}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </GlassBox>
          <div className='flex items-center justify-center rotate-90 xl:rotate-0'>
            <Image
              src='/icon_arrow_phase.svg'
              alt='Double arrow'
              width={54}
              height={54}
              className=''
            />
          </div>
          <div className={`my_border_gradient_primary my_border_6px before:rounded-[20px] rounded-[20px] h-full`}>
            <div className='relative h-full overflow-hidden rounded-[20px] bg-[linear-gradient(rgba(255,255,255,0.11),rgba(255,255,255,0.11)),linear-gradient(rgba(0,0,0,0.34),rgba(0,0,0,0.34))]'>
              <div className='flex flex-col gap-4 xl:gap-6 px-4 py-8 backdrop-blur-[50]'>
                <div className='flex items-center justify-between w-full'>
                  <div className="flex items-center gap-4">
                    <GlassBox baseColor='white' rounded='9999'>
                      <Image
                        src='/icon_phase2.svg'
                        alt='Phase 2'
                        width={54}
                        height={54}
                        className='p-2.5 backdrop-blur-[20]'
                      />
                    </GlassBox>
                    <div className='text-[#E9E9E9]'>
                      <p className='text-base xl:text-xl font-medium'>Phase 2</p>
                      <p className='text-sm xl:text-base opacity-50'>Soon - Q1 2025</p>
                    </div>
                  </div>
                  <div className={`my_border_gradient_primary p-[1px] before:rounded-full rounded-full h-full`}>
                    <div className='px-2 xl:px-4 py-1 xl:py-3 w-fit rounded-full bg-[rgba(255,255,255,0.07)] backdrop-blur-[20]'>
                      <span className=' bg-gradient-to-r from-[#B72204] to-[#FC6400] bg-clip-text text-transparent font-semibold text-sm xl:text-base'>
                        In Progress
                      </span>
                    </div>
                  </div>
                </div>
                <h2 className='text-xl xl:text-2xl font-semibold text-white'>
                  Presale Launch
                </h2>
                <p className='text-[#E9E9E9] opacity-60 text-base font-medium'>
                  Official presale launch with early bird pricing for community members. DEX listing preparation and liquidity pool setup.
                </p>
                <div className='flex flex-wrap items-center gap-2'>
                  {['Presale smart contract audit','Early bird pricing tiers', 'KYC & whitelist process','Marketing campaign rollout']
                  .map((text, i) => (
                    <div key={i} className={`my_border_gradient_white_dark p-[1px] before:rounded-[20px] rounded-[20px] h-full`}>
                      <div className={`relative px-4 py-2 h-full overflow-hidden rounded-[20px] bg-[rgba(0,0,0,0.1)]`}>
                        <span className='text-xs xl:text-sm font-medium text-[#E9E9E9] opacity-80'>
                          {text}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className='flex xl:hidden items-center justify-center rotate-90'>
            <Image
              src='/icon_arrow_phase.svg'
              alt='Double arrow'
              width={54}
              height={54}
              className=''
            />
          </div>
          <GlassBox baseColor='blue'>
            <div className='flex flex-col gap-4 xl:gap-6 px-4 xl:px-6 py-8 backdrop-blur-[50]'>
              <div className='flex items-center justify-between w-full'>
                <div className="flex items-center gap-4">
                  <GlassBox baseColor='white' rounded='9999'>
                    <Image
                      src='/icon_phase3.svg'
                      alt='Phase 3'
                      width={54}
                      height={54}
                      className='p-2.5 backdrop-blur-[20]'
                    />
                  </GlassBox>
                  <div className='text-[#E9E9E9]'>
                    <p className='text-base xl:text-xl font-medium'>Phase 3</p>
                    <p className='text-sm xl:text-base opacity-50'>Q2 2025</p>
                  </div>
                </div>
                <div className='px-2 xl:px-4 py-1 xl:py-3 w-fit rounded-full bg-[rgba(255,255,255,0.07)] border border-[#00B7FF]'>
                  <span className='text-[#00B7FF] font-semibold text-sm xl:text-base'>Upcoming</span>
                </div>
              </div>
              <h2 className='text-xl xl:text-2xl font-semibold text-white'>
                CEX & DEX Listings
              </h2>
              <p className='text-[#E9E9E9] opacity-60 text-base font-medium'>
                Major exchange listings for $CRM and $CMC tokens. Enhanced liquidity and global accessibility for the CROMA ecosystem.
              </p>
              <div className='flex flex-wrap items-center gap-2'>
                {['DEX listings (Uniswap, PancakeSwap)','CEX partnerships secured', 'Market making agreements','Trading pairs established']
                .map((text, i) => (
                  <div key={i} className={`my_border_gradient_white_dark p-[1px] before:rounded-[20px] rounded-[20px] h-full`}>
                    <div className={`relative px-4 py-2 h-full overflow-hidden rounded-[20px] bg-[rgba(0,0,0,0.1)]`}>
                      <span className='text-xs xl:text-sm font-medium text-[#E9E9E9] opacity-80'>
                        {text}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </GlassBox>
          <div className='flex items-center justify-center rotate-90 xl:rotate-0'>
            <Image
              src='/icon_arrow_phase.svg'
              alt='Double arrow'
              width={54}
              height={54}
              className=''
            />
          </div>
          <GlassBox baseColor='blue'>
            <div className='flex flex-col gap-4 xl:gap-6 px-4 xl:px-6 py-8 backdrop-blur-[50]'>
              <div className='flex items-center justify-between w-full'>
                <div className="flex items-center gap-4">
                  <GlassBox baseColor='white' rounded='9999'>
                    <Image
                      src='/icon_phase4.svg'
                      alt='Phase 4'
                      width={54}
                      height={54}
                      className='p-2.5 backdrop-blur-[20]'
                    />
                  </GlassBox>
                  <div className='text-[#E9E9E9]'>
                    <p className='text-base xl:text-xl font-medium'>Phase 4</p>
                    <p className='text-sm xl:text-base opacity-50'>Q3-Q4 2025</p>
                  </div>
                </div>
                <div className='px-2 xl:px-4 py-1 xl:py-3 w-fit rounded-full bg-[rgba(255,255,255,0.07)] border border-[#00B7FF]'>
                  <span className='text-[#00B7FF] font-semibold text-sm xl:text-base'>Upcoming</span>
                </div>
              </div>
              <h2 className='text-xl xl:text-2xl font-semibold text-white'>
                Ecosystem Integration
              </h2>
              <p className='text-[#E9E9E9] opacity-60 text-base font-medium'>
                Full integration of CromaArt, CromaChain, TrixWallet, and TrixNews. Launch of NFT marketplace and Layer-2 blockchain.
              </p>
              <div className='flex flex-wrap items-center gap-2'>
                {['CromaArt.io NFT marketplace','CromaChain L2 mainnet', 'TrixWallet beta release','TrixNews portal launch']
                .map((text, i) => (
                  <div key={i} className={`my_border_gradient_white_dark p-[1px] before:rounded-[20px] rounded-[20px] h-full`}>
                    <div className={`relative px-4 py-2 h-full overflow-hidden rounded-[20px] bg-[rgba(0,0,0,0.1)]`}>
                      <span className='text-xs xl:text-sm font-medium text-[#E9E9E9] opacity-80'>
                        {text}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </GlassBox>
        </div>
      </section>
      <section className='py-[40px] mx-4 xl:mx-[100px]'>
        <div className={`my_border_gradient_orange before:rounded-[20px] rounded-[20px] h-full`}>
          <div className='relative h-full overflow-hidden rounded-[20px] bg-[rgba(252,100,0,0.1)]'>
            <div className='px-4 py-8 xl:p-10 text-center'>
              <h2 className='text-2xl xl:text-4xl font-semibold leading-[120%] bg-gradient-to-r from-[#B72204] to-[#FC6400] bg-clip-text text-transparent'>
                How to Claim
              </h2>
              <p className={`${poppins.className} mt-4 text-base xl:text-xl font-medium text-[#E9E9E9] opacity-80`}>
                Simple 3-step process to get your free tokens
              </p>
              <div className='flex flex-col xl:flex-row mt-[26px] gap-y-4 justify-between items-center'>
                <Image
                  src='/claim_coin.png'
                  alt='Claim coin'
                  width={678}
                  height={692}
                />
                <div className={`${poppins.className} flex flex-col gap-4`}>
                  <GlassBox baseColor='orange'>
                    <div className='relative px-4 xl:px-6 py-8 text-left max-w-[500px] bg-[url("/polygon_pattern_10.png")] bg-center'>
                      <div className='mb-4 xl:mb-6 flex items-center gap-4'>
                        <GlassBox baseColor='white' rounded='9999'>
                          <p className='flex justify-center items-center size-[36] xl:size-[54px] text-white text-xl xl:text-2xl font-semibold'>
                            1
                          </p>
                        </GlassBox>
                        <p className='font-semibold text-xl xl:text-2xl text-white'>
                          Connect Wallet
                        </p>
                      </div>
                      <p className='text-base xl:text-xl font-medium text-[#E9E9E9] opacity-60'>
                        Connect your TrixWallet or any Web3 wallet (MetaMask, Trust Wallet, etc.) to get started with the CROMA airdrop.
                      </p>
                    </div>
                  </GlassBox>
                </div>
              </div>
              <div className='mt-[26px] flex flex-col gap-2'>
                <Link href=''>
                  <ButtonPrimary>
                    Claim Airdrop Now
                  </ButtonPrimary>
                </Link>
                <span className={`${poppins.className} text-xs text-white`}>🔥 Already 25,321 wallets joined! Don't miss out!</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='py-[40px] xl:py-[80px] px-4 xl:px-[100]'>
        <div className={`${poppins.className} grid grid-cols-1 xl:grid-cols-2 gap-4 xl:gap-6`}>
          <div className='flex flex-col justify-center items-center text-center w-full'>
            <h2 className='text-2xl xl:text-4xl font-semibold tracking-[-0.04%] bg-gradient-to-r from-[#B72204] to-[#FC6400] bg-clip-text text-transparent'>
              No Taxes, No Tricks.
            </h2>
            <p className='mt-4 xl:mt-6 text-base xl:text-xl font-medium text-[#E9E9E9] opacity-80 max-w-[560px]'>
              CROMA is painted with honesty, not bullshit. Clean tokenomics with zero buy/sell taxes.
            </p>
          </div>
          <GlassBox baseColor='orange'>
            <div className='px-4 xl:px-6 py-8 backdrop-blur-[50] bg-[url("/wave_pattern.png")] bg-center bg-cover'>
              <div className='w-fit'>
                <GlassBox baseColor='white' rounded='9999'>
                  <Image
                    src='/icon_phase1.svg'
                    alt='Icon'
                    width={54}
                    height={54}
                    className='p-2.5'
                  />
                </GlassBox>
              </div>
              <h3 className='mt-4 xl:mt-6 text-xl xl:text-2xl font-semibold text-white'>
                LP Tokens Burned
              </h3>
              <p className='mt-4 xl:mt-6 text-base xl:text-xl font-medium text-[#E9E9E9] opacity-60'>
                LP tokens burned like old canvases. What's gone, stays gone. Permanent liquidity lock.
              </p>
            </div>
          </GlassBox>
          <GlassBox baseColor='orange'>
            <div className='px-4 xl:px-6 py-8 backdrop-blur-[50] bg-[url("/wave_pattern.png")] bg-center bg-cover'>
              <div className='w-fit'>
                <GlassBox baseColor='white' rounded='9999'>
                  <Image
                    src='/icon_phase1.svg'
                    alt='Icon'
                    width={54}
                    height={54}
                    className='p-2.5'
                  />
                </GlassBox>
              </div>
              <h3 className='mt-4 xl:mt-6 text-xl xl:text-2xl font-semibold text-white'>
                LP Tokens Burned
              </h3>
              <p className='mt-4 xl:mt-6 text-base xl:text-xl font-medium text-[#E9E9E9] opacity-60'>
                LP tokens burned like old canvases. What's gone, stays gone. Permanent liquidity lock.
              </p>
            </div>
          </GlassBox>
          <GlassBox baseColor='orange'>
            <div className='px-4 xl:px-6 py-8 backdrop-blur-[50] bg-[url("/wave_pattern.png")] bg-center bg-cover'>
              <div className='w-fit'>
                <GlassBox baseColor='white' rounded='9999'>
                  <Image
                    src='/icon_phase1.svg'
                    alt='Icon'
                    width={54}
                    height={54}
                    className='p-2.5'
                  />
                </GlassBox>
              </div>
              <h3 className='mt-4 xl:mt-6 text-xl xl:text-2xl font-semibold text-white'>
                LP Tokens Burned
              </h3>
              <p className='mt-4 xl:mt-6 text-base xl:text-xl font-medium text-[#E9E9E9] opacity-60'>
                LP tokens burned like old canvases. What's gone, stays gone. Permanent liquidity lock.
              </p>
            </div>
          </GlassBox>
        </div>
      </section>
      <section className='relative py-[40px] mx-4 xl:mx-[100px]'>
        <div className={`my_border_gradient_white_dark before:rounded-[15px] rounded-[15px] h-full`}>
          <div className='relative h-full overflow-hidden rounded-[15px]'>
            <div className="-z-10 absolute -top-[200px] xl:-top-[450px] left-1/2 -translate-x-1/2 size-[400px] xl:size-[900px] rounded-full bg-[radial-gradient(circle_at_center,#FC6400_0%,rgba(242,39,174,0)_70%)] blur-3xl opacity-80"></div>
            <div className='px-4 py-8 w-full min-h-[360px] xl:min-h-[500px] flex flex-col justify-center items-center text-center gap-6 bg-[url("/header_stars.png")] bg-cover bg-center'>
              <Image 
                src='/crm_token_logo.png'
                alt='CRM token logo'
                width={126}
                height={126}
              />
              <div>
                <h2 className='text-2xl xl:text-4xl font-semibold leading-[120%] bg-gradient-to-r from-[#B72204] to-[#FC6400] bg-clip-text text-transparent'>
                  Join the CROMA Movement
                </h2>
                <p className={`${poppins.className} mt-4 text-base xl:text-xl font-medium text-[#E9E9E9] opacity-80`}>
                  Simple 3-step process to get your free tokens
                </p>
              </div>
              <div className={`${poppins.className} flex flex-wrap items-center justify-center gap-4 xl:gap-6`}>
                <Link href='#'>
                  <div className={`my_border_gradient_white_dark before:rounded-[15px] rounded-[15px] h-full`}>
                    <div className='relative h-full overflow-hidden rounded-[15px] bg-[rgba(255,255,255,0.1)]'>
                      <div className='px-6 py-3 flex items-center gap-3'>
                        <p className='text-xl font-medium text-[#E9E9E9] opacity-80'>Join Discord</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className={`${poppins.className} mx-4 xl:mx-[100px] flex flex-col text-center items-center gap-4`}>
          <div className='px-3.5 py-2 w-fit rounded-full bg-black border border-[#FC6400]'>
            <span className='text-[#FC6400] text-base'>Trixnews</span>
          </div>
          <h2 className='text-2xl xl:text-4xl font-semibold tracking-[-0.04%] bg-gradient-to-r from-[#B72204] to-[#FC6400] bg-clip-text text-transparent'>Latest Update</h2>
          <p className='text-base xl:text-xl font-medium text-[#E9E9E9] opacity-80 max-w-fit xl:max-w-[500px]'>
            Hand-drawn masterpieces immortalized as NFTs
          </p>
        </div>
      </section>
    </>
  );
}
