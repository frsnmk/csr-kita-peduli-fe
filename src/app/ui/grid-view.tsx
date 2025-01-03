"use client";

import React, {Suspense} from "react";
import ProgramCard from "@/app/ui/program-card";
import {Program} from "@/app/lib/types/program";
import {useSearchParams} from "next/navigation";
import Image from "next/image";

interface GridViewProps {
  title: string;
  data: Program[];
}

const GridView = ({title, data}: GridViewProps) => {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("search");

  return (
    <Suspense>
      <div className="flex justify-between p-3">
        <h1 className="text-md font-bold">{title}</h1>
      </div>
      {searchQuery && (
        <p className="py-6 text-center font-thin italic">
          Hasil pencarian {searchQuery}
        </p>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-items-center">
        {data.length > 0 &&
          data.map((program) => (
            <div key={program.id}>
              <ProgramCard program={program} />
            </div>
          ))}
      </div>
      {data.length < 1 && (
        <div className="flex justify-center">
          <img width={300} height={300} src={"/empty_data_csr.svg"} alt="" />
        </div>
      )}
    </Suspense>
  );
};

export default GridView;
