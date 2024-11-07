import Link from "next/link";
import React from "react";
import {Program} from "../lib/types/program";
import {percentProgress} from "../lib/helper";
import Image from "next/image";

interface ProgramCardProps {
  program: Program;
}

const ProgramCard = ({program}: ProgramCardProps) => {
  return (
    <Link href={`programs/${program.slug}`}>
      <div className="flex-none w-[185px] sm:w-[225px] h-full">
        <div className="rounded-lg shadow-md overflow-hidden max-w-full mx-auto flex-grow">
          <img
            src={
              program.banners.length > 0 && program.banners[0].banner_url
                ? program.banners[0].banner_url
                : "/placeholder_image.webp"
            }
            alt="Program Image"
            width={400} // Tentukan width sesuai dengan ukuran yang dibutuhkan
            height={160} // Tentukan height sesuai dengan ukuran yang dibutuhkan
            className="w-full h-40 object-cover"
          />
          <div className="p-3">
            <div className="flex items-center mb-2">
              <img
                src={`${
                  (program.pic && program.pic.photo) ?? "/default-avatar-2.png"
                }`}
                alt="Organization Logo"
                width={25}
                height={25}
                className="rounded-full"
              />
              <h3 className="ml-2 text-xs font-medium">
                {(program.pic && program.pic.name) ?? "-"}
              </h3>
            </div>
            <h2 className="text-xs font-semibold truncate-multiline">
              {program.title}
            </h2>
            <div className="mt-3">
              <div className="h-2 bg-gray-200 rounded-full">
                <div
                  className="h-2 bg-green-500 rounded-full"
                  style={{
                    width: `${percentProgress(
                      program.total_donations_amount ?? 0,
                      program.amount_target
                    )}%`,
                  }}
                ></div>
              </div>
              <p className="mt-2 text-[0.70rem] text-gray-600">Terkumpul</p>
              <p className="text-sm font-bold text-green-700">
                Rp{" "}
                {(Number(program.total_donations_amount) ?? 0).toLocaleString(
                  "id-ID"
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProgramCard;
