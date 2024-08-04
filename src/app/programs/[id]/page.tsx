import { AvatarListView } from '@/app/ui/avatar-list-view';
import ArrowBackIconButton from '@/app/ui/icon/arrow-back';
import PrayerList from '@/app/ui/prayer-list-view';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'


export default async function Page({ params }: { params: { id: string } }) {
    const id = params.id;
  return (
    <div className="space-y-2 relative">
        <ArrowBackIconButton />
        <div className="rounded-t-lg">
            <Image width={480} height={200} src={'/Frame 4.png'} alt="Banner Image"/>
        </div>
        <div className="bg-white p-4 space-y-4 shadow-md rounded-lg">
            <h2 className="text-md font-medium">
              Bersama Raih Masa Depan Negeri yang Gemerlang dengan Beasiswa Cahaya
            </h2>

            <div>
                <span className="text-green-700 text-sm font-extrabold">Rp. 180.000</span>
                <p className="text-xs font-light">Terkumpul dari <span className="font-medium">Rp 80.000.000</span></p>
            </div>
            <div>
                <div className="h-2 bg-gray-200 rounded-full">
                    <div
                        className="h-2 bg-green-500 rounded-full"
                        style={{width: "90%"}}
                        >
                    </div>
                </div>
            </div>
            <div>
                <span className="text-sm font-semibold">120 Donasi</span>
            </div>
        </div>
        {/* Donasi */}
        <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-md font-medium">Informasi Penggalang Dana</h2>
            <div className="flex items-center p-4">
                <div className="w-10 h-10 relative">
                    <Image
                    src={'https://via.placeholder.com/40'}
                    alt="Avatar"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                    />
                </div>
                <div className="ml-4">
                    <div className="font-bold text-sm">Kita Peduli Org</div>
                    <div className="text-gray-700 italic text-sm">Terverifikasi</div>
                </div>
            </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-md font-semibold">Donasi <span className="text-green-700 font-bold bg-green-200 p-2 px-3 rounded-xl ml-2 text-sm">200</span></h2>
            <AvatarListView key={1} name="Hamba Allah" amount={200000} timeAgo='1 bulan yang lalu' avatarUrl='https://via.placeholder.com/40' />
            <AvatarListView key={1} name="Hamba Allah" amount={200000} timeAgo='1 bulan yang lalu' avatarUrl='https://via.placeholder.com/40' />
            <AvatarListView key={1} name="Hamba Allah" amount={200000} timeAgo='1 bulan yang lalu' avatarUrl='https://via.placeholder.com/40' />
            <AvatarListView key={1} name="Hamba Allah" amount={200000} timeAgo='1 bulan yang lalu' avatarUrl='https://via.placeholder.com/40' />
        </div>
        {/* Do'a */}
        <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-md font-semibold">Doa-doa</h2>
         <PrayerList />
         <PrayerList />
         <PrayerList />
         <PrayerList />
        </div>
        <div className="fixed bottom-0 w-full bg-white shadow-lg max-w-[480px] mx-auto left-0 right-0">
            <div className="flex justify-around items-center py-3">
                <button className="flex justify-center space-x-4 w-[40%] border border-green-700 py-2 rounded-lg text-green-700">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#15803d">
                        <path d="M680-80q-50 0-85-35t-35-85q0-6 3-28L282-392q-16 15-37 23.5t-45 8.5q-50 0-85-35t-35-85q0-50 35-85t85-35q24 0 45 8.5t37 23.5l281-164q-2-7-2.5-13.5T560-760q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35q-24 0-45-8.5T598-672L317-508q2 7 2.5 13.5t.5 14.5q0 8-.5 14.5T317-452l281 164q16-15 37-23.5t45-8.5q50 0 85 35t35 85q0 50-35 85t-85 35Z"/>
                    </svg>
                    <span>Share</span>
                </button>
                <Link href="1/donations" className="bg-green-700 flex space-x-4 w-1/2 py-2 rounded-lg text-white font-bold justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff">
                        <path d="M280-159v-361h64q7 0 14 1.5t14 3.5l277 103q14 5 22.5 18t8.5 27q0 21-14.5 34T632-320H527q-5 0-7.5-.5T513-323l-64-25-13 39 77 27q2 1 6 1.5t7 .5h274q32 0 56 23t24 57L561-80l-281-79ZM40-80v-440h160v440H40Zm600-360L474-602q-31-30-52.5-66.5T400-748q0-55 38.5-93.5T532-880q32 0 60 13.5t48 36.5q20-23 48-36.5t60-13.5q55 0 93.5 38.5T880-748q0 43-21 79.5T807-602L640-440Z"/>
                    </svg>
                    <span>
                        Donasi
                    </span>
                </Link>
            </div>
        </div>
    </div>
  )
}