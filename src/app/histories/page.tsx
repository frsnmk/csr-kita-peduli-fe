"use client";

import {Tab, TabGroup, TabList, TabPanel, TabPanels} from "@headlessui/react";
import {useState} from "react";
import {useAuth} from "../lib/context/auth-context";
import dynamic from "next/dynamic";
import { SkeletonList } from "../ui/skeleton-list";


const ListOfUnpaidDonations = dynamic(() => import("@/app/ui/histories/list-of-unpaid-donations").then((mod) => mod.ListOfUnpaidDonations), {
  loading: () => <SkeletonList/>
});

const ListOfPaidDonations = dynamic(() => import("@/app/ui/histories/list-of-paid-donations").then((mod) => mod.ListOfPaidDonations), {
  loading: () => <SkeletonList/>
})

const ListOfConfirmedDonations = dynamic(() => import("@/app/ui/histories/list-of-confirmed-donations").then((mod) => mod.ListOfConfirmedDonations), {
  loading: () => <SkeletonList/>
})

const ListOfFailedDonations = dynamic(() => import("@/app/ui/histories/list-of-failed-donations").then((mod) => mod.ListOfFailedDonations), {
  loading: () => <SkeletonList/>
})

export default function Page() {
  const [activeState, setActiveState] = useState(1);
  const {authData} = useAuth();

  const renderTab = () => {
    if (activeState == 1) {
      return <ListOfUnpaidDonations authData={authData} />;
    } else if(activeState == 2) {
      return <ListOfPaidDonations authData={authData} />
    } else if(activeState == 3) {
      return <ListOfConfirmedDonations authData={authData} />
    } else if(activeState == 4) {
      return <ListOfFailedDonations authData={authData} />
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
            onClick={() => setActiveState(3)}
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
            onClick={() => setActiveState(4)}
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
