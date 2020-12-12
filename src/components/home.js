export default function homePage() {
    const page = document.getElementById('container');
    const homeArea = document.createElement('main');
    
    const mainSlogan = document.createElement('h1');
    mainSlogan.textContent = 'Food so great that you will sell your family heirlooms...'
    page.appendChild(homeArea);
    homeArea.appendChild(mainSlogan)
}