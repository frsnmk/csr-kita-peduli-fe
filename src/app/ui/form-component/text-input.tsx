import React from 'react';

interface TextInputProps {
  label: string;
  placeholder: string;
  type: string;
  value: string|number;
  validationMessage?:string;
  required?:boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean
}

const TextInput: React.FC<TextInputProps> = ({ label, placeholder, type, value, validationMessage, required=true, onChange, disabled=false }) => {
  return (
    <div className="mb-2">
      <label className="block text-sm font-medium text-gray-700 mb-2">{label} {required ? <span className="font-thin text-xs text-red-600">*</span>: <span className='italic'>(Opsional)</span>}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className="w-full p-2 border text-sm border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
      />
      {
        validationMessage && <p className="text-xs font-thin text-red-600">{validationMessage}</p>
      }

    </div>
  );
};

export default TextInput;
