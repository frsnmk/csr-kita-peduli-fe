'use client';

import ListView from "@/app/ui/list-view";
import Carousel from "@/app/ui/carousel";
import { fetchFeaturedProgram } from "./lib/services/programs";


export default async function Home() {
  const programs = await fetchFeaturedProgram();
  return (
    <div className="space-y-2">
      <div className="bg-white shadow-md rounded-lg">
        <Carousel />
      </div>
      <div className="bg-white p-4 shadow-md rounded-lg">
        <ListView data={programs} />
      </div>
    </div>

  );
}
