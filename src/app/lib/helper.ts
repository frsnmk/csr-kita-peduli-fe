export const percentProgress = (totalAmount:number, amountTarget:number) => {
    return Math.round(totalAmount/amountTarget*100);
}