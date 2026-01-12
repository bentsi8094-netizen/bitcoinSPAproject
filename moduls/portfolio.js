// portfolio.js
import { fetchPrices } from "../app.js";

export async function portfolioHendler(mainContainer) {
    const productsDiv = document.createElement('div');
    productsDiv.id = 'products';

    const coinsData = [
        { id: 'bitcoin', image: 'bitcoinImage', name: 'Bitcoin (BTC)', description: 'Step into the future of money. Freedom, control, where you define your own path.' },
        { id: 'ethereum', image: 'ethereumImage', name: 'Ethereum (ETH)', description: 'Build your future in a world of endless possibilities.' },
        { id: 'litecoin', image: 'litecoinImage', name: 'Litecoin (LTC)', description: 'A future where possibilities move fast and choices feel free.' },
        { id: 'tether', image: 'tetherImage', name: 'Tether (USDT)', description: 'Fast, smooth, effortless — the freedom to move without limits.' }
    ];

    const prices = await fetchPrices();

    coinsData.forEach(coin => {
        const card = document.createElement('div');
        card.className = 'card';
        card.style.backgroundImage = `url("images/${coin.image}.png")`;

        const title = document.createElement('h3');
        title.textContent = coin.name;
        title.style.color = 'white';

        const description = document.createElement('p');
        description.textContent = coin.description;
        description.style.color = 'white';

        const price = document.createElement('p');
        price.style.color = 'white';
        price.textContent = (prices && prices[coin.id] && prices[coin.id].usd) ? `$${prices[coin.id].usd}` : 'Price unavailable';

        card.addEventListener('click', () => {
            console.log('Card clicked:', coin.id);
            // כאן נוכל לפתוח modal קנייה בעתיד
        });

        card.append(title, description, price);
        productsDiv.append(card);
    });

    mainContainer.append(productsDiv);
}
