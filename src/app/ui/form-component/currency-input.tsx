import React, { useState } from 'react';

interface CurrencyInputProps {
  label: string;
  placeholder: string;
  value: number;
  onChange: (value: number) => void;
}

const CurrencyInput: React.FC<CurrencyInputProps> = ({ label, placeholder, value, onChange }) => {
  const [inputValue, setInputValue] = useState<string>(value.toLocaleString('id-ID'));

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value.replace(/\D/g, ''); // Hanya ambil angka
    const numericValue = rawValue ? parseInt(rawValue, 10) : 0;

    setInputValue(numericValue.toLocaleString('id-ID')); // Tampilkan format currency
    onChange(numericValue); // Kirim nilai mentah
  };

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
      <input
        type="text"
        value={inputValue}
        placeholder={placeholder}
        onChange={handleInputChange}
        className="w-full p-2 border text-sm border-gray-300 rounded-lg focus:outline-none focus:border-green-500  text-right"
      />
    </div>
  );
};

export default CurrencyInput;
