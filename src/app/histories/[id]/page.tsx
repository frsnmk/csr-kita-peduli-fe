import Image from "next/image";

export default function page() {
  return (
    <div className="p-4">
      <div className="flex items-center mb-4">
        <button className="bg-green-100 p-2 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-green-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <h2 className="ml-4 text-lg font-semibold">Detail Riwayat</h2>
      </div>

      <div className="bg-white shadow-md rounded-lg p-4 flex mb-4 mx-4">
        <div className="w-1/4">
          <Image
            src="/path/to/your/image.png"
            alt="programs porro"
            width={100}
            height={100}
            className="rounded-l-lg"
          />
        </div>
        <div className="w-3/4 pl-4">
          <p className="font-semibold text-gray-700">Illum tempore ratione reprehenderit voluptas...</p>
          <p className="text-green-600 font-bold text-lg">Rp 25.000</p>
          <p className="text-gray-500">03 Agustus 2024</p>
        </div>
      </div>

      <div className="bg-white rounded-lg p-4">
        <h3 className="text-lg font-semibold mb-4">Informasi Pembayaran</h3>
        <div className="flex justify-between mb-2">
          <span className="text-gray-600">Tanggal</span>
          <span className="text-gray-800">03 Agustus 2024</span>
        </div>
        <div className="flex justify-between mb-2">
          <span className="text-gray-600">Nama disembunyikan</span>
          <span className="text-gray-800">Ya</span>
        </div>
        <div className="flex justify-between mb-2">
          <span className="text-gray-600">Status</span>
          <span className="text-orange-600 font-semibold">Menungu</span>
        </div>
        <div className="flex justify-between mb-4">
          <span className="text-gray-600">Jumlah Donasi</span>
          <span className="text-green-600 font-semibold">Rp 25.000</span>
        </div>
        <button className="bg-green-600 text-white py-2 px-4 rounded-full w-full">Bayar Sekarang</button>
      </div>
    </div>
  );
  }