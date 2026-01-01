//כאן יופיעו כל הקריאות לשרתים

let customers = [];

async function loadCustomersData() {
    try {
        const d = await fetch('customers.json');
        if (!d.ok) {
            throw new Error(`HTTP error! Status:${d.status}`)
        }
        const data = await d.json();
        return data;
    } catch (error) {
        console.error(error.message);
    }
}
(async function init() {
    const data = await loadCustomersData();
    if (data) {
        customers = data; 
        homeHendler();  
    }
})();

async function fetchPrices() {
    const ids = "bitcoin,ethereum,litecoin,tether";
    const vs = "usd";
    const url = `https://api.coingecko.com/api/v3/simple/price?ids=${ids}&vs_currencies=${vs}`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();

        return data;
    } catch (error) {
        console.error("Error fetching prices:", error);
    }
}