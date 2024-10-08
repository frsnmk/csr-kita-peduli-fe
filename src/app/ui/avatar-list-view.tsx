import React from 'react';
import Image from 'next/image';
import { formatDistanceToNow, parseISO } from 'date-fns';

interface DonationItemProps {
    avatarUrl: string;
    name: string;
    amount: number;
    createdAt: string;
  }

export const AvatarListView = ({ avatarUrl, name, amount, createdAt }: DonationItemProps) => {
    return (
    <div className="flex items-center p-4 border-b border-gray-200">
      <div className="w-10 h-10 relative">
        <Image
          src={avatarUrl}
          alt="Avatar"
          layout="fill"
          objectFit="cover"
          className="rounded-full"
        />
      </div>
      <div className="ml-4">
        <div className="font-bold text-sm">{name}</div>
        <div className="text-gray-700 text-sm">Berdonasi sebesar Rp {amount.toLocaleString()}</div>
        <div className="text-gray-500 text-xs">{formatDistanceToNow(parseISO(createdAt), { addSuffix: true })}</div>
      </div>
    </div>
    )
}