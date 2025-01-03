import { Category } from "@/app/lib/types/category";
import { Pic } from "@/app/lib/types/pic";
import { Tag } from "@/app/lib/types/tag";

export interface Program {
    id: number;
    slug:string;
    title: string;
    category_id: number;
    administrator_id: number;
    banner: string;
    start_date: string;
    end_date: string;
    amount_target: number;
    story: string;
    short_story: string | null;
    status: string;
    unique_no:number;
    created_at: string;
    updated_at: string;
    deleted_at: string | null;
    reason_to_end: string | null;
    total_donations_amount: number | null;
    total_donor: string | null;
    pic: Pic;
    categories: Category[];
    tags: Tag[];
    gold_price?: GoldPrice;
    silver_price?: SilverPrice;
    banners:Banner[]
}

export interface Banner {
    id: number;
    program_id: number;
    picture: string;
    created_at?: string;
    updated_at?: string;
    deleted_at?: null | string;
    banner_url?: string;
  }
interface GoldPrice {
    program_id: number;
    amount: number;
}

interface SilverPrice {
    program_id: number;
    amount: number;
}
  export interface ProgramPrice {
    id: number;
    program_id: number;
    amount: number;
    created_at: string | null;
    updated_at: string | null;
}