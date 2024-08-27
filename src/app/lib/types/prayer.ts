interface Customer {
    id: number;
    name: string;
    photo: string;
}

export interface Prayer {
    id: number;
    customer_id: number;
    program_id: number;
    description: string;
    status: number;
    created_at: string;
    updated_at: string;
    deleted_at: string | null;
    is_reported: number;
    donation_id: number | null;
    total_amen: number;
    has_amened: boolean;
    customer: Customer;
}

export interface PrayerQueryParams {
    search?:string;
    limit?:number;
    page?:number;
    customer_id?:number;
  }