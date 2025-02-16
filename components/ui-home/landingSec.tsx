import React from 'react'
import Image from 'next/image'

const LandingSec = () => {
  return (
    <div>
        <div className='flex flex-col justify-center items-center'>
            <div className='font-marvin text-[74px] leading-[84px] text-center flex flex-row gap-2'><Image
                    src={'/images/star.svg'}
                    alt="*"
                    width={60}
                    height={60}/>The Future Of Arbitrage is here
                    <Image
                        src={'/images/star.svg'}
                        alt="*"
                        width={60}
                        height={60}/>
            </div>
            <div className='font-marvin text-[250px] leading-[250px] flex flex-row'>SUPER <p className='text-[#8902F4]'>SONIC</p></div>
        </div>

        <div className='flex flex-col items-center justify-center gap-3' >
            <p className=' w-[35%] text-center'>Harness the power of AI-driven predictions and blockchain efficiency to capture profitable arbitrage opportunities</p>
            <h1 className='font-marvin text-[30px] text-white border px-4 py-2 rounded-[50px] bg-black w-[200px] text-center hover:bg-white hover:border-black hover:text-black transition duration-300 ease-in-out'>GET STARTED</h1>
        </div>
    </div>
  )
}

export default LandingSec
