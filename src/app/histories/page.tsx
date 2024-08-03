import HistoryCard from "@/app/ui/history-card";

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
    <div className="p-4">
      {data.map((item, index) => (
        <HistoryCard
          key={index}
          title={item.title}
          amount={item.amount}
          date={item.date}
          imageUrl={item.imageUrl}
        />
      ))}
    </div>
  )
}