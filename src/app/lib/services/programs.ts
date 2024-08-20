import axios from "axios";
import { Program } from "../types/program";
import { Donation } from "../types/donation";

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

export const getProgramDonor = async (id:string) : Promise<Donation[]> => {
    try {
        const response = await axios.get<{data:Donation[]}>(`${API_URL}programs/${id}/donations`);
        return response.data.data;
    } catch (error) {
        console.error('Failed to get programs donor', error);
        return [];
    }
}

