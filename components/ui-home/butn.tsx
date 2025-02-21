"use client"
import { signIn, useSession } from "next-auth/react";
import { ethers } from "ethers";

declare global {
  interface Window {
    ethereum?: any;
  }
}

async function onSignInWithMetaMask() {
  try {
    console.log("running here");
    if (!window.ethereum) {
      alert("Please install MetaMask first.");
      return;
    }
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const publicAddress = await signer.getAddress();
    const balance = await provider.getBalance(publicAddress);

    const s=ethers.formatEther(balance)
    const ss = s.toString();

    const response = await fetch("/api/crypto", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ publicAddress , ss}),
    });
    
    // Debug log the response status and text if needed
    if (!response.ok) {
      const text = await response.text();
      throw new Error("Failed to fetch nonce");
    }
    
    const { nonce } = await response.json();

    const signedNonce = await signer.signMessage(nonce);

    await signIn("crypto", {
      ss,
      publicAddress,
      signedNonce,
      callbackUrl: "/chat",
    });
  } catch (error) {
    console.error("Error during MetaMask sign-in:", error);
    alert("Error during MetaMask sign-in. Please try again.");
  }
}

export default function Butn() {
  const session = useSession();
  console.log(session.status)
  return (
    <main>
      <h1 className="className=' text-white px-4 py-2 rounded-[50px] bg-[#8902F4] w-[200px] text-center hover:bg-white hover:text-black transition duration-300 ease-in-out'">
      <button onClick={onSignInWithMetaMask} className="font-marvin  text-[30px]" >Get Started</button>
      </h1>
    </main>
  );
}
