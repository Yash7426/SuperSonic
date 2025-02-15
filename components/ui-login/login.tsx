"use client"
import { signIn, useSession } from "next-auth/react";
import { ethers } from "ethers";

async function onSignInWithMetaMask() {
  try {
    if (!window.ethereum) {
      alert("Please install MetaMask first.");
      return;
    }
    // Connect to MetaMask
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const publicAddress = await signer.getAddress();

    // Request nonce from your API
    const response = await fetch("/api/crypto", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ publicAddress }),
    });

    console.log("dwbefe",response)
    
    // Debug log the response status and text if needed
    if (!response.ok) {
      const text = await response.text();
      console.error("Failed to fetch nonce:", text);
      throw new Error("Failed to fetch nonce");
    }
    
    const { nonce } = await response.json();
    console.log("Received nonce:", nonce);

    // Sign the nonce
    const signedNonce = await signer.signMessage(nonce);

    // Use NextAuth to sign in with your custom crypto provider
    await signIn("crypto", {
      publicAddress,
      signedNonce,
      callbackUrl: "/chat",
    });
  } catch (error) {
    console.error("Error during MetaMask sign-in:", error);
    alert("Error during MetaMask sign-in. Please try again.");
  }
}

export default function Login() {
  const session = useSession();
  console.log("!",session)
  console.log("2",session.data)
  console.log("3",session.status)
  return (
    <main>
      <h1>Login</h1>
      <button onClick={onSignInWithMetaMask}>Sign in with MetaMask</button>
    </main>
  );
}
