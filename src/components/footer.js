export default function footerArea() {
    const page = document.getElementById('content');
    const footer = document.createElement('footer');
    const footerText = document.createElement('p');
    document.body.appendChild(footer);
    footer.appendChild(footerText);
    footerText.textContent = 'made by @gurbuzertunga'
}