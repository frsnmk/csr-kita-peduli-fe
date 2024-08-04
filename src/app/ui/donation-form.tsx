'use client';

import { useState } from "react";

const DonationForm = () => {
    const [selectedPackage, setSelectedPackage] = useState(1);
  const [customAmount, setCustomAmount] = useState(1000000);
  const [packageCount, setPackageCount] = useState(20);

  const packages = [
    { label: '2 paket', value: 100000, emoji: '😊' },
    { label: '4 paket', value: 200000, emoji: '😎' },
    { label: '10 paket', value: 500000, emoji: '😍' },
    { label: '20 paket', value: 1000000, emoji: '😁' },
  ];

  const handlePackageChange = (index: number) => {
    setSelectedPackage(index);
    setCustomAmount(packages[index].value);
    setPackageCount(Number(packages[index].label.split(' ')[0]));
  };

  const handleIncrement = () => {
    setPackageCount(packageCount + 1);
    setCustomAmount((packageCount + 1) * 50000); // Assuming each package is Rp 50,000
  };

  const handleDecrement = () => {
    if (packageCount > 1) {
      setPackageCount(packageCount - 1);
      setCustomAmount((packageCount - 1) * 50000);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md mt-10">
      <h1 className="text-lg font-bold mb-4">Pilih Nominal</h1>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">Jumlah Paket</label>
        <div className="flex items-center">
          <input
            type="text"
            value={`Rp ${customAmount.toLocaleString()}`}
            readOnly
            className="flex-1 p-2 border rounded-lg text-center bg-gray-100"
          />
          <button
            onClick={handleDecrement}
            className="p-2 bg-green-200 text-green-700 rounded-l-lg border-l"
          >
            -
          </button>
          <input
            type="text"
            value={packageCount}
            readOnly
            className="w-12 p-2 text-center bg-gray-100 border-l border-r"
          />
          <button
            onClick={handleIncrement}
            className="p-2 bg-green-200 text-green-700 rounded-r-lg border-l"
          >
            +
          </button>
        </div>
      </div>
      <div className="mb-4">
        <p className="text-sm font-medium text-gray-700 mb-2">Atau Rekomendasi Jumlah Paket</p>
        <div className="space-y-2">
          {packages.map((pkg, index) => (
            <label
              key={index}
              className={`flex items-center justify-between p-2 border rounded-lg cursor-pointer ${
                selectedPackage === index ? 'bg-green-200 border-green-700' : 'bg-gray-100'
              }`}
            >
              <span className="text-sm">{pkg.label}</span>
              <span className="flex items-center text-sm">
                Rp {pkg.value.toLocaleString()} {pkg.emoji}
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
      <button className="w-full bg-green-700 text-white font-bold p-3 rounded-lg mt-4">
        Lanjut
      </button>
    </div>
  );
}

export default DonationForm;