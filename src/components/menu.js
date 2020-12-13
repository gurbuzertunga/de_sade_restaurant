import beefCarpaccio from '../images/beef_carpaccio.jpg';
import smokedBeef from '../images/smoked_beef.jpg';
import newyorkStrip from '../images/new_york_strip.jpeg';
import beefTenderloin from '../images/tenderloin.jpg';


export default function menuArea() {
  const page = document.getElementById('content');
  const menuArea = document.createElement('main');
  page.appendChild(menuArea);

  const menuItems = [{
    name: 'Beef Carpaccio',
    img: beefCarpaccio,
  },
  {
    name: 'Smoked Beef',
    img: smokedBeef,
  },
  {
    name: 'New York Strip',
    img: newyorkStrip,
  },
  {
    name: 'Beef Tenderloin',
    img: beefTenderloin,
  }];


  menuItems.forEach((el) => {
    const cardContainer = document.createElement('div');
    cardContainer.setAttribute('style', `background-image: url('${el.img}'); background-size: cover; background-repeat: no-repeat;`);
    const cardText = document.createElement('h4');

    cardContainer.classList.add('container');

    cardContainer.appendChild(cardText);
    menuArea.appendChild(cardContainer);

    cardText.textContent = el.name;
  });
}