import _ from 'lodash'
import imageUrl from './main.jpg';
import './style.scss';

class Morty {
  render() {
    console.log(_.upperFirst('Example of common dependency extraction. fired for Hello World Button.'));

    const img = document.createElement('img');
    img.alt = 'Morty Image';
    img.src = imageUrl;

    const body = document.querySelector('body');
    body.appendChild(img)
  }
}

export default Morty;
