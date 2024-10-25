"use client";

import HistoryCard from "@/app/ui/history-card";
import {Tab, TabGroup, TabList, TabPanel, TabPanels} from "@headlessui/react";
import Link from "next/link";
import {fetchDonations} from "../lib/services/donations";
import Image from "next/image";
import {useEffect, useState} from "react";
import {Donation} from "../lib/types/donation";
import {useAuth} from "../lib/context/auth-context";
import EmptyComponent from "../ui/empty-component";
import dynamic from "next/dynamic";


const ListOfUnpaidDonations = dynamic(() => import("@/app/ui/histories/list-of-unpaid-donations").then((mod) => mod.ListOfUnpaidDonations), {
  loading: () => <p>Loading</p>
});

const ListOfConfirmedDonations = dynamic(() => import("@/app/ui/histories/list-of-confirmed-donations").then((mod) => mod.ListOfConfirmedDonations), {
  loading: () => <p>Loading</p>
})

export default function Page() {
  const [activeState, setActiveState] = useState(1);
  const [pendingDonation, setPendingDonation] = useState<
    Donation[] | undefined
  >();
  const [paidDonation, setPaidDonation] = useState<Donation[] | undefined>();
  const [confirmedDonation, setConfirmedDonation] = useState<
    Donation[] | undefined
  >();
  const [failedDonation, setFailedDonation] = useState<
    Donation[] | undefined
  >();
  const [isLoading, setIsLoading] = useState(true);

  const {authData, isLoggedIn, loginWithGoogle, loading} = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      if (authData?.customer_id) {
        // const resPendingDonation = await fetchDonations({
        //   payment_status: "pending",
        //   customer_id: authData?.customer_id,
        // });
        // setPendingDonation(resPendingDonation);

        // const resPaidDonation = await fetchDonations({
        //   payment_status: "paid",
        //   customer_id: authData?.customer_id,
        // });
        // setPaidDonation(resPaidDonation);

        const resConfirmedDonation = await fetchDonations({
          payment_status: "confirmed",
          customer_id: authData?.customer_id,
        });
        setConfirmedDonation(resConfirmedDonation);

        const resFailedDonation = await fetchDonations({
          payment_status: "failed",
          customer_id: authData?.customer_id,
        });
        setFailedDonation(resFailedDonation);
      }
      setIsLoading(false);
    };
    console.log(authData);
    fetchData();
  }, [authData]);

  const renderTab = () => {
    if (activeState == 1) {
      return <ListOfUnpaidDonations authData={authData} />;
    } else if(activeState == 2) {
      return <ListOfConfirmedDonations authData={authData} />
    }
  };

  return (
    <div>
      <TabGroup>
        <TabList>
          <Tab
            key={"donation"}
            onClick={() => setActiveState(1)}
            className={`
                w-1/4 py-2 px-3 text-sm font-semibold 
                focus:outline-none 
                text-gray-600 data-[selected]:text-green-600 
                data-[selected]:border-b-4 data-[selected]:border-green-600
                data-[hover]:bg-green-50 data-[selected]:data-[hover]:border-green-600 
                data-[focus]:outline-1 data-[focus]:outline-green-600`}
          >
            Menunggu
          </Tab>
          <Tab
            key={"paid"}
            onClick={() => setActiveState(2)}
            className={`
                w-1/4 py-2 px-3 text-sm font-semibold 
                focus:outline-none 
                text-gray-600 data-[selected]:text-green-600 
                data-[selected]:border-b-4 data-[selected]:border-green-600
                data-[hover]:bg-green-50 data-[selected]:data-[hover]:border-green-600 
                data-[focus]:outline-1 data-[focus]:outline-green-600`}
          >
            Dibayar
          </Tab>
          <Tab
            key={"confirmed"}
            className={`
                w-1/4 py-2 px-3 text-sm font-semibold 
                focus:outline-none 
                text-gray-600 data-[selected]:text-green-600 
                data-[selected]:border-b-4 data-[selected]:border-green-600
                data-[hover]:bg-green-50 data-[selected]:data-[hover]:border-green-600 
                data-[focus]:outline-1 data-[focus]:outline-green-600`}
          >
            Dikonfirmasi
          </Tab>
          <Tab
            key={"failed"}
            className={`
                w-1/4 py-2 px-3 text-sm font-semibold 
                focus:outline-none 
                text-gray-600 data-[selected]:text-green-600 
                data-[selected]:border-b-4 data-[selected]:border-green-600
                data-[hover]:bg-green-50 data-[selected]:data-[hover]:border-green-600 
                data-[focus]:outline-1 data-[focus]:outline-green-600`}
          >
            Gagal
          </Tab>
        </TabList>
        <TabPanels>{renderTab()}</TabPanels>
      </TabGroup>
    </div>
  );
}
