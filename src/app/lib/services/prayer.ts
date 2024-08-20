import axios from "axios";
import { Prayer } from "../types/prayer";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const fetchProgramPrayer = async (id:string) : Promise<Prayer[]> => {
    try {
        const response = await axios.get<{data:Prayer[]}>(`${API_URL}programs/${id}/prayers`);
        return response.data.data;
    } catch (error) {
        console.error('Failed to get programs prayers', error);
        return [];
    }
}