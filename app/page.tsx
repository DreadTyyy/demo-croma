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
        <Navbar active='home' />
        <div className='-z-[1] absolute -top-6 -left-[8%] 2xl:-left-[10%]'>
          <Image 
            src='/object_side_header.png'
            alt='Coin side header'
            width={281}
            height={447}
            sizes="(max-width: 768px) 150px, (max-width: 1024px) 200px, 281px"
            className="w-[150px] h-[290px] md:w-[200px] md:h-[340px] 2xl:w-[281px] 2xl:h-[447px]"
          />
        </div>
        <HeaderHomepage />
        <div className='-z-[8] absolute -bottom-1/2 right-0 blur-[280px] size-[800px] bg-[#FC6400] rounded-full'></div>
      </div>
      <PoweredBy />
      <section className='px-[100] py-20 relative'>
        <div className="-z-10 absolute top-[8%] -left-[10%] size-[600] rounded-full bg-[radial-gradient(circle_at_center,#E34C01_0%,rgba(242,39,174,0)_70%)] blur-3xl opacity-80"></div>
        <div className="-z-10 absolute top-[2%] -left-[20%] size-[600] rounded-full bg-[radial-gradient(circle_at_center,#F227AE_0%,rgba(242,39,174,0)_70%)] blur-3xl opacity-80"></div>
        <div className="-z-10 absolute -bottom-[10%] -right-[20%] size-[600] rounded-full bg-[radial-gradient(circle_at_center,#465BF3_0%,rgba(242,39,174,0)_70%)] blur-3xl opacity-80"></div>
        <div className="-z-10 absolute -bottom-[20%] -right-[20%] size-[600] rounded-full bg-[radial-gradient(circle_at_center,#F227AE_0%,rgba(242,39,174,0)_70%)] blur-3xl opacity-80"></div>
        <div className='flex items-center justify-between gap-9'>
          <div className={`${poppins.className} max-w-[30%]`}>
            <div className='px-3.5 py-2 w-fit rounded-full bg-black border border-[#FC6400]'>
              <span className='text-[#FC6400] text-base'>The CROMA Universe</span>
            </div>
            <p className='mt-4 font-semibold text-4xl text-white '>
              CROMA is not just a taken. It's a complete ecosystem:
            </p>
          </div>
          <GlassBox baseColor='orange'>
            <div className='p-10 backdrop-blur-[50]'>
              <h2 className='text-white text-[32px] font-semibold leading-[120%] max-w-3/4'>
                All connected in one vision: building a global art + crypto movement
              </h2>
              <p className={`${poppins.className} mt-3 mb-6 font-medium text-xl text-[#E9E9E9]`}>
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
                className='absolute top-4 -right-1/12'
              />
            </div>
          </GlassBox>
        </div>
        <div className="mt-6 grid grid-cols-[1fr_auto_1fr] grid-rows-[auto_auto] gap-6">
          <GlassBox baseColor='orange'>
            <div className='p-10 backdrop-blur[50] h-[740px] w-full'>
              <h2 className='text-white text-[32px] font-semibold leading-[120%]'>
                CromaArt.io
              </h2>
              <p className={`${poppins.className} mt-3 mb-6 font-medium text-xl text-[#E9E9E9]`}>
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
                className='absolute -bottom-1/5 left-1/2 -translate-x-1/2'
              />
            </div>
          </GlassBox>
          <GlassBox baseColor='orange'>
            <div className='p-10 backdrop-blur[50] h-[740px] w-[420px]'>
              <div className='mb-6 flex justify-center w-full'>
                <Image
                  src='/coin_cromaart.png'
                  alt='Coin CromaArt'
                  width={290}
                  height={310}
                  // className='absolute -bottom-1/5 left-1/2 -translate-x-1/2'
                />
              </div>
              <h2 className='text-white text-[32px] font-semibold leading-[120%]'>
                CromaChain.com
              </h2>
              <p className={`${poppins.className} mt-3 mb-6 font-medium text-xl text-[#E9E9E9]`}>
                Modular Layer-2 blockchain powered by $CMC token. Fast, secure, and scalable infrastructure for the next generation of dApps.
              </p>
              <Link href='#'>
                <ButtonPrimary>
                  Learn More
                </ButtonPrimary>
              </Link>
            </div>
          </GlassBox>
          
          <div className="h-full row-start-1 row-end-3 col-start-3">
            <GlassBox baseColor='orange'>
              <div className='p-10 backdrop-blur[50] w-full h-full'>
                <div className='mb-10 flex flex-col justify-center items-center w-full gap-10'>
                  <Image
                    src='/trixwallet_logo_text.png'
                    alt='Trix Wallet Logo'
                    width={163}
                    height={143}
                  />
                  <div className='flex flex-wrap justify-center items-center gap-2'>
                    {['Post-Quantum Cryptography', 'Multi-chain Support', 'DeFi Integration', 'Zero-Knowledge Proofs', 'ZK Risk Scanner']
                    .map((value, i) => (
                      <div key={i} className='px-3 py-2 bg-black border border-[#0083FB] rounded-full w-fit'>
                        <span className='text-[#0083FB] text-xs font-semibold tracking-[-0.01%]'>
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
                <h2 className='text-white text-[32px] font-semibold leading-[120%]'>
                  TrixWallet.com
                </h2>
                <p className={`${poppins.className} mt-3 mb-6 font-medium text-xl text-[#E9E9E9]`}>
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
          
          <div className="col-span-2">
            <GlassBox baseColor='orange'>
            <div className='p-10 flex items-center justify-between backdrop-blur[50] w-full'>
              <Image
                src='/king_read_book.png'
                alt='King read book image'
                width={325}
                height={289}
              />
              <div>
                <h2 className='text-white text-[32px] font-semibold leading-[120%]'>
                  TrixNews.com
                </h2>
                <p className={`${poppins.className} mt-3 mb-6 font-medium text-xl text-[#E9E9E9]`}>
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
      <section className='px-[100] py-[60px] border-t border-b border-[#414141]'>
        <div className={`${poppins.className} flex flex-col text-center items-center gap-4`}>
          <div className='px-3.5 py-2 w-fit rounded-full bg-black border border-[#FC6400]'>
            <span className='text-[#FC6400] text-base'>CROMA Artworks</span>
          </div>
          <h2 className='text-4xl font-semibold text-white tracking-[-0.04%]'>FEATURED ARTWORKS</h2>
          <p className='text-xl font-medium text-[#E9E9E9] opacity-80'>
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
      </section>
      <section className='px-[100] py-[60px] border-t border-[#414141]'>
        <div className={`${poppins.className} flex flex-col text-center items-center gap-4`}>
          <div className='px-3.5 py-2 w-fit rounded-full bg-black border border-[#FC6400]'>
            <span className='text-[#FC6400] text-base'>CROMA Tokenomics</span>
          </div>
          <h2 className='text-4xl font-semibold text-white tracking-[-0.04%]'>Two Tokens, One Ecosystem</h2>
          <p className='text-xl font-medium text-[#E9E9E9] opacity-80 max-w-[680px]'>
            $CRM powers the art marketplace while $CMC fuels the blockchain infrastructure. Real utility for art & chain with transparent, community-focused distribution.
          </p>
        </div>
        <div className='mt-[60px] grid grid-cols-2 gap-6'>
          <GlassBox baseColor='orange'>
            <Image
              src='/coin_cromaart_2.png'
              alt='Coin CromaArt'
              width={264}
              height={264}
              className='-z-10 absolute -right-12 top-0 blur-xs'
            />
            <div className='mb-6 p-10 backdrop-blur[50] text-center'>
              <div className='flex w-full justify-center'>
                <Image 
                  src='/crm_token_logo.png'
                  alt='CRM token logo'
                  width={126}
                  height={126}
                />
              </div>
              <h3 className='mt-6 text-4xl font-bold text-white'>$CRM Token</h3>
              <p className={`${poppins.className} mt-2 mb-6 text-xl font-medium text-[#E9E9E9] opacity-80`}>CromaArt Token</p>
              <GlassBox baseColor='white'>
                <div className='px-8 py-6 backdrop-blur[50]'>
                  <p className='mb-2.5 text-[40px] font-bold leading-[120%] bg-gradient-to-r from-[#B72204] to-[#FC6400] bg-clip-text text-transparent'>
                    950,000,000
                  </p>
                  <span className={`${poppins.className} text-base font-semibold text-[#E9E9E9] uppercase`}>Total suply</span>
                </div>
              </GlassBox>
              <div className='mt-6'>
                <div className='flex flex-col gap-4'>
                  {dataCrmToken.map(({title, percentage, amount}) => (
                    <div className='flex flex-col gap-1' key={title}>
                      <div className='mb-2 flex w-full justify-between items-center'>
                        <span className='font-medium text-sm'>{title}</span>
                        <div>
                          <span className='text-base font-bold bg-gradient-to-r from-[#B72204] to-[#FC6400] bg-clip-text text-transparent'>
                            {percentage}% {' '}
                          </span>
                          <span className='text-base font-bold text-white'>({amount}.5M)</span>
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
            <div className='mb-6 p-10 backdrop-blur[50] text-center'>
              <div className='flex w-full justify-center'>
                <Image 
                  src='/crc_token_logo.png'
                  alt='CRC token logo'
                  width={126}
                  height={126}
                />
              </div>
              <h3 className='mt-6 text-4xl font-bold text-white'>$CRC Token</h3>
              <p className={`${poppins.className} mt-2 mb-6 text-xl font-medium text-[#E9E9E9] opacity-80`}>CromaChain Token</p>
              <GlassBox baseColor='white'>
                <div className='px-8 py-6 backdrop-blur[50]'>
                  <p className='mb-2.5 text-[40px] font-bold leading-[120%] bg-gradient-to-r from-[#B72204] to-[#FC6400] bg-clip-text text-transparent'>
                    2,000,000,000
                  </p>
                  <span className={`${poppins.className} text-base font-semibold text-[#E9E9E9] uppercase`}>Total suply</span>
                </div>
              </GlassBox>
              <div className={`${poppins.className} mt-6`}>
                <div className='grid grid-cols-2 gap-4 text-left'>
                  {dataCrcToken.map(({title, desc, icon}) => (
                    <GlassBox baseColor='primary' key={title}>
                      <div className='p-6 flex items-start gap-2.5 backdrop-blur-[20] h-full bg-[linear-gradient(rgba(252,100,0,0.08),rgba(252,100,0,0.08)),linear-gradient(rgba(0,0,0,0.34),rgba(0,0,0,0.34))]'>
                        <Image 
                          src={icon}
                          alt={`Icon ${title}`}
                          width={42}
                          height={42}
                        />
                        <div>
                          <p className='mb-2.5 font-semibold text-xl text-[#E9E9E9]'>{title}</p>
                          <p className='text-[#E9E9E9] opacity-60 text-base'>{desc}</p>
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
      <section className={`${poppins.className} relative px-[100] py-[60px]`}>
        <div className='-z-10 absolute top-1/2 left-1/2 -translate-1/2 size-[860px] bg-[#FC6400] rounded-full blur-[200px]'></div>
        <div className="-z-10 absolute top-[40%] -translate-y-1/2 -right-[20%] size-[600] rounded-full bg-[radial-gradient(circle_at_center,#F227AE_0%,rgba(242,39,174,0)_70%)] blur-3xl opacity-80"></div>
        <div className="-z-10 absolute top-[65%] -translate-y-1/2 -right-[20%] size-[600] rounded-full bg-[radial-gradient(circle_at_center,#FC6400_0%,rgba(242,39,174,0)_70%)] blur-3xl opacity-80"></div>
        <div className='flex flex-col text-center items-center gap-4'>
          <div className='px-3.5 py-2 w-fit rounded-full bg-[#A24101] border border-[#FC6400]'>
            <span className='text-white text-base'>Wallet Applications</span>
          </div>
          <Image
            src='/trix_wallet_logo_text_horizontal.png'
            alt='Trix wallet logo horizontal text'
            width={300}
            height={78}
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
          <p className='text-center max-w-[680px] text-xl font-medium text-[#E9E9E9]'>
            Secure, fast, and user-friendly Web3 wallet. Manage your crypto assets, NFTs, and interact with dApps effortlessly.
          </p>
          <div className='flex flex-wrap justify-center gap-2 max-w-[800px]'>
            {['Post-Quantum Cryptography', 'Multi-chain Support', 'DeFi Integration', 'Zero-Knowledge Proofs', 'ZK Risk Scanner', 'and more']
            .map((text, i) => (
              <div key={i} className={`my_border_gradient_white_dark p-[1px] before:rounded-[20px] rounded-[20px] h-full`}>
                <div className={`relative px-6 py-3 h-full overflow-hidden rounded-[20px] bg-[rgba(0,0,0,0.1)]`}>
                  <span className='text-xl font-medium text-[#E9E9E9] opacity-80'>
                    {text}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className='flex gap-6 items-center'>
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
      <section className='px-[100] py-[60px]'>
        <div className={`${poppins.className} flex flex-col text-center items-center gap-4`}>
          <div className='px-3.5 py-2 w-fit rounded-full bg-black border border-[#FC6400]'>
            <span className='text-[#FC6400] text-base'>📅 Roadmap</span>
          </div>
          <h2 className='text-4xl font-semibold text-white tracking-[-0.04%]'>
            <span className='bg-gradient-to-r from-[#B72204] to-[#FC6400] bg-clip-text text-transparent'>CROMA {' '}</span>
            Development Journey
          </h2>
          <p className='text-xl font-medium text-[#E9E9E9] opacity-80 max-w-[680px]'>
            From airdrop launch to full ecosystem deployment. Track our progress as we build the future of art and blockchain integration step by step.
          </p>
        </div>
      </section>
    </>
  );
}
