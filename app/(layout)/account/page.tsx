"use client"
import ProfileCard from "@/components/ui-account/account";
import { useSession } from "next-auth/react";
import React from "react";

const Page = () => {
  const { data: session } = useSession();
  const profileData = {
    profilePicture: "/images/profile-placeholder.png",
    walletId: (session?.user as any)?.publicAddress,
    joinedDate: "22/02/2025",
    userId: (session?.user as any)?.id,
    connectedWallets: [(session?.user as any)?.publicAddress],
  };
  return (
    <div className="flex items-center m-4 md:m-8">
      <ProfileCard profile={profileData} />
    </div>
  );
};

export default Page;
