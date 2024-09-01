'use client'

import LocalOfferIcon from "@/app/ui/icon/local-offer";
import LogoutIcon from "../ui/icon/logout-icon";
import RemoveAccountIcon from "../ui/icon/remove-account-icon";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import toast from "react-hot-toast";
import { validatedToken } from "../lib/services/auth";
import {GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import { auth, provider } from "../lib/firebase-config";


export default function page() {
    const [token, setToken] = useState<string | null>(null);

    const handleGoogleLogin = async () => {
        try {
            console.log(auth, '   ' ,provider)
            const result = await signInWithPopup(auth, provider);
            const user = result.user;

            const idToken = await user.getIdToken();
            console.log('Id token firebase :  ', idToken)

        } catch (error) {
            console.error("Login gagal ", error)
            toast.error("Login gagal")
        }
    }


    // useEffect(() => {
    //     const postToken = async () => {
    //         if(token) {
    //             const validatedTokenRes = await validatedToken({token})
    //             if(validatedTokenRes.success) {
    //                 toast.success('Login berhasil')
    //             } else {
    //                 console.error(validatedTokenRes.error)
    //                 toast.error('Login gagal')
    //             }
    //         }
    //     }

    //     postToken()
    // }, [token]);

    return (
        <div className="flex flex-col items-center justify-center pt-80 bg-white">
            <div className="mb-20">
                <Image 
                src="/kitapeduli.png" // Ganti dengan path logo yang benar
                alt="Kita Peduli Logo"
                width={200} 
                height={100} 
                className="object-contain"
                />
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
    )  
    // return (
    //     <div className="p-4 pt-12">
    //         <div className="flex items-center space-x-4 mb-8">
    //             <div className="w-20 h-20 rounded-full bg-blue-600 flex items-center justify-center text-white text-4xl">
    //                 F
    //             </div>
    //             <div>
    //                 <p className="text-xl font-semibold">Faris Naufal</p>
    //                 <p className="text-gray-500">razedman@gmail.com</p>
    //             </div>
    //         </div>
    //         <div className="bg-gray-50 shadow-md rounded-lg p-4 space-y-8">
    //             <div className="flex items-center space-x-4">
    //                 <LocalOfferIcon className="text-green-700" /> 
    //                 <p className="text-sm font-semibold">Program Unggulan</p>
    //             </div>
    //             <div className="flex items-center space-x-4">
    //                 <LogoutIcon className="text-green-700" />
    //                 <p className="text-sm font-semibold">Sign Out</p>
    //             </div>
    //             <div className="flex items-center space-x-4">
    //                 <RemoveAccountIcon className="text-green-700" />
    //                 <p className="text-sm font-semibold">Hapus Akun</p>
    //             </div>
    //         </div>
    //     </div>
    // )
}