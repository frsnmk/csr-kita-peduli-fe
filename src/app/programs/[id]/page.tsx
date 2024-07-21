import Image from 'next/image';
import React from 'react'


export default async function Page({ params }: { params: { id: string } }) {
    const id = params.id;
  return (
    <div className="bg-gray-200 space-y-2">
        <div>
            <Image width={480} height={200} src={'/Frame 4.png'} alt="Banner Image"/>
        </div>
        <div className="bg-white rounded-sm p-2 space-y-4">
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
        <div className='bg-white'>
            ada
        </div>
    </div>
  )
}