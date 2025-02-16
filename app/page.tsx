import HomeNav from "@/components/ui-home/homeNav";
import LandingSec from "@/components/ui-home/landingSec";
import Powered from "@/components/ui-home/powered";
import About from "@/components/ui-home/about";
import Features from "@/components/ui-home/features";
import Team from "@/components/ui-home/team";
import Footer from "@/components/ui-home/footer";
import Butn from "@/components/ui-home/butn";
declare global {
  interface Window {
    ethereum?: any;
  }
}
export default function Home() {
  return (
    <main className="w-full">
      <div className="h-screen flex flex-col gap-[20vh]">
        <HomeNav/> 
        <LandingSec/>
      </div>
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
      <div className="h-screen">
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
         {/* <button className='font-marvin text-[30px] text-white px-4 py-2 rounded-[50px] bg-[#8902F4] w-[200px] text-center hover:bg-white hover:text-black transition duration-300 ease-in-out'>GET STARTED</button> */}
         </div>
      </div>
      <Footer/>
    </main>
  );
}
