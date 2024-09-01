import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

type Result<T> = { success: true; data: T } | { success: false; error: any };

export const validatedToken = async (data:any): Promise<any> => {
    try {
        const response = await axios.post(`${API_URL}auth/google`, data);
        console.log(response)
        return { success: true, data: response };
    } catch (error) {
        console.error('Failed to create donation', error);
        return { success: false, error };
    }
}