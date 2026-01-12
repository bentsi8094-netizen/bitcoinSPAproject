import { fetchPrices } from "../app.js";
import { renderBuyText } from "./buyText.js"


async function loadCoinsData() {
    const res = await fetch('./coins.json');
    return await res.json();
}

async function portfolioHendler(mainContainer) {

    const products = document.createElement('div');
    products.id = 'products';

    const coinsData = await loadCoinsData();

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

        if (prices && prices[coin.id] && prices[coin.id].usd) {
            price.textContent = `$${prices[coin.id].usd}`;
        } else {
            price.textContent = 'Price unavailable';
        }

        card.addEventListener('click', () => {
            console.log('Card clicked:', coin.id);
        });

        card.append(title, description, price);
        products.append(card);
    });

    mainContainer.append(products, renderBuyText());
}

export { portfolioHendler };
