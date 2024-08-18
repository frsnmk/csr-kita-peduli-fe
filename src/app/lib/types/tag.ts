export interface Tag {
    id: number;
    name: string;
    created_at: string;
    updated_at?: string| null;
    deleted_at?: string | null;
}