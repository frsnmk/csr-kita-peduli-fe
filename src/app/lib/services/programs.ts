import axios from "axios";
import { Program, ProgramPrice } from "../types/program";
import { Donation, DonationQueryParams } from "../types/donation";
import axiosInstance from "../axiosInstance";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const fetchFeaturedProgram = async () : Promise<Program[]> => {
    try {
        const response = await axiosInstance.get<{data: Program[]}>(`${API_URL}programs`,
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
        const response = await axiosInstance.get<{data: Program[]}>(`${API_URL}programs`,
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
        const response = await axiosInstance.get<Program>(`${API_URL}programs/${id}`);
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
        
        const response = await axiosInstance.get<{data:Donation[]}>(`${API_URL}programs/${id}/donations`,
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


export const getProgramPackagePrice = async (id:string) : Promise<ProgramPrice[]> => {
    try {
        const response = await axiosInstance.get<{data: ProgramPrice[]}>(`${API_URL}programs/${id}/prices`);
        return response.data.data;
    } catch (error) {
        console.error('Failed to get programs package price', error);
        return [];
    }
}

export const fetchZakat = async () : Promise<Program|null> => {
    try {
        const response = await axiosInstance.get<Program>(`${API_URL}programs/zakat`);
        return response.data;
    } catch (error) {
        console.error('Failed to get programs', error);
        return null;
    }
}

