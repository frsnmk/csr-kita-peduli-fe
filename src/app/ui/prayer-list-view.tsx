'use client'

import Image from "next/image";
import React, { useEffect, useState } from "react";
import {Prayer} from "../lib/types/prayer";
import {formatDistanceToNow, parseISO} from "date-fns";
import { getHasAminedPrayer, toggleAmen } from "../lib/services/prayer";
import toast from "react-hot-toast";
import clsx from "clsx";
import { useAuth } from "../lib/context/auth-context";

interface PrayerListProps {
  prayer: Prayer;
}

export default function PrayerList({prayer}: PrayerListProps) {
  const { isLoggedIn } = useAuth();

  const [hasAminedPrayer,setHasAminedPrayer] = useState(false);
  const [amenOrUnamen, setAmenOrUnamen] = useState<boolean|undefined>();
  useEffect(() => {
    const fetchData = async () => {
      const hasAminedPrayerRes = await getHasAminedPrayer(prayer.id);
      if(hasAminedPrayerRes.success) {
        setHasAminedPrayer(hasAminedPrayerRes.data.data)
      }
    } 
    
    if(isLoggedIn){
      fetchData()
    }
  },[])

  const handleAmenButton = async (prayerId:string|number) => {
    if(isLoggedIn) {
      const res = await toggleAmen(prayerId)
      setAmenOrUnamen(res.data)
      setHasAminedPrayer(prev => !prev)

      if(res.success) {
        if(res.data) {
          prayer.total_amen += 1;
          toast.success('Anda sudah mengamini doa ini.')
        } else {
          prayer.total_amen -= 1;
          toast.success('Anda sudah membatalkan amin.')
        }
      } else {
        toast.error('Gagal mengamini doa')
      }
    } else {
      toast.error('Anda harus login terlebih dahulu untuk mengamini doa ini.')
    }
  }

  return (
    <div className="flex flex-col p-4 border-b border-gray-200">
      <div className="flex items-center">
        <div className="w-10 h-10 relative">
          <img
            src={
              prayer.donation == null || prayer.donation.customer == null
                ? "/default-avatar-2.png"
                : prayer.donation.customer.photo ?? "/default-avatar-2.png"
            }
            alt="Avatar"
            className="rounded-full"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              position: "absolute",
            }}
          />
        </div>
        <div className="ml-4">
          <div className="font-bold text-sm">
            {prayer.donation?.be_anonim
              ? "Hamba Allah"
              : prayer.donation?.customer == null
              ? prayer.donation?.name
              : prayer.donation.customer.name}
          </div>
          <div className="text-gray-500 text-xs">
            {formatDistanceToNow(parseISO(prayer.created_at), {
              addSuffix: true,
            })}
          </div>
        </div>
      </div>
      <div className="mt-2 text-gray-700 text-sm">{prayer.description}</div>
      <div className="flex mt-4 text-gray-500 text-sm justify-end">
        <button className="flex" onClick={()=>handleAmenButton(prayer.id)}>
          <span className="pr-2">{prayer.total_amen}</span>
          <span className="material-icons-outlined mr-1">
            <div className="flex">
              <svg className={clsx({
                "text-green-700": hasAminedPrayer,
                "text-gray-700" : !hasAminedPrayer
              })}
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="none"
                transform="scale(-1,1)"
              >
                <path fill="currentColor" d="M480-480v-400q0-17 11.5-28.5T520-920q17 0 28.5 11.5T560-880v400h-80Zm-160 0v-360q0-17 11.5-28.5T360-880q17 0 28.5 11.5T400-840v360h-80ZM500-40q-142 0-241-99t-99-241v-380q0-17 11.5-28.5T200-800q17 0 28.5 11.5T240-760v380q0 109 75.5 184.5T500-120q109 0 184.5-75.5T760-380v-140q-17 0-28.5 11.5T720-480v160H600q-33 0-56.5 23.5T520-240v40h-80v-40q0-66 47-113t113-47h40v-400q0-17 11.5-28.5T680-840q17 0 28.5 11.5T720-800v207q10-3 19.5-5t20.5-2h80v220q0 142-99 241T500-40Zm40-320Z" />
              </svg>
              <svg
                className={clsx({
                  "text-green-700": hasAminedPrayer,
                  "text-gray-700" : !hasAminedPrayer
                })}
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="none"
              >
                <path fill="currentColor" d="M480-480v-400q0-17 11.5-28.5T520-920q17 0 28.5 11.5T560-880v400h-80Zm-160 0v-360q0-17 11.5-28.5T360-880q17 0 28.5 11.5T400-840v360h-80ZM500-40q-142 0-241-99t-99-241v-380q0-17 11.5-28.5T200-800q17 0 28.5 11.5T240-760v380q0 109 75.5 184.5T500-120q109 0 184.5-75.5T760-380v-140q-17 0-28.5 11.5T720-480v160H600q-33 0-56.5 23.5T520-240v40h-80v-40q0-66 47-113t113-47h40v-400q0-17 11.5-28.5T680-840q17 0 28.5 11.5T720-800v207q10-3 19.5-5t20.5-2h80v220q0 142-99 241T500-40Zm40-320Z" />
              </svg>
            </div>
          </span>
        </button>
      </div>
    </div>
  );
}
