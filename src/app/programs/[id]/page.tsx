import { AvatarListView } from '@/app/ui/avatar-list-view';
import PrayerList from '@/app/ui/prayer-list-view';
import Image from 'next/image';
import React from 'react'


export default async function Page({ params }: { params: { id: string } }) {
    const id = params.id;
  return (
    <div className="bg-gray-200 space-y-2">
        <div>
            <Image width={480} height={200} src={'/Frame 4.png'} alt="Banner Image"/>
        </div>
        <div className="bg-white rounded-sm p-4 space-y-4">
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
        <div className="bg-white p-4">
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
        <div className="bg-white p-4">
            <h2 className="text-md font-semibold">Donasi <span className="text-green-700 font-bold bg-green-200 p-2 px-3 rounded-xl ml-2 text-sm">200</span></h2>
            <AvatarListView key={1} name="Hamba Allah" amount={200000} timeAgo='1 bulan yang lalu' avatarUrl='https://via.placeholder.com/40' />
            <AvatarListView key={1} name="Hamba Allah" amount={200000} timeAgo='1 bulan yang lalu' avatarUrl='https://via.placeholder.com/40' />
            <AvatarListView key={1} name="Hamba Allah" amount={200000} timeAgo='1 bulan yang lalu' avatarUrl='https://via.placeholder.com/40' />
            <AvatarListView key={1} name="Hamba Allah" amount={200000} timeAgo='1 bulan yang lalu' avatarUrl='https://via.placeholder.com/40' />
        </div>
        {/* Do'a */}
        <div className="bg-white p-4 shadow-sm">
        <h2 className="text-md font-semibold">Do'a-do'a</h2>
         <PrayerList />
         <PrayerList />
         <PrayerList />
         <PrayerList />
        </div>
    </div>
  )
}