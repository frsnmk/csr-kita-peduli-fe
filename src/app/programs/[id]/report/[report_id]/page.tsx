import { getReport } from "@/app/lib/services/reports";
import ArrowBackIconButton from "@/app/ui/icon/arrow-back";
import { Banner, Carousel } from "flowbite-react";

export default async function Page({ params }: { params: {report_id: string } }) {
    const reportId = params.report_id;
    const report = await getReport(reportId);
    return (
      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md relative">
        <ArrowBackIconButton />
        <br />
        <br />
        <div className="space-y-6">
          <h1 className="text-lg font-bold mb-4">{report?.title}</h1>
          <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
            <Carousel slideInterval={5000}>
            {
              report?.banners && report?.banners.map((b, i) => (
                <img key={i} src={b.banner_url} alt={b.picture} />
              ))
            }
            </Carousel>
          </div>
          <p dangerouslySetInnerHTML={{__html:report!.description}}></p>
        </div>
      </div>
    )
  }