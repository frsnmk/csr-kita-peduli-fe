export interface BankAccount {
    id: number;
    name: string;
    norek: string;
    in_the_name_of: string;
    config: string | null;
    type: string;
    logo: string;
    created_at: string;
    updated_at: string;
    logo_url: string;
  }

export interface BankAccountQueryParams {
  search?:string;
  limit?:number;
  page?:number;
}