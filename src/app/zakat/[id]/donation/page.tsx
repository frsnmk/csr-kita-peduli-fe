'use client'

import { getProgramDonor } from "@/app/lib/services/programs";
import { Donation } from "@/app/lib/types/donation";
import { AvatarListView } from "@/app/ui/avatar-list-view";
import ArrowBackIconButton from "@/app/ui/icon/arrow-back";
import { SkeletonList } from "@/app/ui/skeleton-list";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Page({ params }: { params: { id: string } }) {
  const programId = params.id;
  const [donations, setDonations] = useState<Donation[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);

  useEffect(()=> {
    const fetchdata = async () => {
      setLoading(true);
      const newDonations = await getProgramDonor(programId, {page:page, limit:15, payment_status:'pending'});
    
      console.log('Dari donation .. ', newDonations)
      if(newDonations.length == 0) {
        setHasMore(false)
      } else {
        setDonations((prev) => [...prev, ...newDonations]);
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
        <h1 className="text-lg font-bold mb-4">Donasi</h1>
        {
          (donations.length > 0)
          ? donations.map((d,i) => (
            <AvatarListView key={i} name={(d.be_anonim) ? 'Hamba Allah' :d.customer == null ? d.name! :d.customer.name} amount={d.amount} createdAt={d.created_at} avatarUrl={d.customer == null ? '/default-avatar-2.png' : d.customer.photo!} />
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