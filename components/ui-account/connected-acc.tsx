"use client";
import { useState } from "react";
import { FaTwitter, FaGoogle, FaEnvelope, FaPhone } from "react-icons/fa";

const ConnectedAccounts = () => {
    // fetch the data from backend here
  const [accounts, setAccounts] = useState({
    twitter: "",
    google: "",
    email: "",
    phone: "",
  });

  const connectTwitter = () => {
    setAccounts((prev) => ({ ...prev, twitter: "Connected" }));
  };

  const connectGoogle = () => {
    setAccounts((prev) => ({ ...prev, google: "yashagr74260@gmail.com" }));
  };

  const connectEmail = () => {
    setAccounts((prev) => ({ ...prev, email: "Connected" }));
  };

  const connectPhone = () => {
    setAccounts((prev) => ({ ...prev, phone: "Connected" }));
  };

  return (
    <>
      <h2 className="text-xl font-marvin">CONNECTED ACCOUNTS</h2>
      <div className="flex flex-col border border-[#E4E4E4] items-center gap-2 px-4 py-2 rounded-lg my-2">
        <div className="w-full flex items-center justify-between py-2">
          <div className="flex items-center gap-4">
            <FaTwitter size={24} className="text-blue-500" />
            <div>
              <p className="font-bold text-sm">Twitter</p>
              <p className="text-gray-500 text-xs">
                {accounts.twitter || "Not Connected"}
              </p>
            </div>
          </div>
          {!accounts.twitter && (
            <button
              onClick={connectTwitter}
              className="border border-[#E4E4E4] px-3 py-1 rounded-md text-xs hover:bg-gray-100"
            >
              Connect
            </button>
          )}
        </div>
        <div className="w-full flex items-center justify-between pb-2">
          <div className="flex items-center gap-4">
            <FaGoogle size={24} className="text-red-500" />
            <div>
            <p className="font-bold text-sm">Google</p>
              <p className="text-gray-500 text-xs">
                {accounts.google || "Not Connected"}
              </p>
            </div>
          </div>
          {!accounts.google && (
            <button
              onClick={connectGoogle}
              className="border border-[#E4E4E4] px-3 py-1 rounded-md text-xs hover:bg-gray-100"
            >
              Connect
            </button>
          )}
        </div>
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center gap-4">
            <FaEnvelope size={24} className="text-gray-500" />
            <div>
            <p className="font-bold text-sm">Email</p>
              <p className="text-gray-500 text-xs">
                {accounts.email || "Not Connected"}
              </p>
            </div>
          </div>
          {!accounts.email && (
            <button
              onClick={connectEmail}
              className="border border-[#E4E4E4] px-3 py-1 rounded-md text-xs hover:bg-gray-100"
            >
              Connect
            </button>
          )}
        </div>
        <div className="w-full flex items-center justify-between py-2">
          <div className="flex items-center gap-4">
            <FaPhone size={24} className="text-green-500" />
            <div>
            <p className="font-bold text-sm">Phone</p>
              <p className="text-gray-500 text-xs">
                {accounts.phone || "Not Connected"}
              </p>
            </div>
          </div>
          {!accounts.phone && (
            <button
              onClick={connectPhone}
              className="border border-[#E4E4E4] px-3 py-1 rounded-md text-xs hover:bg-gray-100"
            >
              Connect
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default ConnectedAccounts;
