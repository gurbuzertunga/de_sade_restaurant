export default function contactPage() {
    const page = document.getElementById('content');
    const homeArea = document.createElement('main');
   
    homeArea.innerHTML =`
        <div class="contacts-container">
        <h1>De Sade Restaurant</h1>
        <h4>Address:</><span>Konak, İzmir, Turkey</span>
        <h4>Phone:</><span>+90 232 11 22</span>
        </div>
    `
    page.appendChild(homeArea);
}