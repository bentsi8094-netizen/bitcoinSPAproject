
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

// טוען מחירים עדכניים מה־CoinGecko 
export async function fetchPrices() {
    const ids = "bitcoin,ethereum,litecoin,tether";
    const vs = "usd";
    const url = `https://api.coingecko.com/api/v3/simple/price?ids=${ids}&vs_currencies=${vs}`;
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Network response was not ok");
        return await response.json();
    } catch (error) {
        console.error("Error fetching prices:", error);
    }
}
