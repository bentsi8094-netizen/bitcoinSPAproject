import { getPrices } from "./state.js";

let activeCrypto = null;

export function openModal(cryptoId) {
    activeCrypto = cryptoId;
    document.getElementById('modalOverlay').style.display = 'flex';
    document.getElementById('investmentInput').value = '';
    document.getElementById('cryptoResult').textContent = '';
}

export function closeModal() {
    document.getElementById('modalOverlay').style.display = 'none';
}

export function calculateCryptoAmount() {
    const prices = getPrices();
    const input = document.getElementById('investmentInput');
    const result = document.getElementById('cryptoResult');

    const value = parseFloat(input.value);
    if (!value || value <= 0) {
        result.textContent = 'Enter valid amount';
        return;
    }

    const price = prices?.[activeCrypto]?.usd;
    if (!price) {
        result.textContent = 'Price unavailable';
        return;
    }

    result.textContent =
        `${(value / price).toFixed(6)} ${activeCrypto.toUpperCase()}`;
}

export function setupModal() {
    document
        .getElementById('modalClose')
        .addEventListener('click', closeModal);

    document
        .getElementById('calculateBtn')
        .addEventListener('click', calculateCryptoAmount);
}
