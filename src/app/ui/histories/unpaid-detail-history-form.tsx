'use client'

import ArrowBackIconButton from "@/app/ui/icon/arrow-back";
import Image from "next/image";
import { useRouter } from "next/navigation";

const UnpaidDetailHistoryForm = () => {
    const router = useRouter();

    const handleSubmit = () => {
        router.push('http://localhost:3000/programs/1/donation-confirm')
      // Tambahkan logika untuk mengunggah bukti pembayaran
    };
  
    return ( 
        <div className="p-4 relative">
            <ArrowBackIconButton />
            <br />
            <br />
            <div className="flex items-center mb-4">
                <h2 className="ml-4 text-lg font-bold">Detail Riwayat</h2>
            </div>

            <div className="bg-gray-50 shadow-md rounded-lg flex mb-4 mx-4">
                <div className="w-1/4 relative">
                    <Image
                        src="/Frame 4.png"
                        alt="programs porro"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-tl-lg rounded-bl-lg"
                    />
                </div>
                <div className="w-3/4 pl-4 space-y-2 p-4">
                    <p className="text-xs font-semibold truncate-multiline">Bersama Raih Masa Depan Negeri yang Gemerlang dengan Beasiswa Cahaya</p>
                    <p className="text-sm font-bold text-green-700">Rp 25.000</p>
                    <p className="text-xs text-thin text-gray-500">03 Agustus 2024</p>
                </div>
            </div>

            <div className="bg-white rounded-lg p-4 space-y-4">
                <h3 className="text-md font-semibold mb-4">Informasi Pembayaran</h3>
                <div className="flex justify-between mb-2">
                <span className="text-sm text-gray-600">Tanggal</span>
                <span className="text-sm text-gray-800 font-bold">03 Agustus 2024</span>
                </div>
                <div className="flex justify-between mb-2">
                <span className="text-sm text-gray-600">Nama disembunyikan</span>
                <span className="text-gray-800 font-bold">Ya</span>
                </div>
                <div className="flex justify-between mb-2">
                <span className="text-sm text-gray-600">Status</span>
                <span className="text-sm text-orange-600 font-bold">Menungu</span>
                </div>
                <div className="flex justify-between mb-4">
                <span className="text-sm text-gray-600">Jumlah Donasi</span>
                <span className="text-sm text-green-600 font-bold">Rp 25.000</span>
                </div>
            </div>
            <div className="fixed bottom-0 w-full bg-white shadow-lg max-w-[480px] mx-auto left-0 right-0 p-4">
                <button onClick={handleSubmit} className="bg-green-600 text-white py-2 px-4 rounded-full w-full font-bold">Bayar Sekarang</button>
            </div>
        </div>
     );
}

export default UnpaidDetailHistoryForm;