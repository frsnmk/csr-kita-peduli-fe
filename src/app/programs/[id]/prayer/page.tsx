'use client'

import { fetchProgramPrayer } from "@/app/lib/services/prayer";
import { Prayer } from "@/app/lib/types/prayer";
import { AvatarListView } from "@/app/ui/avatar-list-view";
import ArrowBackIconButton from "@/app/ui/icon/arrow-back";
import PrayerList from "@/app/ui/prayer-list-view";
import { SkeletonList } from "@/app/ui/skeleton-list";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Page({ params }: { params: { id: string } }) {
  const programId = params.id;
  const [prayers, setPrayers] = useState<Prayer[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);

  useEffect(()=> {
    const fetchdata = async () => {
      setLoading(true);
      const newPrayers = await fetchProgramPrayer(programId, {page:page, limit:15});
    
      if(newPrayers.length == 0) {
        setHasMore(false)
      } else {
        setPrayers((prev) => [...prev, ...newPrayers]);
      }
      setLoading(false);
    }

    fetchdata();
  },[page, programId]);

  const loadMoreDonations = () => {
    if (hasMore && !loading) {
      setPage((prev) => prev + 1);
    }
  };  

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || loading) return;
      loadMoreDonations();
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loading, hasMore]);

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md relative">
      <ArrowBackIconButton />
      <br />
      <br />
      <div className="space-y-6">
        <h1 className="text-lg font-bold mb-4">Doa-doa</h1>
        {
          (prayers.length > 0)
          ? prayers.map((d,i) => (
            <PrayerList key={i} prayer={d} />
          ))
          : !loading &&  <div className="flex justify-center">
              <Image width={300} height={300} src={'/empty_data_csr.svg'} alt="" />
            </div>
        }
        {loading && <SkeletonList />}
      </div>
    </div>
  )
}