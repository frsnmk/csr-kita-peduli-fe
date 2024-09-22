'use client'

import { fetchDonation } from "@/app/lib/services/donations";
import { Donation } from "@/app/lib/types/donation";
import FailedDetailHistory from "@/app/ui/histories/failed-detail-history";
import SkeletonDetailHistory from "@/app/ui/skeleton/skeleton-detail-history";
import { useEffect, useState } from "react";

export default function Page({ params }: { params: { id: string } }) {
  const id = params.id;

  const [failedDonationDetail, setfailedDonationDetail] = useState<Donation|undefined>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=> {
    const fetchData = async () => {
      setIsLoading(true)
      const res = await fetchDonation(id)
      if(res.success) {
        setfailedDonationDetail(res.data)
      }
      setIsLoading(false)
    }

    fetchData()
  },[])

  if(isLoading) {
    return <SkeletonDetailHistory/>
  }

  return (
    <FailedDetailHistory data={failedDonationDetail}/>
  );
}