"use client";
import CurrencyInput from "@/app/ui/form-component/currency-input";
import ArrowBackIconButton from "@/app/ui/icon/arrow-back";
import {useState} from "react";

import {Alert, Modal, Tabs} from "flowbite-react";
import {useAuth} from "@/app/lib/context/auth-context";
import TextInput from "@/app/ui/form-component/text-input";

export default function Page({params}: {params: {id: string}}) {
  const id = params.id;
  const [incomePerMonth, setIncomePerMonth] = useState<number>(0);
  const [anotherIncomePerMonth, setAnotherIncomePerMonth] = useState<number>(0);
  const [deposito, setDeposito] = useState(0);
  const [propertyValue, setPropertyValue] = useState(0);
  const [jewellery, setJewellery] = useState(0);
  const [nisabPerMonth, setNisabPerMonth] = useState(6859394); //6.859.394
  const [nisabPerYear, setNisabPerYear] = useState(82312725); //82.312.725

  const [openModal, setOpenModal] = useState(false);
  const [zakatAmount, setZakatAmount] = useState<number>(0);

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  const [nameError, setNameError] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [phoneError, setPhoneError] = useState<string>("");

  const [alertVisibility, setAlertVisibility] = useState(false);

  const {isLoggedIn, authData, loginWithGoogle} = useAuth();

  const [activeTab, setActiveTab] = useState(0);

  const handleButtonClicked = () => {
    if (incomePerMonth + anotherIncomePerMonth < nisabPerMonth) {
      setAlertVisibility(true);
    } else {
      setOpenModal(true);
    }
  };

  const hideAlert = () => {
    setAlertVisibility(false);
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md relative">
      <ArrowBackIconButton />
      <br />
      <br />
      <div className="space-y-6">
        <h1 className="text-lg font-bold mb-4">Kalkulator Zakat</h1>
      </div>
      {alertVisibility && (
        <Alert
          className="mb-6"
          color="warning"
          additionalContent={
            <ZakatAlertConfirm
              openModal={openModal}
              setOpenModal={setOpenModal}
            />
          }
          onDismiss={hideAlert}
        >
          Penghasilan kamu masih kurang dari nisab. Jika dilanjutkan akan
          menjadi sedekah.
        </Alert>
      )}
      <Tabs>
        <Tabs.Item
          active={true}
          title={
            <>
              <svg
                className="mr-2"
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#e8eaed"
              >
                <path d="M480-400q-17 0-28.5-11.5T440-440q0-17 11.5-28.5T480-480q17 0 28.5 11.5T520-440q0 17-11.5 28.5T480-400Zm-160 0q-17 0-28.5-11.5T280-440q0-17 11.5-28.5T320-480q17 0 28.5 11.5T360-440q0 17-11.5 28.5T320-400Zm320 0q-17 0-28.5-11.5T600-440q0-17 11.5-28.5T640-480q17 0 28.5 11.5T680-440q0 17-11.5 28.5T640-400ZM480-240q-17 0-28.5-11.5T440-280q0-17 11.5-28.5T480-320q17 0 28.5 11.5T520-280q0 17-11.5 28.5T480-240Zm-160 0q-17 0-28.5-11.5T280-280q0-17 11.5-28.5T320-320q17 0 28.5 11.5T360-280q0 17-11.5 28.5T320-240Zm320 0q-17 0-28.5-11.5T600-280q0-17 11.5-28.5T640-320q17 0 28.5 11.5T680-280q0 17-11.5 28.5T640-240ZM200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Z" />
              </svg>{" "}
              Profesi
            </>
          }
        >
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
            <h2 className="text-sm font-semibold text-gray-800">
              Jumlah Zakat
            </h2>
            <p className="text-xl font-bold text-green-700 mt-2">
              Rp{" "}
              {Math.round(
                (incomePerMonth + anotherIncomePerMonth) * 0.025
              ).toLocaleString("id-ID")}
            </p>
          </div>

          <div className="flex justify-center w-full mt-8">
            <button
              onClick={handleButtonClicked}
              className="flex items-center space-x-2 bg-green-700 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-green-800 transition duration-300"
            >
              <span className="text-xs">Tunaikan</span>
            </button>
          </div>
        </Tabs.Item>
        <Tabs.Item
          title={
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#e8eaed"
                className="mr-2"
              >
                <path d="M841-518v318q0 33-23.5 56.5T761-120H201q-33 0-56.5-23.5T121-200v-318q-23-21-35.5-54t-.5-72l42-136q8-26 28.5-43t47.5-17h556q27 0 47 16.5t29 43.5l42 136q12 39-.5 71T841-518Zm-272-42q27 0 41-18.5t11-41.5l-22-140h-78v148q0 21 14 36.5t34 15.5Zm-180 0q23 0 37.5-15.5T441-612v-148h-78l-22 140q-4 24 10.5 42t37.5 18Zm-178 0q18 0 31.5-13t16.5-33l22-154h-78l-40 134q-6 20 6.5 43t41.5 23Zm540 0q29 0 42-23t6-43l-42-134h-76l22 154q3 20 16.5 33t31.5 13Z" />
              </svg>
              Maal
            </>
          }
        >
          <CurrencyInput
            label="Nilai Deposito"
            placeholder="Masukkan jumlah"
            value={deposito}
            onChange={(newAmount) => setDeposito(newAmount)}
          />
          <CurrencyInput
            label="Nilai properti & kendaraan"
            placeholder="Masukkan jumlah"
            value={propertyValue}
            onChange={(newAmount) => setPropertyValue(newAmount)}
          />
          <CurrencyInput
            label="Perhiasan (Emas, Perak, Permata dll)"
            placeholder="Masukkan jumlah"
            value={jewellery}
            onChange={(newAmount) => setJewellery(newAmount)}
          />
          <CurrencyInput
            label="Saham, piutang, surat-surat berharga lainnya"
            placeholder="Masukkan jumlah"
            value={jewellery}
            onChange={(newAmount) => setJewellery(newAmount)}
          />
          <CurrencyInput
            label="Hutang pribadi yang jatuh tempo tahun ini"
            placeholder="Masukkan jumlah"
            value={jewellery}
            onChange={(newAmount) => setJewellery(newAmount)}
          />
        </Tabs.Item>
      </Tabs>
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
              value={Math.round(
                (incomePerMonth + anotherIncomePerMonth) * 0.025
              )}
              onChange={(newAmount) => setZakatAmount(newAmount)}
            />
            {!isLoggedIn && (
              <div>
                <h1 className="text-md font-semibold mb-4">
                  <span
                    className="text-green-700 cursor-pointer"
                    onClick={() => loginWithGoogle()}
                  >
                    Masuk
                  </span>{" "}
                  atau lengkapi data dibawah ini
                </h1>
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
            )}
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
  );
}

interface ZakatAlertConfirmProps {
  openModal: boolean;
  setOpenModal: (value: boolean) => void;
}
function ZakatAlertConfirm({openModal, setOpenModal}: ZakatAlertConfirmProps) {
  return (
    <>
      <div className="mb-4 mt-2 text-sm font-bold text-yellow-700 dark:text-yellow-800">
        Apakah ingin dilanjutkan dengan sedekah?
      </div>
      <div className="flex">
        <button
          onClick={() => setOpenModal(true)}
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
