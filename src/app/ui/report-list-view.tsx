import React from 'react';
import Image from 'next/image';
import { formatDistanceToNow, parseISO } from 'date-fns';
import { formatDateIdn } from '../lib/helper';

interface DonationItemProps {
    avatarUrl: string|null;
    title: string;
    text: string;
    createdAt: string;
  }

export const ReportListView = ({ avatarUrl, title, text, createdAt }: DonationItemProps) => {
    return (
    <div className="flex items-center p-4 border-b border-gray-200">
      <div className="w-10 h-10 relative">
        <Image
          src={avatarUrl??'/default-avatar-2.png'}
          alt="Avatar"
          layout="fill"
          objectFit="cover"
          className="rounded-full"
        />
      </div>
      <div className="ml-4">
        <div className="font-bold text-sm">{title}</div>
        {/* <div className="text-gray-700 text-sm">{text}</div> */}
        <div
            className="text-gray-700 text-sm truncate-multiline"
            dangerouslySetInnerHTML={{__html: text}}
          ></div>
        <div className="text-gray-500 text-xs">{formatDateIdn(createdAt)}</div>
      </div>
    </div>
    )
}