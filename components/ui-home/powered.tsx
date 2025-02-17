import React from 'react'
import Image from 'next/image'

const Powered = () => {
  return (
    <>
    <div className='flex flex-col justify-center gap-10'>
        <div className='font-marvin text-[40px] text-black text-center '>Powered By</div>
        <div className='flex flex-row justify-between px-10'>
            <Image
                src={'/images/dora.svg'}
                alt='DoraHacks'
                width={160}
                height={100}
            />
            <Image
                src={'/images/anon.svg'}
                alt='Anon'
                width={160}
                height={100}
            />
            <Image
                src={'/images/allora.svg'}
                alt='DoraHacks'
                width={160}
                height={100}
            />
            <Image
                src={'/images/debridge.svg'}
                alt='DoraHacks'
                width={160}
                height={100}
            />
            <Image
                src={'/images/zerebro.svg'}
                alt='DoraHacks'
                width={160}
                height={100}
            />
            <Image
                src={'/images/dwflabs.svg'}
                alt='DoraHacks'
                width={160}
                height={100}
            />
        </div>
    </div>
    </>
  )
}

export default Powered
