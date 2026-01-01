//call it 'products' כאן יופיע הטיפול בהצגת המוצרים לקנייה 

function portpolioHendler() {
    const products = document.createElement('div');
    products.id = 'products';
    const coinsData = [
        { image: "bitcoinImage", name: "Bitcoin(BTC)", descreption: "Step into the future of money. Freedom, control, where you define your own path." },
        { image: "ethereumImage", name: "Ethereum(ETH)", descreption: "Build your future in a world of endless possibilities. Buy, sell, and create your digital univers." },
        { image: "litecoinImage", name: "Litecoin(LTC)", descreption: "A future where possibilities move fast, your choices feel free, and every step takes you closer to the life you imagine" },
        { image: "tetherImage", name: "Tether(USDT)", descreption: "Fast, smooth, effortless — the freedom to move and spend without limits." }
    ];
    //Bitcoin,Ethereum,Litecoin,Tether
    for (let i = 0; i < coinsData.length; i++) {

        const newCard = document.createElement('div');
        const h3 = document.createElement('h3')
        const p = document.createElement('p')
        const button = document.createElement('button')

        newCard.className = 'card';
        newCard.style.backgroundImage = `url("images/${coinsData[i].image}.png")`;

        h3.textContent = coinsData[i].name;
        h3.style.color = "white";
        h3.style.top = "10px";

        p.textContent = coinsData[i].descreption;
        p.style.color = "white";
        p.style.position = "absolute";
        p.style.bottom = "5px";

        button.style.position = "absolute";
        button.textContent = 'go to product';
        button.style.fontFamily = "Cinzel Decorative";
        button.style.bottom = "1px";

        newCard.append(h3, p, button);
        products.append(newCard);
    }
    mainContainer.append(products);
}


