'use client';

import { useEffect, useState } from "react";
import Image from "next/image";
import CopyIconButton from "@/app/ui/icon/copy-icon-button";
import AddPhotoIcon from "@/app/ui/icon/add-photo";
import { fetchBanks } from "../lib/services/bank-account";
import { BankAccount } from "../lib/types/bank-account";
import BankAccountCard from "./form-component/bank-account";
import toast from "react-hot-toast";

const DonationConfirmationForm = () => {
  const [banks, setBanks]= useState<BankAccount[]>([]);
  const [loading, setLoading] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const banks = await fetchBanks({});
      setBanks(banks);
    }

    fetchData()
  },[])

  const handleOnClipBoardClick = (accountNumber:string) => {
    navigator.clipboard.writeText(accountNumber)
    toast.success('Nomor Rekening berhasil disalin');
  }

  const handleUploadClick = () => {
    console.log('Upload Bukti Pembayaran clicked');
    // Tambahkan logika untuk mengunggah bukti pembayaran
  };

  return (
    <div className="max-w-md mx-auto bg-white p-2 rounded-lg mt-10 text-center space-y-4">
      <Image src="/payment-waiting.png" alt="Payment Waiting" width={400} height={200} />
      
      <h1 className="text-orange-600 text-md font-bold my-4">Menunggu Pembayaran</h1>
      <p className="text-gray-600 mb-2 text-xs">Silahkan melakukan pembayaran ke nomor BCA Virtual Akun dibawah ini</p>
      {
        banks.length > 0
        ? banks.map((bank, key) => (
          <BankAccountCard
            key={key}
            bankName={bank.name}
            logoUrl={bank.logo_url}
            inTheNameOf={bank.in_the_name_of}
            accountNumber={bank.norek}
            onClipboardClick={() => handleOnClipBoardClick(bank.norek)}
          />
        ))
        : <p>List bank kosong</p>
      }
      {/* <div className="flex justify-center items-center my-4">
        <span className="text-sm mr-2">12715180971231781</span>
        <button onClick={() => navigator.clipboard.writeText('12715180971231781')}>
          <CopyIconButton />
        </button>
      </div> */}
      <div className="my-4">
        <p className="text-gray-700 text-xs">Total Bayar</p>
        <p className="text-green-700 text-xl font-bold">Rp 10.000</p>
      </div>
      <div className="flex justify-center w-full">
        <button
          onClick={handleUploadClick}
          className="flex items-center space-x-2 bg-green-700 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-green-800 transition duration-300"
        >
          <span className="text-xs">Upload Bukti Pembayaran</span>
          <AddPhotoIcon />
        </button>
      </div>
    </div>
  );
}

export default DonationConfirmationForm;