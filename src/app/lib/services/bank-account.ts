import axios from "axios";
import { BankAccount, BankAccountQueryParams } from "../types/bank-account";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const fetchBanks = async (queryParam:BankAccountQueryParams) : Promise<BankAccount[]> => {
    try {
        const filledQueryParam = Object.fromEntries(
            Object.entries(queryParam).filter(([_, value]) => value !== null && value !== undefined)
        );
        const response = await axios.get<{data:BankAccount[]}>(`${API_URL}banks`, 
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