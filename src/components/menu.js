export default function menuArea() {
    const page = document.getElementById('content');
    const homeArea = document.createElement('main');
    const menuContainer = document.createElement('div');
    const col = document.createElement('div');
    const cardContainer = document.createElement('div');
    const overlay = document.createElement('div');
    const card = document.createElement('div');
    const cardText = document.createElement('h4');

    menuContainer.classList.add('container');
    col.classList.add('col');
    cardContainer.classList.add('card-container');
    overlay.classList.add('overlay');
    card.classList.add('card');
    


    // const mainSlogan = document.createElement('h1');
    // mainSlogan.textContent = 'Menu items will be here'
    page.appendChild(homeArea);
    homeArea.appendChild(menuContainer);
    menuContainer.appendChild(col);
    col.appendChild(cardContainer);
    cardContainer.appendChild(overlay);
    overlay.appendChild(card);
    card.appendChild(cardText);
    // homeArea.appendChild(mainSlogan)

    cardText.textContent = 'Beef Carpaccio';
}