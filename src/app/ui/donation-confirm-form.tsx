"use client";

import {useEffect, useRef, useState} from "react";
import Image from "next/image";
import AddPhotoIcon from "@/app/ui/icon/add-photo";
import {fetchBanks} from "../lib/services/bank-account";
import {BankAccount} from "../lib/types/bank-account";
import BankAccountCard from "./form-component/bank-account";
import toast from "react-hot-toast";
import {confirmDonation, fetchDonation} from "../lib/services/donations";
import {useParams, useRouter} from "next/navigation";
import {Donation} from "../lib/types/donation";
import {getProgram} from "../lib/services/programs";
import {Program} from "../lib/types/program";

const DonationConfirmationForm = () => {
  const router = useRouter();
  const params = useParams();

  const [banks, setBanks] = useState<BankAccount[]>([]);
  const [existingProgram, setExistingProgram] = useState<Program | null>(null);
  const [donation, setDonation] = useState<Donation | undefined>();
  const [loading, setLoading] = useState(true);

  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [selectedAccount, setSelectedAccount] = useState<
    string | number | null
  >(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const banks = await fetchBanks({});
      console.log("Params : ", params.id);
      const programId = Array.isArray(params.id) ? params.id[0] : params.id;
      const program = await getProgram(programId);
      setExistingProgram(program);
      setBanks(banks);
      setLoading(false);
      const donationId = localStorage.getItem("donation_id");
      if (donationId) {
        const res = await fetchDonation(donationId);
        if (res.success) {
          setDonation(res.data);
        } else {
          toast.error(res.error);
        }
      } else {
        toast.error("Kamu masuk dengan cara tidak normal");
      }
    };

    fetchData();
  }, []);

  const handleOnClipBoardClick = (accountNumber: string) => {
    navigator.clipboard.writeText(accountNumber);
    toast.success("Nomor Rekening berhasil disalin");
  };

  const handleButtonClicked = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreviewImage(imageUrl);
      setSelectedFile(file);
    }
  };

  const handleSubmitForm = async () => {
    if (isSubmitting) return;
    setIsSubmitting(true);
    const formData = new FormData();
    const donationId = localStorage.getItem("donation_id");

    if (!selectedAccount) {
      toast.error("Silahkan pilih nomor rekening");
      setIsSubmitting(false);
      return;
    }

    if (!selectedFile) {
      toast.error("Silahkan upload bukti pembayaran");
      setIsSubmitting(false);
      return;
    }

    formData.append("receipt_image_path", selectedFile);
    formData.append("bank_id", selectedAccount.toString() ?? "1");

    if (donationId) {
      const res = await confirmDonation(donationId, formData);
      if (res.success) {
        toast.success("Berhasil melakukan konfirmasi pembayaran");
        localStorage.removeItem("donation_id");
        router.replace(`/programs/${res.data.program_slug}/`);
      } else {
        console.log(res.error);
        setIsSubmitting(false);
        toast.error("Gagal melakukan konfimasi pembayaran");
      }
    } else {
      setIsSubmitting(false);
      toast.error("Donasi tidak ditemukan");
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-2 rounded-lg mt-3 text-center space-y-4">
      <img
        src="/payment-waiting.png"
        alt="Payment Waiting"
        width="400"
        height="200"
      />

      <h1 className="text-orange-600 text-md font-bold my-4">
        Menunggu Pembayaran
      </h1>
      <p className="text-gray-600 mb-2 text-xs">
        Silahkan melakukan pembayaran dengan melakukan transfer ke nomor
        rekening dibawah ini
      </p>
      {banks.length > 0 ? (
        banks.map((bank, key) => (
          <BankAccountCard
            key={key}
            accountNumber={bank.norek}
            bankName={bank.name}
            inTheNameOf={bank.in_the_name_of}
            logoUrl={bank.logo_url}
            onClipboardClick={() => handleOnClipBoardClick(bank.norek)}
            selected={selectedAccount === bank.id}
            onSelect={() => setSelectedAccount(bank.id)}
          />
        ))
      ) : loading ? (
        <p className="text-sm font-thin italic">Tunggu sebentar...</p>
      ) : (
        <p className="text-sm font-thin italic">Tidak ada list rekening</p>
      )}
      <div className="my-4">
        <p className="text-gray-700 text-xs">Total Bayar</p>
        <p className="text-green-700 text-xl font-bold">
          Rp{" "}
          {(
            (donation == undefined ? 0 : donation?.amount) +
            (existingProgram != null ? existingProgram!.unique_no : 0)
          ).toLocaleString()}
        </p>
      </div>
      <div className="flex justify-center w-full">
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          style={{display: "none"}}
        />
        <button
          onClick={handleButtonClicked}
          className="flex items-center space-x-2 bg-green-700 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-green-800 transition duration-300"
        >
          <span className="text-xs">Upload Bukti Pembayaran</span>
          <AddPhotoIcon />
        </button>
      </div>
      {previewImage && (
        <div className="mt-4">
          <p className="text-sm text-gray-700 pb-2">Pratinjau Gambar:</p>
          <img
            src={previewImage}
            alt="Preview"
            className="w-64 h-64 object-cover rounded-lg mx-auto"
          />
        </div>
      )}

      {selectedFile && (
        <button
          onClick={handleSubmitForm}
          className={`flex items-center mx-auto space-x-2 text-white font-bold py-3 px-6 rounded-lg shadow-md ${
            isSubmitting ? "bg-green-300 cursor-not-allowed" : "bg-green-700"
          } transition duration-300 mt-4`}
        >
          {isSubmitting ? (
            <>
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
              <small>Sedang memproses</small>
            </>
          ) : (
            <span className="text-xs">Konfirmasi</span>
          )}
        </button>
      )}
    </div>
  );
};

export default DonationConfirmationForm;
