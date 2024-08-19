'use client'

import React from "react";
import ProgramCard from "@/app/ui/program-card";
import { Program } from "@/app/lib/types/program";
import { useSearchParams } from "next/navigation";

interface GridViewProps {
  title:string;
  data: Program[];
}

const GridView = ({title, data}: GridViewProps) => {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get('search');
  
  return (
    <div className="">
      <div className="flex justify-between p-3">
        <h1 className="text-md font-bold">{title}</h1>
      </div>
      {searchQuery && <p className="py-6 text-center font-thin italic">Hasil pencarian {searchQuery}</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {
        (data.length > 0)
        && data.map((program) => (
          <>
            <ProgramCard key={program.id} program={program} />
          </>
        ))
      }
      </div>
      {
        data.length < 1 && <p className="pt-8 text-center">Tidak ada program</p>
      }
    </div>
  );
};

export default GridView;
