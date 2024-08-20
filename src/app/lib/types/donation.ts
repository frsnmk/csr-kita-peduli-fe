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
    };
    program: {
      id: number;
      title: string;
      banner: string;
    };
  }