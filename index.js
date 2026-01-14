import { homeHendler } from "./moduls/home.js";
import { portfolioHendler } from "./moduls/portfolio.js";
import { actions, getState, subscribe } from "./state.js";
import { setupModal } from "./modal.js";
import { fetchPrices } from "./app.js";

(async function init() {

    const mainContainer = document.getElementById('main-container');

    function renderUI(state) {
        mainContainer.innerHTML = '';

        switch (state.ui) {
            case 'home':
                homeHendler(mainContainer);
                break;

            case 'portfolio':
                portfolioHendler(mainContainer);
                break;

            default:
                homeHendler(mainContainer);
        }
    }

    subscribe(renderUI);

    document.getElementById('logoLink')?.addEventListener('click', e => {
        e.preventDefault();
        actions.navigate('home');
    });

    Array.from(document.getElementsByClassName('navLink')).forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            actions.navigate(
                e.target.getAttribute('href').replace('#', '')
            );
        });
    });

    Array.from(document.getElementsByClassName('footer-link')).forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            actions.navigate(
                e.target.getAttribute('href').replace('#', '')
            );
        });
    });

    setupModal();

    await fetchPrices();

    renderUI(getState());

    setInterval(fetchPrices, 60_000);

})();
