'use client'

import GridView from "@/app/ui/grid-view";
import { fetchPrograms } from "@/app/lib/services/programs";
import { usePathname, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { Program } from "../lib/types/program";
import { Skeleton } from "../ui/skeleton";


export default function Page() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get('search');
  
  const [programs, setPrograms] = useState<Program[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {

    const fetchProgramFunc = async () => {
      const programs = await fetchPrograms(searchQuery??'');
      setPrograms(programs)
      setIsLoading(false)
    }

    fetchProgramFunc()
  },[pathname, searchParams])
  
  return (
    <Suspense fallback={<Skeleton/>}>
      <div className="p-4">
            {
              isLoading ? <Skeleton /> : <GridView title="Program" data={programs}/> 
            }
      </div>
    </Suspense>
  )
}
