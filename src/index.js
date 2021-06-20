import createImage from './createImage';
import HelloWorldButton from './components/helloWorldButton';
import Header from './components/header'

createImage();
createImage();

const helloWorldButton = new HelloWorldButton();
helloWorldButton.render();

const header = new Header();
header.render();

if (process.env.NODE_ENV === 'production') { 
  console.log('starting in production.');
} else if (process.env.NODE_ENV === 'development') {
  console.log('starting in development mode!!!');
}


