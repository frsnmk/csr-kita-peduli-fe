import { Donation, DonationDTO, DonationQueryParams } from "../types/donation";
import axiosInstance from "../axiosInstance";

const API_URL = process.env.NEXT_PUBLIC_API_URL;


export const fetchDonations = async (queryParam:DonationQueryParams) : Promise<Donation[]> => {
    try {
        const filledQueryParam = Object.fromEntries(
            Object.entries(queryParam).filter(([_, value]) => value !== null && value !== undefined)
        );
        const response = await axiosInstance.get<{data:Donation[]}>(`${API_URL}donations`,
            {
                params : filledQueryParam
            }
        );
        return response.data.data;
    } catch (error) {
        console.error('Failed to get programs prayers', error);
        return [];
    }
}

type Result<T> = { success: true; data: T } | { success: false; error: any };

export const fetchDonation = async (id: string): Promise<Result<Donation>> => {
    try {
        const response = await axiosInstance.get<Donation>(`${API_URL}donations/${id}`);
        return { success: true, data: response.data };
    } catch (error) {
        console.error('Failed to get donation', error);
        return { success: false, error };
    }
}

export const createDonation = async (data:DonationDTO): Promise<Result<Donation>> => {
    try {
        const response = await axiosInstance.post<{ data: Donation }>(`${API_URL}donations`, data);
        return { success: true, data: response.data.data };
    } catch (error) {
        console.error('Failed to create donation', error);
        return { success: false, error };
    }
}

export const confirmDonation = async (id:string, data:FormData): Promise<Result<Donation>> => {
    try {
        const response = await axiosInstance.post<{ data: Donation }>(`${API_URL}donations/${id}/confirm`, data, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return { success: true, data: response.data.data };
    } catch (error) {
        console.error('Failed to create donation', error);
        return { success: false, error };
    }
}