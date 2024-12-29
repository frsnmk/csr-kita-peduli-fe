"use client";

import LocalOfferIcon from "@/app/ui/icon/local-offer";
import Image from "next/image";
import {useEffect, useState} from "react";
import toast from "react-hot-toast";
import {GoogleAuthProvider, signInWithPopup, signOut} from "firebase/auth";
import Link from "next/link";
import { useAuth } from "@/app/lib/context/auth-context";
import TextInput from "@/app/ui/form-component/text-input";

export default function Page() {
  const {isLoggedIn, authData, loading, loginWithGoogle, logout} = useAuth();
  const [displayName, setDisplayName] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")


  const submitUpdateProfile = () => {
    const payload = {
      displayName,
      phoneNumber
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
            className="flex items-center space-x-2 bg-green-700 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-green-800 transition duration-300"
          >
            <span className="text-xs">Simpan</span>
          </button>
        </div>
    </div>
  );
}
