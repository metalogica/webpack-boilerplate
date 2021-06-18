import './style.css'

class HelloWorldButton {
  render() {    
    const body = document.querySelector('body');

    const button = document.createElement('button');
    button.innerHTML = 'Hello World';
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
