import axios from "axios";
import { Prayer } from "../types/prayer";
import { Donation, DonationQueryParams } from "../types/donation";

const API_URL = process.env.NEXT_PUBLIC_API_URL;


export const fetchDonation = async (queryParam:DonationQueryParams) : Promise<Donation[]> => {
    try {
        const filledQueryParam = Object.fromEntries(
            Object.entries(queryParam).filter(([_, value]) => value !== null && value !== undefined)
        );
        const response = await axios.get<{data:Donation[]}>(`${API_URL}donations`,
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