import React from "react";
import ProgramCard from "@/app/ui/program-card";

const GridView = ({title}: {title:string}) => {
  return (
    <div className="">
      <div className="flex justify-between p-3">
        <h1 className="text-md font-bold">{title}</h1>
        <button className="text-sm text-green-700">Lihat semua</button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <ProgramCard />
        <ProgramCard />
        <ProgramCard />
        <ProgramCard />
        <ProgramCard />
        <ProgramCard />
      </div>
    </div>
  );
};

export default GridView;
