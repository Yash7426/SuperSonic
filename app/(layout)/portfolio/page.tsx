"use client";
import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import ProfileCard from '@/components/ui-account/account';

const Page = () => {
  const [walletAddress, setWalletAddress] = useState('');
  const [walletBalance, setWalletBalance] = useState('');

  useEffect(() => {
    const fetchWalletData = async () => {
      if (typeof window.ethereum !== 'undefined') {
        try {
          // Request account access from MetaMask
          await window.ethereum.request({ method: 'eth_requestAccounts' });
          // Create an ethers provider using MetaMask's provider
          const provider = new ethers.providers.Web3Provider(window.ethereum);
          // Get the signer (the current account)
          const signer = provider.getSigner();
          // Retrieve the wallet address
          const address = await signer.getAddress();
          setWalletAddress(address);

          // Fetch the wallet balance (in wei) and convert it to Ether
          const balanceWei = await provider.getBalance(address);
          const balanceEther = ethers.utils.formatEther(balanceWei);
          setWalletBalance(balanceEther);
        } catch (error) {
          console.error('Error fetching wallet data:', error);
        }
      } else {
        console.error('MetaMask is not installed.');
      }
    };

    fetchWalletData();
  }, []);

  const profileData = {
    profilePicture: "/images/profile-placeholder.png",
    walletId: walletAddress || "No wallet connected",
    joinedDate: "11/02/2025",
    userId: "cm6zfcfeu01571lp599h41o6f",
    connectedWallets: walletAddress ? [walletAddress] : [],
    balance: walletBalance ? `${walletBalance} ETH` : "N/A",
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
    <div className="flex items-center m-4 md:m-8">
      <ProfileCard profile={profileData} />
    </div>
  );
};

export default Page;
