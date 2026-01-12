// script.js
import { homeHendler } from "./moduls/home.js";
import { portfolioHendler } from "./moduls/portfolio.js";
import { actions, getState, subscribe } from "./state.js";

const mainContainer = document.getElementById('main-container');

function renderUI(state) {
    mainContainer.innerHTML = '';

    switch (state.ui) {
        case 'home': homeHendler(mainContainer); break;
        case 'portfolio': portfolioHendler(mainContainer); break;
        default: homeHendler(mainContainer);
    }
}

// Subscribe ל-State
subscribe(renderUI);

// Navigation Buttons
document.getElementById('logoLink').addEventListener('click', e => { e.preventDefault(); actions.navigate('home'); });

Array.from(document.getElementsByClassName('navLink')).forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        actions.navigate(e.target.getAttribute('href').replace('#',''));
    });
});

Array.from(document.getElementsByClassName('footer-link')).forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        actions.navigate(e.target.getAttribute('href').replace('#',''));
    });
});

// הפעלה ראשונית
renderUI(getState());
