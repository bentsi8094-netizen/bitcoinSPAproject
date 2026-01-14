import { getPrices } from "../state.js";
import { renderBuyText } from "./buyText.js";
import { openModal } from "../modal.js";

async function loadCoinsData() {
    const res = await fetch('./coins.json');
    return await res.json();
}

async function portfolioHendler(mainContainer) {
    const products = document.createElement('div');
    products.id = 'products';

    const coinsData = await loadCoinsData();
    const prices = getPrices();

    coinsData.forEach(coin => {
        const card = document.createElement('div');
        card.className = 'card';
        card.style.backgroundImage = `url("images/${coin.image}.png")`;

        const title = document.createElement('h3');
        title.textContent = coin.name;

        const description = document.createElement('p');
        description.textContent = coin.description;

        const price = document.createElement('p');
        price.textContent =
            prices?.[coin.id]?.usd
                ? `$${prices[coin.id].usd}`
                : 'Price unavailable';

        card.addEventListener('click', () => openModal(coin.id));

        card.append(title, description, price);
        products.append(card);
    });

    mainContainer.append(products, renderBuyText());
}

export { portfolioHendler };
