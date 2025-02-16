import React from 'react'
import Image from 'next/image'

interface TeamCardProps {
    name: string;
    posi: string;
    img: string;
  }

const TeamCard: React.FC<TeamCardProps> = ({ name, posi, img }) =>{
  return (
    <div className='flex flex-col gap-2.5 justify-between items-center'>
        <Image 
        src={`/images/${img}.svg`}
        alt='aviral'
        width={220}
        height={220}
        />
        <div className='flex flex-col justify-center items-center'>
            <h1 className='text-[20px] font-marvin leading-[20px]'>{name}</h1>
            <p className='text-[14px]'>{posi}</p>
        </div>
    </div>
  )
}

export default TeamCard
