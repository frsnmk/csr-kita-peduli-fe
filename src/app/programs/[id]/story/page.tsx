"use client";

import {fetchProgramPrayer} from "@/app/lib/services/prayer";
import {getProgram} from "@/app/lib/services/programs";
import {Prayer} from "@/app/lib/types/prayer";
import {Program} from "@/app/lib/types/program";
import {AvatarListView} from "@/app/ui/avatar-list-view";
import ArrowBackIconButton from "@/app/ui/icon/arrow-back";
import PrayerList from "@/app/ui/prayer-list-view";
import {SkeletonList} from "@/app/ui/skeleton-list";
import Image from "next/image";
import {useEffect, useState} from "react";

export default function page({params}: {params: {id: string}}) {
  const programId = params.id;
  const [program, setProgram] = useState<Program | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchdata = async () => {
      setLoading(true);
      const programRes = await getProgram(programId);
      setProgram(programRes);
      setLoading(false);
    };

    fetchdata();
  }, [page, programId]);

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md relative">
      <ArrowBackIconButton />
      <br />
      <br />
      <div className="space-y-6">
        <h1 className="text-lg font-bold mb-4">Story</h1>
        {program ? (
          <div
            className="prose"
            dangerouslySetInnerHTML={{__html: program?.story}}
          ></div>
        ) : (
          !loading && (
            <div className="flex justify-center">
              <Image
                width={300}
                height={300}
                src={"/empty_data_csr.svg"}
                alt=""
              />
            </div>
          )
        )}
        {loading && (
          <div className="animate-pulse">
            {/* Bagian paragraf kedua */}
            <div className="space-y-2">
              <div className="h-3 bg-gray-200 rounded w-full"></div>
              <div className="h-3 bg-gray-200 rounded w-full"></div>
              <div className="h-3 bg-gray-200 rounded w-3/4"></div>
            </div>

            {/* Bagian paragraf kedua */}
            <div className="space-y-2 mt-4">
              <div className="h-3 bg-gray-200 rounded w-full"></div>
              <div className="h-3 bg-gray-200 rounded w-full"></div>
              <div className="h-3 bg-gray-200 rounded w-3/4"></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
