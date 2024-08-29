export interface Donation {
  id: number;
  customer_id: number;
  program_id: number;
  administrator_id: number | null;
  amount: number;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
  be_anonim: number;
  email: string;
  phone_number: string;
  payment_status: string | null;
  receipt_image_path: string | null;
  reason_payment_is_rejected: string | null;
  bank_id: number | null;
  bank_name: string | null;
  bank_norek: string | null;
  bank_in_the_name_of: string | null;
  bank_type: string | null;
  receipt_image_full_path: string | null;
  customer: {
    id: number;
    name: string;
    photo?: string;
  };
  program: {
    id: number;
    title: string;
    banner: string;
    created_at:string;
  };
}

export interface DonationQueryParams {
  search?:string;
  limit?:number;
  page?:number;
  payment_status?:string;
  customer_id?:number;
}

export interface DonationDTO {
  email: string | null;
  program_id: number|string; // Assuming `program_id` is a number
  customer_id?: number | null; // Optional or nullable
  amount: number;
  be_anonim?: boolean | null; // Assuming it's a boolean, nullable
  phone_number: string|null;
  payment_status?: string | null; // Optional or nullable
  prayer?: string | null; // Optional or nullable, assuming it's a string
  is_follow: boolean;
}