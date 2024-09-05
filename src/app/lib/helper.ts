import { format, parseISO } from "date-fns";
import { id } from "date-fns/locale";

export const percentProgress = (totalAmount:number, amountTarget:number) => {
    return Math.round(totalAmount/amountTarget*100);
}

export const formatDateIdn = (dateString:string) => {
    const date = new Date(dateString);
    return format(date, 'd MMMM yyyy', { locale: id });
};

export function getFirstLetter(name: string): string {
    if (!name || name.length === 0) {
      return ''; // Jika string kosong, kembalikan string kosong
    }
    return name.charAt(0).toUpperCase(); // Mengambil huruf pertama dan mengubahnya menjadi huruf besar
  }