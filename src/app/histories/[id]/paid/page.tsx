'use client'

import { fetchDonation } from "@/app/lib/services/donations";
import { Donation } from "@/app/lib/types/donation";
import PaidDetailHistory from "@/app/ui/histories/paid-detail-history";
import SkeletonDetailHistory from "@/app/ui/skeleton/skeleton-detail-history";
import { useEffect, useState } from "react";

export default function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const [paidDonationDetail, setPaidDonationDetail] = useState<Donation|undefined>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=> {
    const fetchData = async () => {
      setIsLoading(true)
      const res = await fetchDonation(id)
      if(res.success) {
        setPaidDonationDetail(res.data)
      }
      setIsLoading(false)
    }

    fetchData()
  },[])

  if(isLoading) {
    return <SkeletonDetailHistory/>
  }

  return (
    <PaidDetailHistory data={paidDonationDetail}/>
  );
}