import { fetchDonation } from "@/app/lib/services/donations";
import PaidDetailHistory from "@/app/ui/histories/paid-detail-history";

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;

  const paidDonationDetail = await fetchDonation(id)
  return (
    (paidDonationDetail.success)
    ? <PaidDetailHistory data={paidDonationDetail.data}/>
    : <p>Error</p>
  );
}