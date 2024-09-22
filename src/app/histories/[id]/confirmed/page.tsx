'use client'

import { fetchDonation } from "@/app/lib/services/donations";
import { Donation } from "@/app/lib/types/donation";
import ConfirmedDetailHistory from "@/app/ui/histories/confirmed-detail-history";
import SkeletonDetailHistory from "@/app/ui/skeleton/skeleton-detail-history";
import { useEffect, useState } from "react";

export default function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const [confirmedDonationDetail, setConfirmedDonationDetail] = useState<Donation|undefined>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=>{
    const fetchData = async () => {
      setIsLoading(true)
      const res = await fetchDonation(id)
      if(res.success){
        setConfirmedDonationDetail(res.data)
      }

      setIsLoading(false)
    }

    fetchData()
  },[])

  if(isLoading) {
    return <SkeletonDetailHistory/>
  }
  return (
    <ConfirmedDetailHistory data={confirmedDonationDetail}/>
  );
}