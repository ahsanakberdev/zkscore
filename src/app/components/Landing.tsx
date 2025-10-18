'use client';
import React, { useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import Image from 'next/image';


const features = [
  {
    title: "Capital Efficiency",
    description: "Improve lending and borrowing mechanics in DeFi.",
    image: '/chart-frame.png',
  },
  {
    title: "Sybil Resistance",
    description: "Prevent gaming of rewards and airdrops.",
    image: '/chart-frame.png',
  },
  {
    title: "Wallet Verification",
    description:
      "Offer a zk-proof of wallet alternative to KYC-style verification.",
    image: '/chart-frame.png',
  },
  {
    title: "Reputation-Based Identity",
    description: "Serve as a reputation passport across Web3 ecosystems.",
    image: '/chart-frame.png',
  },
];

const data = [
  {
    title: "Wallet Age",
    description: "Older wallets demonstrate long-term commitment to DeFi.",
    image: '/data-frame.png',
    btnText: "1.5 score per bridge",
  },
  {
    title: "DEX Trading",
    description:
      "Trade on decentralized exchanges to build trading reputation.",
    image: '/data-frame.png',
    btnText: "1.5 score per bridge",
  },
  {
    title: "Liquidity",
    description: "Provide liquidity to earn fees and build reputation.",
    image: '/data-frame.png',
    btnText: "1.5 score per bridge",
  },
  {
    title: "Lending",
    description: "Supply liquidity and borrow assets responsibly.",
    image: '/data-frame.png',
    btnText: "1.5 score per bridge",
  },
  {
    title: "NFT Trading",
    description: "Trade NFTs and participate in digital asset markets.",
    image: '/data-frame.png',
    btnText: "1.5 score per bridge",
  },

  {
    title: "Bridge",
    description: "Move assets across different blockchain networks.",
    image: '/data-frame.png',
    btnText: "1.5 score per bridge",
  },
  {
    title: "Governance",
    description: "Participate in protocol governance and voting.",
    image: '/data-frame.png',
    btnText: "1.5 score per bridge",
  },
  {
    title: "Staking",
    description: "Stake tokens and participate in network security.",
    image: '/data-frame.png',
    btnText: "1.5 score per bridge",
  },
];


export default function HomePage() {
  return <LandingPage />;
}

function LandingPage() {
  const { scrollY } = useScroll();
  const [headerStyle, setHeaderStyle] = useState('transparent');
  
  useEffect(() => {
    const unsubscribe = scrollY.onChange(latest => {
      if (latest > 900) {
        setHeaderStyle('solid');
      } else {
        setHeaderStyle('transparent');
      }
    });
    return unsubscribe;
  }, [scrollY]);

  return (
    <>
    <div className="relative bg-black">

      {/* Hero Section - Dark Theme */}
      <section className="relative pt-24 lg:pt-32 overflow-hidden">
        <motion.header 
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent backdrop-blur-md `}
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* ✅ Use a centered container with max width 1280px */}
          <div className="max-w-screen-xl mx-auto px-4">
            <div className="flex items-center justify-between h-24">
              
              {/* Logo */}
              <Image src="/logo.png" alt="logo" width="160" height="64" />

              {/* Navigation */}
              <motion.nav 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="hidden md:flex items-center gap-x-14 font-spaceGrotesk"
              >
                <a href="#" className={`transition-colors text-gray-300 hover:text-white`}>Developers</a>

                <a href="/docs" className={`transition-colors text-gray-300 hover:text-white`}>Documentation</a>

                <a href="/" className={`transition-colors text-gray-300 hover:text-white`}>Explorer</a>

                <a href="#" className={`transition-colors text-gray-300 hover:text-white`}>FAQ</a>
              </motion.nav>
            </div>
          </div>
        </motion.header>

      </section>

        {/* Banner Section */}
      <section className="relative text-white overflow-hidden">

        <div className="relative container max-w-screen-xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Left Content */}
            <div className="space-y-6 z-10">
              <h1 className="text-5xl md:text-5xl lg:text-5xl font-medium leading-normal">
                Trust Layer For
                Reputation-Based
                Applications
              </h1>
              
              <p className="text-gray-400 text-lg max-w-xl">
                 Trust layer that powers reputation-based applications across decentralized finance, 
                 marketplaces, loyalty, governance, and social ecosystems.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <button className="bg-[#0CFF85] hover:bg-[#0CFF85]/80 text-black font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Create ID
                </button>
                <button className="bg-gray-800 hover:bg-gray-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300">
                  Build With ZkScore
                </button>
              </div>
            </div>

            {/* Right Content - Circular Diagram */}
            <div className="relative">
              <Image src="/banner-image.png" alt="Banner Image" width="500" height="510" />
            </div>
          </div>
        </div>
      </section>


      {/* Partner Logos */}
      <section className="relative">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-6 lg:gap-20 items-center">
              <div className="">
                <Image src="/ethereum.png" alt="Ethereum" width="127" height="32" />
              </div>
              <div className="">
                <Image src="/google-cloud.png" alt="Google Cloud" width="202" height="32" />
              </div>
              <div className="">
                <Image src="/infura.png" alt="Infura" width="186" height="32" />
              </div>
              <div className="">
                <Image src="/alchemy.png" alt="Alchemy" width="151" height="32" />
              </div>
              <div className="">
                <Image src="/base.png" alt="Base" width="127" height="32" />
              </div>
              <div className="">
                <Image src="/bnb-chain.png" alt="BNB Chain" width="177" height="32" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1 */}
      <section className="relative bg-black text-white pb-20 pt-36 overflow-hidden">

        <div className="relative container max-w-screen-xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-4xl lg:text-4xl font-medium mb-6">
              Turning Trust Into Utility
            </h2>
            <p className="text-gray-400 text-base">
              Converts multi-chain activity into a portable, privacy-first trustscore. Share a proof of your
              history to qualify for better terms across multi DeFi applications and Loyalty Rewards.
            </p>
          </div>

          <div className="relative my-20">
            <Image src="/turning-trust.png" alt="Turning Trust Into Utility" width="1074" height="400" className='w-full h-full object-contain'/>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-2xl md:text-4xl font-medium text-white mb-2">820M</h4>
                  <p className="text-gray-400">Unique wallets active globally</p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-2xl md:text-4xl font-medium text-white mb-2">12+</h4>
                  <p className="text-gray-400">Multi-Chain Coverage</p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-2xl md:text-4xl font-medium text-white mb-2">9000</h4>
                  <p className="text-gray-400">Makes trust score easy to integrate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Section 3 */}
      <section className="p-8 max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left Side */}
          <div>
            <div className="p-10 md:w-full md:px-4">
              <h2 className="text-[40px] md:text-4xl mb-4 text-white">
                Easy Integration With ZKScore SDK
              </h2>
              <p
                className="text-[#b2b4b3] mt-8"
                style={{ lineHeight: "1.6" }}
              >
                ZKScore’s SDK makes it seamless to integrate reputation data into
                your dApp or protocol. In just a few lines of code, you can access
                wallet trust scores, request zk-proofs, and tailor experiences for
                users based on verified credibility.
              </p>
              <button className="bg-[#0CFF85] w-[226px] h-[47px] text-base  mt-[60px] text-black  rounded-[6px] font-medium">
                Build with ZKScore
              </button>
            </div>
          </div>
          <div>
{/* Right Side */}
          <div className="gap-6 md:w-full md:mt-6">
            <div className="bg-[#111] !p-[20px] h-[118px]  border !mb-[4px] rounded-[6px] border-gray-800">
              <div className="h-[64px]">
                <h2 className="text-white mb-2 text-sm">
                  Install ZKScore SDK
                </h2>
              </div>
              <div className="h-[50px]">
                <p className="bg-black text-[#0CFF85] text-sm rounded-md ">
                  Install zkscore-sdk
                </p>
              </div>
            </div>
            {/* Box 2 */}
            <div className="bg-[#111] !p-[20px]   rounded-[6px] border border-gray-800">
              <div className=" h-[64px]">
                <h2 className="text-white  text-[20px] ">
                  Initialize And Get User Score
                </h2>
              </div>
              <div className="h-[314px]">
                <pre
                  className="bg-black text-[#0CFF85] text-sm p-3 rounded-md overflow-x-auto whitespace-pre"
                  style={{ lineHeight: "1.5" }}
                >
                  {`import { ZKScore } from '@zkscore/sdk';

                    const zkscore = new ZKScore({ 
                      apiKey: 'your-api-key', 
                      network: 'mainnet' 
                    });  


                    const userScore = await zkscore.getScore(userAddress);


                    // Use score for loan decisions 
                    if (userScore.creditRating > 700) { 
                    enableUndercollateralizedLoan();
                    }`}
                </pre>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* Section 5 */}
      <section className="p-8 max-w-screen-xl mx-auto">
        <div className="">
          <h2 className="text-3xl md:text-4xl mb-8 text-white font-semibold">
            ZKScore For Public Good
          </h2>
          <p
            className="text-[#b2b4b3] text-base leading-7"
          >
            In Web3, every wallet starts from zero, no portable reputation, no
            shared benchmark of reliability. This creates inefficiencies:
            over-collateralized lending, sybil attacks in governance, spam in
            airdrops, and high barriers to real-world adoption.
          </p>
        </div>

        {/* Feature Section with Flex */}
        <div className="w-[1240] mt-20 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {features.map((item, index) => (
            <div
              className="w-[590px] p-[40px]  rounded-[20px] bg-[#111]  flex justify-center items-center md:w-full"
              key={index}
            >
              <div className="w-[528px] flex flex-col gap-2 md:w-full">
                <h3 className="text-white text-[24px] mb-0">
                  {item.title}
                </h3>
                <p className="text-[#b2b4b3] text-sm">
                  {item.description}
                </p>
                <img
                  className="w-[453px] h-[297px] !ml-[100px] -mb-20"
                  src={item.image}
                  alt={item.title}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 6 */}
      <section className="p-8 max-w-screen-xl mx-auto">
        <div className=" text-center ">
          <h2 className="text-4xl font-medium text-white mb-6 mx-auto leading-snug">
            From Wallet Activity <br /> To Verifiable Trust.
          </h2>
          <p className="text-gray-400 text-base mb-20 max-w-5xl mx-auto">
            ZKScore turns everyday onchain actions into a portable trustscore
            that protocols and apps can use for lending, rewards, governance,
            and more. Built with zero-knowledge proofs, your reputation remains
            private while still being fully verifiable.
          </p>

          <img
            className="mt-12 mx-auto max-w-[1240px] w-full h-[600px] object-cover"
            src="https://media1.thrillophilia.com/filestore/fq3ihxg0293jbwtjxzuqov027dby_IMG%20World%20Entrance.jpg"
            alt="ZKScore Example"
          />
        </div>
      </section>

      {/* Section 7  */}
      <section className="p-8 py-20 max-w-screen-xl mx-auto">
        <div className="text-center mb-20 ">
          <h2 className="text-4xl text-white mb-6">
            Trustscore Through On-Chain Behaviour
          </h2>
          <p
            className="max-w-[978px] mx-auto text-gray-400 "
          >
            A trustscore that grows directly from on-chain behaviour. Every
            wallet has the ability to earn credibility through activity and
            time, with scores awarded for transactions and wallet age. The
            result is a score that is fair, transparent, and truly
            decentralized.
          </p>
        </div>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 gap-y-10">
            {data.map((item, index) => (
              <div
                className=" rounded-[20px] px-4"
                key={index}
              >
                <img
                  className="w-12 mb-8"
                  src={item.image}
                  alt={item.title}
                />
                <div className="flex-1">
                  <h3 className="text-white text-[20px] mb-3">
                    {item.title}
                  </h3>
                  <p
                    className="text-[#b2b4b3] text-base mb-3"
                    style={{ lineHeight: "1.6" }}
                  >
                    {item.description}
                  </p>
                </div>
                <button className="bg-[#191919] px-4 py-3 text-base text-white text-center rounded-[6px] md:mx-auto md:mt-4">
                  {item.btnText}
                </button>
              </div>
            ))}
          </div>
      </section>
      </div>
    </>
  );
}