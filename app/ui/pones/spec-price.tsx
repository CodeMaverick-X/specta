import accounting from 'accounting';
import { convertTo } from '@/app/lib/actions';
import { useState } from 'react';


export default function Price({ basePrice }: { basePrice: number; }) {
    // base price is in USD
    const supportedPrices = ['USD', 'NGN', 'GBP', 'CAD'];
    let priceObj = {
        price: basePrice,
        currency: 'USD',
        formatted: accounting.formatMoney(basePrice, { symbol: 'USD',  format: "%s %v" })
    };

    const [priceObject, setPriceObject] = useState(priceObj);

    const handleCurrencyChange = (event: { target: { value: string; }; }) => {
        const currency = event.target.value;
        try {
            convertTo(basePrice, currency).then((value) => {
                setPriceObject({
                    price: value,
                    currency: currency,
                    formatted: accounting.formatMoney(value, { symbol: currency,  format: "%s %v" })
                });
                
            });
        } catch (error) {
            console.log(error);
        }
    };


    return (
        <>
            <div className=" flex flex-row justify-between">
                <div>
                    <strong>{'Release Price'}:</strong> {priceObject.formatted}
                </div>

                <select
                    className="block rounded-sm text-gray-600 p-2 bg-[#0D1533] shadow-sm focus:outline-none focus:border-blue-500"
                    onChange={handleCurrencyChange}
                    value={priceObject.currency}
                >
                    {supportedPrices.map((currency) => {
                        return (
                            <option key={currency} value={currency}>{currency}</option>
                        );
                    })}
                </select>
            </div>
        </>
    );
}