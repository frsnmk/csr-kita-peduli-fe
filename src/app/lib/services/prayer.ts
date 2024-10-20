import axiosInstance from "../axiosInstance";
import { Prayer, PrayerQueryParams } from "../types/prayer";
import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const fetchProgramPrayer = async (id:string, queryParam:PrayerQueryParams) : Promise<Prayer[]> => {
    try {
        const filledQueryParam = Object.fromEntries(
            Object.entries(queryParam).filter(([_, value]) => value !== null && value !== undefined)
        );
        const response = await axios.get<{data:Prayer[]}>(`${API_URL}programs/${id}/prayers`, 
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

export const toggleAmen = async (prayerId:string|number) => {
    try {
        const response = await axiosInstance.post(`${API_URL}prayers/${prayerId}/amen`)
        return { success: true, data: response.data.has_amened };
    } catch (error) {
        console.error('Failed to toggle aamiin prayers', error);
        return { success: false, error };
    }
}

export const getHasAminedPrayer = async (prayerId:string|number) => {
    try {
        const response = await axiosInstance.post(`${API_URL}prayers/${prayerId}/amen`)
        return { success: true, data: response.data.has_amened };
    } catch (error) {
        console.error('Failed to get has amined prayers', error);
        return { success: false, error };
    }
}