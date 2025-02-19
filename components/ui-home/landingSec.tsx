"use client"
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
const cryptoIcons = [
  'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
  'https://cryptologos.cc/logos/ethereum-eth-logo.png',
  'https://cryptologos.cc/logos/dogecoin-doge-logo.png',
  'https://cryptologos.cc/logos/xrp-xrp-logo.png',
  '/images/sonic-logo.svg'
];

const cornerPositions = [
  { top: '5%', left: '5%' }, // Top-left
  { top: '5%', right: '5%' }, // Top-right
  { top: '-15%', right: '50%' }, // Top-right
  { bottom: '20%', left: '30%' }, // Bottom-left
  { bottom: '40%', right: '15%' }, // Bottom-right
  { top: '50%', left: '10%' }, // Mid-left
  { top: '50%', right: '10%' } // Mid-right
];

const getPosition = (index:number) => cornerPositions[index % cornerPositions.length];

const getFloatingAnimation = (index:number) => {
  return {
    y: [0, -Math.random() * (10 + index * 2), Math.random() * (10 + index * 2), 0],
    x: [0, Math.random() * (5 + index), -Math.random() * (5 + index), 0],
    rotate: [0, Math.random() * (3 + index), -Math.random() * (3 + index), 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };
};


const LandingSec = () => {
  const router = useRouter()
  return (
    <div className="relative overflow-y-visible h-screen">
      {/* Floating Crypto Icons */}
      {cryptoIcons.map((icon, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={getPosition(index)}
          animate={getFloatingAnimation(index)}
        >
          <Image src={icon} alt="crypto-icon" width={200} height={200} className='w-12 h-12 md:w-24 md:h-24 rounded-full ' />
        </motion.div>
      ))}
      
      <div className='flex flex-col justify-center items-center'>
        <div className='font-marvin text-[74px] leading-[84px] text-center flex flex-row gap-2'>
          <Image src={'/images/star.svg'} alt="*" width={60} height={60} />
          The Future Of Arbitrage is here
          <Image src={'/images/star.svg'} alt="*" width={60} height={60} />
        </div>
        <div className='font-marvin text-[250px] leading-[250px] flex flex-row'>
          SUPER <p className='text-[#8902F4]'>SONIC</p>
        </div>
      </div>
      <div className='flex flex-col items-center justify-center gap-3'>
        <p className='w-[35%] text-center'>
          Harness the power of AI-driven predictions and blockchain efficiency to capture profitable arbitrage opportunities
        </p>
        <h1 onClick={()=>{
          router.push("/chat")
        }} className='cursor-pointer font-marvin text-[30px] text-white border px-4 py-2 rounded-[50px] bg-black w-[200px] text-center hover:bg-white hover:border-black hover:text-black transition duration-300 ease-in-out'>
          GET STARTED
        </h1>
      </div>
    </div>
  );
};

export default LandingSec;
