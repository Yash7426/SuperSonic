import ProfileCard from "@/components/ui-account/account";
import Login from "@/components/ui-login/login";
import PortfolioCard from "@/components/ui-portfolio/portfolio";
import TokenCard from "@/components/ui-token/token";
declare global {
  interface Window {
    ethereum?: any;
  }
}
export default function Home() {
  // const portfolioData = {
  //   walletId: "G4FHvz5DCwHzDViPxhUx97Yu6isKEZgSRociADyhZCVF",
  //   joinedDate: "11/02/2025",
  //   tokens: [
  //     { name: "BITCOIN", logo: "/images/bitcoin-logo.svg", amount: 25, value: 13.25 },
  //     { name: "BITCOIN", logo: "/images/bitcoin-logo.svg", amount: 25, value: 13.25 }
  //   ],
  //   transactions: [
  //     { type: "Bought" as "Bought", token: { name: "BITCOIN", logo: "/images/bitcoin-logo.svg", amount: 14, value: 13.25 }, date: "25 January 2025" },
  //     { type: "Sold" as "Sold", token: { name: "BITCOIN", logo: "/images/bitcoin-logo.svg", amount: 1, value: 13.25 }, date: "25 January 2025" }
  //   ],
  //   swaps: [
  //     { fromToken: { name: "BITCOIN", logo: "/images/bitcoin-logo.svg", amount: 25, value: 13.25 }, toToken: { name: "BITCOIN", logo: "/images/bitcoin-logo.svg", amount: 25, value: 13.25 }, date: "25 Jan 2025" },
  //     { fromToken: { name: "BITCOIN", logo: "/images/bitcoin-logo.svg", amount: 25, value: 13.25 }, toToken: { name: "BITCOIN", logo: "/images/bitcoin-logo.svg", amount: 25, value: 13.25 }, date: "25 Jan 2025" }
  //   ]
  // };
  // const profileData = {
  //   profilePicture: "/images/profile-placeholder.png",
  //   walletId: "G4FHvz5DCwHzDViPxhUx97Yu6isKEZgSRociADyhZCVF",
  //   joinedDate: "11/02/2025",
  //   userId: "cm6zfcfeu01571lp599h41o6f",
  //   connectedWallets: ["G4FHvz5DCwHzDViPxhUx97Yu6isKEZgSRociADyhZCVF"]
  // };

  return (
    // mayank
    <main className="flex justify-center content-center h-screen">
      <Login />
    </main>
    // ye niche vala commented code mt rehnde dena mayank
    // <>
    //   <div className="m-8 p-8">
    //     <TokenCard
    //     name="BITCOIN"
    //     logo="/images/bitcoin-logo.svg"
    //     price={0.0723}
    //     priceChange={14.61}
    //     volume={92556009072}
    //     profitPerToken={93.2392}
    //     bestBuy="UNISWAP"
    //     bestSell="SUSHISWAP"
    //   />
    //     <PortfolioCard {...portfolioData} />
    //     <ProfileCard profile={profileData} />

    //   </div>
    // </>
  );
}
