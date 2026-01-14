import { setPrices } from './state.js';

// טוען את הנתונים של המשתמשים מקובץ JSON
export async function loadCustomersData() {
    try {
        const response = await fetch('customers.json');
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        return await response.json();
    } catch (error) {
        console.error("Error loading customers:", error.message);
    }
}


let isFetching = false;

export async function fetchPrices() {
    if (isFetching) return;
    isFetching = true;

    const ids = "bitcoin,ethereum,litecoin,tether";
    const vs = "usd";
    const url = `https://api.coingecko.com/api/v3/simple/price?ids=${ids}&vs_currencies=${vs}`;

    try {
        const res = await fetch(url);
        if (!res.ok) throw new Error("API blocked");

        const data = await res.json();
        setPrices(data);

    } catch (err) {
        console.warn("Price fetch failed – using last known prices");
    } finally {
        isFetching = false;
    }
}

