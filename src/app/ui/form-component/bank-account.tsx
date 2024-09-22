import React from "react";
import Image from "next/image";
import CopyIconButton from "../icon/copy-icon-button";

interface BankAccountCardProps {
  logoUrl: string;
  bankName: string;
  inTheNameOf: string;
  accountNumber: string;
  onClipboardClick: () => void;
  selected: boolean; // Tambahkan properti ini
  onSelect: () => void; // Fungsi untuk memilih akun
}

const BankAccountCard: React.FC<BankAccountCardProps> = ({
  logoUrl,
  bankName,
  inTheNameOf,
  accountNumber,
  onClipboardClick,
  selected, // Menggunakan properti ini untuk kondisi styling
  onSelect, // Menggunakan fungsi ini untuk menangani pilihan
}) => {
  return (
    <div
      onClick={onSelect}
      className={`flex items-center justify-between border rounded-lg p-4 shadow-sm cursor-pointer ${
        selected ? "bg-green-200 border-green-700" : ""
      }`}
    >
      <div className="flex items-center space-x-4">
        <Image
          loader={() => logoUrl}
          src={logoUrl}
          alt={`${bankName} logo`}
          width={48}
          height={48}
          className="object-contain"
        />
      </div>
      <div>
        <h2 className="text-lg font-medium">{bankName}</h2>
        <p className="text-gray-600 text-xs italic">an. {inTheNameOf}</p>
        <span className="font-bold text-md text-green-700">
          {accountNumber}
        </span>
      </div>
      <button
        onClick={(e) => {
          e.stopPropagation(); // Mencegah event onClick dari propagasi ke parent
          onClipboardClick();
        }}
        className="flex items-center text-blue-600 hover:text-blue-800"
      >
        <CopyIconButton />
      </button>
    </div>
  );
};

export default BankAccountCard;
