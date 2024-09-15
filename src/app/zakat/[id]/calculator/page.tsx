'use client';
import CurrencyInput from "@/app/ui/form-component/currency-input";
import ArrowBackIconButton from "@/app/ui/icon/arrow-back";
import { useState } from "react";

import { Alert, Modal } from "flowbite-react";
import { useAuth } from "@/app/lib/context/auth-context";
import TextInput from "@/app/ui/form-component/text-input";

export default function Page({ params }: { params: { id: string } }) {
    const id = params.id;
    const [incomePerMonth, setIncomePerMonth] = useState<number>(0);
    const [anotherIncomePerMonth, setAnotherIncomePerMonth] = useState<number>(0);
    const [openModal, setOpenModal] = useState(false);
    const [nisabPerMonth, setNisabPerMonth] = useState(6859394); //6.859.394
    const [nisabPerYear, setNisabPerYear] = useState(82312725); //82.312.725
    const [zakatAmount, setZakatAmount] = useState<number>(0);

    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [phoneNumber, setPhoneNumber] = useState<string>('');

    const [nameError, setNameError] = useState<string>('');
    const [emailError, setEmailError] = useState<string>('');
    const [phoneError, setPhoneError] = useState<string>('');

    const [alertVisibility, setAlertVisibility] = useState(false);

    const {isLoggedIn, authData, loginWithGoogle} = useAuth();

    const handleButtonClicked = () => {
      if(incomePerMonth+anotherIncomePerMonth < nisabPerMonth) {
        setAlertVisibility(true)
      } else {
        setOpenModal(true)
      }
    }

    const hideAlert = () => {
      setAlertVisibility(false)
    }

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md relative">
      <ArrowBackIconButton />
      <br />
      <br />
      <div className="space-y-6">
        <h1 className="text-lg font-bold mb-4">Kalkulator Zakat</h1>
      </div>
     {
      alertVisibility && (
        <Alert color="warning" additionalContent={<ZakatAlertConfirm openModal={openModal} setOpenModal={setOpenModal} />} onDismiss={hideAlert}>
          Penghasilan kamu masih kurang dari nisab. Jika dilanjutkan akan menjadi sedekah.
        </Alert>
      )
     }
      <CurrencyInput
        label="Penghasilan per bulan"
        placeholder="Masukkan jumlah"
        value={incomePerMonth}
        onChange={(newAmount) => setIncomePerMonth(newAmount)}
      />
      <CurrencyInput
        label="Penghasilan lain per bulan (Optional)"
        placeholder="Masukkan jumlah"
        value={anotherIncomePerMonth}
        onChange={(newAmount) => setAnotherIncomePerMonth(newAmount)}
      />

      <div className="bg-green-100 p-6 rounded-lg shadow-md text-center">
        <h2 className="text-sm font-semibold text-gray-800">Jumlah Zakat</h2>
        <p className="text-xl font-bold text-green-700 mt-2">Rp {Math.round(((incomePerMonth+anotherIncomePerMonth)*.025)).toLocaleString('id-ID')}</p>
      </div>

      <div className="flex justify-center w-full mt-8">
        <button
            onClick={handleButtonClicked}
            className="flex items-center space-x-2 bg-green-700 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-green-800 transition duration-300"
          >
            <span className="text-xs">Tunaikan</span>
          </button>
      </div>
      <Modal show={openModal} size="md" popup onClose={() => setOpenModal(false)}>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">Nominal Zakat</h3>
            <CurrencyInput
              label="Nominal Zakat"
              placeholder="Masukkan jumlah"
              value={Math.round(((incomePerMonth+anotherIncomePerMonth)*.025))}
              onChange={(newAmount) => setZakatAmount(newAmount)}
            />
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
          </div>
        </Modal.Body>
        <Modal.Footer className="flex justify-center">
          <button
            onClick={handleButtonClicked}
            className="flex items-center space-x-2 bg-green-700 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-green-800 transition duration-300"
          >
            <span className="text-xs">Bayar Zakat</span>
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

interface ZakatAlertConfirmProps {
  openModal: boolean;
  setOpenModal: (value: boolean) => void;
}
function ZakatAlertConfirm({openModal, setOpenModal}:ZakatAlertConfirmProps) {
  return (
    <>
      <div className="mb-4 mt-2 text-sm font-bold text-yellow-700 dark:text-yellow-800">
        Apakah ingin dilanjutkan dengan sedekah?
      </div>
      <div className="flex">
      
        <button onClick={()=>setOpenModal(true)}
          type="button"
          className="mr-2 inline-flex items-center rounded-lg bg-cyan-700 px-3 py-1.5 text-center text-xs font-medium text-white hover:bg-cyan-800 focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-800 dark:hover:bg-cyan-900"
        >
          Ya
        </button>
        <button
          type="button"
          className="rounded-lg border border-cyan-700 bg-transparent px-3 py-1.5 text-center text-xs font-medium text-cyan-700 hover:bg-cyan-800 hover:text-white focus:ring-4 focus:ring-cyan-300 dark:border-cyan-800 dark:text-cyan-800 dark:hover:text-white"
        >
          Tidak
        </button>
      </div>
    </>
  );
}