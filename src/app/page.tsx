import ListView from "@/app/ui/list-view";
import Carousel from "@/app/ui/carousel";
import {fetchFeaturedProgram, fetchZakat} from "./lib/services/programs";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const zakat = await fetchZakat();
  return (
    <div className="space-y-2">
      <div className="bg-white shadow-md rounded-lg">
        <Link
          href={`zakat/${zakat?.slug}`}
          className="rounded-t-lg cursor-pointer"
        >
          <Image
            width={480}
            height={200}
            src={"/banner_zakat.svg"}
            alt="Banner Image"
          />
        </Link>
        {/* <Carousel /> */}
      </div>
      <div className="bg-white p-4 shadow-md rounded-lg">
        <ListView />
      </div>
    </div>
  );
}

export const revalidate = 60;
