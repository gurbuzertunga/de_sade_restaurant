export default function footerArea() {
    const page = document.getElementById('container');
    const footer = document.createElement('footer');
    const footerText = document.createElement('p');
    page.appendChild(footer);
    footer.appendChild(footerText);
    footerText.textContent = 'made by @gurbuzertunga'
}