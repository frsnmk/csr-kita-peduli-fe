'use client'

import { formatDateIdn } from "@/app/lib/helper";
import { getProgramDonor } from "@/app/lib/services/programs";
import { fetchProgramReport } from "@/app/lib/services/reports";
import { Donation } from "@/app/lib/types/donation";
import { Report } from "@/app/lib/types/report";
import { AvatarListView } from "@/app/ui/avatar-list-view";
import ArrowBackIconButton from "@/app/ui/icon/arrow-back";
import CalendarIcon from "@/app/ui/icon/calendar";
import { SkeletonList } from "@/app/ui/skeleton-list";
import { Timeline } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Page({ params }: { params: { id: string } }) {
  const programId = params.id;
  const [reports, setReports] = useState<Report[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);

  useEffect(()=> {
    const fetchdata = async () => {
      setLoading(true);
      const newReports = await fetchProgramReport(programId, {page:page, limit:15});
      setReports(newReports);
      
      setLoading(false);
    }

    fetchdata();
  },[page, programId]);

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md relative">
      <ArrowBackIconButton />
      <br />
      <br />
      <div className="space-y-6">
        <h1 className="text-lg font-bold mb-4">Kabar Terbaru</h1>
        <Timeline>
        {
          reports.length > 0 && reports.map((report, i) => (
            <Timeline.Item key={i}>
              <Timeline.Point icon={CalendarIcon} />
              <Timeline.Content>
                <Timeline.Time>{formatDateIdn(report.created_at)}</Timeline.Time>
                <Timeline.Title>{report.title}</Timeline.Title>
                <Timeline.Body className="truncate-multiline" dangerouslySetInnerHTML={{__html:report.description}}>
                </Timeline.Body>
                <div className="flex justify-center pt-4">
                  <Link href={`report/${report.id}`} className="text-green-700 font-medium">
                    Selengkapnya
                  </Link>
                </div>
              </Timeline.Content>
            </Timeline.Item>
          ))
        }
        </Timeline>
        {loading && <SkeletonList />}
      </div>
    </div>
  )
}