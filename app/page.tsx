import ProfileCard from "@/components/ui-account/account";
import Login from "@/components/ui-login/login";
import PortfolioCard from "@/components/ui-portfolio/portfolio";
import TokenCard from "@/components/ui-token/token";
import HomeNav from "@/components/ui-home/homeNav";
import LandingSec from "@/components/ui-home/landingSec";
import Powered from "@/components/ui-home/powered";
import About from "@/components/ui-home/about";
import Features from "@/components/ui-home/features";
import Team from "@/components/ui-home/team";
import Footer from "@/components/ui-home/footer";
import Butn from "@/components/ui-home/butn";
import Landing from "@/components/ui-home/landing";
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
    
    <main className="w-full">
      <Landing/>
      <div className="h-[35vh]">
          <Powered/>
      </div>
      <div className="h-[120vh] bg-[#111111] text-white text-[100px] leading-[110px] flex font-marvin justify-center text-center items-center">
        <h1 className="w-[60%]">The Future Belongs to Those Who Predicts It <span className="text-[#8902F4]">First.</span></h1>
      </div>
      <div className="h-[100vh]">
        <About/>
      </div>
      <div className="h-[110vh] ">
        <Features />
      </div>
      <div className="h-[110vh]">
        <Team/>
      </div>
      <div className="h-[120vh] bg-[#111111] flex flex-col items-center justify-center gap-[15vh] rounded-b-[80px]">
        <div className="font-marvin text-[100px] text-white text-center pt-[15vh] flex flex-col items-center leading-[120px]"> 
          <h1 className="flex flex-row">Trade smarter<span className="text-[#8902F4]">.</span></h1>
          <h1 className="flex flex-row">Move faster<span className="text-[#8902F4]">.</span></h1>
          <h1 className="flex flex-row">Stay ahead<span className="text-[#8902F4]">.</span></h1>
        </div>
         <div>
          <Butn/>
         </div>
      </div>
      <Footer/>
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
