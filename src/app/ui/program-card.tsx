import React from "react";

const ProgramCard = () => {
  return (
    <div className="flex-none w-1/2">
      <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-full mx-auto">
        <img
          src="https://kitapeduli.id/img/slider/bantuan-peralatan-sekolahh.webp"
          alt="Program Image"
          className="w-full h-40 object-cover"
        />
        <div className="p-3">
          <div className="flex items-center mb-2">
            <img
              src="https://via.placeholder.com/24"
              alt="Organization Logo"
              className="w-6 h-6 rounded-full"
            />
            <h3 className="ml-2 text-sm font-semibold">Kita Peduli Org</h3>
          </div>
          <h2 className="text-base font-bold">
            Bersama Raih Masa Depan Negeri yang Gemerlang dengan Beasiswa Cahaya
          </h2>
          <div className="mt-3">
            <div className="h-2 bg-gray-200 rounded-full">
              <div
                className="h-2 bg-green-500 rounded-full"
                style={{width: "70%"}}
              ></div>
            </div>
            <p className="mt-2 text-sm text-gray-600">Terkumpul</p>
            <p className="text-lg font-bold text-green-700">Rp 80.000.000</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramCard;
