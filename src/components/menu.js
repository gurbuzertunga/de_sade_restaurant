export default function menuArea() {
    const page = document.getElementById('content');
    const menuArea = document.createElement('main');
    page.appendChild(menuArea);

    let menuItems = [{
        name:'Beef Carpaccio',
        img: 'images/beef_carpaccio.jpg'
    }, 
    {
        name:'Smoked Beef',
        img: 'images/smoked_beef.jpg'
    },
    {
        name:'New York Strip',
        img: 'images/new_york_strip.jpeg'
    },
    {
        name:'Beef Tenderloin',
        img: 'images/tenderloin.jpg'
    }]


    menuItems.forEach(function(el) {
        const cardContainer = document.createElement('div');
        cardContainer.setAttribute('style', `background-image: url('${el.img}'); background-size: auto; background-repeat: no-repeat;`)
        const cardText = document.createElement('h4');
     
        cardContainer.classList.add('container');

        cardContainer.appendChild(cardText);
        menuArea.appendChild(cardContainer);

        cardText.textContent = el.name;
    });    
}