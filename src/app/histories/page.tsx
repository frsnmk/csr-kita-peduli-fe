'use client'

import HistoryCard from "@/app/ui/history-card";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import Link from "next/link";
import { fetchDonations } from "../lib/services/donations";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Donation } from "../lib/types/donation";
import { useAuth } from "../lib/context/auth-context";

export default function page() {

  const [pendingDonation, setPendingDonation] = useState<Donation[]|undefined>();
  const [paidDonation, setPaidDonation] = useState<Donation[]|undefined>();
  const [confirmedDonation,setConfirmedDonation] = useState<Donation[]|undefined>();
  const [failedDonation, setFailedDonation] = useState<Donation[]|undefined>();
  const [isLoading, setIsLoading] = useState(true);

  const {authData} = useAuth();

  useEffect(()=>{
    const fetchData = async () => {
      setIsLoading(true)
      if(authData?.customer_id) {
        const resPendingDonation = await fetchDonations({ payment_status: 'pending', customer_id: authData?.customer_id});
        setPendingDonation(resPendingDonation);
  
        const resPaidDonation = await fetchDonations({ payment_status: 'paid', customer_id: authData?.customer_id });
        setPaidDonation(resPaidDonation);
  
        const resConfirmedDonation = await fetchDonations({ payment_status: 'confirmed', customer_id: authData?.customer_id });
        setConfirmedDonation(resConfirmedDonation);
  
        const resFailedDonation = await fetchDonations({ payment_status: 'failed', customer_id: authData?.customer_id });
        setFailedDonation(resFailedDonation)
      }
      setIsLoading(false)
    }

    fetchData();
    console.log('fetch lagi dong')
  },[authData]);

  return (
    <div>
      <TabGroup>
        <TabList>
          <Tab
            key={'donation'}
            className={`
                w-1/4 py-2 px-3 text-sm font-semibold 
                focus:outline-none 
                text-gray-600 data-[selected]:text-green-600 
                data-[selected]:border-b-4 data-[selected]:border-green-600
                data-[hover]:bg-green-50 data-[selected]:data-[hover]:border-green-600 
                data-[focus]:outline-1 data-[focus]:outline-green-600`}>
            Menunggu
          </Tab>
          <Tab
            key={'paid'}
            className={`
                w-1/4 py-2 px-3 text-sm font-semibold 
                focus:outline-none 
                text-gray-600 data-[selected]:text-green-600 
                data-[selected]:border-b-4 data-[selected]:border-green-600
                data-[hover]:bg-green-50 data-[selected]:data-[hover]:border-green-600 
                data-[focus]:outline-1 data-[focus]:outline-green-600`}>
            Dibayar
          </Tab>
          <Tab
            key={'confirmed'}
            className={`
                w-1/4 py-2 px-3 text-sm font-semibold 
                focus:outline-none 
                text-gray-600 data-[selected]:text-green-600 
                data-[selected]:border-b-4 data-[selected]:border-green-600
                data-[hover]:bg-green-50 data-[selected]:data-[hover]:border-green-600 
                data-[focus]:outline-1 data-[focus]:outline-green-600`}>
            Dikonfirmasi
          </Tab>
          <Tab
            key={'failed'}
            className={`
                w-1/4 py-2 px-3 text-sm font-semibold 
                focus:outline-none 
                text-gray-600 data-[selected]:text-green-600 
                data-[selected]:border-b-4 data-[selected]:border-green-600
                data-[hover]:bg-green-50 data-[selected]:data-[hover]:border-green-600 
                data-[focus]:outline-1 data-[focus]:outline-green-600`}>
            Gagal
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <div className="p-4">
              {(pendingDonation && pendingDonation.length > 0) ?
                pendingDonation?.map((item, index) => (
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
                : <div className="flex justify-center">
                  <Image width={300} height={300} src={'/empty_data_csr.svg'} alt="" />
                </div>
              }
            </div>
          </TabPanel>
          <TabPanel>
            <div className="p-4">
              {paidDonation && paidDonation.map((item, index) => (
                <Link href={`histories/${item.id}/paid`} key={index}>
                  <HistoryCard
                    key={index}
                    title={item.program.title}
                    amount={item.amount}
                    date={item.created_at}
                    imageUrl={item.program.banner}
                  />
                </Link>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="p-4">
              {confirmedDonation && confirmedDonation.map((item, index) => (
                <Link href={`histories/${item.id}/confirmed`} key={index}>
                  <HistoryCard
                    key={index}
                    title={item.program.title}
                    amount={item.amount}
                    date={item.created_at}
                    imageUrl={item.program.banner}
                  />
                </Link>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="p-4">
              {failedDonation && failedDonation.map((item, index) => (
                <Link href={`histories/${item.id}/failed`} key={index}>
                  <HistoryCard
                    key={index}
                    title={item.program.title}
                    amount={item.amount}
                    date={item.created_at}
                    imageUrl={item.program.banner}
                  />
                </Link>
              ))}
            </div>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  )
}