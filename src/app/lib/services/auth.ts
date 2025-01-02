import axios from "axios";
import axiosInstance from "../axiosInstance";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

type Result<T> = { success: true; data: T } | { success: false; error: any };

export const validatedToken = async (data:any|undefined): Promise<any> => {
    try {
        const response = await axios.post(`${API_URL}auth/google`, data);
        return { success: true, data: response.data };
    } catch (error) {
        console.error('Failed to validate token', error);
        return { success: false, error };
    }
}

export const updateProfile = async (data:any) => {
    try {
        const response = await axiosInstance.put(`${API_URL}update-account`, data);
        return { success: true, data: response.data };
    } catch (error) {
        console.error('Failed to update profile', error);
        return { success: false, error };
    }
}

export const getProfile = async () => {
    try {
        const response = await axiosInstance.get(`${API_URL}get-account`);
        return { success: true, data: response.data };
    } catch (error) {
        console.error('Failed to get profile', error);
        return { success: false, error };
    }
}

export const deleteAccount = async () => {
    try {
        const response = await axiosInstance.delete(`${API_URL}delete-account`);
        return { success: true, data: response.data };
    } catch (error) {
        console.error('Failed to get profile', error);
        return { success: false, error };
    }
}