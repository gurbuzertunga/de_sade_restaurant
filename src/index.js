import './assets/home.css';

const page = document.getElementById('container');

function navBarArea() {
    const navBar = document.createElement('nav');
    navBar.classList.add('navarea');
    const navLeft = document.createElement('div');
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

    // Lodash, currently included via a script, is required for this line to work
    navLeft.textContent = 'De Sade Restaurant';
  }

  navBarArea();



