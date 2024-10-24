export interface Report {
    id: number;
    administrator_id: number;
    program_id: number;
    title: string;
    description: string;
    date: string; // "YYYY-MM-DD" format
    picture: string | null; // Nullable, could be string or null
    status: "PUBLISHED" | "DRAFT" | "ARCHIVED"; // Enum of possible statuses
    banners:Banner[];
    created_at: string; // ISO 8601 Date string
    updated_at: string; // ISO 8601 Date string
    deleted_at: string | null; // Nullable, could be string or null
}

interface Banner
{
    id: string;
    report_id: string;
    picture: string;
    created_at?: string;
    updated_at?: string,
    banner_url: string;
  }

export interface ReportQueryParams {
    search?:string;
    limit?:number;
    page?:number;
    customer_id?:number;
  }