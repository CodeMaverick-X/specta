'use server';
import { getExhangeRate } from "./data";

/**
 * @param price price to convert to a different currency
 * @param currency the currency to convert to, e.g., 'NGN'
 * @returns the new price after conversion or 0 on error
 */
export async function convertTo(price: number, currency: string) {
    let priceVal;
    try {
        const rateObj = await getExhangeRate(currency);
        if (rateObj?.rate) {
            priceVal = rateObj.rate * price;
        } else {
            priceVal = 0;
        }
    } catch (error) {
        console.log(error);
        priceVal = 0;
    }

    
    return priceVal;
}