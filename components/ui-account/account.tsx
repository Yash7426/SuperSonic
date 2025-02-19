import ConnectedAccounts from "./connected-acc";

const ProfileCard: React.FC<{ profile: ProfileProps }> = ({ profile }) => {
  return (
    <div className="w-full mx-auto my-4 rounded-lg ">
      <h2 className="text-xl font-marvin">ACCOUNT</h2>
      <hr className="border-[#E4E4E4] w-[90%]" />
      <div className="flex flex-col border border-[#E4E4E4] items-center gap-3 p-4 rounded-lg my-12">
        <div className="flex flex-col md:flex-row items-center gap-4 w-full">
          <div className="flex items-center w-full gap-2">
            <div className="h-6 w-6 md:h-12 md:w-12 bg-black rounded-full" />
            <div className="flex flex-col items-start w-[90%]">
              <p className="text-sm font-bold w-full truncate overflow-hidden whitespace-nowrap">
                {profile.walletId}
              </p>
              <p className="text-[#2D2D2D] text-xs">
                Joined on {profile.joinedDate}
              </p>
            </div>
          </div>
          <button className="w-full md:w-fit border border-gray-300 md:ml-auto px-3 py-1 rounded-md text-xs hover:bg-gray-100">
            Change Profile Picture
          </button>
        </div>
        <div className="mt-1 border-y py-3 w-full">
          <p className="font-semibold">User Id</p>
          <p className="text-gray-700">{profile.userId}</p>
        </div>
        <div className="w-full">
          <p className="font-semibold">Connected Wallets</p>
          {profile.connectedWallets.map((wallet, index) => (
            <p
              key={index}
              className="text-sm truncate overflow-hidden whitespace-nowrap"
            >
              {wallet}
            </p>
          ))}
        </div>
      </div>

      <ConnectedAccounts />
    </div>
  );
};

export default ProfileCard;
