// state.js

const subscribers = [];

// ================== STATE ==================
const state = {
    user: null,
    isAuthenticated: false,
    ui: 'home',

    prices: null,

    products: [
        { id: 'bitcoin', symbol: 'BTC', price: null },
        { id: 'ethereum', symbol: 'ETH', price: null },
        { id: 'litecoin', symbol: 'LTC', price: null },
        { id: 'tether', symbol: 'USDT', price: 1 }
    ],

    cart: []
};

// ================== PERSISTENCE ==================
const savedUser = localStorage.getItem('user');
if (savedUser) {
    state.user = JSON.parse(savedUser);
    state.isAuthenticated = true;
    state.ui = 'portfolio';
}

// ================== CORE ==================
function notify() {
    subscribers.forEach(fn => fn(getState()));
}

export function subscribe(fn) {
    subscribers.push(fn);
}

export function getState() {
    return structuredClone(state);
}

// ================== PRICES ==================
export function setPrices(prices) {
    state.prices = prices;

    state.products.forEach(product => {
        if (prices?.[product.id]?.usd) {
            product.price = prices[product.id].usd;
        }
    });

    notify();
}

export function getPrices() {
    return state.prices;
}

// ================== ACTIONS ==================
export const actions = {
    selectUser(customerData) {
        state.user = customerData;
        state.isAuthenticated = true;
        state.ui = 'portfolio';
        localStorage.setItem('user', JSON.stringify(customerData));
        notify();
    },

    logout() {
        state.user = null;
        state.isAuthenticated = false;
        state.cart = [];
        state.ui = 'home';
        localStorage.removeItem('user');
        notify();
    },

    navigate(view) {
        if (!state.isAuthenticated && view !== 'home') {
            state.ui = 'home';
        } else {
            state.ui = view;
        }
        notify();
    },

    addToCart(assetId, amount) {
        const product = state.products.find(p => p.id === assetId);
        if (!product || !product.price) return;

        const item = state.cart.find(i => i.assetId === assetId);

        if (item) {
            item.amount += amount;
        } else {
            state.cart.push({
                assetId,
                amount,
                priceAtPurchase: product.price
            });
        }

        notify();
    },

    clearCart() {
        state.cart = [];
        notify();
    }
};
