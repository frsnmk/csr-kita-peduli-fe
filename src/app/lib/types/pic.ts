export interface Pic {
    id: number;
    name: string;
    email: string;
    password: string;
    phone_number: string;
    gender: number;
    role: number;
    address: string;
    photo: string;
    affiliate_code: string;
    created_at: string;
    updated_at?: string;
    deleted_at?: string | null;
    is_verified: number;
    remember_token?: string | null;
}