import Link from 'next/link';
import Image from 'next/image';
import { poppins } from '@/app/font';

const WalletApplication = () => {
  return (
    <section className={`${poppins.className} relative px-4 xl:px-[64px] 2xl:px-[100px] py-[60px] max-w-screen overflow-x-hidden xl:overflow-x-clip`}>
      <div className='-z-10 absolute top-1/2 left-1/2 -translate-1/2 size-[400px] xl:size-[800px] bg-[#FC6400] rounded-full blur-[200px]'></div>
      <div className='-z-10 hidden xl:block absolute top-[40%] -translate-y-1/2 -right-[20%] size-[600] rounded-full bg-[radial-gradient(circle_at_center,#F227AE_0%,rgba(242,39,174,0)_70%)] blur-3xl opacity-80'></div>
      <div className='-z-10 hidden xl:block absolute top-[50%] -translate-y-1/2 -right-[20%] size-[600] rounded-full bg-[radial-gradient(circle_at_center,#FC6400_0%,rgba(242,39,174,0)_70%)] blur-3xl opacity-80'></div>
      <div className='flex flex-col text-center items-center gap-4'>
        <div className='px-3.5 py-2 w-fit rounded-full bg-[#A24101] border border-[#FC6400]'>
          <span className='text-white text-base'>Wallet Applications</span>
        </div>
        <Image
          src='/trix_wallet_logo_text_horizontal.png'
          alt='Trix wallet logo horizontal text'
          width={300}
          height={78}
          sizes='(max-width: 768px) 150px, (max-width: 1024px) 300px, 300px'
          className='w-[150] md:w-[300px] 2xl:w-[300px]'
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
            <div key={i} className={`border border-[#FFFFFF] rounded-[20px] h-full`}>
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
  )
}

export default WalletApplication;
