import homePage from './home';
import menuPage from './menu';

export default function navBarArea() {
    const page = document.getElementById('container');
    const navBar = document.createElement('nav');
    const navLeft = document.createElement('div');
    navLeft.classList.add('logo-area');
    const navMid = document.createElement('div');
    const menu = document.createElement('ul');
    const homeLink = document.createElement('li');
    const menuLink = document.createElement('li');
    const contactLink = document.createElement('li');

    page.appendChild(navBar);
    navBar.appendChild(navLeft);
    navBar.appendChild(navMid);
    navMid.appendChild(menu);
    menu.appendChild(homeLink);
    menu.appendChild(menuLink);
    menu.appendChild(contactLink);

    homeLink.textContent = 'HOME';
    menuLink.textContent = 'MENU';
    contactLink.textContent = 'CONTACT';

    homeLink.addEventListener('click', homePage());
    menuLink.addEventListener('click', menuPage());
}