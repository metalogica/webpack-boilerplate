import rick from './images/rick.jpg';

function createImage() {
  const img = document.createElement('img');
  img.alt = 'rick';
  img.width = 300;
  img.src = rick;

  const body = document.querySelector('body');
  body.appendChild(img);
}

export default createImage; 
