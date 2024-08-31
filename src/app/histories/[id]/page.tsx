import { fetchDonation } from "@/app/lib/services/donations";
import UnpaidDetailHistoryForm from "@/app/ui/histories/unpaid-detail-history-form";

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;

  const unpaidDonationDetail = await fetchDonation(id)

  return (
    (unpaidDonationDetail.success)
    ? <UnpaidDetailHistoryForm id={id} data={unpaidDonationDetail.data}/>
    : <p>Error</p>
  );
  }