// home.js
import { loadCustomersData } from "../app.js";
import { actions } from "../state.js";

export async function homeHendler(mainContainer) {
    const homeContainer = document.createElement('div');
    homeContainer.id = 'homeContainer';

    const titleContainer = document.createElement('div');
    const pTitle = document.createElement('h1');
    const para = document.createElement('p');

    pTitle.textContent = "The future is here — and you are part of it.";
    pTitle.id = 'homeTitle';

    para.innerText = `Bitcoin was once a distant idea. Now, it's your world of freedom, choice, and control.
At Wise Bitcoin, we go beyond transactions to build a new culture of wisdom and security. Easy, fast, and safe.
The future isn't written on paper. It's written in code, choice, and the courage to think differently.
If you believe technology is power and your time is precious—welcome to the smart world of Wise Bitcoin.`;
    para.id = 'homePara';

    titleContainer.append(pTitle, para);

    const usersGround = document.createElement('div');
    usersGround.id = 'usersGround';

    const customersData = await loadCustomersData();
    customersData.forEach(customer => {
        const userButton = document.createElement('div');
        userButton.className = 'userButton';
        userButton.textContent = `${customer.customerId} ${customer.personalCode}`;

        userButton.addEventListener('click', () => {
            const customerData = {
                id: customer.customerId,
                code: customer.personalCode,
                ourClient: null,
                properties: { bitcoin: null, ethereum: null, litecoin: null, tether: null }
            };
            actions.selectUser(customerData);
        });

        usersGround.append(userButton);
    });

    homeContainer.append(titleContainer, usersGround);
    mainContainer.append(homeContainer);
}
