"use client";
import React from "react";
import ProgramCard from "@/app/ui/program-card";

const ListView = () => {
  return (
    <div className="">
      <div className="flex justify-between p-3">
        <h1 className="text-md font-bold">Program Unggulan</h1>
        <button className="text-sm text-green-700">Lihat semua</button>
      </div>
      <div className="flex overflow-x-scroll space-x-4 p-3">
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

export default ListView;
