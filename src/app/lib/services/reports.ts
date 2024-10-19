import axiosInstance from "../axiosInstance";
import { Report, ReportQueryParams } from "../types/report";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const fetchProgramReport = async (id:string, queryParam:ReportQueryParams) : Promise<Report[]> => {
    try {
        const filledQueryParam = Object.fromEntries(
            Object.entries(queryParam).filter(([_, value]) => value !== null && value !== undefined)
        );
        const response = await axiosInstance.get<{data:Report[]}>(`${API_URL}programs/${id}/reports`, 
            {
                params: filledQueryParam
            }
        );
        return response.data.data;
    } catch (error) {
        console.error('Failed to get programs report', error);
        return [];
    }
}

export const getReport = async (reportId:string) : Promise<Report|null> => {
    try {
        const response = await axiosInstance.get<Report>(`${API_URL}programs/reports/${reportId}`);
        return response.data;
    } catch (error) {
        console.error('Failed to get programs', error);
        return null;
    }
}