export default function menuArea() {
    const page = document.getElementById('container');
    const homeArea = document.createElement('main');
    
    const mainSlogan = document.createElement('h1');
    mainSlogan.textContent = 'Menu items will be here'
    page.appendChild(homeArea);
    homeArea.appendChild(mainSlogan)
}