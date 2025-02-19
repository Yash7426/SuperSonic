"use client"
import PortfolioCard from '@/components/ui-portfolio/portfolio';
import { useSession } from 'next-auth/react';
import React from 'react'

const page = () => {
  const { data: session } = useSession();
    const portfolioData = {
    walletId: (session?.user as any)?.publicAddress,
    joinedDate: "22/02/2025",
    tokens: [
      { name: "BITCOIN", logo: "/images/bitcoin-logo.svg", amount: 25, value: 13.25 },
      { name: "BITCOIN", logo: "/images/bitcoin-logo.svg", amount: 25, value: 13.25 }
    ],
    transactions: [
      { type: "Bought" as "Bought", token: { name: "BITCOIN", logo: "/images/bitcoin-logo.svg", amount: 14, value: 13.25 }, date: "25 January 2025" },
      { type: "Sold" as "Sold", token: { name: "BITCOIN", logo: "/images/bitcoin-logo.svg", amount: 1, value: 13.25 }, date: "25 January 2025" }
    ],
    swaps: [
      { fromToken: { name: "BITCOIN", logo: "/images/bitcoin-logo.svg", amount: 25, value: 13.25 }, toToken: { name: "BITCOIN", logo: "/images/bitcoin-logo.svg", amount: 25, value: 13.25 }, date: "25 Jan 2025" },
      { fromToken: { name: "BITCOIN", logo: "/images/bitcoin-logo.svg", amount: 25, value: 13.25 }, toToken: { name: "BITCOIN", logo: "/images/bitcoin-logo.svg", amount: 25, value: 13.25 }, date: "25 Jan 2025" }
    ]
  };
  return (
    <div className='flex items-center m-4 md:m-8'>
      <PortfolioCard {...portfolioData}  />
    </div>
  )
}

export default page