"use client"
import PortfolioCard from '@/components/ui-portfolio/portfolio';
import { useSession } from 'next-auth/react';
import React from 'react'

const Page = () => {
  const { data: session } = useSession();
  const portfolioData = {
    walletId: (session?.user as any)?.publicAddress,
    joinedDate: "26/01/2025",
    tokens: [
      { name: "ETHEREUM", logo: "images/ethereum-eth-logo.png", amount: 2.3, value: 6337.18 },
      { name: "SONIC", logo: "/images/sonic-logo.svg", amount: 25, value: 13.25 }
    ],
    transactions: [
      { type: "Bought" as const, token: { name: "SONIC", logo: "/images/sonic-logo.svg", amount: 25, value: 13.25 }, date: "5 february 2025" },
      { type: "Sold" as const, token: { name: "BITCOIN", logo: "/images/bitcoin-logo.svg", amount: 1, value: 98275.95 }, date: "30 January 2025" }
    ],
    swaps: [
      { fromToken: { name: "BITCOIN", logo: "/images/bitcoin-logo.svg", amount: 0.064, value: 6337 }, toToken: { name: "ETHEREUM", logo: "https://cryptologos.cc/logos/ethereum-eth-logo.png", amount: 2.3, value: 6337 }, date: "3  Feb 2025" },
      { fromToken: { name: "DOGECOIN", logo: "images/dogecoin-doge-logo.png", amount: 24672.32, value: 6338 }, toToken: { name: "BITCOIN", logo: "/images/bitcoin-logo.svg", amount: 0.064, value: 6338 }, date: "29 Jan 2025" }
    ]
  };
  return (
    <div className='flex items-center m-4 md:m-8'>
      <PortfolioCard {...portfolioData}  />
    </div>
  )
}

export default Page