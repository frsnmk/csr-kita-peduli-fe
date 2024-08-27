import { fetchDonation } from "@/app/lib/services/donations";
import ConfirmedDetailHistory from "@/app/ui/histories/confirmed-detail-history";

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;

  const confirmedDonationDetail = await fetchDonation(id)
  return (
    (confirmedDonationDetail.success)
    ? <ConfirmedDetailHistory data={confirmedDonationDetail.data}/>
    : <p>Error</p>
  );
}