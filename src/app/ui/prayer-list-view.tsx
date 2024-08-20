import Image from 'next/image'
import React from 'react'
import { Prayer } from '../lib/types/prayer';
import { formatDistanceToNow, parseISO } from 'date-fns';

interface PrayerListProps{
    prayer: Prayer
}

export default function PrayerList({prayer}:PrayerListProps) {
  return (
    <div className="flex flex-col p-4 border-b border-gray-200">
        <div className="flex items-center">
            <div className="w-10 h-10 relative">
            <Image
                src={prayer.customer.photo}
                alt="Avatar"
                layout="fill"
                objectFit="cover"
                className="rounded-full"
            />
            </div>
            <div className="ml-4">
            <div className="font-bold text-sm">{prayer.customer.name}</div>
            <div className="text-gray-500 text-xs">{formatDistanceToNow(parseISO(prayer.created_at), { addSuffix: true })}</div>
            </div>
        </div>
        <div className="mt-2 text-gray-700 text-sm">{prayer.description}</div>
        <div className="flex mt-4 text-gray-500 text-sm justify-end">
            <button className="flex">
                <span className="material-icons-outlined mr-1">
                <div className="flex">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368" transform="scale(-1,1)">
                    <path d="M480-480v-400q0-17 11.5-28.5T520-920q17 0 28.5 11.5T560-880v400h-80Zm-160 0v-360q0-17 11.5-28.5T360-880q17 0 28.5 11.5T400-840v360h-80ZM500-40q-142 0-241-99t-99-241v-380q0-17 11.5-28.5T200-800q17 0 28.5 11.5T240-760v380q0 109 75.5 184.5T500-120q109 0 184.5-75.5T760-380v-140q-17 0-28.5 11.5T720-480v160H600q-33 0-56.5 23.5T520-240v40h-80v-40q0-66 47-113t113-47h40v-400q0-17 11.5-28.5T680-840q17 0 28.5 11.5T720-800v207q10-3 19.5-5t20.5-2h80v220q0 142-99 241T500-40Zm40-320Z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368">
                    <path d="M480-480v-400q0-17 11.5-28.5T520-920q17 0 28.5 11.5T560-880v400h-80Zm-160 0v-360q0-17 11.5-28.5T360-880q17 0 28.5 11.5T400-840v360h-80ZM500-40q-142 0-241-99t-99-241v-380q0-17 11.5-28.5T200-800q17 0 28.5 11.5T240-760v380q0 109 75.5 184.5T500-120q109 0 184.5-75.5T760-380v-140q-17 0-28.5 11.5T720-480v160H600q-33 0-56.5 23.5T520-240v40h-80v-40q0-66 47-113t113-47h40v-400q0-17 11.5-28.5T680-840q17 0 28.5 11.5T720-800v207q10-3 19.5-5t20.5-2h80v220q0 142-99 241T500-40Zm40-320Z"/>
                </svg>
                </div>
                </span>
                Aamiin
            </button>
        </div>
    </div>
  )
}
