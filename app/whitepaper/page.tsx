import React from "react";
import { poppins, orbitron } from "@/app/font";
import GlassBox from "@/components/GlassBox";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import ButtonPrimary from "@/components/ButtonPrimary";

const Whitepaper = () => {
  const half = Math.ceil(listTitle.length / 2);
  const firstContent = listTitle.slice(0, half);
  const secondContent = listTitle.slice(half);
  
  return (
    <>
    <Navbar active='whitepaper' />
    <header className='relative pt-[160px] h-full mx-4 md:mx-[100px] flex flex-col gap-4 items-center justify-between text-center'>
      <h1 className='font-black text-3xl xl:text-[80px] uppercase'>
        <span className='block leading-[120%] bg-gradient-to-r from-[#B72204] to-[#FC6400] bg-clip-text text-transparent text-nowrap'>
          CROMA ART
        </span>
        <span className='block leading-[120%] bg-gradient-to-r from-[#B72204] to-[#FC6400] bg-clip-text text-transparent'>
          WHITEPAPER
        </span>
      </h1>
      <p className={`${poppins.className} text-base xl:text-xl font-medium max-w-[780px]`}>
        A community-centric project championing creativity, transparency, and collective strength in the world of crypto art
      </p>
    </header>
    <section className="px-4 xl:px-15 2xl:px-[100px] pt-14">
      <GlassBox baseColor='orange'>
        <div className='p-4 xl:p-10 flex flex-col items-center justify-center'>
          <h2 className='text-2xl xl:text-[32px] font-semibold leading-[120%] text-white'>
            Table of Contents
          </h2>
          <p className={`${poppins.className} mt-4 text-base xl:text-xl font-medium text-[#E9E9E9] opacity-80`}>
            Click for jump to content
          </p>
          <div className='w-full flex flex-col md:flex-row justify-evenly items-start px-8'>
            <ol className={`${poppins.className} mt-10 opacity-80`}>
                {firstContent.map(({id, title}) => (
                <Link href={`#${id}`} key={id}>
                  <li className="text-lg xl:text-2xl font-medium text-[#E9E9E9] leading-[50px] list-decimal hover:text-[#FC6400] transition-all duration-300">
                    {title}
                  </li>
                </Link>
                ))}
            </ol>
            <ol start={half + 1} className={`${poppins.className} mt-10 opacity-80`}>
                {secondContent.map(({id, title}) => (
                <Link href={`#${id}`} key={id} >
                  <li className="text-lg xl:text-2xl font-medium text-[#E9E9E9] leading-[50px] list-decimal hover:text-[#FC6400] transition-all duration-300">
                    {title}
                  </li>
                </Link>
                ))}
            </ol>
          </div>
        </div>
      </GlassBox>
    </section>
    <section className={`${poppins.className} px-4 xl:px-15 2xl:px-[100px] py-8 xl:py-14 flex flex-col text-white`}>
      <article id='introduction' className='mt-[60px]'>
        <Title title='1. Introduction'/>
        <div className='mt-8 flex flex-col gap-8'>
          <Paragraph opacity={80}>
            Croma (CRM) is a meme token born from a profound passion for empowering communities, expressing authentic art, and embracing the vibrant, unpredictable spirit of the internet. In a cryptocurrency landscape often dominated by high-stakes speculation, Croma offers a refreshing alternative: a community-centric project that champions creativity, transparency, and collective strength. Croma's ultimate goal goes beyond financial gain; it embodies personal expression, enjoyment, and the viral power of community spirit, while serving as the foundation for the revolutionary CromaChain ecosystem.
          </Paragraph>
        </div>
      </article>
      <article id="summary" className='mt-[60px]'>
        <Title title='2. Executive Summary'/>
        <div className='my-8 flex flex-col gap-8'>
          <Paragraph opacity={80}>
            Croma was created by the community and for the community — for those who believe, who remain loyal, and who have persevered through the volatile world of crypto.
          </Paragraph>
          <Paragraph opacity={80}>
            Built on a foundation of trust, real contribution, and complete transparency, Croma is not just a token — it is a revolution set to redefine the true spirit of crypto communities while pioneering the future of Web3 infrastructure through CromaChain.
          </Paragraph>
        </div>
        <GlassBox baseColor="orange">
          <div className='px-8 xl:px-[60px] py-10'>
            <h4 className='text-2xl font-medium leading-[120%]'>
              Dual-Token Ecosystem
            </h4>
            <div className="mt-6 flex flex-col xl:flex-row w-full justify-between gap-8">
              <div className='w-full xl:max-w-1/2'>
                <h5 className="mb-10 text-2xl font-medium text-[#E9E9E9] leading-[50px]">
                  $CRM (CromaCoin)
                </h5>
                <span className="opacity-80">
                <Paragraph opacity={60}>
                  Community-focused utility token for art marketplace, AI Builder tools, and ecosystem access.
                </Paragraph>
                </span>
              </div>
              <div className='w-full xl:max-w-1/2'>
                <h5 className="mb-10 text-2xl font-medium text-[#E9E9E9] leading-[50px]">
                  $CMC (CromaChain)
                </h5>
                <span className="opacity-80">
                <Paragraph opacity={60}>
                  Infrastructure token powering the next-generation modular Layer 2 blockchain protocol.
                </Paragraph>
                </span>
              </div>
            </div>
          </div>
        </GlassBox>
      </article>
      <article id="vision-mission" className='mt-[60px]'>
        <Title title='3. Vision & Mission'/>
        <div className='flex gap-8'>  
          <div className="w-full xl:w-1/2">
            <h5 className="mt-8 mb-2 text-2xl font-medium text-[#E9E9E9] leading-[50px]">
              Vision
            </h5>
            <Paragraph opacity={80}>
              Croma's vision is to establish a resilient, inclusive, and competitive ecosystem for memes and art, with the community at its core.
            </Paragraph>
            <div className="h-fit mt-2">
              <GlassBox baseColor="white">
                <div className="p-6">
                  <p className="text-xl font-medium leading-[120%] italic">
                    "The future of Web3 is not defined by code — it is shaped by accessibility, trust, and transparency."
                  </p>
                </div>
              </GlassBox>
            </div>
          </div>
          <div className="w-full xl:w-1/2">
            <h5 className="mt-8 mb-2 text-2xl font-medium text-[#E9E9E9] leading-[50px]">
              Mission
            </h5>
            <Paragraph opacity={80}>
              Croma's mission includes:
            </Paragraph>
            <ul className="ml-8">
            {['Democratizing blockchain access through zero-code tools', 'Empowering artists and creators through tangible incentives','Building quantum-resistant, future-secure infrastructure','Maintaining unwavering transparency in all operations']
            .map((text) => (
              <li className="list-disc">
                <Paragraph opacity={80}>{text}</Paragraph>
              </li>
            ))}
            </ul>
          </div>
        </div>
      </article>
      <article id="key-features" className='mt-[60px]'>
        <Title title='4. Key Features'/>
        <div className="mt-8 grid grid-cols-2 gap-4">
          {features.map(({title, content}) => (
            <GlassBox baseColor="orange" key={title}>
              <div className="p-10 flex flex-col gap-6">
                <SubSubHeading>{title}</SubSubHeading>
                <Paragraph opacity={60}>{content}</Paragraph>
              </div>
            </GlassBox>
          ))}
        </div>
      </article>
      <article id="tokenomics" className='mt-[60px]'>
        <Title title='5. Tokenomics'/>
        <div className="mt-8">
          <GlassBox baseColor="orange">
            <div className="px-[60px] py-10">
              <div className="flex">
                <div className='w-full xl:max-w-1/2 flex flex-col gap-6'>
                  <SubSubHeading>CRM Token Supply</SubSubHeading>
                  <ul>
                    <li><Paragraph opacity={60}>
                      Total Supply: 950,000,000 CRM
                    </Paragraph></li>
                    <li><Paragraph opacity={60}>
                      Initial Circulating Supply (at TGE): ~800,000,000 CRM
                    </Paragraph></li>
                    <li><Paragraph opacity={60}>
                      Network: Ethereum (ERC-20)
                    </Paragraph></li>
                  </ul>
                </div>
                <div className='w-full xl:max-w-1/2 flex flex-col gap-6'>
                  <SubSubHeading>Distribution</SubSubHeading>
                  <ul>
                    <li><Paragraph opacity={60}>
                      Presale:84.2% (800,000,000 CRM)
                    </Paragraph></li>
                    <li><Paragraph opacity={60}>
                      Liquidity Pool:7.9% (75,000,000 CRM)
                    </Paragraph></li>
                    <li><Paragraph opacity={60}>
                      Community & Marketing:7.9% (75,000,000 CRM)
                    </Paragraph></li>
                  </ul>
                </div>
              </div>
              <div className='my-10 h-[1px] w-full bg-white opacity-10'></div>
              <SubSubHeading>TOKEN DISTRIBUTION DETAILS</SubSubHeading>
              <div className='mb-10 flex flex-col gap-6'>
                <div>
                  <SubSubHeading>Presale – 84.2% (800,000,000 CRM)</SubSubHeading>
                  <Paragraph opacity={60}>Tokens allocated for the public sale and early investors. Funds raised during the presale phase will be used to:</Paragraph>
                  <ul className="ml-8">
                    {['Develop the Croma Art ecosystem and infrastructure', 'Support the deployment of CromaChain', 'Cover operational and expansion costs', 'Fund strategic partnerships and listings']
                    .map((text) => (
                      <li className='list-disc'>
                        <Paragraph opacity={60}>{text}</Paragraph>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <SubSubHeading>Liquidity Pool – 7.9% (75,000,000 CRM)</SubSubHeading>
                  <Paragraph opacity={60}>
                    Allocated to provide liquidity on decentralized exchanges (DEX) such as Uniswap. This ensures smooth and stable trading of CRM tokens in the open market, especially post-presale.
                  </Paragraph>
                </div>
                <div>
                  <SubSubHeading>Community & Marketing – 7.9% (75,000,000 CRM)</SubSubHeading>
                  <Paragraph opacity={60}>
                    Reserved for airdrops, community incentives, ambassador programs, promotional events, and strategic collaborations to grow brand awareness and user engagement.
                  </Paragraph>
                </div>
              </div>
              <GlassBox baseColor='orange'>
                <div className="p-10">
                  <SubSubHeading>Note on Team Allocation</SubSubHeading>
                  <div className="flex flex-col gap-8">
                    <Paragraph opacity={60}>
                      There is no direct team allocation in the CRM token supply. Instead, team incentives are allocated through the CromaChain (CMC) ecosystem — a next-generation modular Layer 2 blockchain protocol that will power the future infrastructure of Web3.
                    </Paragraph>
                    <Paragraph opacity={60}>
                      This dual-token model ensures transparency, fairness, and aligns team incentives with long-term ecosystem success while keeping CRM fully community-focused.
                    </Paragraph>
                  </div>
                </div>
              </GlassBox>
            </div>
          </GlassBox>
        </div>
      </article>
      <article id="ecosystem" className='mt-[60px]'>
        <Title title='6. CromaChain Ecosystem' />
        <div className="my-8">
          <GlassBox baseColor="orange">
            <div className='p-10 flex flex-col justify-center items-center gap-6'>
              <SubSubHeading>
                Infrastructure for the Future of Web3
              </SubSubHeading>
              <Paragraph opacity={60}>
                <span className="italic">
                  "Built with Community. Powered by Cryptography. Guided by Vision."
                </span>
              </Paragraph>
              <Paragraph>
                CromaChain is a next-generation modular Layer 2 protocol built to redefine the infrastructure landscape of Web3. Where legacy chains are rigid, opaque, and developer-centric, CromaChain is inclusive, scalable, and future-secure. Our vision is to democratize blockchain access through zero-code tools, quantum-resistant security, and provable execution.
              </Paragraph>
              <ButtonPrimary>
                <Link href='' className={`${orbitron.className}`}>
                    View Cromachain
                </Link>
              </ButtonPrimary>
            </div>
          </GlassBox>
        </div>
        <SubHeading>
          Core Technologies
        </SubHeading>
        <div className='mt-6 mb-8 grid grid-cols-1 xl:grid-cols-3 gap-4'>
          <GlassBox baseColor='orange'>
            <div className="p-10">
              <SubSubHeading>
                zk-STARKs
              </SubSubHeading>
              <p className='mt-6 text-base xl:text-2xl font-medium text-[#E9E9E9] opacity-60'>
                Transparent, scalable, and quantum-resistant zero-knowledge proofs using hash-based commitments.
              </p>
              <ul className="ml-8">
                {['No trusted setup required', 'Parallel proof generation', 'Recursive-friendly architecture','Quantum attack resistance']
                .map((text) => (
                  <li className="list-disc">
                    <p className='text-base xl:text-2xl font-medium text-[#E9E9E9] opacity-60'>
                    {text}
                  </p></li>
                ))}
              </ul>
            </div>
          </GlassBox>
        </div>
        <SubHeading>
          Modular Architecture
        </SubHeading>
        <table className="table-auto mt-6 mb-8 text-white w-full text-left">
          <thead className="w-[30%] bg-gradient-to-r from-[#B72204] to-[#FC6400]">
            <tr>
              <th className='px-6 py-3 text-2xl font-medium tracking-[-0.04%] leading-[38px]'>
                Component
              </th>
              <th className='px-6 py-3 text-2xl font-medium tracking-[-0.04%] leading-[38px]'>
                Function
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='px-6 py-3 text-2xl tracking-[-0.04%] leading-[38px]'>
                zkEVM
              </td>
              <td className='px-6 py-3 text-2xl tracking-[-0.04%] leading-[38px]'>
                zk-compatible smart contract execution
              </td>
            </tr>
            <tr className='bg-[#2C2C2C]'>
              <td className='px-6 py-3 text-2xl tracking-[-0.04%] leading-[38px]'>
                zkEVM
              </td>
              <td className='px-6 py-3 text-2xl tracking-[-0.04%] leading-[38px]'>
                zk-compatible smart contract execution
              </td>
            </tr>
          </tbody>
        </table>
        <SubHeading>
          CMC Token Utility & Economics
        </SubHeading>
        <div className='mt-6 mb-8 grid grid-cols-1 xl:grid-cols-2 gap-4'>
          <GlassBox baseColor="orange">
            <div className='p-10 flex flex-col gap-6'>
              <SubSubHeading>
                Token Supply
              </SubSubHeading>
              <ul className="ml-8">
                {['Total Supply: 9.5B CMC', 'TGE: 900M CMC (unlocked post-CRM phase)', 'Distribution: Fully distributed by 2030','Team Vesting: Until 2035 (max 25%/year)']
                .map((text) => (
                  <li className='list-disc'><Paragraph>
                      {text}
                    </Paragraph></li>
                ))}
              </ul>
            </div>
          </GlassBox>
          <GlassBox baseColor="orange">
            <div className='p-10 flex flex-col gap-6'>
              <SubSubHeading>
                Token Supply
              </SubSubHeading>
              <ul className="ml-8">
                {['Total Supply: 9.5B CMC', 'TGE: 900M CMC (unlocked post-CRM phase)', 'Distribution: Fully distributed by 2030','Team Vesting: Until 2035 (max 25%/year)']
                .map((text) => (
                  <li className='list-disc'><Paragraph>
                      {text}
                    </Paragraph></li>
                ))}
              </ul>
            </div>
          </GlassBox>
          <div className='row-span-2'>
            <GlassBox baseColor='orange'>
              <div className='p-10'>
                <SubSubHeading>Performance Benchmarks</SubSubHeading>
                <div className={`${orbitron.className} mt-6 grid grid-cols-2 xl:grid-cols-4`}>
                  <div>
                    <span className='text-4xl font-bold leading-[120%] text-white'>22,413</span>
                    <span className='mt-2.5 text-base font-semibold leading-[120%] text-[#E9E9E9] opacity-60'>TPS (100 validators)</span>
                  </div>
                  <div>
                    <span className='text-4xl font-bold leading-[120%] text-white'>22,413</span>
                    <span className='mt-2.5 text-base font-semibold leading-[120%] text-[#E9E9E9] opacity-60'>TPS (100 validators)</span>
                  </div>
                  <div>
                    <span className='text-4xl font-bold leading-[120%] text-white'>22,413</span>
                    <span className='mt-2.5 text-base font-semibold leading-[120%] text-[#E9E9E9] opacity-60'>TPS (100 validators)</span>
                  </div>
                  <div>
                    <span className='text-4xl font-bold leading-[120%] text-white'>22,413</span>
                    <span className='mt-2.5 text-base font-semibold leading-[120%] text-[#E9E9E9] opacity-60'>TPS (100 validators)</span>
                  </div>
                </div>
              </div>
            </GlassBox>
          </div>
        </div>
      </article>
      <article id="ai-builder" className='mt-[60px]'>
        <Title title='7. AI Builder Platform'/>
        <div className='mt-8'>
          <SubHeading>
            Zero-Code Web3 Development
          </SubHeading>
          <Paragraph opacity={80}>
            CromaChain's revolutionary AI Builder enables anyone to create tokens, websites, and presales using natural language — no coding skills required. This democratizes access to Web3 development and empowers creators worldwide.
          </Paragraph>
        </div>
        <GlassBox baseColor="orange">
          <div className='px-8 xl:px-[60px] py-10'>
            <SubHeading>
              How It Works
            </SubHeading>
            <div className="mt-6 mb-8 flex flex-col xl:flex-row w-full justify-between gap-8">
              <div className='w-full xl:max-w-1/2'>
                <Paragraph>
                  Example Input:
                </Paragraph>
                <GlassBox baseColor="orange">
                  <div className="p-6">
                    <span className='text-xl italic text-white'>
                      "Create a token with 1M supply, 2% burn, 30-day presale, and a website."
                    </span>
                  </div>
                </GlassBox>
              </div>
              <div className='w-full xl:max-w-1/2'>
                <Paragraph>
                  AI Output:
                </Paragraph>
                <ul className='ml-8'>
                  {['ERC-20 smart contract','Landing page with countdown','Real-time audit integration','Automated backend deployment','CRM auto-burn + CMC rewards']
                  .map((text) => (
                    <li className="list-disc"><Paragraph>
                      {text}  
                    </Paragraph></li>
                  ))}
                </ul>
              </div>
            </div>
            <SubHeading>
              Revenue Model & Token Economics
            </SubHeading>
          </div>
        </GlassBox>
      </article>
    </section>
    </>
  )
}

export default Whitepaper;

const Title = ({title}: {title: string}) => {
  return (
    <div className='flex items-center gap-4'>
      <div className='w-4 xl:w-6 h-10 xl:h-15 bg-gradient-to-r from-[#B72204] to-[#FC6400] rounded-full'></div>
        <h3 className='text-2xl xl:text-4xl font-semibold -tracking-[0.04%] text-white'>
          {title}
        </h3>
    </div>
  )
}

const SubHeading = ({children}: {children: React.ReactNode}) => {
  return (
    <h4 className="text-3xl font-semibold text-[#E9E9E9] leading-[30px] tracking-[-0.04%]">
      {children}
    </h4>
  )
}

const SubSubHeading = ({children}: {children: React.ReactNode}) => {
  return (
    <h5 className="text-2xl font-medium text-[#E9E9E9] leading-[50px]">
      {children}
    </h5>
  )
}

const Paragraph = ({opacity, children}: {opacity?: number; children: React.ReactNode}) => {
  const getOpacity = opacity ?? 100;
  const classOpacity: Record<number, string> = {
    10: 'opacity-10',
    20: 'opacity-20',
    30: 'opacity-30',
    40: 'opacity-40',
    50: 'opacity-50',
    60: 'opacity-60',
    70: 'opacity-70',
    80: 'opacity-80',
    90: 'opacity-90',
    100: 'opacity-100',
  }

  return (
    <p className={`text-base xl:text-2xl font-medium text-[#E9E9E9] ${classOpacity[getOpacity]} xl:leading-[50px]`}>
    {children}
    </p>
  )
}

const listTitle = [{
    id: 'introduction',
    title: 'Introduction'
}, {
    id: 'summary',
    title: 'Executive Summary'
}, {
    id:'vision-mission',
    title: 'Vision and Mission'
}, {
    id: 'key-features',
    title: 'Key Features'
}, {
    id: 'tokenomics',
    title: 'Tokenomics'
}, {
    id: 'ecosystem',
    title: 'CromaChain Ecosystem'
}, {
    id: 'ai-builder',
    title: 'AI Builder Platform'
}, {
    id: 'launch-timeline',
    title: 'Launch Timeline'
}, {
    id:'art-platform',
    title: 'Art Platform'
}, {
    id: 'automatic-staking',
    title: 'Automatic Staking'
}, {
    id: 'security-transparency',
    title: 'Security & Transparency'
}, {
    id: 'exchange-listing',
    title: 'Exchange Listings'
}, {
    id: 'risks-disclaimenr',
    title:'Risks & Disclaimer'
}];

const features = [{
    title: 'Transaction-Free Trading',
    content: 'Croma eliminates transaction taxes, allowing free and transparent trading.'
},{
    title: 'Full Decentralization',
    content: 'Smart contract ownership has been renounced to guarantee full decentralization.'
},{
    title: 'AI-Powered Tools',
    content: 'Revolutionary AI Builder enables zero-code token and website creation using natural language.'
},{
    title: 'Quantum-Resistant Security',
    content: 'Post-quantum cryptography ensures long-term security against future quantum computing threats.'
},]
