'use client'

import { createDonation } from "@/app/lib/services/donations";
import { getProgramPackagePrice } from "@/app/lib/services/programs";
import { DonationDTO } from "@/app/lib/types/donation";
import { ProgramPrice } from "@/app/lib/types/program";
import Checkbox from "@/app/ui/form-component/checkbox";
import PrayerTextArea from "@/app/ui/form-component/prayer-text-area";
import ArrowBackIconButton from "@/app/ui/icon/arrow-back";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function page({ params }: { params: { id: string } }) {
const programId = params.id;
const [selectedPackage, setSelectedPackage] = useState(0);
const [customAmount, setCustomAmount] = useState(0);
const router = useRouter();
const [packages, setPackages] = useState<ProgramPrice[]>([]);
const [beAnonim, setBeAnonim] = useState<boolean>(false);
const [prayerDonation, setPrayerDonation] = useState<string>('');
const [isFollow, setIsFollow] = useState<boolean>(false);
const [email, setEmail] = useState<string>('frsnmk@gmail.com');
const [phoneNumber, setPhoneNumber] = useState<string>('');
const [loading, setLoading] = useState(true);

useEffect(() => {
  const fetchData = async () => {
    setLoading(true);
    const packages = await getProgramPackagePrice(programId)
    setCustomAmount(packages[0].amount)
    setPackages(packages)
    setLoading(false);
  }

  fetchData()
},[])


const handlePackageChange = (index: number) => {
  setSelectedPackage(index);
  setCustomAmount(packages[index].amount);
};


const handlePrayerChange = (value: string) => {
  setPrayerDonation(value);
};



const handleSumit = async () => {
  const reqBody = {
    email: email,
    program_id: programId,
    customer_id: 4, 
    amount: customAmount,
    be_anonim: beAnonim,
    phone_number: phoneNumber,
    prayer:  prayerDonation,
    is_follow: isFollow
  }

  const res = await createDonation(reqBody);

  if (res.success) {
    router.replace('donation-confirm');
  } else {
    console.error("Failed to create donation:", res.error);
  }
}

return (
  <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md relative">
    <ArrowBackIconButton />
    <br />
    <br />
    <div className="space-y-6">
      <h1 className="text-lg font-bold mb-4">Pilih Nominal</h1>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">Jumlah</label>
        <div className="flex items-center">
          <input
            type="text"
            value={`Rp ${customAmount.toLocaleString()}`}
            readOnly
            className="flex-1 p-2 border rounded-lg text-center bg-gray-100"
          />
        </div>
      </div>
      <div className="mb-4 space-y-4">
        <p className="text-sm font-medium text-gray-700 mb-2">Atau Rekomendasi Jumlah Paket</p>
        <div className="space-y-2">
          {packages.map((pkg, index) => (
            <label
              key={index}
              className={`flex items-center justify-between p-2 border rounded-lg cursor-pointer ${
                selectedPackage === index ? 'bg-green-200 border-green-700' : 'bg-gray-100'
              }`}
            >
              
              <span className="flex items-center text-sm">
                Rp {pkg.amount.toLocaleString()}
              </span>
              <input
                type="radio"
                name="package"
                checked={selectedPackage === index}
                onChange={() => handlePackageChange(index)}
                className="hidden"
              />
            </label>
          ))}
        </div>
      </div>
      <PrayerTextArea onChange={handlePrayerChange} />
      <Checkbox
        label="Sembunyikan nama saya (donasi sebagai anonim)"
        checked={false}
        onChange={(checked) => setBeAnonim(checked)}
      />

      <Checkbox
        label="Ikuti Program"
        checked={false}
        onChange={(checked) => setIsFollow(checked)}
      />

    </div>
    <div className="fixed bottom-0 w-full bg-white shadow-lg max-w-[480px] mx-auto left-0 right-0 p-4">
      <button onClick={handleSumit} className="w-full bg-green-700 text-white font-bold p-3 rounded-lg mt-4">
        Lanjut
      </button>
    </div>
  </div>
);
}