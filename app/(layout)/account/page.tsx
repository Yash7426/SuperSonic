import ProfileCard from '@/components/ui-account/account'
import React from 'react'

const page = () => {
    const profileData = {
    profilePicture: "/images/profile-placeholder.png",
    walletId: "G4FHvz5DCwHzDViPxhUx97Yu6isKEZgSRociADyhZCVF",
    joinedDate: "11/02/2025",
    userId: "cm6zfcfeu01571lp599h41o6f",
    connectedWallets: ["G4FHvz5DCwHzDViPxhUx97Yu6isKEZgSRociADyhZCVF"]
  };
  return (
    <div className='flex items-center m-4 md:m-8'>
      <ProfileCard profile={profileData}  />
    </div>
  )
}

export default page