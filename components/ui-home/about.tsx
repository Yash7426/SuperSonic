import React from 'react'
import FlowWithProvider from '../ui-graph-component/homeGraph'

const About = () => {
  return (
    <div className='h-screen flex flex-col pb-[2vh] pt-[4vh] px-[5vw] justify-between'>
        <h1 className="font-marvin text-[80px] p-0">About Us</h1>
        <FlowWithProvider />
        
        {/* <div className='text-[30px]'>At SUPERSONIC, we revolutionize decentralized finance with AI-powered predictive arbitrage. By integrating advanced AI analytics, social sentiment tracking, and high-speed execution on the Sonic blockchain, we ensure seamless, efficient, and fully decentralized trading—eliminating middlemen and maximizing returns.</div> */}
    </div>
  )
}

export default About
