import { format, parseISO } from "date-fns";
import { id } from "date-fns/locale";

export const percentProgress = (totalAmount:number, amountTarget:number) => {
    return Math.round(totalAmount/amountTarget*100);
}

export const formatDateIdn = (dateString:string) => {
    const date = new Date(dateString);
    return format(date, 'd MMMM yyyy', { locale: id });
};