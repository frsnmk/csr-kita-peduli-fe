import HistoryCard from "@/app/ui/history-card";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import Link from "next/link";
import { fetchDonation } from "../lib/services/donations";

export default async function page() {
  const pendingDonation = await fetchDonation({payment_status: 'pending'});
  const paidDonation = await fetchDonation({payment_status: 'paid'});
  const confirmedDonation = await fetchDonation({payment_status: 'confirmed'});
  const failedDonation = await fetchDonation({payment_status: 'failed'});
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
                {pendingDonation.map((item, index) => (
                  <Link href={`histories/${item.id}`} key={index}>
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
                {paidDonation.map((item, index) => (
                  <Link href={`histories/${item.id}/unpaid`} key={index}>
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
                {confirmedDonation.map((item, index) => (
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
                {failedDonation.map((item, index) => (
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