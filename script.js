const mainContainer = document.getElementById('main-container');

//הפעלה מיידית דף- הבית------
(function buttonsInit() {
    const logoLink = document.getElementById('logoLink');

logoLink.addEventListener('click', (e) => {
    e.preventDefault();
navigate('home');
})

const navLinks = document.getElementsByClassName('navLink');
for (let k = 0; k < navLinks.length; k++) {
    navLinks[k].addEventListener('click', (e) => {
        e.preventDefault();
        const target = e.target.getAttribute('href').replace('#', '');
        navigate(target);
    });
}

const footerLinks = document.getElementsByClassName('footer-link');
for (let k = 0; k < footerLinks.length; k++) {
    footerLinks[k].addEventListener('click', (e) => {
        e.preventDefault();
        const target = e.target.getAttribute('href').replace('#', '');
        navigate(target);
    });
}
})();

function navigate(page) {
    mainContainer.innerHTML = '';
    switch (page) {
        case 'home':
            homeHendler();
            break;
        case 'portfolio':
            portpolioHendler();
            break;
        case 'vault':
            vaultHendler();
            break;
        case 'assets':
            break;
        case 'analytics':
            break;
//foot
        case 'support':
            break;
        case 'office':
            break;
        case 'faq':
            break;
        case 'privacy':
            break;
        case 'security':
            break;
        default:
            homeHendler();
    }
}


function homeHendler() {
    const homeContainer = document.createElement('div');
    homeContainer.id = 'homeContainer';


    const titleContainer = document.createElement('div');

    const pTitle = document.createElement('h1');
    const para = document.createElement('p');
    const mainTitle = "The future is here — and you are part of it.";
    const mainText =
        `Bitcoin was once a distant idea. Now, it's your world of freedom, choice, and control. \n\nAt Wise Bitcoin, we go beyond transactions to build a new culture of wisdom and security. Easy, fast, and safe. \nThe future isn't written on paper. It's written in code, choice, and the courage to think differently. \nIf you believe technology is power and your time is precious—welcome to the smart world of Wise Bitcoin.`
    pTitle.textContent = mainTitle;
    pTitle.id = 'homeTitle';
    para.innerText = mainText;
    para.id = 'homePara';
    titleContainer.append(pTitle, para);
    //-----------------------------------------------
    const usersGround = document.createElement('div');
    usersGround.id = 'usersGround';

    for (let i = 0; i < customers.length; i++) {
        const userButton = document.createElement('div');
        userButton.className = 'userButton';
        userButton.textContent = `${customers[i].customerId}   ${customers[i].personalCode}`;
        userButton.addEventListener('click', (e) => {
            const user = e.target.textContent;
            customerData = {
                id: user.slice(0, 4),
                code: user.slice(4).trim(),
                ourClient: null,
                properties:
                {
                    bitcoin: null,
                    ethereum: null,
                    litecoin: null,
                    tether: null
                }
            };
            //localStorage.setItem('currentUser', JSON.stringify(customerData));
            //console.log(localStorage.getItem(JSON.parse(currentUser)));

            navigate('portpolio');
        })
        usersGround.append(userButton);

    };

    homeContainer.append(titleContainer, usersGround);
    mainContainer.append(homeContainer);

}

