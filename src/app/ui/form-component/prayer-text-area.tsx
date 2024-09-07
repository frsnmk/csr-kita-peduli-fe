import React, { useState } from 'react';

interface PrayerTextAreaProps {
  maxLength?: number;
  onChange?: (value: string) => void;
}

const PrayerTextArea: React.FC<PrayerTextAreaProps> = ({ maxLength = 280, onChange }) => {
  const [prayerText, setPrayerText] = useState<string>('');

  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = event.target.value;
    setPrayerText(value);
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <div className="mb-4">
      <label htmlFor="prayer" className="block text-sm font-medium text-gray-700 mb-2">
        Sertakan doa dan dukungan <span className="italic">(opsional)</span>
      </label>
      <textarea
        id="prayer"
        name="prayer"
        rows={4}
        maxLength={maxLength}
        className="w-full p-3 border rounded-lg text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Tulis doa untuk penggalang dana atau dirimu agar bisa diamini oleh Orang Baik lainnya."
        value={prayerText}
        onChange={handleTextChange}
      ></textarea>
      <div className="text-right text-xs text-gray-500">
        {prayerText.length} / {maxLength}
      </div>
    </div>
  );
};

export default PrayerTextArea;
