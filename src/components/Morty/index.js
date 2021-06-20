import imageUrl from './main.jpg';
import './style.scss';

class Morty {
  render() {
    const img = document.createElement('img');
    img.alt = 'Miorty Image';
    img.src = imageUrl;

    const body = document.querySelector('body');
    body.appendChild(img)
  }
}

export default Morty;
