import React, { useState } from 'react';

interface CheckboxProps {
  label: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, checked = false, onChange }) => {
  const [isChecked, setIsChecked] = useState<boolean>(checked);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    if (onChange) {
      onChange(!isChecked);
    }
  };

  return (
    <div className="flex items-center space-x-3">
      <input
        type="checkbox"
        id="anonim-checkbox"
        className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <label htmlFor="anonim-checkbox" className="text-sm font-medium text-gray-700">
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
