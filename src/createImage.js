import rick from './images/rick.jpg';
import altText from './altText.txt'

function createImage() {
  const img = document.createElement('img');
  img.alt = altText;
  img.width = 300;
  img.src = rick;
  console.log(rick)

  const body = document.querySelector('body');
  body.appendChild(img);
}

export default createImage; 
