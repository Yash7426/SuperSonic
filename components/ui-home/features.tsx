import React from 'react'
import Image from 'next/image'

const Features = () => {
  return (
    <div className='flex flex-col py-[5vh] px-[5vw] gap-[8vh]'>
        <div className='flex flex-row justify-between'>
        <Image
                    src={"/images/sonic.svg"}
                    alt='sonic'
                    width={150}
                    height={150}/>
            <h1 className='font-marvin text-[80px]'>Features</h1>
        </div>
        <Image
          src={"/images/features.svg"}
          alt='features'
          width={1200}
          height={1200}
          className='flex self-end'
         />
    </div>
  )
}

export default Features
