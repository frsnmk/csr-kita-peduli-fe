import axios from "axios";
import { Program } from "../types/program";
import { Donation, DonationQueryParams } from "../types/donation";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const fetchFeaturedProgram = async () : Promise<Program[]> => {
    try {
        const response = await axios.get<{data: Program[]}>(`${API_URL}programs`,
            {
                params: {
                    search: '',
                    limit:3,
                    page:1,
                    // tag: 'Program Unggulan'
                }
            }
        );

        return response.data.data;
    } catch (error) {
        console.error('Failed to fetch programs', error);
        return [];
    }
}

export const fetchPrograms = async (search:string='') : Promise<Program[]> => {
    try {
        const response = await axios.get<{data: Program[]}>(`${API_URL}programs`,
            {
                params: {
                    search: search,
                    limit:100,
                    page:1,
                }
            }
        );
        return response.data.data;
    } catch (error) {
        console.error('Failed to fetch programs', error);
        return [];
    }
}

export const getProgram = async (id:string) : Promise<Program|null> => {
    try {
        const response = await axios.get<Program>(`${API_URL}programs/${id}`);
        return response.data;
    } catch (error) {
        console.error('Failed to get programs', error);
        return null;
    }
}

export const getProgramDonor = async (id:string, queryParam?:DonationQueryParams) : Promise<Donation[]> => {
    try {
        let filledQueryParam:any = '' 
        if(queryParam) {
            filledQueryParam = Object.fromEntries(
                Object.entries(queryParam).filter(([_, value]) => value !== null && value !== undefined)
            );
        } else {
            filledQueryParam = null;
        }
        
        const response = await axios.get<{data:Donation[]}>(`${API_URL}programs/${id}/donations`,
            {
                params: filledQueryParam
            }
        );
        console.log('dari fungsi fetching ...  ', response)
        return response.data.data;
    } catch (error) {
        console.error('Failed to get programs donor', error);
        return [];
    }
}

