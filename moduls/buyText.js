export function renderBuyText() {
  const text = `🚀 5 First Steps to Smart Crypto Investing

1️⃣ Learn Before You Buy
Crypto is a new world. Understanding volatility and blockchain helps you invest with confidence, not fear.

2️⃣ Choose Strong Assets
Bitcoin and Ethereum lead the market thanks to global adoption, high liquidity, and long-term potential.

3️⃣ Protect Your Funds
A secure digital wallet + safe key storage = full control over your money.

4️⃣ Start Small, Invest Smart
You don’t need to buy a whole coin. Invest any amount and own fractions (Satoshis).

5️⃣ Think Long Term
Invest consistently, ignore short-term noise — just like gold or value stocks.

👉 Smart investing starts with one decision.
Small amounts. Big potential.`;

  const container = document.createElement('div');
  container.className = 'buy-text';
  container.textContent = text;

  return container;
}
