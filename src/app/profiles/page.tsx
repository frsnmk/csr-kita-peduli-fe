"use client";

import LocalOfferIcon from "@/app/ui/icon/local-offer";
import LogoutIcon from "../ui/icon/logout-icon";
import RemoveAccountIcon from "../ui/icon/remove-account-icon";
import Image from "next/image";
import {useEffect, useState} from "react";
import toast from "react-hot-toast";
import {validatedToken} from "../lib/services/auth";
import {GoogleAuthProvider, signInWithPopup, signOut} from "firebase/auth";
import {auth, provider} from "../lib/firebase-config";
import {getFirstLetter} from "../lib/helper";
import {useAuth} from "../lib/context/auth-context";
import Link from "next/link";

export default function Page() {
  const {isLoggedIn, authData, loading, loginWithGoogle, logout} = useAuth();

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
      <div className="mb-20">
        <div className="w-[200px] h-[100px]">
          <img
            src="/kitapeduli.png" // Ganti dengan path logo yang benar
            alt="Kita Peduli Logo"
            width={200}
            height={100}
            className="object-contain"
          />
        </div>
      </div>
      <button
        onClick={() => loginWithGoogle()}
        className="flex items-center justify-center w-64 p-3 border rounded-full shadow-sm text-gray-600 hover:bg-gray-100 transition-colors"
      >
        <img
          src="/google_logo.png"
          alt="Google Logo"
          width={24}
          height={24}
          className="mr-2"
        />
        <span className="text-sm font-medium">Login dengan Google</span>
      </button>
    </div>
  ) : (
    <div className="p-4 pt-12">
      <div className="flex items-center space-x-4 mb-8">
        <div className="w-20 h-20 rounded-full bg-blue-600 flex items-center justify-center text-white text-4xl">
          {getFirstLetter(authData?.displayName ?? "")}
        </div>
        <div>
          <p className="text-xl font-semibold">{authData?.displayName}</p>
          <p className="text-gray-500">{authData?.email}</p>
        </div>
      </div>
      <div className="bg-gray-50 shadow-md rounded-lg p-4 space-y-2">
        <Link href={`profiles/edit`} className="flex items-center space-x-4 p-2">
          <LocalOfferIcon className="text-green-700" />
          <p className="text-sm font-semibold">Edit Profile</p>
        </Link>
        <div
          className="flex items-center space-x-4 cursor-pointer hover:bg-slate-100 p-2 rounded"
          onClick={logout}
        >
          <LogoutIcon className="text-green-700" />
          <p className="text-sm font-semibold">Sign Out</p>
        </div>
        <div className="flex items-center space-x-4 p-2">
          <RemoveAccountIcon className="text-green-700" />
          <p className="text-sm font-semibold">Hapus Akun</p>
        </div>
      </div>
    </div>
  );
}
