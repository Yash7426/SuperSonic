"use client";

import React from "react";
import { useParams } from "next/navigation";
import Flow from "@/components/ui-graph-component/homeGraph";

const Page = () => {
  const { id } = useParams(); // Get the dynamic route parameter

  console.log("Token ID:", id);

  return (
    <>
      <div>Token ID: {id}</div>
    </>
)
};

export default Page;
