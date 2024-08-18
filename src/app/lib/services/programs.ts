import axios from "axios";
import { Program } from "../types/program";

const API_URL = process.env.API_URL;

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
        console.log(response.data.data, ':  root')
        return response.data.data;
    } catch (error) {
        console.error('Failed to fetch programs', error);
        return [];
    }
}