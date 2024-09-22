import { Prayer, PrayerQueryParams } from "../types/prayer";
import axiosInstance from "../axiosInstance";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const fetchProgramPrayer = async (id:string, queryParam:PrayerQueryParams) : Promise<Prayer[]> => {
    try {
        const filledQueryParam = Object.fromEntries(
            Object.entries(queryParam).filter(([_, value]) => value !== null && value !== undefined)
        );
        const response = await axiosInstance.get<{data:Prayer[]}>(`${API_URL}programs/${id}/prayers`, 
            {
                params: filledQueryParam
            }
        );
        return response.data.data;
    } catch (error) {
        console.error('Failed to get programs prayers', error);
        return [];
    }
}