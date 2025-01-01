"use client";

import LocalOfferIcon from "@/app/ui/icon/local-offer";
import Image from "next/image";
import {useEffect, useState} from "react";
import toast from "react-hot-toast";
import {GoogleAuthProvider, signInWithPopup, signOut} from "firebase/auth";
import Link from "next/link";
import { useAuth } from "@/app/lib/context/auth-context";
import TextInput from "@/app/ui/form-component/text-input";
import { getProfile, updateProfile } from "@/app/lib/services/auth";
import ArrowBackIconButton from "@/app/ui/icon/arrow-back";

export default function Page() {
  const {isLoggedIn, authData, loading, loginWithGoogle, logout} = useAuth();
  const [customer, setCustomer] = useState<any>();
  const [displayName, setDisplayName] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getProfile();
      setDisplayName(res.data.name ?? "")
      setPhoneNumber(res.data.phone_number ?? "")
    }
    if(isLoggedIn){
      fetchData()
    }
  },[isLoggedIn])

  const submitUpdateProfile = async () => {
    const payload = {
      displayName,
      phoneNumber
    }

    const res = await updateProfile(payload);
    setIsSubmitting(true)
    if (res.success) {
      toast.success("Berhasil mengubah profile")
      setIsSubmitting(false)
    } else {
      toast.error("Gagal mengubah profile");
      setIsSubmitting(false)
    }
  }

  if (loading) {
    // Tampilkan loading state saat memeriksa status login
    return (
      <div className="flex items-center justify-center h-screen">
        <p>Loading...</p>
      </div>
    );
  }
  return !isLoggedIn ? (
    <div className="flex flex-col items-center justify-center pt-80 bg-white">
      Anda belum login
    </div>
  ) : (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md relative">
      <ArrowBackIconButton />
      <br />
      <br />
      <div className="space-y-2">
      <h1 className="text-lg font-bold mb-4">Edit Profile</h1>
      <div className="p-4 pt-12">
        <TextInput
            label="Nama"
            type="text"
            placeholder="Masukkan nama"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            required={true}
          />
          <TextInput
            label="Nomor Telepon"
            type="text"
            placeholder="Masukan nomor telepon"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required={true}
          />
          <div className="flex justify-center w-full mt-8">
            <button
              onClick={() => submitUpdateProfile()}
              disabled={isSubmitting}
              className={`w-full flex justify-center ${ isSubmitting ? 'bg-green-300 cursor-not-allowed' : 'bg-green-700'} text-white font-bold p-3 rounded-lg mt-4`}
            >
              {
              isSubmitting ? (
                <span className="text-xs flex">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sedang memproses
                </span>
                
              ): <span className="text-xs">Simpan</span>
            }
            </button>
          </div>
      </div>
      </div>
    </div>
  );
}
