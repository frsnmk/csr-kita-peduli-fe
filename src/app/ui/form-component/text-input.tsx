import React from 'react';

interface TextInputProps {
  label: string;
  placeholder: string;
  type: string;
  value: string;
  validationMessage?:string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextInput: React.FC<TextInputProps> = ({ label, placeholder, type, value, validationMessage, onChange }) => {
  return (
    <div className="mb-2">
      <label className="block text-sm font-medium text-gray-700 mb-2">{label} <span className="font-thin text-xs text-red-600">*</span></label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full p-2 border text-sm border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
      />
      {
        validationMessage && <p className="text-xs font-thin text-red-600">{validationMessage}</p>
      }

    </div>
  );
};

export default TextInput;
