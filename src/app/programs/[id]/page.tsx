import { ProgramDetailPage } from "@/app/ui/programs/program-detail-page";



export default async function Page({ params }: { params: { id: string } }) {
    const id = params.id;
  return (
    <ProgramDetailPage id={id} />
  )
}