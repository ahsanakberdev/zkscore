'use client';
import React, { useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import Image from 'next/image';

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
    <div className="relative bg-[#F1F1F1] p-4">

      {/* Hero Section - Dark Theme */}
      <section className="relative bg-[#1A1A1A] pt-24 lg:pt-32 overflow-hidden max-w-[1440px] mx-auto rounded-3xl">

        <motion.header 
          className={`fixed left-0 right-0 z-50 transition-all duration-300  max-w-[1440px] mx-auto rounded-3xl ${
            headerStyle === 'solid' 
              ? 'bg-[#F1F1F1]/80 backdrop-blur-md top-0' 
              : 'bg-transparent backdrop-blur-md top-4'
          }`}
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-24">
              {/* Logo */}
              <div className="flex items-center gap-x-2">
                <Image src="/favicon-logo.svg" alt="logo" width="48" height="26" />
                <span className={`text-2xl font-bold font-spaceGrotesk ${
                  headerStyle === 'solid' 
                    ? 'text-gray-900' 
                    : 'text-white '
                }`}>zkScore</span>
              </div>

              {/* Navigation */}
              <motion.nav 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="hidden md:flex items-center gap-x-14 font-spaceGrotesk"
              >
                <a href="#" className={`transition-colors ${
                  headerStyle === 'solid' 
                    ? 'text-gray-700 hover:text-black' 
                    : 'text-gray-300 hover:text-white'
                }`}>Developers</a>
                <a href="/docs" className={`transition-colors ${
                  headerStyle === 'solid' 
                    ? 'text-gray-700 hover:text-black' 
                    : 'text-gray-300 hover:text-white'
                }`}>Documentation</a>
                <a href="/" className={`transition-colors ${
                  headerStyle === 'solid' 
                    ? 'text-gray-700 hover:text-black' 
                    : 'text-gray-300 hover:text-white'
                }`}>Explorer</a>
                <a href="#" className={`transition-colors ${
                  headerStyle === 'solid' 
                    ? 'text-gray-700 hover:text-black' 
                    : 'text-gray-300 hover:text-white'
                }`}>FAQ</a>
              </motion.nav>

              {/* Launch App Button */}
              <div className="flex items-center gap-x-4">
                <a
                  href="https://fresh-dashboard-zeta.vercel.app/dashboard"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-[#83FF8F] to-[#CC7FF0] text-black px-7 py-4 rounded-3xl font-semibold transition-colors inline-block font-spaceGrotesk text-lg"
                >
                  Launch App
                </a>
              </div>
            </div>
          </div>
        </motion.header>

        <div className="relative z-10 px-4 sm:px-6 lg:px-12 pt-20">
          <div className="flex items-end">
            {/* Left Side - Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left"
            >
              <h1 className="text-5xl lg:text-[80px] font-normal text-white mb-10 leading-tight font-spaceGrotesk">
                <span className="font-bold">Wallet{' '}</span>
                reputation, {' '}
                <span className="text-white">reimagined with</span>{' '}
                <span className="font-bold">
                  ZK
                </span>
              </h1>

              <a
                href="https://fresh-dashboard-zeta.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-[#83FF8F] to-[#CC7FF0] text-black px-8 py-4 rounded-3xl font-semibold transition-colors inline-block text-center font-spaceGrotesk text-lg"
              >
                Create an ID
              </a>
              
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left basis-[72%]"
            >
              <p className="text-base text-gray-300 leading-tight font-archivo">
                A zk-verified wallet score that any protocol can price, any chain can read, and 
                only you can reveal.
              </p>

              <div className="flex items-center justify-end gap-x-6 mb-8">
                <div>
                  <div className="flex items-center gap-x-3">
                    <div className="flex -gap-x-2">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full border-2 border-gray-900"></div>
                      <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-orange-400 rounded-full border-2 border-gray-900"></div>
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full border-2 border-gray-900"></div>
                    </div>
                    <div className="text-white font-spaceGrotesk">
                      <span className="text-4xl font-bold">100K</span>
                    </div>
                  </div>
                  <div className="text-white font-spaceGrotesk mt-2 text-center relative before:content-empty before:w-2 before:h-2 before:bg-green-500 before:rounded-full before:absolute before:top-[9px] before:left-5">
                    <span className="text-sm ml-8">Active Wallets Worldwide</span>
                  </div>
                </div>
              </div>
            </motion.div>


            {/* Wallet Cards */}
          </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative mt-20"
            >
              <div className="relative w-full h-[230px]">
                {/* Card 1 - Blue/Green Gradient */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="absolute top-16 left-[13%] transform translate-x-[10%]"
                >
                  <Image src="/banner1.png" alt="card 1" width="536" height="629" />
                </motion.div>

                {/* Card 2 - Purple/Pink Gradient */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="absolute top-0 left-[35%] transform translate-x-1/3"
                >
                  <Image src="/banner2.png" alt="card 2" width="398" height="538" />
                </motion.div>

                {/* Card 3 - Yellow/Green Gradient */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="absolute top-20 left-[45%] transform translate-x-[45%]"
                >
                  <Image src="/banner3.png" alt="card 3" width="542" height="649" />
                </motion.div>
              </div>
            </motion.div>
        </div>
        <div className='mt-16 flex justify-between'>
          <div className="bg-slate-100 w-10 h-10 relative before:content-empty before:w-10 before:h-10 before:bg-black/90  before:absolute before:top-0 before:left-0 before:rounded-bl-3xl"></div>
          <div className="bg-slate-100 w-10 h-10 relative before:content-empty before:w-10 before:h-10 before:bg-black/90  before:absolute before:top-0 before:right-0 before:rounded-br-3xl"></div>
        </div>
        {/* Curve Shape */}
        <div className="bg-[#f1f1f1]">
          <div className="h-24 w-full bg-[url('/final-vector-layer.png')] bg-no-repeat bg-center bg-contain relative z-10 -mb-1"></div>
        </div>
      </section>

      {/* Partner Logos */}
      <section className="-mt-[85px] z-20 relative">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-52">
            <div className="">
              <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
                <div className="">
                  <Image src="/Neteller.png" alt="Partner 3" width="161" height="100" />
                </div>
                <div className="">
                  <Image src="/Skrill.png" alt="Partner 3" width="161" height="100" />
                </div>
                <div className="">
                  <Image src="/ApplePay.png" alt="Partner 3" width="161" height="100" />
                </div>
              </div>
            </div>
            <div className="">
              <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
                <div className="">
                  <Image src="/AstroPay.png" alt="Partner 3" width="161" height="100" />
                </div>
                <div className="">
                  <Image src="/visaDebit.png" alt="Partner 3" width="161" height="100" />
                </div>
                <div className="">
                  <Image src="/PayPal.png" alt="Partner 3" width="161" height="100" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2nd Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Number */}
              <div className="absolute -top-24 -left-12 text-[200px] font-bold text-gray-400 opacity-30 leading-none pointer-events-none font-spaceGrotesk">
                01
              </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-[85rem] mx-auto lg:px-8">
            {/* Left Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative mt-12"
            >
              <div className="relative z-10">
                <h2 className="text-4xl lg:text-6xl font-bold text-black mb-10 leading-tight font-spaceGrotesk">
                  Trustworthiness
                  <br />
                  <span className="text-black">that travels</span>
                </h2>
                
                <p className="text-base text-gray-600 mb-4 leading-tight font-spaceGrotesk">
                  Converts multi-chain activity into a portable, privacy-first trustscore. 
                  Share a proof not your history to qualify for better terms across multi DeFi 
                  applications and Loyalty Rewards.
                </p>

                <motion.button 
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-x-3 text-black hover:text-gray-700 transition-colors group px-0 font-spaceGrotesk font-medium"
                >
                  <span className="text-lg font-semibold">Get Started</span>
                  {/* <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /> */}
                  <Image src="/button-arrow.svg" alt="arrow right" width="62" height="23" className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </div>
            </motion.div>

            {/* Right Side - Statistics */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="">
                {/* 820M Stat */}
                <div className="flex items-center justify-center flex-col bg-[#F8F8F8] rounded-[40px] px-12 py-8 w-[381px] h-[298px] font-spaceGrotesk ml-8">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-5xl lg:text-8xl font-normal text-gray-400 leading-none"
                  >
                    820M
                  </motion.div>
                  <p className="text-gray-400 text-lg mt-2 text-center">
                    Unique wallets active
                    <br />
                    globally
                  </p>
                </div>

                {/* Multi-Chain Coverage Card */}
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="relative flex items-center justify-center flex-col ml-auto -mt-12 mr-8 w-[367px] h-[274px] bg-gray-900 rounded-[40px] p-8"
                >
                  <div className="text-center shadow-2xl font-spaceGrotesk">
                    <div className="text-5xl lg:text-8xl font-normal mb-4 bg-gradient-to-r from-[#83FF8F] to-[#CC7FF0] bg-clip-text text-transparent">
                      8+
                    </div>
                    <p className="text-gray-300 text-lg text-center">
                      Multi-Chain Coverage
                    </p>
                  </div>
                </motion.div>

                {/* 9000 Stat */}
                <div className="flex items-center justify-center flex-col bg-[#F8F8F8] rounded-[40px] -ml-40 -mt-40 px-12 py-8 w-[365px] h-[298px]">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="text-5xl lg:text-8xl font-normal text-gray-400 leading-none font-spaceGrotesk"
                  >
                    9000
                  </motion.div>
                  <p className="text-gray-400 text-lg mt-2 text-center">
                    Capped at 9000, makes
                    <br />
                    trustscore easy to integrate
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

      </section>


      {/* 3rd section */}
      <section className="relative pb-20 px-6 md:px-16 max-w-[1440px] mx-auto">

{/* Section Number */}
          <div className="absolute -top-24 -left-12 text-[200px] font-bold text-gray-400 opacity-30 leading-none pointer-events-none font-spaceGrotesk">
                02
              </div>
      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          

          <div className="relative z-10">
            <h2 className="text-4xl lg:text-6xl font-bold text-black mb-6 leading-tight font-spaceGrotesk">
              Unlock capital, <br />
              <span>not your data</span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 max-w-2xl leading-relaxed font-spaceGrotesk">
              ZKScore turns wallet behaviour into a zk-verified trustscore that earns better
              limits in Decentralized finance and smarter loyalty rewards.
            </p>

            <motion.button 
              whileHover={{ x: 5 }}
              className="inline-block rounded-3xl bg-gradient-to-r from-[#83FF8F] to-[#CC7FF0] px-7 py-4 text-black font-medium hover:opacity-90 transition font-spaceGrotesk"
            >
              <span className="text-lg font-semibold">Mint a .zks ID</span>
            </motion.button>
          </div>
        </motion.div>
        
        {/* Feature grid */}
        <div className="grid grid-cols-1 gap-3 lg:grid-cols-3 mt-10 font-spaceGrotesk">
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
              {/* Wallet ID */}
              <div className="rounded-2xl bg-black p-8 text-white">
                <Image src="/wallet-graph.png" alt="Wallet Graph" width="163" height="81" />
                <h3 className="text-4xl font-normal mt-4">Wallet ID</h3>
                <p className="mt-2 text-gray-300">
                  Your reputation anchored to your wallet, not your PII.
                </p>
              </div>

              {/* ZK Privacy */}
              <div className="rounded-2xl bg-white/60 p-8">
                <Image src="/privacy.png" alt="ZK Privacy" width="75" height="75" />
                <h3 className="text-4xl font-normal text-gray-900 mt-4">ZK Privacy</h3>
                <p className="mt-2 text-[#525252]">
                  Prove your reputation without revealing sensitive transaction details.
                </p>
              </div>
            </div>
            {/* Achievement */}
            <div className="rounded-2xl bg-white/60 px-12 py-8 flex items-center justify-center gap-8">
              <Image src="/achievements.png" alt="Achievement" width="75" height="75" />
              <h3 className="text-4xl font-normal text-gray-900">Achievement</h3>
              <p className="mt-2 text-[#525252]">
                Gamified reputation building with rewards and special recognition.
              </p>
            </div>
            
          </div>
          {/* right column  */}
          <div className="">
            {/* Real-time Analytics */}
            <div className="rounded-2xl bg-white/60 p-8 h-full flex flex-col justify-between items-start">
              <Image src="/analytics.png" alt="Real-time Analytics" width="75" height="75" />
              <div>
                <h3 className="text-4xl font-normal text-gray-900 mt-4">Real-time Analytics</h3>
                <p className="mt-2 text-[#525252]">
                  Monitor reputation metrics in real-time with our advanced analytics
                  dashboard.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

{/* //////////////////////////////////////////////////////////////////// */}
  </div>
    </>
  );
}