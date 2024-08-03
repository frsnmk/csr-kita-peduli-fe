import React from 'react';
import Image from 'next/image';

interface HistoryCardProps {
  title: string;
  amount: number;
  date: string;
  imageUrl: string;
}

const HistoryCard: React.FC<HistoryCardProps> = ({ title, amount, date, imageUrl }) => {
  return (
    <div className="flex bg-gray-50 rounded-lg shadow-md p-4 mb-4">
      <div className="relative w-1/3">
        <Image src={imageUrl} alt="Card Image" layout="fill" objectFit="cover" className="rounded-lg" />
      </div>
      <div className="w-2/3 pl-4">
        <h2 className="text-xs font-semibold truncate-multiline">{title}</h2>
        <p className="text-green-700 text-sm font-bold mt-2">Rp {amount.toLocaleString()}</p>
        <p className="text-gray-500 text-[0.70rem] mt-2">{date}</p>
      </div>
    </div>
  );
};

export default HistoryCard;