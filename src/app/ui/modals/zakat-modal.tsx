import { Modal } from 'flowbite-react'
import React from 'react'
import CurrencyInput from '../form-component/currency-input';
import PrayerTextArea from '../form-component/prayer-text-area';
import Checkbox from '../form-component/checkbox';
import TextInput from '../form-component/text-input';
import { Skeleton } from '../skeleton';

interface ZakatModalProps {
    openModal:boolean;
    setOpenModal: (v:boolean) => void;
    zakatAmount: number;
    setZakatAmount: (v:number) => void;
    handlePrayerChange: (v:string) => void;
    setBeAnonim: (v:boolean) => void;
    isLoggedIn: boolean;
    name:string;
    setName: (v:string) => void;
    nameError: string;
    email:string;
    setEmail: (v:string) => void;
    emailError: string;
    phoneNumber:string;
    setPhoneNumber:(v:string) => void;
    phoneNumberError: string;
    submitZakatForm: () => void;
    loginWithGoogle: () => void;
    loading:boolean;
}

const ZakatModal = (
    {
        openModal,setOpenModal, zakatAmount, 
        setZakatAmount, handlePrayerChange, setBeAnonim,
        isLoggedIn, setName, name, nameError,
        setEmail, email, emailError,
        phoneNumber, setPhoneNumber, phoneNumberError, loginWithGoogle,submitZakatForm, loading
        
    }:ZakatModalProps) => {
  return (
    <Modal
        show={openModal}
        size="md"
        popup
        onClose={() => setOpenModal(false)}
      >
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              Nominal Zakat
            </h3>
            <CurrencyInput
              label="Nominal Zakat"
              placeholder="Masukkan jumlah"
              value={Math.round(zakatAmount)}
              onChange={(newAmount) => setZakatAmount(newAmount)}
            />
            <PrayerTextArea onChange={handlePrayerChange} />
            <Checkbox
              label="Sembunyikan nama saya (donasi sebagai anonim)"
              checked={false}
              onChange={(checked) => setBeAnonim(checked)}
            />
            {
              loading
              ? 
                <Skeleton />
              : 
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
                    validationMessage={phoneNumberError}
                  />
                </div>
              )
            }
          </div>
        </Modal.Body>
        <Modal.Footer className="flex justify-center">
          <button
            onClick={submitZakatForm}
            disabled={loading}
            className={`flex items-center space-x-2 ${loading ? 'bg-green-200 cursor-not-allowed':'bg-green-700'} text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-green-800 transition duration-300`}
          >
            <span className="text-xs">Bayar Zakat</span>
          </button>
        </Modal.Footer>
      </Modal>
  )
}

export default ZakatModal
