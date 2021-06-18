import './style.scss'

class HelloWorldButton {
  text = 'The Power Of Babel.';

  render() {    
    const body = document.querySelector('body');

    const button = document.createElement('button');
    button.innerHTML = this.text;
    button.classList.add('btn')
    button.onclick = function() {
      const p = document.createElement('p');
      p.classList.add('btn-text');
      p.innerHTML = 'Some new paragraph.'
      body.appendChild(p);
    }

    body.appendChild(button);
  }
}

export default HelloWorldButton;
