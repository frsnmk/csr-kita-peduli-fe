import React from "react";
import HomeIcon from "./icon/home";
import LocalOfferIcon from "./icon/local-offer";
import RestoreIcon from "./icon/restore";
import AccountCircleIcon from "./icon/account-circle";

const BottomNav = () => {
  return (
    <div className="fixed bottom-0 w-full bg-white shadow-lg max-w-[480px] mx-auto left-0 right-0">
      <div className="flex justify-around items-center py-2">
        <div className="flex flex-col items-center">
          <HomeIcon className="h-8 w-8 text-green-700" />
          <span className="text-xs text-green-700">Beranda</span>
        </div>
        <div className="flex flex-col items-center">
          <LocalOfferIcon className="h-6 w-6 text-gray-700" />
          <span className="text-xs text-gray-700">Program</span>
        </div>
        <div className="flex flex-col items-center">
          <RestoreIcon className="h-6 w-6 text-gray-700" />
          <span className="text-xs text-gray-700">Riwayat</span>
        </div>
        <div className="flex flex-col items-center">
          <AccountCircleIcon className="h-6 w-6 text-gray-700" />
          <span className="text-xs text-gray-700">Akun</span>
        </div>
      </div>
    </div>
  );
};

export default BottomNav;
