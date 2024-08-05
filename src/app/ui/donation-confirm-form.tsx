'use client';

import { useState } from "react";
import ArrowBackIconButton from "./icon/arrow-back";
import Image from "next/image";

const DonationConfirmationForm = () => {
  const handleUploadClick = () => {
    console.log('Upload Bukti Pembayaran clicked');
    // Tambahkan logika untuk mengunggah bukti pembayaran
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md mt-10 text-center">
      <Image src="/images/payment-waiting.png" alt="Payment Waiting" width={400} height={200} />
      
      <h1 className="text-orange-600 text-xl font-bold my-4">Menunggu Pembayaran</h1>
      <p className="text-gray-600 mb-2">Silahkan melakukan pembayaran ke nomor BCA Virtual Akun dibawah ini</p>
      <div className="flex justify-center items-center my-4">
        <span className="text-lg font-mono mr-2">12715180971231781</span>
        <button onClick={() => navigator.clipboard.writeText('12715180971231781')}>
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#4caf50">
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M16 1H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h2v2c0 .55.45 1 1 1h10c.55 0 1-.45 1-1V7l-6-6zm2 18H6V3h7v5h5v11zm-8-9H8v2h2v-2zm0 4H8v2h2v-2zm4-4h-2v2h2v-2zm0 4h-2v2h2v-2z" />
          </svg>
        </button>
      </div>
      <div className="my-4">
        <p className="text-gray-700">Total Bayar</p>
        <p className="text-green-700 text-2xl font-bold">Rp 10.000</p>
      </div>
      <button
        onClick={handleUploadClick}
        className="bg-green-700 text-white py-3 px-6 rounded-lg shadow-md hover:bg-green-800 transition duration-300"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="inline-block mr-2" height="24px" viewBox="0 0 24 24" width="24px" fill="#fff">
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M5 4h14v2H5zm14 14v-6h-4v6h4zm-6-14h-4v4H7V4H5v4c0 1.1.9 2 2 2h2v10h6V10h2c1.1 0 2-.9 2-2V4h-2z" />
        </svg>
        Upload Bukti Pembayaran
      </button>
    </div>
  );
}

export default DonationConfirmationForm;