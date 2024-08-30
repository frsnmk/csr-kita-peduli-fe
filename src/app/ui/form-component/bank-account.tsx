import React from 'react';
import Image from 'next/image';
import CopyIconButton from '../icon/copy-icon-button';

interface BankAccountCardProps {
  logoUrl: string;
  bankName: string;
  inTheNameOf: string;
  accountNumber: string;
  onClipboardClick: () => void;
}

const BankAccountCard: React.FC<BankAccountCardProps> = ({
  logoUrl,
  bankName,
  inTheNameOf,
  accountNumber,
  onClipboardClick,
}) => {
  return (
    <div className="flex items-center justify-between border rounded-lg p-4 shadow-sm">
      <div className="flex items-center space-x-4">
        <Image src={logoUrl} alt={`${bankName} logo`} width={48} height={48} className="object-contain" />
      </div>
      <div>
        <h2 className="text-lg font-medium">{bankName}</h2>
        <p className="text-gray-600 text-sm">
            {inTheNameOf}
        </p>
        <span className="text-semibold">{accountNumber}</span>
      </div>
      <button
        onClick={onClipboardClick}
        className="flex items-center text-blue-600 hover:text-blue-800"
      >
        <CopyIconButton />
      </button>
    </div>
  );
};

export default BankAccountCard;
