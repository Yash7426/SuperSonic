"use client";
import StakeHeader from "@/components/ui-stake/StakeHeader";
import { useSession } from "next-auth/react";
import React from "react";

const page = () => {
  const { data } = useSession();
  console.log(data);
  return (
    <>
      <StakeHeader />
    </>
  );
};

export default page;
