'use client'

import { useAuth } from "@/app/lib/context/auth-context";
import { createDonation } from "@/app/lib/services/donations";
import { getProgramPackagePrice } from "@/app/lib/services/programs";
import { DonationDTO } from "@/app/lib/types/donation";
import { ProgramPrice } from "@/app/lib/types/program";
import Checkbox from "@/app/ui/form-component/checkbox";
import PrayerTextArea from "@/app/ui/form-component/prayer-text-area";
import TextInput from "@/app/ui/form-component/text-input";
import ArrowBackIconButton from "@/app/ui/icon/arrow-back";
import SkeletonDonationCreate from "@/app/ui/skeleton/skeleton-donation-create";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

export default function Page({ params }: { params: { id: string } }) {
const programId = params.id;
const router = useRouter();
const searchParams = useSearchParams();
const affiliateCode = searchParams.get('affiliate_code');
const [selectedPackage, setSelectedPackage] = useState(0);
const [customAmount, setCustomAmount] = useState(0);
const [packages, setPackages] = useState<ProgramPrice[]>([]);
const [beAnonim, setBeAnonim] = useState<boolean>(false);
const [prayerDonation, setPrayerDonation] = useState<string>('');
const [isFollow, setIsFollow] = useState<boolean>(false);
const [name, setName] = useState<string>('');
const [email, setEmail] = useState<string>('');
const [phoneNumber, setPhoneNumber] = useState<string>('');
const [loading, setLoading] = useState(true);
const {isLoggedIn, authData, loginWithGoogle, logout} = useAuth();

const [nameError, setNameError] = useState<string>('');
const [emailError, setEmailError] = useState<string>('');
const [phoneError, setPhoneError] = useState<string>('');
const [isSubmitting, setIsSubmitting] = useState(false);

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

const validateForm = () => {
  let isValid = true;

  // Validasi Nama
  if (!name.trim()) {
    setNameError('Nama wajib diisi');
    isValid = false;
  } else {
    setNameError('');
  }

  // Validasi Email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.trim()) {
    setEmailError('Email wajib diisi');
    isValid = false;
  } else if (!emailRegex.test(email)) {
    setEmailError('Format email tidak valid');
    isValid = false;
  } else {
    setEmailError('');
  }

  // Validasi Nomor Handphone
  const phoneRegex = /^[0-9]+$/;
  if (!phoneNumber.trim()) {
    setPhoneError('Nomor handphone wajib diisi');
    isValid = false;
  } else if (!phoneRegex.test(phoneNumber)) {
    setPhoneError('Nomor handphone tidak valid');
    isValid = false;
  } else {
    setPhoneError('');
  }

  return isValid;
};


const handleSumit = async () => {
  if (isSubmitting) return;
  if (!validateForm() && !isLoggedIn) {
    return;
  }
  setIsSubmitting(true)

  const reqBody = {
    email: isLoggedIn ? authData?.email : email,
    name:isLoggedIn ? authData?.displayName : name,
    program_id: programId,
    customer_id: authData?.customer_id, 
    amount: customAmount,
    be_anonim: beAnonim,
    phone_number: phoneNumber,
    prayer:  prayerDonation,
    is_follow: isFollow,
    affiliate_code: affiliateCode
  }

  const res = await createDonation(reqBody);

  if (res.success) {
    localStorage.setItem('donation_id', JSON.stringify(res.data.id))
    router.replace('donation-confirm');
  } else {
    console.error("Failed to create donation:", res.error);
    setIsSubmitting(false)
  }
}

if (loading) {
  // Tampilkan loading state saat memeriksa status login
  return (
    <SkeletonDonationCreate />
  );
}
return (
  <Suspense fallback={<SkeletonDonationCreate />}>
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
        {
          !isLoggedIn && (
            <div>
              <h1 className="text-md font-semibold mb-4"><span className="text-green-700 cursor-pointer" onClick={() => loginWithGoogle()}>Masuk</span> atau lengkapi data dibawah ini</h1>
              <TextInput
                label="Nama"
                placeholder="Masukkan nama Anda"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                validationMessage={nameError}
              />
              <TextInput
                label="Email"
                placeholder="Masukkan email Anda"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                validationMessage={emailError}
              />
              <TextInput
                label="Nomor Handphone"
                placeholder="Masukkan nomor handphone Anda"
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                validationMessage={phoneError}
              />
            </div>
          )
        }

        <div>
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

      </div>
      <div className="fixed bottom-0 w-full bg-white shadow-lg max-w-[480px] mx-auto left-0 right-0 p-4">
        <button onClick={handleSumit} disabled={isSubmitting} className={`w-full flex justify-center ${ isSubmitting ? 'bg-green-300 cursor-not-allowed' : 'bg-green-700'} text-white font-bold p-3 rounded-lg mt-4`}>
          {
            isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sedang memproses
              </>
              
            ): "Lanjut"
          }
        </button>
      </div>
    </div>
  </Suspense>
);
}