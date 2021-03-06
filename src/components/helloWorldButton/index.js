import _ from 'lodash';
import React from 'react'
import './style.scss'

class HelloWorldButton {
  
  text = 'The Power Of Babel.';
  
  render() {    
    console.log(_.upperFirst('Example of common dependency extraction. fired for Hello World Button.'));

    const body = document.querySelector('body');
    console.log('ES2021 magic: javascript is the best. javascript is the coolest.'.replaceAll('javascript', 'javascript!!!!!!'));

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
