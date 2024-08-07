import HistoryCard from "@/app/ui/history-card";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import Link from "next/link";

const data = [
  {
    title: 'Bersama Raih Masa Depan Negeri yang Gemerlang dengan Beasiswa Cahaya Negeri',
    amount: 150000,
    date: '08 Mei 2024',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    title: `Program Sebar Al Qur'an`,
    amount: 150000,
    date: '08 Mei 2024',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    title: 'Bersama Raih Masa Depan Negeri yang Gemerlang dengan Beasiswa Cahaya Negeri',
    amount: 150000,
    date: '08 Mei 2024',
    imageUrl: 'https://via.placeholder.com/150',
  },
  // Tambahkan data lainnya sesuai kebutuhan
];

export default function page() {
  return (
    <div>
        <TabGroup>
          <TabList>
            <Tab
              key={'donation'}
              className={`
                w-1/2 py-2 px-3 text-sm font-semibold 
                focus:outline-none 
                text-gray-600 data-[selected]:text-green-600 
                data-[selected]:border-b-4 data-[selected]:border-green-600
                data-[hover]:bg-green-50 data-[selected]:data-[hover]:border-green-600 
                data-[focus]:outline-1 data-[focus]:outline-green-600`}>
              Donasi
            </Tab>
            <Tab
              key={'unpaid'}
              className={`
                w-1/2 py-2 px-3 text-sm font-semibold 
                focus:outline-none 
                text-gray-600 data-[selected]:text-green-600 
                data-[selected]:border-b-4 data-[selected]:border-green-600
                data-[hover]:bg-green-50 data-[selected]:data-[hover]:border-green-600 
                data-[focus]:outline-1 data-[focus]:outline-green-600`}>
              Belum Dibayar
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <div className="p-4">
                {data.map((item, index) => (
                  <Link href={`histories/1`} key={index}>
                    <HistoryCard
                      key={index}
                      title={item.title}
                      amount={item.amount}
                      date={item.date}
                      imageUrl={item.imageUrl}
                    />
                  </Link>
                ))}
              </div>
            </TabPanel>
            <TabPanel>
            <div className="p-4">
                {data.map((item, index) => (
                  <Link href={`histories/1`} key={index}>
                    <HistoryCard
                      key={index}
                      title={item.title}
                      amount={item.amount}
                      date={item.date}
                      imageUrl={item.imageUrl}
                    />
                  </Link>
                ))}
                <Link href={`histories/1`}>
                  <HistoryCard
                      key={'index'}
                      title={'Free Palestine'}
                      amount={20000000}
                      date={data[0].date}
                      imageUrl={data[0].imageUrl}
                    />
                 </Link>
              </div>
            </TabPanel>
          </TabPanels>
        </TabGroup>
    </div>
  
  )
}