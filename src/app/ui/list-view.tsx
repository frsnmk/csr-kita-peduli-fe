"use client";

import React, {useEffect, useState} from "react";
import ProgramCard from "@/app/ui/program-card";
import {Program} from "../lib/types/program";
import {fetchFeaturedProgram} from "../lib/services/programs";
import SkeletonCard from "./skeleton/skeleton-card";

const ListView = () => {
  const [programs, setPrograms] = useState<Program[] | undefined>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const programsRes = await fetchFeaturedProgram();
      setPrograms(programsRes);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div className="">
      <div className="flex justify-between p-3">
        <h1 className="text-md font-bold">Program Unggulan</h1>
      </div>
      <div className="flex overflow-x-scroll space-x-4 p-3">
        {isLoading ? (
          <div className="flex space-x-2">
            <SkeletonCard />
            <SkeletonCard />
          </div>
        ) : programs && programs.length > 0 ? (
          programs.map((program) => (
            <ProgramCard key={program.id} program={program} />
          ))
        ) : (
          <p className="text-center w-full text-sm font-thin italic">
            Tidak ada program
          </p>
        )}
      </div>
    </div>
  );
};

export default ListView;
