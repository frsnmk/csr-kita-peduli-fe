import { ZakatDetailPage } from "@/app/ui/zakat/zakat-detail-page";



export default async function Page({ params }: { params: { id: string } }) {
    const id = params.id;
  return (
    <ZakatDetailPage id={id} />
  )
}