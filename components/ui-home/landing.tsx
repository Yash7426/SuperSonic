import React from 'react'
import HomeNav from './homeNav'
import LandingSec from './landingSec'

const Landing = () => {
  return (
    <div className="h-screen flex flex-col gap-[20vh]" >
        <HomeNav/>
        <LandingSec/>
    </div>
  )
}

export default Landing
