"use client";

import LocalOfferIcon from "@/app/ui/icon/local-offer";
import LogoutIcon from "../ui/icon/logout-icon";
import RemoveAccountIcon from "../ui/icon/remove-account-icon";
import Image from "next/image";
import {useEffect, useState} from "react";
import toast from "react-hot-toast";
import {GoogleAuthProvider, signInWithPopup, signOut} from "firebase/auth";
import {auth, provider} from "../lib/firebase-config";
import {getFirstLetter} from "../lib/helper";
import {useAuth} from "../lib/context/auth-context";
import Link from "next/link";
import { deleteAccount } from "@/app/lib/services/auth";
import { Alert } from "flowbite-react";

export default function Page() {
  const {isLoggedIn, authData, loading, loginWithGoogle, logout} = useAuth();
  const [alertVisibility, setAlertVisibility] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onDeleteAccount = async () => {
    
    setIsSubmitting(true)
    const res = await deleteAccount()
    if (res.success) {
      toast.success("Berhasil menghapus akun")
      setIsSubmitting(false)
      logout()
    } else {
      toast.error("Gagal menghapus akun");
      setIsSubmitting(false)
    }
  }

  const hideAlert = () => {
    setAlertVisibility(false);
  };

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
      {alertVisibility && (
              <Alert
                className="mb-6"
                color="warning"
                additionalContent={
                  <DeleteAlertConfirm
                   onDeleteAccount={onDeleteAccount}
                   hideAlert={hideAlert}
                   isSubmitting={isSubmitting}
                  />
                }
                onDismiss={hideAlert}
              >
                Kamu akan melakukan penghapusan akun, riwayat dan doa yang sudah tercatat akan terhapus dari kitapeduli
              </Alert>
            )}
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
        <div className="flex items-center space-x-4 p-2 cursor-pointer" onClick={() => setAlertVisibility(true)}>
          <RemoveAccountIcon className="text-green-700" />
          <p className="text-sm font-semibold">Hapus Akun</p>
        </div>
      </div>
    </div>
  );
}

interface DeleteAlertConfirm {
  onDeleteAccount: () => void;
  hideAlert: () => void;
  isSubmitting: boolean
}

function DeleteAlertConfirm({onDeleteAccount, hideAlert, isSubmitting}:DeleteAlertConfirm) {
  return (
    <>
      <div className="mb-4 mt-2 text-sm font-bold text-yellow-700 dark:text-yellow-800">
        Apakah anda yakin ingin menghapus akun?
      </div>
      <div className="flex">
        <button
          disabled={isSubmitting}
          onClick={onDeleteAccount}
          type="button"
          className={`mr-2 inline-flex items-center rounded-lg ${isSubmitting ? 'bg-cyan-500' : 'bg-cyan-700'}  px-3 py-1.5 text-center text-xs font-medium text-white hover:bg-cyan-800 focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-800 dark:hover:bg-cyan-900`}
        >
          {
            isSubmitting && 
            <svg
                className="animate-spin -ml-1 mr-3 h-4 w-4 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
            </svg>
          }
          Ya
        </button>
        <button 
          onClick={hideAlert}
          type="button"
          className="rounded-lg border border-cyan-700 bg-transparent px-3 py-1.5 text-center text-xs font-medium text-cyan-700 hover:bg-cyan-800 hover:text-white focus:ring-4 focus:ring-cyan-300 dark:border-cyan-800 dark:text-cyan-800 dark:hover:text-white"
        >
          Tidak
        </button>
      </div>
    </>
  );
}
