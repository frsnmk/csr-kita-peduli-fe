import { fetchDonation } from "@/app/lib/services/donations";
import FailedDetailHistory from "@/app/ui/histories/failed-detail-history";

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;

  const failedDonationDetail = await fetchDonation(id)
  return (
    (failedDonationDetail.success)
    ? <FailedDetailHistory data={failedDonationDetail.data}/>
    : <p>Error</p>
  );
}