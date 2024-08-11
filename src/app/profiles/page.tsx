import LocalOfferIcon from "@/app/ui/icon/local-offer";
import LogoutIcon from "../ui/icon/logout-icon";
import RemoveAccountIcon from "../ui/icon/remove-account-icon";

export default function page() {  
    return (
        <div className="p-4 pt-12">
            <div className="flex items-center space-x-4 mb-8">
                <div className="w-20 h-20 rounded-full bg-blue-600 flex items-center justify-center text-white text-4xl">
                    F
                </div>
                <div>
                    <p className="text-xl font-semibold">Faris Naufal</p>
                    <p className="text-gray-500">razedman@gmail.com</p>
                </div>
            </div>
            <div className="bg-gray-50 shadow-md rounded-lg p-4 space-y-8">
                <div className="flex items-center space-x-4">
                    <LocalOfferIcon className="text-green-700" /> 
                    <p className="text-sm font-semibold">Program Unggulan</p>
                </div>
                <div className="flex items-center space-x-4">
                    <LogoutIcon className="text-green-700" />
                    <p className="text-sm font-semibold">Sign Out</p>
                </div>
                <div className="flex items-center space-x-4">
                    <RemoveAccountIcon className="text-green-700" />
                    <p className="text-sm font-semibold">Hapus Akun</p>
                </div>
            </div>
        </div>
    )
}