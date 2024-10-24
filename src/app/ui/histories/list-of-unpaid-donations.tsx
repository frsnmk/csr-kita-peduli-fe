"use client";

import {IAuthData} from "@/app/lib/context/auth-context";
import {fetchDonations} from "@/app/lib/services/donations";
import {Donation} from "@/app/lib/types/donation";
import {TabPanel} from "@headlessui/react";
import Link from "next/link";
import {useEffect, useState} from "react";
import HistoryCard from "../history-card";
import {SkeletonList} from "../skeleton-list";
import EmptyComponent from "../empty-component";

interface ListOfUnpaidProps {
  authData: IAuthData | null;
}

export const ListOfUnpaidDonations = ({authData}: ListOfUnpaidProps) => {
  const [donations, setDonations] = useState<Donation[] | undefined>();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const res = await fetchDonations({
        payment_status: "pending",
        customer_id: authData?.customer_id,
      });
      setDonations(res);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return (
    <TabPanel>
      <div className="p-4">
        {isLoading ? (
          <SkeletonList />
        ) : donations && donations.length > 0 ? (
          donations?.map((item, index) => (
            <Link href={`histories/${item.id}`} key={index}>
              <HistoryCard
                key={index}
                title={item.program.title}
                amount={item.amount}
                date={item.created_at}
                imageUrl={item.program.banner}
              />
            </Link>
          ))
        ) : (
          <EmptyComponent />
        )}
      </div>
    </TabPanel>
  );
};
