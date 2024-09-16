import Link from "next/link";
import {useState} from "react";

interface StoryCardProps {
  id: string | number;
  text: string;
}
export default function StoryCard({id, text, date}: StoryCardProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-md font-semibold">Story</h2>

      <p className="text-gray-700 text-sm font-thi pt-4 truncate-multiline">
        {text ?? "-"}
      </p>
      {text && text.length > 300 && (
        <div className="flex justify-center pt-4">
          <Link href={`${id}/story`} className="text-green-700 font-medium">
            Lihat semua
          </Link>
        </div>
      )}
    </div>
  );
}
