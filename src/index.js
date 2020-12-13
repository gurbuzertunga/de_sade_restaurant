import './assets/home.css';
import container from './components/container';
import navBar from './components/nav';
import homePage from './components/home';
import menuPage from './components/menu';
import contactPage from './components/contact';
import footer from './components/footer';
init();
const page = document.getElementById('content');


function addNavEvents() {
    const homeBtn = document.querySelector('.home-button');
    const menuBtn = document.querySelector('.menu-button');
    const contactBtn = document.querySelector('.contact-button');
    const mainContent = document.getElementsByTagName('main');
    homeBtn.addEventListener('click', () => {
        page.removeChild(mainContent[0]);
        return homePage();
    });
    menuBtn.addEventListener('click', () => {
        page.removeChild(mainContent[0]);
        return menuPage();
    });
    contactBtn.addEventListener('click', () => {
        page.removeChild(mainContent[0]);
        return contactPage();
    });
}

function init() {
    container();
    navBar();
    homePage();
    footer();
    addNavEvents();
}


