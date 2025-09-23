import React from "react";
import { poppins, orbitron } from "@/app/font";
import GlassBox from "@/components/GlassBox";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import ButtonPrimary from "@/components/ButtonPrimary";
import Heading from "./Heading";
import Paragraph from "./Paragraph";
import SubHeading from "./SubHeading";
import SubSubHeading from "./SubSubHeading";
import Footer from "@/components/Footer";

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
          <div className='w-full flex flex-col md:flex-row justify-around items-start px-8'>
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
                  <li className="text-lg xl:text-[22px] 2xl:text-2xl font-medium text-[#E9E9E9] leading-[50px] list-decimal hover:text-[#FC6400] transition-all duration-300">
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
      <article id='introduction' className='scroll-mt-[140px] pt-[60px]'>
        <Heading>1. Introduction</Heading>
        <div className='mt-8'>
          <Paragraph opacity={80}>
            Croma (CRM) is a meme token born from a profound passion for empowering communities, expressing authentic art, and embracing the vibrant, unpredictable spirit of the internet. In a cryptocurrency landscape often dominated by high-stakes speculation, Croma offers a refreshing alternative: a community-centric project that champions creativity, transparency, and collective strength. Croma's ultimate goal goes beyond financial gain; it embodies personal expression, enjoyment, and the viral power of community spirit, while serving as the foundation for the revolutionary CromaChain ecosystem.
          </Paragraph>
        </div>
      </article>
      <article id="summary" className='scroll-mt-[140px] pt-[60px]'>
        <Heading>2. Executive Summary</Heading>
        <div className='my-8 space-y-8'>
          <Paragraph opacity={80}>
            Croma was created by the community and for the community — for those who believe, who remain loyal, and who have persevered through the volatile world of crypto.
          </Paragraph>
          <Paragraph opacity={80}>
            Built on a foundation of trust, real contribution, and complete transparency, Croma is not just a token — it is a revolution set to redefine the true spirit of crypto communities while pioneering the future of Web3 infrastructure through CromaChain.
          </Paragraph>
        </div>
        <GlassBox baseColor="orange">
          <div className='px-4 py-8 xl:px-[60px] xl:py-10'>
            <SubHeading>Dual-Token Ecosystem</SubHeading>
            <div className="mt-6 flex flex-col xl:flex-row w-full justify-between gap-8">
              <div className='w-full xl:max-w-1/2 space-y-2 xl:space-y-10'>
                <SubSubHeading>$CRM (CromaCoin)</SubSubHeading>
                <Paragraph opacity={60}>
                  Community-focused utility token for art marketplace, AI Builder tools, and ecosystem access.
                </Paragraph>
              </div>
              <div className='w-full xl:max-w-1/2 space-y-2 xl:space-y-10'>
                <SubSubHeading>$CMC (CromaChain)</SubSubHeading>
                <Paragraph opacity={60}>
                  Infrastructure token powering the next-generation modular Layer 2 blockchain protocol.
                </Paragraph>
              </div>
            </div>
          </div>
        </GlassBox>
      </article>
      <article id="vision-mission" className='scroll-mt-[140px] pt-[60px]'>
        <Heading>3. Vision & Mission</Heading>
        <div className='mt-8 flex flex-col xl:flex-row gap-8'>  
          <div className="w-full xl:w-1/2 space-y-2">
            <SubHeading>Vision</SubHeading>
            <Paragraph opacity={80}>
              Croma's vision is to establish a resilient, inclusive, and competitive ecosystem for memes and art, with the community at its core.
            </Paragraph>
            <div className="h-fit mt-2">
              <GlassBox baseColor="orange">
                <div className="p-6">
                  <p className="text-sm xl:text-xl font-medium leading-[120%] italic">
                    "The future of Web3 is not defined by code — it is shaped by accessibility, trust, and transparency."
                  </p>
                </div>
              </GlassBox>
            </div>
          </div>
          <div className="w-full xl:w-1/2 space-y-2">
            <SubHeading>Mission</SubHeading>
            <Paragraph opacity={80}>
              Croma's mission includes:
            </Paragraph>
            <ul className="ml-4 xl:ml-8">
            {['Democratizing blockchain access through zero-code tools', 'Empowering artists and creators through tangible incentives','Building quantum-resistant, future-secure infrastructure','Maintaining unwavering transparency in all operations']
            .map((text, i) => (
              <li key={i} className="list-disc">
                <Paragraph opacity={80}>{text}</Paragraph>
              </li>
            ))}
            </ul>
          </div>
        </div>
      </article>
      <article id="key-features" className='scroll-mt-[140px] pt-[60px]'>
        <Heading>4. Key Features</Heading>
        <div className="mt-8 grid grid-cols-1 xl:grid-cols-2 gap-4">
          {features.map(({title, content}) => (
            <GlassBox baseColor="orange" key={title}>
              <div className="px-4 py-8 xl:p-10 flex flex-col gap-3 xl:gap-6">
                <SubSubHeading>{title}</SubSubHeading>
                <Paragraph opacity={60}>{content}</Paragraph>
              </div>
            </GlassBox>
          ))}
        </div>
      </article>
      <article id="tokenomics" className='scroll-mt-[140px] pt-[60px]'>
        <Heading>5. Tokenomics</Heading>
        <div className="mt-8">
          <GlassBox baseColor="orange">
            <div className="px-4 py-8 xl:px-[60px] xl:py-10 space-y-5 xl:space-y-10">
              <div className="flex flex-col xl:flex-row">
                <div className='w-full xl:max-w-1/2 space-y-3 xl:space-y-6'>
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
                <div className='w-full xl:max-w-1/2 space-y-3 xl:space-y-6'>
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
              <div className='h-[1px] w-full bg-white opacity-10'></div>
              <SubSubHeading>TOKEN DISTRIBUTION DETAILS</SubSubHeading>
              <div className='space-y-6'>
                <div>
                  <SubSubHeading>Presale – 84.2% (800,000,000 CRM)</SubSubHeading>
                  <Paragraph opacity={60}>Tokens allocated for the public sale and early investors. Funds raised during the presale phase will be used to:</Paragraph>
                  <ul className="ml-4 xl:ml-8">
                    {['Develop the Croma Art ecosystem and infrastructure', 'Support the deployment of CromaChain', 'Cover operational and expansion costs', 'Fund strategic partnerships and listings']
                    .map((text, i) => (
                      <li key={i} className='list-disc'>
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
                <div className="px-4 py-8 xl:p-10">
                  <SubSubHeading>Note on Team Allocation</SubSubHeading>
                  <div className="mt-6 space-y-8">
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
      <article id="ecosystem" className='scroll-mt-[140px] pt-[60px]'>
        <Heading>6. CromaChain Ecosystem</Heading>
        <div className="my-8">
          <GlassBox baseColor="orange">
            <div className='px-4 py-8 xl:p-10 flex flex-col justify-center items-center gap-6'>
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
                <Link href='#' className={`${orbitron.className}`}>
                    View Cromachain
                </Link>
              </ButtonPrimary>
            </div>
          </GlassBox>
        </div>
        <SubHeading>Core Technologies</SubHeading>
        <div className='mt-6 mb-8 grid grid-cols-1 xl:grid-cols-3 gap-4'>
          {coreTechnologies.map(({title, desc, listTexts}) => (
            <GlassBox baseColor='orange' key={title}>
              <div className="px-4 py-8 xl:p-10 space-y-4 xl:space-y-8">
                <SubSubHeading>
                  {title}
                </SubSubHeading>
                <div>
                  <Paragraph opacity={60}>{desc}</Paragraph>
                  <ul className="ml-4 xl:ml-8">
                    {listTexts !== undefined && listTexts.map((text, i) => (
                      <li key={i} className="list-disc">
                        <Paragraph opacity={60}>
                        {text}
                      </Paragraph></li>
                    ))}
                  </ul>
                </div>
              </div>
            </GlassBox>
          ))}
        </div>
        <SubHeading>Modular Architecture</SubHeading>
        <table className="table-auto mt-6 mb-8 text-white w-full text-left">
          <thead className="md:w-[30%] bg-gradient-to-r from-[#B72204] to-[#FC6400] border border-[#818181]">
            <tr>
              <th className='px-2 xl:px-6 py-1 xl:py-3 text-base xl:text-[22px] 2xl:text-2xl font-medium tracking-[-0.04%] leading-[38px]'>
                Component
              </th>
              <th className='px-2 xl:px-6 py-1 xl:py-3 text-base xl:text-[22px] 2xl:text-2xl font-medium tracking-[-0.04%] leading-[38px]'>
                Function
              </th>
            </tr>
          </thead>
          <tbody>
            {modularArchitecture.map(({title, desc}, index) => {
              const bgStyle = index % 2 === 0 ? 'bg-[#2C2C2C]' : 'bg-transparent'
              return (
              <tr key={index} className={`${bgStyle} border border-[#818181]`}>
                <td className='px-2 xl:px-6 py-1 xl:py-3 text-base xl:text-[22px] 2xl:text-2xl tracking-[-0.04%] leading-[38px]'>
                  {title}
                </td>
                <td className='px-2 xl:px-6 py-1 xl:py-3 text-base xl:text-[22px] 2xl:text-2xl tracking-[-0.04%] leading-[38px]'>
                  {desc}
                </td>
              </tr>
            )})}
          </tbody>
        </table>
        <SubHeading>CMC Token Utility & Economics</SubHeading>
        <div className='mt-6 mb-8 grid grid-cols-1 xl:grid-cols-2 gap-4'>
          <GlassBox baseColor="orange">
            <div className='px-4 py-8 xl:p-10 space-y-6'>
              <SubSubHeading>Token Supply</SubSubHeading>
              <ul className="ml-4 xl:ml-8">
                {['Total Supply: 9.5B CMC', 'TGE: 900M CMC (unlocked post-CRM phase)', 'Distribution: Fully distributed by 2030','Team Vesting: Until 2035 (max 25%/year)']
                .map((text, i) => (
                  <li key={i} className='list-disc'><Paragraph opacity={60}>
                      {text}
                    </Paragraph></li>
                ))}
              </ul>
            </div>
          </GlassBox>
          <GlassBox baseColor="orange">
            <div className='px-4 py-8 xl:p-10 space-y-6'>
              <SubSubHeading>Utility Functions</SubSubHeading>
              <ul className="ml-4 xl:ml-8">
                {['Gas fees and transaction costs', 'Validator staking and rewards', 'Governance and protocol decisions','Network security and consensus', 'Cross-chain bridge operations']
                .map((text, i) => (
                  <li key={i} className='list-disc'><Paragraph opacity={60}>
                      {text}
                    </Paragraph></li>
                ))}
              </ul>
            </div>
          </GlassBox>
          <div className='xl:col-span-2'>
            <GlassBox baseColor='orange'>
              <div className='px-4 py-8 xl:p-10 text-center xl:text-left'>
                <SubSubHeading>Performance Benchmarks</SubSubHeading>
                <div className={`${orbitron.className} mt-6 grid grid-cols-2 xl:grid-cols-4 gap-4`}>
                  {performanceBenchmark.map(({title, desc}) => (
                    <div key={title} className="flex flex-col items-center gap-2.5 text-center">
                      <span className='text-2xl xl:text-3xl 2xl:text-4xl font-bold leading-[120%] text-white'>{title}</span>
                      <span className='text-sm xl:text-base font-semibold leading-[120%] text-[#E9E9E9] opacity-60'>{desc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </GlassBox>
          </div>
        </div>
      </article>
      <article id="ai-builder" className='scroll-mt-[140px] pt-[60px]'>
        <div className='space-y-8'>
          <Heading>7. AI Builder Platform</Heading>
          <div className='space-y-4'>
            <SubHeading>Zero-Code Web3 Development</SubHeading>
            <Paragraph opacity={80}>
              CromaChain's revolutionary AI Builder enables anyone to create tokens, websites, and presales using natural language — no coding skills required. This democratizes access to Web3 development and empowers creators worldwide.
            </Paragraph>
          </div>
          <GlassBox baseColor="orange">
            <div className='px-4 py-8 xl:px-[60px] xl:py-10'>
              <SubHeading>
                How It Works
              </SubHeading>
              <div className="mt-6 mb-8 flex flex-col xl:flex-row w-full justify-between gap-8">
                <div className='w-full xl:max-w-1/2'>
                  <Paragraph>
                    Example Input:
                  </Paragraph>
                  <div className="mt-4 h-fit">
                    <GlassBox baseColor="orange">
                      <div className="px-4 py-6 xl:p-6">
                        <span className='text-sm xl:text-xl italic text-white'>
                          "Create a token with 1M supply, 2% burn, 30-day presale, and a website."
                        </span>
                      </div>
                    </GlassBox>
                  </div>
                </div>
                <div className='w-full xl:max-w-1/2'>
                  <Paragraph>
                    AI Output:
                  </Paragraph>
                  <ul className='ml-4 xl:ml-8'>
                    {['ERC-20 smart contract','Landing page with countdown','Real-time audit integration','Automated backend deployment','CRM auto-burn + CMC rewards']
                    .map((text, i) => (
                      <li key={i} className="list-disc"><Paragraph>
                        {text}  
                      </Paragraph></li>
                    ))}
                  </ul>
                </div>
              </div>
              <SubHeading>
                Revenue Model & Token Economicsb
              </SubHeading>
              <div className='mt-6 mb-8 grid grid-cols-1 xl:grid-cols-2 gap-x-4 gap-y-6'>
                <GlassBox baseColor='orange'>
                  <div className='px-4 py-8 xl:p-10 space-y-6'>
                    <SubSubHeading>Revenue Collection</SubSubHeading>
                    <ul className='ml-4 xl:ml-8'>
                      {['All fees collected in #CRM tokens', 'Token launch services', 'Website deployment','Presale gateway access','AI audit service']
                      .map((text, i) => (
                        <li key={i} className='list-disc'><Paragraph opacity={60}>
                          {text}
                          </Paragraph></li>
                      ))}
                    </ul>
                  </div>
                </GlassBox>
                <GlassBox baseColor='orange'>
                  <div className='px-4 py-8 xl:p-10 space-y-6'>
                    <SubSubHeading>Token Burn Mechanism</SubSubHeading>
                    <ul className='ml-4 xl:ml-8'>
                      {['50% of revenue permanently burned', '50% allocated to marketing wallet', 'Deflationary token economics','Automatic burn execution','Transparent burn tracking']
                      .map((text, i) => (
                        <li key={i} className='list-disc'><Paragraph opacity={60}>
                          {text}
                          </Paragraph></li>
                      ))}
                    </ul>
                  </div>
                </GlassBox>
                <div className='xl:col-span-2'>
                  <GlassBox baseColor='orange'>
                    <div className='px-4 py-8 xl:p-10 space-y-6'>
                      <SubSubHeading>Transition Rute</SubSubHeading>
                      <Paragraph opacity={60}>
                        CRM will be used for all AI Builder services until the supply reaches 100M tokens. After this threshold, #CMC will replace CRM for utility funcitons, ensuring a smooth transition to the CromaChain mainnet ecosystem.
                      </Paragraph>
                      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
                        <div className='space-y-6'>
                          <SubSubHeading>Phase 1: CRM Era</SubSubHeading>
                          <Paragraph opacity={60}>
                            CRM serves as the primary utility token for all AI Builder services, with continuous burning reducing supply.
                          </Paragraph>
                        </div>
                        <div className='space-y-6'>
                          <SubSubHeading>Phase 2: CRM Era</SubSubHeading>
                          <Paragraph opacity={60}>
                            CMC takes over utility functions as CromaChain mainnet launches, providing infrastructure-level services.
                          </Paragraph>
                        </div>
                      </div>
                    </div>
                  </GlassBox>
                </div>
              </div>
            </div>
          </GlassBox>
        </div>
      </article>
      <article id="launch-timeline" className='scroll-mt-[140px] pt-[60px]'>
        <div className='space-y-8'>
          <Heading>8. Launch Timeline</Heading>
          <div>
            <h4 className='text-[22px] xl:text-2xl font-medium text-white tracking-[-0.04%]'>
              CRM Token Launch
            </h4>
            <div className='mt-6 space-y-4'>
              {timeline['launch'].map(({phase, desc}, index) => (
                <GlassBox key={index} baseColor='orange'>
                  <div className='px-4 py-8 xl:p-10 space-y-6'>
                    <SubSubHeading>Phase {index+1}: {phase}</SubSubHeading>
                    <Paragraph opacity={60}>{desc}</Paragraph>
                  </div>
                </GlassBox>
              ))}
            </div>
          </div>
          <div>
            <h4 className='text-[22px] xl:text-2xl font-medium text-white tracking-[-0.04%]'>
              ChromaChain Development Timeline
            </h4>
            <div className='mt-6 grid grid-cols-1 xl:grid-cols-2 gap-4'>
              {timeline['development'].map(({title, listTexts}, index) => (
                <GlassBox key={index} baseColor='orange'>
                  <div className='px-4 py-8 xl:p-10 space-y-6'>
                    <SubSubHeading>{title}</SubSubHeading>
                    <ul className="ml-4 xl:ml-8">
                      {listTexts.map((text,i) => (
                        <li key={i} className='list-disc'><Paragraph opacity={60}>
                          {text}
                          </Paragraph></li>
                      ))}
                    </ul>
                  </div>
                </GlassBox>
              ))}
            </div>
          </div>
        </div>
      </article>
      <article id="art-platform" className='scroll-mt-[140px] pt-[60px]'>
        <div className='space-y-8'>
          <Heading>9. Art Platform and Artwork Sales</Heading>
          <div>
            <h4 className='mb-4 text-[22px] xl:text-2xl font-medium text-white tracking-[-0.04%]'>
              Original Artwork Only
            </h4>
            <Paragraph opacity={80}>
              Every artwork featured and sold through Croma is an authentic creation, crafted by the minds and hands of real artists. Croma rejects the practice of editing or repurposing others' works without permission. Every painting available on the official Croma website represents true creativity and hard work, making each piece a highly valuable and collectible asset.
            </Paragraph>
          </div>
          <div className='grid grid-cols-1 xl:grid-cols-2 gap-4'>
            <GlassBox baseColor="orange">
              <div className='px-4 py-8 xl:p-10'>
                <SubSubHeading>Transaction in CRM Only</SubSubHeading>
                <Paragraph opacity={60}>
                  Artwork purchases will be conducted exclusively using CRM tokens, creating utility and demand for the community token while supporting the art ecosystem.
                </Paragraph>
              </div>
            </GlassBox>
            <GlassBox baseColor="orange">
              <div className='px-4 py-8 xl:p-10'>
                <SubSubHeading>Revenue Distribution</SubSubHeading>
                <ul className='ml-4 xl:ml-8'>
                  <li className='list-disc'>
                    <Paragraph opacity={60}>
                      50% Permanently burned
                    </Paragraph>
                  </li>
                  <li className='list-disc'>
                    <Paragraph opacity={60}>
                      50% allocated to marketing
                    </Paragraph>
                  </li>
                </ul>
              </div>
            </GlassBox>
          </div>
        </div>
      </article>
      <article id="automatic-staking" className='scroll-mt-[140px] pt-[60px]'>
        <div className='space-y-8'>
          <Heading>10. Automatic Stacking for Presale Participants</Heading>
          <div>
            <h4 className='mb-4 text-2xl font-medium text-white tracking-[-0.04%]'>
              Original Artwork Only
            </h4>
            <Paragraph opacity={80}>
              Every artwork featured and sold through Croma is an authentic creation, crafted by the minds and hands of real artists. Croma rejects the practice of editing or repurposing others' works without permission. Every painting available on the official Croma website represents true creativity and hard work, making each piece a highly valuable and collectible asset.
            </Paragraph>
          </div>
          <GlassBox baseColor='orange'>
            <div className='px-4 py-8 xl:px-[60px] xl:py-10 space-y-6'>
              <div className='space-y-4'>
                <SubSubHeading>Presale Reward Program</SubSubHeading>
                <Paragraph opacity={80}>
                  Every presale participant will benefit from an automatic 10% weekly increase in their CRM token holdings.
                </Paragraph>
              </div>
              <GlassBox baseColor="orange">
                <div className='px-4 py-6 xl:p-6'>
                  <p className='text-base xl:text-2xl text-white mb-4'>Example Calculation:</p>
                  <p className='text-base xl:text-2xl text-white'>
                    If a participant purchases $100 worth of CRM tokens, their balance would grow to $110 after the first week, $121 after the second week, and so forth.
                  </p>
                </div>
              </GlassBox>
              <Paragraph opacity={80}>
                This reward is uncapped and applies equally to all participants, regardless of their contribution size, incentivizing early support and fostering long-term community loyalty.
              </Paragraph>
            </div>
          </GlassBox>
        </div>
      </article>
      <article id="security-transparency" className='scroll-mt-[140px] pt-[60px]'>
        <div className='space-y-8'>
          <Heading>11. Security and Transparency </Heading>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
            <GlassBox baseColor="orange">
              <div className="px-4 py-8 xl:p-10 space-y-6">
                <SubSubHeading>Smart Contract Audit</SubSubHeading>
                <Paragraph opacity={60}>
                  The smart contract will be fully audited before the presale concludes to ensure maximum security and reliability.
                </Paragraph>
              </div>
            </GlassBox>
            <GlassBox baseColor="orange">
              <div className="px-4 py-8 xl:p-10 space-y-6">
                <SubSubHeading>Wallet Transparency</SubSubHeading>
                <Paragraph opacity={60}>
                  All project wallets are publicly visible and will only be accessed according to the project's actual needs.
                </Paragraph>
              </div>
            </GlassBox>
          </div>
          <div>
            <h4 className='mb-4 text-2xl font-semibold text-white tracking-[-0.04%]'>
              CromaChain Security Framework
            </h4>
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
              <GlassBox baseColor="orange">
                <div className="px-4 py-8 xl:p-10 space-y-6">
                  <SubSubHeading>Formal Verification</SubSubHeading>
                  <Paragraph opacity={60}>
                    Mathematical proof of smart contract correctness using Z3/Boolector verification tools.
                  </Paragraph>
                </div>
              </GlassBox>
              <GlassBox baseColor="orange">
                <div className="px-4 py-8 xl:p-10 space-y-6">
                  <SubSubHeading>AI-Based Auditing</SubSubHeading>
                  <Paragraph opacity={60}>
                    Static analysis combined with AI-powered audit engine for comprehensive security assessment.
                  </Paragraph>
                </div>
              </GlassBox>
              <GlassBox baseColor="orange">
                <div className="px-4 py-8 xl:p-10 space-y-6">
                  <SubSubHeading>External Audits</SubSubHeading>
                  <Paragraph opacity={60}>
                    Professional audits by CertiK & Halborn with public audit logs before mainnet launch.
                  </Paragraph>
                </div>
              </GlassBox>
            </div>
          </div>
        </div>
      </article>
      <article id="exchange-listing" className='scroll-mt-[140px] pt-[60px]'>
        <Heading>12. Exchange Listing</Heading>
        <div className="mt-8 space-y-4">
          <GlassBox baseColor='orange'>
            <div className="px-4 py-8 xl:p-10 space-y-6">
              <SubSubHeading>CRM Token Listings</SubSubHeading>
              <Paragraph opacity={60}>
                After the presale and initial launch phase, Croma plans to list on 5 centralized exchanges (CEX) ranging from Tier 1 to Tier 10, to ensure maximum liquidity and broader exposure.
              </Paragraph>
              <Paragraph opacity={60}>
                Specific listing details will be announced closer to the respective launch phases.
              </Paragraph>
            </div>
          </GlassBox>
          <GlassBox baseColor='orange'>
            <div className="px-4 py-8 xl:p-10 space-y-6">
              <SubSubHeading>CRC Token Strategy</SubSubHeading>
              <Paragraph opacity={60}>
                CMC tokens will be listed on Ethereum DEX/CEX platforms with zkBridge-enabled migration capabilities. SDKs will be provided for third-party listing integrators to ensure seamless adoption.
              </Paragraph>
              <Paragraph opacity={60}>
                Cross-chain functionality will enable CMC trading across multiple networks through the CromaChain bridge.
              </Paragraph>
            </div>
          </GlassBox>
        </div>
      </article>
      <article id="risks-disclaimer" className='scroll-mt-[140px] pt-[60px]'>
        <Heading>13. Risks & Disclaimer</Heading>
        <div className={`mt-8 relative px-4 py-8 xl:p-10 h-full overflow-hidden rounded-[20px] border border-[#FF2020] bg-[linear-gradient(rgba(201,103,103,0.2),rgba(201,103,103,0.2)),linear-gradient(rgba(0,0,0,0.34),rgba(0,0,0,0.34))] space-y-4`}>
          <Paragraph opacity={60}>
            Participation in cryptocurrency projects such as Croma involves inherent risks. Token values are subject to high market volatility, adoption challenges, regulatory developments, and technical factors.
          </Paragraph>
          <Paragraph opacity={60}>
            The CromaChain development timeline is subject to technical challenges and may experience delays. The AI Builder platform and associated technologies are experimental and may not perform as expected.
          </Paragraph>
          <Paragraph opacity={60}>
            Croma does not promise guaranteed returns, and participation should not be construed as an investment in a regulated financial instrument.
          </Paragraph>
          <Paragraph opacity={60}>
            All participants are strongly encouraged to conduct independent research and seek advice from a financial advisor before making any financial commitments.
          </Paragraph>
          <Paragraph opacity={60}>
            Participants are solely responsible for complying with their local laws and regulations regarding cryptocurrency usage and participation.
          </Paragraph>
          <Paragraph opacity={60}>
            By participating in Croma, users acknowledge and accept all associated risks.
          </Paragraph>
        </div>
      </article>
      <article className='my-[60px]'>
        <Heading>Conclussion</Heading>
        <div className="mt-8 text-center">
          <GlassBox baseColor="orange">
            <div className='px-4 py-8 xl:p-10 space-y-6'>
              <Paragraph opacity={60}>
                Croma is more than just a token — it is a movement rooted in creativity, community, and authenticity, pioneering the future of Web3 infrastructure through CromaChain.
              </Paragraph>
              <Paragraph opacity={60}>
                Together, Croma and its believers will build a vibrant, united, and unstoppable force, reshaping the narrative of what a true crypto community can achieve while democratizing access to blockchain technology.
              </Paragraph>
              <p className='italic text-sm xl:text-xl text-[#E9E9E9] opacity-60 font-medium'>
                "The future of Web3 is not defined by code — it is shaped by accessibility, trust, and transparency."
              </p>
            </div>
          </GlassBox>
        </div>
      </article>
    </section>
    <Footer />
    </>
  )
}

export default Whitepaper;



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
    id: 'risks-disclaimer',
    title:'Risks & Disclaimer'
}];

const coreTechnologies = [{
  title: 'zk-STARKs',
  desc: 'Transparent, scalable, and quantum-resistant zero-knowledge proofs using hash-based commitments.',
  listTexts: ['No trusted setup required', 'Parallel proof generation', 'Recursive-friendly architecture', 'Quantum attack resistance']
}, {
  title: 'DAG Scheduler',
  desc: 'Parallel transaction execution via Directed Acyclic Graph technology.',
  listTexts: ['Concurrent non-conflicting transactions', '4-6x improvement in TPS and latency', 'zkEVM batching compatibility', 'Optimized resource utilization']
}, {
  title: 'zkEVM',
  desc: 'Fully Ethereum-compatible execution engine using zk-STARKs.',
  listsTexts: ['140+ EVM opcodes support','Instant finality', 'Sub-15s latency','Recursive proof generation']
}, {
  title: 'EigenDA',
  desc: 'Off-chain data availability using erasure-coded storage.',
  listTexts: ['Up to 8.6x compress','Redundancy and fast retrieval','Separate DA workload from L1','Cost-effective storage']
}, {
  title: 'Post-Quantum Cryptography',
  desc: 'Lattice-based encryption standards for future security.',
  listTexts: ['Kyber: secure key exchange','Dilithium: quantum-safe signatures','Future-proof security model','NIST-approved standards']
}, {
  title: 'AI Automation',
  desc: 'Revolutionary AI Builder for zero-code Web3 development.',
  listTexts: ['Natural language processing','Automated smart contract deployment','Real-time audit integration','No coding skills required']
}]

const modularArchitecture = [
  {
    "title": "zkEVM",
    "desc": "zk-compatible smart contract execution"
  },
  {
    "title": "DAG Scheduler",
    "desc": "zk-compatible smart contract execution"
  },
  {
    "title": "zk-STARK Prover",
    "desc": "Cryptographic proof generation"
  },
  {
    "title": "Ethereum L1",
    "desc": "Rollup settlement and verification"
  },
  {
    "title": "EigenDA",
    "desc": "Off-chain storage layer"
  },
  {
    "title": "zkBridge",
    "desc": "Cross-chain transfer layer"
  },
  {
    "title": "PQ Layer",
    "desc": "Quantum-secure wallet and validation"
  },
  {
    "title": "AI DevKit",
    "desc": "No-code deployment interface"
  },
  {
    "title": "zkGovernance",
    "desc": "Privacy-preserving voting engine"
  }
]

const timeline = {
  'launch': [
    {
      "phase": "Airdrop",
      "desc": "The airdrop will be conducted first to reward early community members and establish initial distribution."
    },
    {
      "phase": "Presale",
      "desc": "The presale will follow the airdrop, estimated to occur between Q3 and Q4 2025, providing early access to CRM tokens."
    },
    {
      "phase": "Art Platform Launch",
      "desc": "Art platform launch and artist collaborations will be announced exclusively within our Telegram and Discord communities."
    }
  ],
  'development': [
    {
      'title': 'Q2 2026: Public Testnet',
      'listTexts': ['CromaChain Public Testnet Launch', 'AI Builder Beta Release', 'Testnet Dashboard Live', 'Initial Validator Onboarding']
    },
    {
      'title': 'Q3 2026: Full Tools',
      'listTexts': ['Website Builder Full Release', 'Presale Engine Acitvation', 'AI Builder Upgrade', 'Wallet Connect Integration']
    },
    {
      'title': 'Q1 2028: Pre-Mainnet',
      'listTexts': ['Full Audit Results Publication', '100,000+ TPS Stress Testing', 'Final Protocol Tuning', 'Governance Vote for Mainnet']
    },
    {
      'title': 'Q2 2029: Mainnet',
      'listTexts': ['Official CromaChain Mainnet Launch', 'CMC Bridge Live', 'All Ecosystem Apps Launched', 'DAO Treasury Operational']
    },
  ]}

const performanceBenchmark = [{
  title: '22.413',
  desc: 'TPS (100 validation)'
}, {
  title: '3.1x',
  desc: 'Faster than SNARKs'
}, {
  title: '95.3%',
  desc: 'Faster ETH Bridge'
}, {
  title: '8.6x',
  desc: 'Data Compression'
}]


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
