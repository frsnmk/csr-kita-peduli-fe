'use client'

import LocalOfferIcon from "@/app/ui/icon/local-offer";
import LogoutIcon from "../ui/icon/logout-icon";
import RemoveAccountIcon from "../ui/icon/remove-account-icon";
import Image from "next/image";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { validatedToken } from "../lib/services/auth";
import {GoogleAuthProvider, signInWithPopup, signOut} from "firebase/auth";
import { auth, provider } from "../lib/firebase-config";
import { getFirstLetter } from "../lib/helper";

export default function page() {
    const [token, setToken] = useState<string | null | undefined>(null);
    const [user, setUser] = useState<any>();
    const [logedInUser, setLogedInUser] = useState<any>();
    const [existingToken, setExistingToken] = useState<string | undefined>();
    const [loading, setLoading] = useState(true); 

    const handleGoogleLogin = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            const credential = GoogleAuthProvider.credentialFromResult(result)
            console.log(result.user)
            setUser(result.user);
            setToken(credential?.idToken);
        } catch (error) {
            console.error("Login gagal ", error)
            toast.error("Login gagal")
        }
    }

    const handleLogout = async () => {
        console.log('asdas')
        try {
          // Firebase sign out
          await signOut(auth);
          
          // Hapus token dari localStorage
          localStorage.removeItem('auth');
          setToken(null)
          setExistingToken(undefined)
          // Berikan notifikasi sukses
          toast.success('Logout berhasil');
        } catch (error) {
          console.error("Logout gagal", error);
          toast.error('Logout gagal');
        }
      };


    useEffect(() => {
        const postToken = async () => {
            if(token) {
                const validatedTokenRes = await validatedToken({token})
                if(validatedTokenRes.success) {
                    localStorage.setItem('auth', JSON.stringify({
                        token: validatedTokenRes.data[0].token,
                        customer_id:validatedTokenRes.data[0].customer_id,
                        displayName: user.displayName,
                        email:user.email
                    }));
                    toast.success('Login berhasil')
                } else {
                    console.error(validatedTokenRes.error)
                    toast.error('Login gagal')
                }
            }
        }
        if(!existingToken) {
            postToken()
        }
    }, [token]);

    useEffect(() => {
        const stringAuthData = localStorage.getItem('auth');
        const authData = (stringAuthData) ? JSON.parse(stringAuthData): null;
        setExistingToken(authData?.token)
        setLogedInUser({displayName:authData?.displayName, email:authData?.email})
        setLoading(false);
        console.log(logedInUser)
    },[])

    if (loading) {
        // Tampilkan loading state saat memeriksa status login
        return (
            <div className="flex items-center justify-center h-screen">
                <p>Loading...</p>
            </div>
        );
    }
    return (
        (!token && !existingToken)
        ?
        <div className="flex flex-col items-center justify-center pt-80 bg-white">
            <div className="mb-20">
                <div className="w-[200px] h-[100px]">
                    <Image 
                    src="/kitapeduli.png" // Ganti dengan path logo yang benar
                    alt="Kita Peduli Logo"
                    width={200} 
                    height={100} 
                    className="object-contain"
                    />
                </div>
            </div>
            <button 
                onClick={() => handleGoogleLogin()} 
                className="flex items-center justify-center w-64 p-3 border rounded-full shadow-sm text-gray-600 hover:bg-gray-100 transition-colors"
            >
                <Image 
                src="/google_logo.png"
                alt="Google Logo"
                width={24} 
                height={24} 
                className="mr-2"
                />
                <span className="text-sm font-medium">Login dengan Google</span>
            </button>
        </div>
        :
        <div className="p-4 pt-12">
            <div className="flex items-center space-x-4 mb-8">
                <div className="w-20 h-20 rounded-full bg-blue-600 flex items-center justify-center text-white text-4xl">
                    {getFirstLetter(logedInUser?.displayName ?? user?.displayName)}
                </div>
                <div>
                    <p className="text-xl font-semibold">{logedInUser?.displayName ?? user?.displayName}</p>
                    <p className="text-gray-500">{logedInUser?.email ?? user?.email}</p>
                </div>
            </div>
            <div className="bg-gray-50 shadow-md rounded-lg p-4 space-y-2">
                <div className="flex items-center space-x-4 p-2">
                    <LocalOfferIcon className="text-green-700" /> 
                    <p className="text-sm font-semibold">Program Unggulan</p>
                </div>
                <div className="flex items-center space-x-4 cursor-pointer hover:bg-slate-100 p-2 rounded" onClick={handleLogout}>
                    <LogoutIcon className="text-green-700" />
                    <p className="text-sm font-semibold" >Sign Out</p>
                </div>
                <div className="flex items-center space-x-4 p-2">
                    <RemoveAccountIcon className="text-green-700" />
                    <p className="text-sm font-semibold">Hapus Akun</p>
                </div>
            </div>
        </div>
    )
}