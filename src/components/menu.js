import beef_carpaccio from '../images/beef_carpaccio.jpg'
import smoked_beef from '../images/smoked_beef.jpg'
import new_york_strip from '../images/new_york_strip.jpeg'
import beef_tenderloin from '../images/tenderloin.jpg'



export default function menuArea() {
    const page = document.getElementById('content');
    const menuArea = document.createElement('main');
    page.appendChild(menuArea);

    let menuItems = [{
        name:'Beef Carpaccio',
        img: beef_carpaccio,
    }, 
    {
        name:'Smoked Beef',
        img: smoked_beef,
    },
    {
        name:'New York Strip',
        img: new_york_strip,
    },
    {
        name:'Beef Tenderloin',
        img: beef_tenderloin,
    }]


    menuItems.forEach(function(el) {
        const cardContainer = document.createElement('div');
        cardContainer.setAttribute('style', `background-image: url('${el.img}'); background-size: cover; background-repeat: no-repeat;`)
        const cardText = document.createElement('h4');
     
        cardContainer.classList.add('container');

        cardContainer.appendChild(cardText);
        menuArea.appendChild(cardContainer);

        cardText.textContent = el.name;
    });    
}