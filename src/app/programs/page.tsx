import GridView from "@/app/ui/grid-view";
import { fetchPrograms } from "@/app/lib/services/programs";

export default async function page() {
  const programs = await fetchPrograms();
  return (
    <div className="p-4">
      <GridView title="Program" data={programs}/>
    </div>
  )
}
